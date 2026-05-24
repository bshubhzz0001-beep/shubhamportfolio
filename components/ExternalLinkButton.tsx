import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkButtonProps {
  href: string;
  label: string;
  className?: string;
  variant?: "primary" | "outline";
}

export default function ExternalLinkButton({
  href,
  label,
  className,
  variant = "outline",
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary/90"
          : "border border-primary/30 text-primary hover:bg-accent",
        className
      )}
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}
