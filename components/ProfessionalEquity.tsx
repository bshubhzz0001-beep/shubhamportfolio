"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, FlaskConical } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  experiences,
  researchExperience,
  professionalStats,
} from "@/lib/career-data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const footprint = [
  "Roads & Pavements",
  "Drainage Systems",
  "Concrete Structures",
  "QA/QC & ITPs",
  "BOQs & Estimation",
  "Austroads / AS / IS Standards",
];

export default function ProfessionalEquity() {
  return (
    <section id="professional" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          title="Professional Experience"
          subtitle="Contractor-side delivery, site engineering & research"
          icon={Building2}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {professionalStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-xl bg-white p-4 text-center shadow-card"
            >
              <p className="text-lg font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.org + exp.role}
              variants={fadeInUp}
              className="rounded-2xl bg-white p-6 shadow-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-text-primary">{exp.org}</h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-text-secondary">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {exp.location}
                  </p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                  {exp.duration}
                </span>
              </div>
              {"project" in exp && exp.project && (
                <p className="mt-2 text-sm italic text-text-secondary">
                  {exp.project}
                </p>
              )}
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-text-secondary">
                    • {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <h3 className="mb-6 mt-14 flex items-center gap-2 text-xl font-semibold text-text-primary">
          <FlaskConical className="h-5 w-5 text-primary" />
          Research Experience
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-2"
        >
          {researchExperience.map((exp) => (
            <motion.div
              key={exp.org}
              variants={fadeInUp}
              className="rounded-2xl border border-primary/20 bg-white p-6 shadow-card"
            >
              <h3 className="font-semibold text-text-primary">{exp.role}</h3>
              <p className="text-sm text-primary">{exp.org}</p>
              <p className="mt-1 text-xs text-text-secondary">{exp.mentor}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-accent px-2 py-1 text-primary">
                  {exp.duration}
                </span>
                <span className="text-text-secondary">{exp.location}</span>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-text-secondary">
                {exp.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="mb-6 text-lg font-semibold text-text-primary">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {footprint.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-primary/10 bg-white px-4 py-3 text-center text-sm font-medium text-text-secondary shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
