"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Flag } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const milestones = [
  {
    period: "Short-Term (2022)",
    color: "primary",
    goals: [
      "Gain Engineering Judgement",
      "Scholarship for MS/PhD",
      "EIT Certification",
    ],
  },
  {
    period: "Mid-Term (3 Years)",
    color: "secondary",
    goals: [
      "Innovation Equity",
      "Professional Experience",
      "Financial Stability",
      "Research Equity",
    ],
  },
  {
    period: "Long-Term (2027–2030)",
    color: "primary",
    goals: [
      "Startups & Ventures",
      "Professional Research Organization",
      "Global Expert",
      "Represents Professional Research Bodies",
    ],
  },
];

export default function Goals() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          title="Goals Timeline"
          subtitle="Career milestones & aspirations"
          icon={Flag}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative grid gap-8 lg:grid-cols-3"
        >
          <div className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-1/2 bg-accent lg:block" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.period}
              variants={fadeInUp}
              className="relative rounded-2xl bg-white p-6 shadow-card"
            >
              <div
                className={`absolute -top-3 left-6 hidden h-6 w-6 rounded-full border-4 border-white lg:block ${
                  milestone.color === "primary" ? "bg-primary" : "bg-secondary"
                }`}
              />
              <h3
                className={`text-lg font-semibold ${
                  milestone.color === "primary"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                {milestone.period}
              </h3>
              <ul className="mt-4 space-y-3">
                {milestone.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {goal}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
