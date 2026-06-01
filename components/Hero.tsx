"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Linkedin,
  Download,
  MapPin,
} from "lucide-react";
import { profile } from "@/lib/profile";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent pt-16"
    >
      <div className="section-container section-padding flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative overflow-hidden rounded-xl border-2 border-primary shadow-card">
            <Image
              src="/shubham.jpg"
              alt={profile.fullName}
              width={120}
              height={150}
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
            {profile.tagline}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
            {profile.fullName}
          </h1>
          <p className="mt-2 text-base font-semibold text-secondary sm:text-lg">
            {profile.degree}
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm text-text-secondary shadow-sm">
            <MapPin className="h-4 w-4 text-primary" />
            Sydney, Australia
          </p>

          <p className="mt-5 text-sm leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">Memberships:</span>
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
              href="#experience"
              className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-accent"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              View Research
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-secondary/90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-sm italic text-primary/80">
            Available for immediate full-time roles in concrete materials,
            QA/QC, pavement engineering, and construction site delivery across
            Australia — full work rights to March 2029
          </p>
        </motion.div>
      </div>
    </section>
  );
}
