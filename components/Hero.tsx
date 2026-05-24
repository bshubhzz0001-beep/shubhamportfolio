"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Briefcase,
  HardHat,
  Phone,
  Mail,
  Linkedin,
  Download,
  FileText,
} from "lucide-react";
import { profile } from "@/lib/profile";
import { fadeInUp } from "@/lib/animations";

const roleIcons = [FlaskConical, Briefcase, HardHat] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent pt-16"
    >
      <div className="section-container section-padding flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative overflow-hidden rounded-xl border-4 border-primary shadow-card-hover">
            <Image
              src="/shubham.jpg"
              alt={profile.fullName}
              width={320}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {profile.tagline}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 text-xl font-medium text-secondary">
            {profile.degree}
          </p>

          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {profile.roles.map((label, i) => {
              const Icon = roleIcons[i];
              return (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-text-secondary shadow-card"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">Memberships:</span>{" "}
            {profile.memberships}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary lg:justify-start">
            <a
              href={`tel:${profile.phoneTel}`}
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#research"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              View Research
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-accent"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-white px-6 py-3 text-sm font-semibold text-text-secondary transition-all hover:border-primary hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
