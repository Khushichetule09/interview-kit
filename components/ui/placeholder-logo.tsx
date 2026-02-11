import type { LucideProps } from "lucide-react";
import { Bolt } from "lucide-react";

import { cn } from "@/lib/utils";
import { GeistPixelTriangle } from "geist/font/pixel";

export function PlaceholderLogo({
  className,
  onlyIcon = false,
  ...props
}: LucideProps & { onlyIcon?: boolean }) {
  if (onlyIcon) {
    return <Bolt className={cn("size-6 shrink-0 text-primary", className)} {...props} />;
  }

  return (
    <div className="flex shrink-0 items-center gap-1">
      <Bolt className={cn("size-6 shrink-0 text-primary", className)} {...props} />
      <span className={cn("text-sm font-semibold text-nowrap text-primary", GeistPixelTriangle.className)}>PrepKit</span>
    </div>
  );
}
