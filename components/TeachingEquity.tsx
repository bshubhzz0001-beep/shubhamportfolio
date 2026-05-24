"use client";

import { motion } from "framer-motion";
import {
  Presentation,
  Users,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const teachingCards = [
  {
    type: "Teaching",
    icon: Presentation,
    role: "Civil Engineering Software Tutor",
    org: "Disha Institute, Kopargaon",
    period: "May–August 2016 | 160+ Hours",
    details: ["Subjects: AutoCAD | Revit"],
    highlights: ["50+ Students", "25+ Lectures", "100% Results"],
    accent: "primary",
  },
  {
    type: "Instructing",
    icon: Users,
    role: "Instructor — Professors & Undergraduates",
    org: "VIIT, Pune",
    period: "April–June 2021 | 60+ Hours",
    details: ["Pavement Sample Extraction", "Microwave Heating System"],
    highlights: [],
    accent: "secondary",
  },
  {
    type: "Mentoring",
    icon: Lightbulb,
    role: "Research Mentor",
    org: "Independent",
    period: "February 2022–Present | 100+ Hours",
    details: [
      "Flexible Pavement Pothole Design",
      "Mathematical Models for Compressive Strength",
    ],
    highlights: [],
    accent: "primary",
  },
  {
    type: "Assisting",
    icon: HeartHandshake,
    role: "ICI Tech Volunteer",
    org: "Indian Concrete Institute, Pune",
    period: "April 2022 | 60+ Hours",
    details: [],
    highlights: ["600+ Professionals Engaged"],
    accent: "secondary",
  },
];

export default function TeachingEquity() {
  return (
    <section id="teaching" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          title="Teaching Equity"
          subtitle="Teaching, mentoring & professional engagement"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2"
        >
          {teachingCards.map((card) => (
            <motion.div
              key={card.type}
              variants={fadeInUp}
              className="rounded-2xl bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    card.accent === "primary"
                      ? "bg-accent text-primary"
                      : "bg-secondary/20 text-text-primary"
                  }`}
                >
                  <card.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  {card.type}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-text-primary">{card.role}</h3>
              <p className="text-sm text-primary">{card.org}</p>
              <p className="mt-2 text-xs text-text-secondary">{card.period}</p>
              {card.details.length > 0 && (
                <ul className="mt-4 space-y-1 text-sm text-text-secondary">
                  {card.details.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              )}
              {card.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
