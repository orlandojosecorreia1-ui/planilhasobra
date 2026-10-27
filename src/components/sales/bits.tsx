import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackMetaEvent } from "@/lib/meta-pixel";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-4 md:px-6", className)}>
      {children}
    </div>
  );
}

type CtaVariant = "primary" | "ghost" | "midnight";
type CtaSize = "sm" | "md" | "lg";

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-200";
  const sizes: Record<CtaSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  };
  const variants: Record<CtaVariant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "bg-secondary text-secondary-foreground hover:bg-accent/70",
    midnight:
      "bg-midnight-chip text-on-midnight border border-midnight-line hover:bg-midnight-line",
  };

  const handleClick = () => {
    if (href.includes("standerpay.com/checkout")) {
      trackMetaEvent("InitiateCheckout");
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[760px]", center && "mx-auto text-center", className)}>
      <p className="text-eyebrow font-semibold uppercase text-stone">{eyebrow}</p>
      <h2 className="mt-3 text-heading font-semibold text-balance md:text-heading-lg">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 font-serif text-lg leading-relaxed text-graphite">{sub}</p>
      )}
    </div>
  );
}
