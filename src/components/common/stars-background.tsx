import { ReactNode } from "react";
import StarsCanvas from "../canvas/stars";
import { cn } from "@/src/utils/cn";

export default function StarsBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10", className)}>
      {children}
      <StarsCanvas />
    </div>
  );
}
