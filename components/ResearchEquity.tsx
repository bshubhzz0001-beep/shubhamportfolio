"use client";

import { motion } from "framer-motion";
import { Microscope, FileText, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ExternalLinkButton from "./ExternalLinkButton";
import {
  patents,
  copyrights,
  discussions,
  technicalNote,
  universityProject,
  LINKS,
} from "@/lib/research-data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

function StatusBadge({ status }: { status: string }) {
  const isGranted = status === "GRANTED";
  return (
    <span
      className={cn(
        "rounded-full px-3 py-0.5 text-xs font-semibold shrink-0",
        isGranted
          ? "bg-primary/10 text-primary"
          : "bg-secondary/20 text-text-primary"
      )}
    >
      {status}
    </span>
  );
}

export default function ResearchEquity() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          title="Projects & Research"
          subtitle="Innovations, publications & intellectual property"
          icon={Microscope}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-10 flex flex-wrap gap-3"
        >
          {[
            "2 Indian Patents",
            "4 Copyrights",
            "1 Journal",
            "3 ASCE Discussions",
            "1 University Sponsored",
          ].map((item) => (
            <motion.span
              key={item}
              variants={fadeInUp}
              className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-text-primary">
          <FileText className="h-5 w-5 text-primary" />
          Innovations (Patents)
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-3"
        >
          {patents.map((patent) => (
            <motion.article
              key={patent.title}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-accent bg-background p-6 shadow-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <StatusBadge status={patent.status} />
                <span className="text-xs text-text-secondary">{patent.ref}</span>
              </div>
              <h4 className="mt-4 font-semibold text-text-primary leading-snug">
                {patent.title}
              </h4>
              <div className="mt-4 flex-grow space-y-3 text-sm text-text-secondary">
                <p>
                  <span className="font-medium text-text-primary">Problem:</span>{" "}
                  {patent.problem}
                </p>
                <p>
                  <span className="font-medium text-text-primary">Objective:</span>{" "}
                  {patent.objective}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {patent.claims.map((claim) => (
                  <span
                    key={claim}
                    className="rounded-md bg-accent px-2 py-1 text-xs text-primary"
                  >
                    {claim}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold text-primary">
                {patent.hours} Hours
              </p>
              <div className="mt-4 pt-4 border-t border-accent">
                <ExternalLinkButton
                  href={patent.link}
                  label={patent.linkLabel}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <h3 className="mb-6 mt-14 flex items-center gap-2 text-xl font-semibold text-text-primary">
          <BookOpen className="h-5 w-5 text-secondary" />
          Copyrights
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2"
        >
          {copyrights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex flex-col gap-3 rounded-xl bg-accent/50 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium text-text-primary">
                  {item.title}
                </p>
                <StatusBadge status={item.status} />
              </div>
              {item.registrationNo && (
                <p className="text-xs text-text-secondary">
                  Registration:{" "}
                  <span className="font-mono font-medium text-primary">
                    {item.registrationNo}
                  </span>
                </p>
              )}
              <ExternalLinkButton href={item.link} label={item.linkLabel} />
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-3 text-xs text-text-secondary">
          Search all registrations at{" "}
          <a
            href={LINKS.copyrightSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            copyright.gov.in
          </a>
        </p>

        <h4 className="mb-4 mt-10 text-lg font-semibold text-text-primary">
          Discussion Papers (ASCE Journals)
        </h4>
        <div className="space-y-4">
          {discussions.map((paper) => (
            <div
              key={paper.title}
              className="rounded-xl border border-accent p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <p className="text-sm font-medium text-text-primary">
                  {paper.title}
                </p>
                <StatusBadge status={paper.status} />
              </div>
              <p className="mt-2 text-xs text-text-secondary">
                Discussion by: {paper.authors}
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                Original: {paper.originalArticle}
              </p>
              <div className="mt-3">
                <ExternalLinkButton
                  href={paper.link}
                  label={paper.linkLabel}
                  variant="primary"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border-l-4 border-secondary bg-background p-5">
          <p className="text-xs font-semibold uppercase text-secondary">
            Technical Note
          </p>
          <p className="mt-1 text-sm font-medium text-text-primary">
            {technicalNote.title}
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            {technicalNote.status} · {technicalNote.hours} Hours
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h4 className="font-semibold text-primary">
            University Sponsored Project
          </h4>
          <p className="mt-2 text-lg font-medium text-text-primary">
            {universityProject.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-text-secondary">
            <span>Cost: {universityProject.cost}</span>
            <span>Weight: {universityProject.weight}</span>
            <span>Life: {universityProject.life}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
