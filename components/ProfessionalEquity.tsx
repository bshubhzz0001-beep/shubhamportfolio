"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, FlaskConical } from "lucide-react";
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
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• Assisted in the execution of 20+ RCC, infrastructure, and building projects, including commercial buildings, water supply schemes, and roadworks.</li>
              <li>• Prepared 50+ BOQs, 30+ cost estimates, and quantity take-offs, supporting tender submissions, budgeting, and cost control.</li>
              <li>• Interpreted construction drawings, communicated design intent to site teams, and assisted in set-out, level verification, and as-built documentation.</li>
              <li>• Supervised daily site activities, including labour coordination, material receipt, equipment usage, and QA checks.</li>
              <li>• Performed basic surveying using Total Station, Theodolite, and Auto Level, supporting site layout and construction alignment.</li>
              <li>• Assisted in QA/QC testing, including concrete compressive strength, Marshall Stability, asphalt compaction, and aggregate grading.</li>
              <li>• Maintained laboratory and field test equipment, supporting calibration and safe operation.</li>
              <li>• Coordinated with subcontractors and suppliers to ensure timely delivery of materials and services.</li>
              <li>• Supported OH&S compliance, including safe work practices, hazard monitoring, and supervision of plant operation.</li>
              <li>• Assisted in tender documentation, work orders, and technical submissions, ensuring smooth execution of multiple projects.</li>
            </ul>
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
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• Assisted construction delivery of a major national highway project under NHAI standards, including earthworks, pavement layers, reinforced concrete structures, and bridge components.</li>
              <li>• Conducted daily site inspections, set-out verification, level checks, and preparation of as-built documentation.</li>
              <li>• Assisted QA/QC inspections and ITP compliance, including concrete slump, compressive strength, core testing, and aggregate grading.</li>
              <li>• Coordinated 5+ subcontractors, plant operators, and suppliers, ensuring smooth workflow and minimal delays.</li>
              <li>• Supervised 100+ labour workforce, monitoring productivity, maintaining muster rolls, and enforcing safety compliance.</li>
              <li>• Supported procurement planning, machinery deployment, and site logistics, ensuring materials and plant availability aligned with project schedule.</li>
              <li>• Prepared daily progress and site reports for project management, including manpower, plant, and material utilization.</li>
              <li>• Ensured OH&S compliance: SWMS implementation, toolbox talks, hazard identification, and safe operation of heavy machinery.</li>
              <li>• Supported project planning and look-ahead schedules, assisting senior engineers in sequencing construction activities.</li>
            </ul>
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
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• Delivered 20+ civil infrastructure and building projects: concrete roads, drainage systems, water tanks, percolation wells, public amenities, and residential buildings.</li>
              <li>• Managed end-to-end project delivery: design coordination, estimation, budgeting, procurement, site execution, QA/QC, and handover.</li>
              <li>• Prepared detailed BOQs, cost estimates, and procurement schedules for multiple sites, ensuring cost control and timely material availability.</li>
              <li>• Supervised 100+ personnel, subcontractors, and suppliers; monitored productivity, safety compliance, and schedule adherence.</li>
              <li>• Conducted daily site inspections, set-out verification, level checks, and as-built documentation.</li>
              <li>• Implemented QA/QC systems: material inspections, concrete/asphalt testing, workmanship checks, and compliance documentation.</li>
              <li>• Coordinated soil investigations, foundation recommendations, and pavement layer designs with consultants.</li>
              <li>• Applied AutoCAD, Civil 3D, and MS Excel for design, planning, and reporting.</li>
              <li>• Ensured OH&S compliance: SWMS, hazard monitoring, safe plant operation, and environmental awareness.</li>
              <li>• Delivered projects exceeding AUD $1M, achieving on-time completion and high community impact.</li>
            </ul>
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
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• Designed and executed performance-based laboratory programs for cementitious systems (OPC, BCSA, fly ash, slag) aligned with durability requirements and QA/QC frameworks.</li>
              <li>• Conducted quarry materials and aggregate-related durability evaluation, including AAR (ASR/ACR) assessments, ASR expansion, sorptivity, chloride ingress, and volume stability testing.</li>
              <li>• Performed petrographic analysis principles using XRD and SEM to assess mineralogical composition, aggregate reactivity, and degradation mechanisms.</li>
              <li>• Applied analytical methods to correlate material composition, microstructure, and performance for product quality and long-term durability prediction.</li>
              <li>• Investigated ASR mitigation mechanisms using ettringite-based (BCSA) systems to improve concrete durability and reduce reactive aggregate risk.</li>
              <li>• Managed end-to-end laboratory workflows, including sampling, batching, curing, testing, calibration awareness, and controlled test execution.</li>
              <li>• Produced structured technical reports and data interpretation outputs to support quality control, material selection, and technical support decisions.</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-primary/20 bg-white p-6 shadow-card"
          >
            <h3 className="font-semibold text-text-primary">UG Research Assistant</h3>
            <p className="text-sm text-primary">Dr. Archana Tanawade — Civil Dept., VIIT, Pune</p>
            <p className="mt-2 text-xs text-text-secondary">November 2020 – May 2023</p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• Evaluated material behaviour across quarry operations, asphalt production, and pavement performance, linking aggregate variability to blended stability and durability outcomes.</li>
              <li>• Conducted aggregate and binder assessment aligned with source-rock testing principles, analysing grading, fines content, and material consistency for performance prediction.</li>
              <li>• Applied petrochemical and micro-level material understanding consistent with petrography-based interpretation of aggregate quality and durability characteristics.</li>
              <li>• Assessed aggregate grading compliance (PSD) and variability impacts on compaction, stability, and production consistency in asphalt systems.</li>
              <li>• Performed binder characterisation, including viscosity, ductility, penetration, softening point, and flash/fire to evaluate handling and performance limits.</li>
              <li>• Identified material-related failures, such as rutting and stripping, and recommended corrective adjustments in grading and binder selection for QC improvement.</li>
              <li>• Integrated laboratory test outcomes with field performance behaviour to support Quality Control decisions and product performance optimisation.</li>
              <li>• Translated laboratory findings into practical mix optimisation strategies aligned with real-world construction and quarry supply variability.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="mb-4 text-lg font-semibold text-text-primary">
            Strongholds & Footprints
          </h3>
          <h4 className="mb-6 text-base font-semibold text-text-primary">
            Core Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-sm font-medium text-text-secondary shadow-sm"
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
