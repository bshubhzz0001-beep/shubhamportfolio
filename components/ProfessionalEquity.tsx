"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  FlaskConical,
  Layers,
  Truck,
  Package,
  Cpu,
  Lightbulb,
  Users,
  ClipboardList,
  Microscope,
  FileText,
  GraduationCap,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const topStats = [
  "20+ Projects Delivered",
  "100+ Personnel Supervised",
  "AUD $1M+ Project Value",
  "6+ Years Experience",
  "AS/Austroads Compliant QA/QC",
];

const coreCompetencies = [
  "Concrete Materials",
  "Asphalt & Pavements",
  "QA/QC & ITPs",
  "Road Construction",
  "Aggregate & Quarry",
  "Construction Site Delivery",
  "Laboratory Testing",
];

const footprints = [
  {
    title: "Concrete",
    icon: Layers,
    items: [
      "3800+ m³ Concrete",
      "9000+ m³ QAQC of Concrete",
      "25+ Mix Designs",
      "250+ Cube Cast",
      "250+ Compressive Tests",
      "160+ Indirect Tensile Tests",
      "120+ Workability Tests",
    ],
  },
  {
    title: "Transportation",
    icon: Truck,
    items: [
      "20 kg+ Bitumen Used",
      "10000+ m³ QAQC of WBM Course",
      "20+ Mix Designs",
      "100+ Marshall Stability Tests",
      "182 Flash & Fire Tests",
      "182 Viscosity Tests",
      "189 Ductility Tests",
      "193 Softening Point Tests",
    ],
  },
  {
    title: "Materials",
    icon: Package,
    items: [
      "22 kg Paint Sludge",
      "16 kg Biogas Sludge",
      "10 kg+ Polypropylene",
      "15 kg+ LDPE",
      "50 kg+ GGBS",
      "60 kg+ Slag Sand",
      "40 kg+ Wheat Husk",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: Cpu,
    items: [
      "2+ ANN Models",
      "10+ Dataset Generation",
      "20+ Training Sets",
      "50+ Testing Sets",
      "12 Result Comparisons",
    ],
  },
];

const strongholds: { label: string; icon: LucideIcon }[] = [
  { label: "Materials", icon: Layers },
  { label: "Concept Development", icon: Lightbulb },
  { label: "Product Development", icon: Package },
  { label: "Client Management", icon: Users },
  { label: "Project Management", icon: ClipboardList },
  { label: "Applied Research", icon: Microscope },
  { label: "Technical Writing", icon: FileText },
  { label: "Mentoring", icon: GraduationCap },
];

const shubhamBullets = [
  "Delivered 20+ civil infrastructure and building projects: concrete roads, drainage systems, water tanks, percolation wells, public amenities, and residential buildings.",
  "Managed end-to-end project delivery: design coordination, estimation, budgeting, procurement, site execution, QA/QC, and handover.",
  "Prepared detailed BOQs, cost estimates, and procurement schedules for multiple sites, ensuring cost control and timely material availability.",
  "Supervised 100+ personnel, subcontractors, and suppliers; monitored productivity, safety compliance, and schedule adherence.",
  "Conducted daily site inspections, set-out verification, level checks, and as-built documentation.",
  "Implemented QA/QC systems: material inspections, concrete/asphalt testing, workmanship checks, and compliance documentation.",
  "Coordinated soil investigations, foundation recommendations, and pavement layer designs with consultants.",
  "Applied AutoCAD, Civil 3D, and MS Excel for design, planning, and reporting.",
  "Ensured OH&S compliance: SWMS, hazard monitoring, safe plant operation, and environmental awareness.",
  "Delivered projects exceeding AUD $1M, achieving on-time completion and high community impact.",
];

const shubhamProjects = [
  {
    title: "20+ Civil Infrastructure Projects Delivered",
    client: "Shubham Construction, India | January 2021 – May 2023",
    tags: ["Roads", "Buildings", "Water Supply", "Rural Development"],
    note: "AUD $1M+ Combined Value",
  },
  {
    title: "Pipe Gutter Construction, Chasnali",
    client: "Gram Panchayat Chasnali | 2021",
    tags: [
      "Drainage Infrastructure",
      "RCC Construction",
      "QA/QC Supervision",
      "Site & Labour Management",
    ],
  },
  {
    title: "Sabha Mandap Construction, Apegaon",
    client: "Gram Panchayat Apegaon | 2021",
    tags: [
      "Community Infrastructure",
      "RCC Structural Works",
      "Estimation & Planning",
      "Construction Management",
    ],
  },
  {
    title: "RCC Water Pipeline Scheme, Savantsar",
    client: "Local Government Authority | 2021–2022",
    tags: [
      "Water Supply Infrastructure",
      "Pipeline Installation",
      "Quality Control",
      "Work Inspection & Testing",
    ],
  },
  {
    title: "G+2 Residential Bungalow, Wari, Kopargaon",
    client: "Private Residential Client | 2022",
    tags: [
      "Multi-Storey Residential",
      "RCC Frame Structure",
      "Design Coordination",
      "Construction Supervision",
    ],
  },
  {
    title: "Weekly Market (Rural Haat), Savantsar",
    client: "Rural Development Authority | 2022",
    tags: [
      "Public Infrastructure",
      "Concrete & Structural Works",
      "Contractor Coordination",
      "Site Management",
    ],
  },
  {
    title: "Internal Concrete Road, Dalit Wasti, Madhi",
    client: "Local Government Authority | 2022",
    tags: [
      "Rigid Pavement Construction",
      "Concrete Roadworks",
      "Compaction & QA/QC",
      "Material Testing",
    ],
  },
  {
    title: "Cremation Ground Maintenance & Water Tank, Mauji",
    client: "Gram Panchayat Mauji | 2022",
    tags: [
      "Public Utility Infrastructure",
      "Water Storage",
      "RCC Construction",
      "Project Delivery",
    ],
  },
  {
    title: "Percolation Well Construction, Karanji, Kopargaon",
    client: "Water Resources Department | 2023",
    tags: [
      "Groundwater Recharge Infrastructure",
      "Excavation & RCC Works",
      "Quality Assurance",
      "Site Supervision",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-text-secondary">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ShubhamProjectsGrid() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="mt-6 border-t border-accent pt-6">
      <button
        type="button"
        onClick={() => setShowProjects((prev) => !prev)}
        className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-accent"
      >
        {showProjects ? "Hide Projects" : "Show All Projects"}
      </button>

      {showProjects && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-5"
        >
          <h4 className="mb-4 text-sm font-semibold text-text-primary">
            Projects Delivered
          </h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shubhamProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border-l-[3px] border-primary bg-background p-4 transition-shadow hover:shadow-card-hover"
              >
                <h5 className="text-sm font-bold text-text-primary">
                  {project.title}
                </h5>
                <p className="mt-1 text-xs text-text-secondary">
                  {project.client}
                </p>
                {project.note && (
                  <p className="mt-1 text-xs font-medium text-primary">
                    {project.note}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 px-2 py-0.5 text-[11px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function ProfessionalEquity() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="Contractor-side delivery, site engineering & research"
          icon={Building2}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap gap-3"
        >
          {topStats.map((stat) => (
            <motion.span
              key={stat}
              variants={fadeInUp}
              className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              {stat}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="rounded-2xl bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-text-primary">R.B. Associates</h3>
                <p className="font-medium text-primary">Civil Engineer Trainee (Casual)</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-text-secondary">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Kopargaon, Maharashtra, India
                </p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                July 2017 – October 2020
              </span>
            </div>
            <div className="mt-4">
              <BulletList
                items={[
                  "Assisted in the execution of 20+ RCC, infrastructure, and building projects, including commercial buildings, water supply schemes, and roadworks.",
                  "Prepared 50+ BOQs, 30+ cost estimates, and quantity take-offs, supporting tender submissions, budgeting, and cost control.",
                  "Interpreted construction drawings, communicated design intent to site teams, and assisted in set-out, level verification, and as-built documentation.",
                  "Supervised daily site activities, including labour coordination, material receipt, equipment usage, and QA checks.",
                  "Performed basic surveying using Total Station, Theodolite, and Auto Level, supporting site layout and construction alignment.",
                  "Assisted in QA/QC testing, including concrete compressive strength, Marshall Stability, asphalt compaction, and aggregate grading.",
                  "Maintained laboratory and field test equipment, supporting calibration and safe operation.",
                  "Coordinated with subcontractors and suppliers to ensure timely delivery of materials and services.",
                  "Supported OH&S compliance, including safe work practices, hazard monitoring, and supervision of plant operation.",
                  "Assisted in tender documentation, work orders, and technical submissions, ensuring smooth execution of multiple projects.",
                ]}
              />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-accent/50 p-4">
                <h4 className="font-semibold text-text-primary">Commercial Complex, Chasnali</h4>
                <p className="mt-1 text-xs text-text-secondary">Client: Public Work Department | May 2019 – November 2019</p>
                <p className="mt-2 text-sm text-text-secondary">$92.9K Project Cost | 601m³ Concrete | 24.43 MT Steel | 20+ Clients | 6 Months</p>
              </div>
              <div className="rounded-xl bg-accent/50 p-4">
                <h4 className="font-semibold text-text-primary">Water Supply Scheme</h4>
                <p className="mt-1 text-xs text-text-secondary">Client: Irrigation Department | May 2021 – Present</p>
                <p className="mt-2 text-sm text-text-secondary">$52.3K Project Cost | 100,000 lit Capacity | $15.33 Cost per Capita | 600+ m³ Concrete | 1 Year Duration</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-2xl bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-text-primary">MoRTH NHAI Internship — KCC Buildcon Pvt. Ltd, Jharkhand</h3>
                <p className="font-medium text-primary">Assistant Site Engineer</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-text-secondary">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Ranchi, Jharkhand, India
                </p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                October 2020 – January 2021
              </span>
            </div>
            <div className="mt-4">
              <BulletList
                items={[
                  "Assisted construction delivery of a major national highway project under NHAI standards, including earthworks, pavement layers, reinforced concrete structures, and bridge components.",
                  "Conducted daily site inspections, set-out verification, level checks, and preparation of as-built documentation.",
                  "Assisted QA/QC inspections and ITP compliance, including concrete slump, compressive strength, core testing, and aggregate grading.",
                  "Coordinated 5+ subcontractors, plant operators, and suppliers, ensuring smooth workflow and minimal delays.",
                  "Supervised 100+ labour workforce, monitoring productivity, maintaining muster rolls, and enforcing safety compliance.",
                  "Supported procurement planning, machinery deployment, and site logistics, ensuring materials and plant availability aligned with project schedule.",
                  "Prepared daily progress and site reports for project management, including manpower, plant, and material utilization.",
                  "Ensured OH&S compliance: SWMS implementation, toolbox talks, hazard identification, and safe operation of heavy machinery.",
                  "Supported project planning and look-ahead schedules, assisting senior engineers in sequencing construction activities.",
                ]}
              />
            </div>
            <div className="mt-5 rounded-xl bg-accent/50 p-4">
              <h4 className="font-semibold text-text-primary">Elevated Corridor of Ranchi City NH-75 including Down Ramp on NH-23</h4>
              <p className="mt-1 text-xs text-text-secondary">Client: KCC Buildcon Pvt. Ltd | 2016–2018</p>
              <p className="mt-2 text-sm text-text-secondary">$52M Project Cost | 4 Lane Highway | 4 Year Duration</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-2xl bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-text-primary">Shubham Construction</h3>
                <p className="font-medium text-primary">Founder and Civil Engineer</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-text-secondary">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Kopargaon, Maharashtra, India
                </p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                January 2021 – May 2023
              </span>
            </div>
            <div className="mt-4">
              <BulletList items={shubhamBullets} />
            </div>
            <ShubhamProjectsGrid />
          </motion.div>
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
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-primary/20 bg-white p-6 shadow-card"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-text-primary">PG Research Assistant</h3>
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                Current Role
              </span>
            </div>
            <p className="text-sm text-primary">Dr. Aziz Mohammad — FEIT, UTS, Sydney AU</p>
            <p className="mt-2 text-xs text-text-secondary">January 2025 – Present</p>
            <div className="mt-4">
              <BulletList
                items={[
                  "Designed and executed performance-based laboratory programs for cementitious systems (OPC, BCSA, fly ash, slag) aligned with durability requirements and QA/QC frameworks.",
                  "Conducted quarry materials and aggregate-related durability evaluation, including AAR (ASR/ACR) assessments, ASR expansion, sorptivity, chloride ingress, and volume stability testing.",
                  "Performed petrographic analysis principles using XRD and SEM to assess mineralogical composition, aggregate reactivity, and degradation mechanisms.",
                  "Applied analytical methods to correlate material composition, microstructure, and performance for product quality and long-term durability prediction.",
                  "Investigated ASR mitigation mechanisms using ettringite-based (BCSA) systems to improve concrete durability and reduce reactive aggregate risk.",
                  "Managed end-to-end laboratory workflows, including sampling, batching, curing, testing, calibration awareness, and controlled test execution.",
                  "Produced structured technical reports and data interpretation outputs to support quality control, material selection, and technical support decisions.",
                ]}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-primary/20 bg-white p-6 shadow-card"
          >
            <h3 className="font-semibold text-text-primary">UG Research Assistant</h3>
            <p className="text-sm text-primary">Dr. Archana Tanawade — Civil Dept., VIIT, Pune</p>
            <p className="mt-2 text-xs text-text-secondary">November 2020 – May 2023</p>
            <div className="mt-4">
              <BulletList
                items={[
                  "Evaluated material behaviour across quarry operations, asphalt production, and pavement performance, linking aggregate variability to blended stability and durability outcomes.",
                  "Conducted aggregate and binder assessment aligned with source-rock testing principles, analysing grading, fines content, and material consistency for performance prediction.",
                  "Applied petrochemical and micro-level material understanding consistent with petrography-based interpretation of aggregate quality and durability characteristics.",
                  "Assessed aggregate grading compliance (PSD) and variability impacts on compaction, stability, and production consistency in asphalt systems.",
                  "Performed binder characterisation, including viscosity, ductility, penetration, softening point, and flash/fire to evaluate handling and performance limits.",
                  "Identified material-related failures, such as rutting and stripping, and recommended corrective adjustments in grading and binder selection for QC improvement.",
                  "Integrated laboratory test outcomes with field performance behaviour to support Quality Control decisions and product performance optimisation.",
                  "Translated laboratory findings into practical mix optimisation strategies aligned with real-world construction and quarry supply variability.",
                ]}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="mb-8 text-lg font-semibold text-text-primary">
            Strongholds & Footprints
          </h3>

          <h4 className="mb-4 text-base font-semibold text-text-primary">My Footprints</h4>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {footprints.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-xl bg-white shadow-card"
              >
                <div className="flex items-center gap-2 bg-primary px-4 py-3 text-white">
                  <card.icon className="h-4 w-4" />
                  <h5 className="font-semibold">{card.title}</h5>
                </div>
                <ul className="space-y-1.5 p-4 text-sm text-text-secondary">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h4 className="mb-4 text-base font-semibold text-text-primary">My Strongholds</h4>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {strongholds.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-primary/30 bg-white p-4 text-center shadow-sm transition hover:shadow-card"
              >
                <Icon className="mb-2 h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-text-primary sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="mb-4 text-lg font-semibold text-text-primary">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
