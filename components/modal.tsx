"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, labelledBy, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <motion.button
            type="button"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-[#07080b]/85 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="relative mx-4 my-4 w-full max-w-5xl overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-[#0a0c11] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]"
            style={{ maxHeight: "calc(100dvh - 2rem)" }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#07080b]/80 text-[#a8a39a] backdrop-blur-md transition-colors hover:bg-white/10 hover:text-[#f5f4ef]"
            >
              <X className="h-4 w-4" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
