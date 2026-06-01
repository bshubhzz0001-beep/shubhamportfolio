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

const affiliatedMemberships = [
  "Indian Concrete Institute (ICI)",
  "Indian Roads Congress (IRC)",
];

const studentMemberships = [
  "American Society of Civil Engineers (ASCE)",
  "American Concrete Institute (ACI)",
  "Engineers Australia",
  "Concrete Institute of Australia (CIA)",
  "Australian Institute of Building (AIB)",
  "Australasian Corrosion Association (ACA)",
  "Australian Society of Concrete Pavement",
  "Asphalt Pavement Association of India",
  "International Society of Asphalt Pavement",
];

function MembershipPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-primary/40 bg-white px-2.5 py-1 text-[11px] font-medium text-text-secondary sm:text-xs">
      {label}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent pt-16"
    >
      <div className="section-container section-padding flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex-shrink-0 lg:mx-0"
        >
          <div
            className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/25 via-accent to-secondary/20 sm:-inset-4"
            aria-hidden
          />
          <div className="relative rounded-2xl border-4 border-primary bg-white p-2 shadow-card-hover ring-2 ring-accent/60">
            <div className="relative h-[300px] w-[240px] overflow-hidden rounded-xl sm:h-[360px] sm:w-[288px] lg:h-[400px] lg:w-[320px]">
              <Image
                src="/shubham.jpg"
                alt={profile.fullName}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-[center_18%]"
                priority
              />
            </div>
            <div
              className="absolute -bottom-1 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-secondary"
              aria-hidden
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

          <div className="mt-5 space-y-3 text-left">
            <div>
              <p className="mb-2 text-xs font-bold text-primary sm:text-sm">
                Affiliated Member:
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {affiliatedMemberships.map((item) => (
                  <MembershipPill key={item} label={item} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold text-primary sm:text-sm">
                Student Member:
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {studentMemberships.map((item) => (
                  <MembershipPill key={item} label={item} />
                ))}
              </div>
            </div>
          </div>

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
