"use client";

import { motion } from "framer-motion";
import { Lightbulb, Briefcase, GraduationCap, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

const snapshotCards = [
  {
    title: "Innovator & Researcher",
    accent: "teal" as const,
    icon: Lightbulb,
    items: [
      "2 Indian Patents | University Sponsored Project",
      "3 Indian Copyrights | 5396+ Hours",
    ],
  },
  {
    title: "Professional Engineer",
    accent: "gold" as const,
    icon: Briefcase,
    items: [
      "MoRTH NHAI Internship",
      "Government Contractor",
      "R.B. Associates Projects",
      "2767+ Hours",
    ],
  },
  {
    title: "Academic Excellence",
    accent: "teal" as const,
    icon: GraduationCap,
    items: [
      "Institute Topper (Rank 2 of 360 students)",
      "Student Coordinator Winner (Rank 1 of 300+)",
      "1800+ Hours",
    ],
  },
  {
    title: "Mentor",
    accent: "gold" as const,
    icon: Users,
    items: [
      "40+ Live Sessions",
      "10+ Doubt Solving Sessions",
      "20+ Assignments Checked",
      "1000+ Hours",
    ],
  },
];

const iprStats = [
  { label: "2 Indian Patents", value: "2" },
  { label: "4 Copyrights", value: "4" },
  { label: "1 Journal Publication", value: "1" },
  { label: "3 ASCE Discussions", value: "3" },
];

export default function Snapshot() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Profile Snapshot" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {snapshotCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className={cn(
                "rounded-2xl bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover",
                card.accent === "teal"
                  ? "border-t-4 border-primary"
                  : "border-t-4 border-secondary"
              )}
            >
              <card.icon
                className={cn(
                  "mb-4 h-8 w-8",
                  card.accent === "teal" ? "text-primary" : "text-secondary"
                )}
              />
              <h3 className="font-semibold text-text-primary">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {iprStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-xl bg-white p-6 text-center shadow-card"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
