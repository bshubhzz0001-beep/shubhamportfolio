import { Linkedin, Mail, Phone, Download } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="section-container px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-display text-xl font-semibold">
            {profile.fullName}
          </h3>
          <p className="mt-2 text-white/80">{profile.degree}</p>
          <p className="mt-1 text-sm text-white/70">{profile.applicationLine}</p>

          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/25"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <div className="mt-6 flex justify-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`tel:${profile.phoneTel}`}
              className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 border-t border-white/20 pt-8 text-sm text-white/60">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
