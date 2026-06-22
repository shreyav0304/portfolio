import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
};

export function Button({ className, variant = "primary", href, target, rel, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid disabled:opacity-50",
    variant === "primary" && "bg-acid text-ink hover:bg-white hover:shadow-[0_0_28px_rgba(185,255,102,.25)]",
    variant === "outline" && "border border-white/15 bg-white/[.03] text-white hover:border-acid/60 hover:bg-white/[.07]",
    variant === "ghost" && "text-white/70 hover:text-white",
    className,
  );

  if (href) {
    return <a className={styles} href={href} target={target} rel={rel}>{props.children}</a>;
  }

  return <button className={styles} {...props} />;
}
