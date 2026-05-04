"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive "signal mesh" — a procedural constellation of nodes connected
 * by faint gold edges, with crimson data packets propagating between them.
 *
 * Cursor warps the local field of nodes (gentle attraction with Gaussian
 * falloff — not a vacuum). Click fires a shockwave that ripples through
 * the network and bursts packets out of the nearest node. Pointer events
 * are listened on the window so the warp continues to follow the cursor
 * even when it sits over text/pills/stats above the canvas.
 */

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  hub: boolean;
  pulse: number;
  drift: number; // phase offset for ambient bob
};

type Packet = {
  fromIdx: number;
  toIdx: number;
  t: number;
  duration: number;
};

type Wave = {
  x: number;
  y: number;
  start: number;
  duration: number;
};

const NODE_COUNT = 220;
const HUB_COUNT = 24;
const NEIGHBORS = 3;
const ATTRACT_RADIUS = 180;
const ATTRACT_STRENGTH = 0.022;
const SPRING = 0.022;
const DAMP = 0.84;
const AMBIENT_AMP = 0.55; // px ambient bob

export function HeroSignal() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = ref.current;
    if (!canvasEl) return;
    const canvas = canvasEl;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;
    const ctx = ctx2d;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      rebuildNeighbors();
    };

    const nodes: Node[] = [];
    const packets: Packet[] = [];
    const waves: Wave[] = [];
    const mouse = { x: -1e6, y: -1e6, inside: false };
    let neighbors: number[][] = [];

    function seed() {
      nodes.length = 0;
      const cols = Math.max(1, Math.round(Math.sqrt((NODE_COUNT * W) / Math.max(1, H))));
      const rows = Math.max(1, Math.ceil(NODE_COUNT / cols));
      const cellW = W / cols;
      const cellH = H / rows;
      let count = 0;
      for (let r = 0; r < rows && count < NODE_COUNT; r++) {
        for (let c = 0; c < cols && count < NODE_COUNT; c++) {
          const x = (c + 0.5) * cellW + (Math.random() - 0.5) * cellW * 0.65;
          const y = (r + 0.5) * cellH + (Math.random() - 0.5) * cellH * 0.65;
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            hub: false,
            pulse: 0,
            drift: Math.random() * Math.PI * 2,
          });
          count++;
        }
      }
      const indices = Array.from({ length: nodes.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      for (let i = 0; i < Math.min(HUB_COUNT, nodes.length); i++) {
        nodes[indices[i]].hub = true;
      }
    }

    function rebuildNeighbors() {
      neighbors = nodes.map((a, i) => {
        const dists: { idx: number; d: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const b = nodes[j];
          const dx = a.baseX - b.baseX;
          const dy = a.baseY - b.baseY;
          dists.push({ idx: j, d: dx * dx + dy * dy });
        }
        dists.sort((p, q) => p.d - q.d);
        return dists.slice(0, NEIGHBORS).map((d) => d.idx);
      });
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function spawnPacket() {
      if (packets.length >= 32) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const candidates = neighbors[fromIdx];
      if (!candidates || candidates.length === 0) return;
      const toIdx = candidates[Math.floor(Math.random() * candidates.length)];
      packets.push({
        fromIdx,
        toIdx,
        t: 0,
        duration: 900 + Math.random() * 1300,
      });
      nodes[fromIdx].pulse = 1;
    }

    let lastSpawn = 0;
    let last = performance.now();
    let raf = 0;

    function draw(now: number) {
      raf = requestAnimationFrame(draw);
      const dt = Math.min(40, now - last);
      last = now;

      const spawnEvery = mouse.inside ? 140 : 280;
      if (now - lastSpawn > spawnEvery) {
        spawnPacket();
        lastSpawn = now;
      }

      ctx.clearRect(0, 0, W, H);

      const ambientT = now * 0.0006;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Spring back to base
        n.vx += (n.baseX - n.x) * SPRING;
        n.vy += (n.baseY - n.y) * SPRING;

        // Gentle ambient bob around base position
        const aox = Math.cos(ambientT + n.drift) * AMBIENT_AMP;
        const aoy = Math.sin(ambientT * 0.85 + n.drift * 1.2) * AMBIENT_AMP;
        n.vx += aox * 0.04;
        n.vy += aoy * 0.04;

        // Cursor warp — Gaussian falloff so only nearby nodes shift
        if (mouse.inside) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d > 0.5 && d < ATTRACT_RADIUS) {
            const u = d / ATTRACT_RADIUS;
            const falloff = Math.exp(-u * u * 3.2); // sharp Gaussian
            const dir = falloff * ATTRACT_STRENGTH;
            n.vx += (dx / d) * dir * d;
            n.vy += (dy / d) * dir * d;
          }
        }

        // Wave displacement
        for (const w of waves) {
          const age = (now - w.start) / w.duration;
          if (age <= 0 || age >= 1) continue;
          const ringR = age * Math.max(W, H) * 0.9;
          const dx = n.x - w.x;
          const dy = n.y - w.y;
          const d = Math.hypot(dx, dy);
          const band = 80;
          const proximity = Math.max(0, 1 - Math.abs(d - ringR) / band);
          if (proximity > 0) {
            const fall = 1 - age;
            const force = proximity * fall * 4.5;
            const nx = dx / (d || 1);
            const ny = dy / (d || 1);
            n.vx += nx * force;
            n.vy += ny * force;
            n.pulse = Math.max(n.pulse, proximity * fall);
          }
        }

        n.vx *= DAMP;
        n.vy *= DAMP;
        n.x += n.vx;
        n.y += n.vy;
        n.pulse *= 0.94;
      }

      for (let i = waves.length - 1; i >= 0; i--) {
        if (now - waves[i].start > waves[i].duration) waves.splice(i, 1);
      }

      // Edges
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const list = neighbors[i] ?? [];
        for (let k = 0; k < list.length; k++) {
          const j = list[k];
          if (j < i) continue;
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d > 240) continue;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const cd = Math.hypot(mx - mouse.x, my - mouse.y);
          const proximity = mouse.inside ? Math.max(0, 1 - cd / 280) : 0;
          const baseAlpha = 0.11 + (a.hub || b.hub ? 0.08 : 0);
          const alpha = baseAlpha + proximity * 0.6;
          ctx.strokeStyle = `rgba(212, 174, 91, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += dt;
        const u = p.t / p.duration;
        if (u >= 1) {
          nodes[p.toIdx].pulse = Math.max(nodes[p.toIdx].pulse, 1);
          packets.splice(i, 1);
          continue;
        }
        const a = nodes[p.fromIdx];
        const b = nodes[p.toIdx];
        const x = a.x + (b.x - a.x) * u;
        const y = a.y + (b.y - a.y) * u;
        ctx.fillStyle = `rgba(226, 26, 58, ${0.85})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(226, 26, 58, ${0.35})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        const tx = a.x + (b.x - a.x) * Math.max(0, u - 0.1);
        const ty = a.y + (b.y - a.y) * Math.max(0, u - 0.1);
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      // Waves
      for (const w of waves) {
        const age = (now - w.start) / w.duration;
        if (age <= 0 || age >= 1) continue;
        const r = age * Math.max(W, H) * 0.9;
        const alpha = (1 - age) * 0.35;
        ctx.strokeStyle = `rgba(240, 204, 122, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(w.x, w.y, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const baseR = n.hub ? 2.6 : 1.5;
        const r = baseR + n.pulse * 4;
        if (n.pulse > 0.05) {
          const ga = 0.18 * n.pulse;
          const grad = ctx.createRadialGradient(n.x, n.y, 1, n.x, n.y, r * 5);
          grad.addColorStop(
            0,
            `rgba(${n.hub ? "226, 26, 58" : "240, 204, 122"}, ${ga})`,
          );
          grad.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = n.hub
          ? `rgba(226, 26, 58, ${0.95})`
          : `rgba(240, 204, 122, ${0.85})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (!reduce) raf = requestAnimationFrame(draw);
    else draw(performance.now());

    // Pointer events on window so cursor over overlaying text still warps
    function pointFromClient(clientX: number, clientY: number) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.inside =
        mouse.x >= 0 && mouse.y >= 0 && mouse.x <= rect.width && mouse.y <= rect.height;
    }
    function onPointerMove(e: PointerEvent) {
      pointFromClient(e.clientX, e.clientY);
    }
    function onPointerLeaveDoc() {
      mouse.inside = false;
      mouse.x = -1e6;
      mouse.y = -1e6;
    }
    function onPointerDown(e: PointerEvent) {
      // Skip clicks on actual interactive elements (buttons, links)
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("[data-hero-noclick]") ||
          target.closest("button") ||
          target.closest("a"))
      ) {
        return;
      }
      pointFromClient(e.clientX, e.clientY);
      if (!mouse.inside) return;
      waves.push({
        x: mouse.x,
        y: mouse.y,
        start: performance.now(),
        duration: 1400,
      });
      let nearest = -1;
      let nd = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - mouse.x;
        const dy = nodes[i].y - mouse.y;
        const d = dx * dx + dy * dy;
        if (d < nd) {
          nd = d;
          nearest = i;
        }
      }
      if (nearest >= 0) {
        nodes[nearest].pulse = 1;
        for (const j of neighbors[nearest] ?? []) {
          packets.push({
            fromIdx: nearest,
            toIdx: j,
            t: 0,
            duration: 600 + Math.random() * 400,
          });
        }
      }
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("blur", onPointerLeaveDoc);
    document.addEventListener("mouseleave", onPointerLeaveDoc);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("blur", onPointerLeaveDoc);
      document.removeEventListener("mouseleave", onPointerLeaveDoc);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
