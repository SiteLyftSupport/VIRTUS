import {
  AppWindow,
  LifeBuoy,
  ShieldCheck,
  BarChart3,
  Database,
  Network,
  ClipboardList,
  TriangleAlert,
  Code2,
  Satellite,
  Cog,
  Globe,
  Radio,
} from "lucide-react";
import type { Service } from "@/lib/services";

const MAP = {
  AppWindow,
  LifeBuoy,
  ShieldCheck,
  BarChart3,
  Database,
  Network,
  ClipboardList,
  TriangleAlert,
  Code2,
  Satellite,
  Cog,
  Globe,
  Radio,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: Service["iconName"];
  className?: string;
}) {
  const Icon = MAP[name];
  return <Icon className={className} />;
}
