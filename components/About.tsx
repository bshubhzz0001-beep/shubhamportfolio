"use client";

import { motion } from "framer-motion";
import { Target, Rocket, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/profile";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const researchInterests = [
  "Civil Infrastructure",
  "Pavements & Roads",
  "Concrete & Materials",
  "QA/QC & Austroads",
  "Drainage & Earthworks",
  "ASR Mitigation",
  "Transportation Engineering",
  "Waste Material Utilization",
  "Machine Learning in Materials",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading title="About" subtitle="Summary, work rights & focus areas" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mb-8 max-w-4xl text-lg leading-relaxed text-text-secondary"
        >
          {profile.professionalSummary}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl bg-primary p-8 text-white shadow-card"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">
              Work Authorization (Australia)
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {profile.workAuthorization.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl bg-secondary p-8 text-text-primary shadow-card"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/40">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider opacity-80">
              Professional Memberships
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              {profile.memberships}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-8 rounded-2xl border border-accent bg-accent/30 p-6"
        >
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-text-primary">
              Research & Innovation Background
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Independent researcher with 2 Indian patents (under granting),
            4 granted copyrights, and ASCE journal discussions — alongside
            hands-on contractor experience in India and laboratory research at
            VIIT and UTS.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="mb-4 text-lg font-semibold text-text-primary">
            Focus Areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-primary/20 bg-accent px-4 py-2 text-sm font-medium text-primary"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
