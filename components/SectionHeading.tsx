"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { slideInLeft, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  id?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  icon: Icon,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={slideInLeft}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", className)}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <div>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-lg text-text-secondary">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="mt-4 h-1 w-20 rounded-full bg-secondary" />
    </motion.div>
  );
}
