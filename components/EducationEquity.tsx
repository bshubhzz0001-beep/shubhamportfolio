"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, professionalAttributes } from "@/lib/career-data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function EducationEquity() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic qualifications & research focus"
          icon={GraduationCap}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-3"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              className="rounded-2xl border border-accent bg-background p-8 shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-accent px-3 py-1 text-primary">
                  {edu.duration}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-text-secondary shadow-sm">
                  {edu.grade}
                </span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Research:</span>{" "}
                {edu.research}
              </p>
              <div className="mt-4">
                <p className="mb-2 flex items-center gap-1 text-sm font-semibold text-text-primary">
                  <Award className="h-4 w-4 text-secondary" />
                  Highlights
                </p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {edu.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </div>
              {edu.keySubjects.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.keySubjects.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-primary/20 px-2 py-1 text-xs text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
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
          <h3 className="mb-4 text-lg font-semibold text-text-primary">
            Professional Attributes
          </h3>
          <div className="flex flex-wrap gap-3">
            {professionalAttributes.map((attr) => (
              <span
                key={attr}
                className="rounded-full bg-secondary/15 px-4 py-2 text-sm font-medium text-text-primary"
              >
                {attr}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
