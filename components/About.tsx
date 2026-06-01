"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const technicalCapabilities = [
  "Construction materials and pavement engineering",
  "Quality assurance and quality control principles (QA/QC)",
  "Austroads-based pavement design concepts",
  "Materials testing and interpretation",
  "Technical problem solving and data analysis",
  "Engineering documentation and reporting",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          title="Profile Summary"
          subtitle="Professional background and capabilities"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mb-10 max-w-5xl border-l-4 border-primary bg-accent/30 p-6 text-left text-lg leading-relaxed text-text-secondary"
        >
          Civil engineer with 6+ years of hands-on experience in construction
          delivery, QA/QC implementation, and materials engineering across
          concrete, asphalt, and pavement systems. Led end-to-end delivery of
          20+ civil infrastructure projects exceeding AUD $1M in India,
          managing 100+ personnel and implementing inspection and test plans
          aligned with Australian Standards and Austroads guidelines. Currently
          conducting cementitious materials research at UTS, testing concrete
          systems with OPC, BCSA, fly ash, and slag to AS 1012 and ASTM
          standards. Open to full-time role in Australian construction
          industry. Based in Sydney with full Australian work rights to March
          2029.
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-2xl bg-white p-1"
        >
          <h3 className="mb-5 text-lg font-semibold text-text-primary">
            Technical Capabilities
          </h3>
          <ul className="space-y-2">
            {technicalCapabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {capability}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <h4 className="text-sm font-semibold text-primary">
              Australian Work Rights
            </h4>
            <p className="mt-2 text-sm text-text-secondary">
              Available for immediate full-time roles with full Australian work
              rights valid to March 2029.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
