"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, MapPin, Send, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/profile";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneTel}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-text-primary">
              {profile.fullName}
            </h3>
            <p className="mt-2 text-text-secondary">
              Open to civil infrastructure roles, research collaborations, and
              contractor-side engineering opportunities in Australia.
            </p>
            <p className="mt-2 text-sm italic text-primary/80">
              Australian Work Rights valid to March 2029
            </p>

            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download Resume (PDF)
            </a>

            <ul className="mt-8 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={
                          href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="font-medium text-text-primary transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-text-primary">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-background p-8 shadow-card"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-text-primary"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-accent bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-text-primary"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-accent bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-accent bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
