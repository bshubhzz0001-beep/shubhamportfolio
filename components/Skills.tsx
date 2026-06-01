"use client";

import { motion } from "framer-motion";
import { ChevronRight, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const skillGroups = [
  {
    title: "Aggregates & Quarry Materials",
    items: [
      "Aggregate grading control",
      "PSD analysis & compliance",
      "LA abrasion",
      "Wet/dry strength",
      "Flakiness",
      "Water absorption",
      "Density",
      "Aggregate degradation behaviour",
      "Stockpile management",
      "Aggregate blending",
      "Source rock testing",
      "Quarry material variability",
    ],
  },
  {
    title: "Pavement & Road-base Materials",
    items: [
      "CBR",
      "Plasticity Index (PI)",
      "Compaction behaviour",
      "OMC/MDD",
      "Field density control",
      "Moisture conditioning",
      "Performance under loading",
      "Reactivity risk awareness",
    ],
  },
  {
    title: "Asphalt Materials",
    items: [
      "Marshall Stability & flow",
      "Volumetrics & compaction",
      "Binder testing (viscosity, ductility, penetration, softening point, flash & fire)",
      "Binder–aggregate interaction",
      "Rutting/stripping/moisture damage",
      "Mix optimization",
    ],
  },
  {
    title: "Concrete & Cementitious Systems",
    items: [
      "Slump",
      "Curing",
      "Compressive strength",
      "Mix design fundamentals",
      "AAR (ASR/ACR)",
      "Permeability",
      "Durability performance",
      "Ettringite/BCSA systems",
      "Life cycle awareness",
    ],
  },
  {
    title: "Technical Evaluation & Decision Support",
    items: [
      "Specification compliance verification",
      "Material acceptance decisions",
      "Test data interpretation",
      "Variability & root-cause analysis",
      "Corrective action planning",
      "Product quality risk assessment",
      "Technical reporting",
    ],
  },
  {
    title: "Quality Assurance (QA/QC) & WHS",
    items: [
      "Inspection & Test Plans (ITPs)",
      "Test execution (concrete/asphalt/aggregates)",
      "Workmanship & tolerance checks",
      "QA documentation & test registers",
      "NCR management",
      "SWMS implementation",
      "Toolbox talks",
      "Site safety inspections",
      "Hazard identification & risk assessment",
    ],
  },
  {
    title: "Civil Site Engineering & Project Support",
    items: [
      "Roads",
      "Pavements",
      "Drainage",
      "Earthworks",
      "Concrete structures",
      "Site coordination",
      "Set-out support",
      "Level checks",
      "As-builts",
      "Drawing & specification interpretation",
      "Subcontractor/labour/plant coordination",
      "BOQs & quantity take-offs",
      "Progress tracking",
      "Cost support",
      "Procurement & material scheduling",
      "Lookahead planning",
    ],
  },
  {
    title: "Engineering Software",
    items: [
      "AutoCAD",
      "Civil 3D",
      "Revit",
      "SketchUp",
      "STAAD Pro",
      "ETABS",
      "SAP2000",
      "PLAXIS 2D/3D",
      "ArcGIS",
      "Primavera P6",
      "MS Project",
      "MS Excel",
      "MS Office",
    ],
  },
  {
    title: "Laboratory & Field Equipment",
    items: [
      "Total Station",
      "Theodolite",
      "Auto/Digital Level",
      "CTM",
      "UTM",
      "Marshall Stability apparatus",
      "Bitumen penetrometer",
      "AMBT",
      "XRD",
      "SEM",
      "Concrete mixers",
      "Vibrators",
      "Compactors",
    ],
  },
];

const standards = {
  Australia: [
    "AS 3600",
    "AS 5100",
    "AS 1170",
    "AS 1012",
    "AS 1141",
    "AS 2758",
    "AS 1379",
    "AS 3972",
    "Austroads Guide to Pavement Technology",
    "MRWA Spec 501/502/504",
  ],
  USA: [
    "ACI 318",
    "ACI 224",
    "ACI 201.2R",
    "ASTM C33",
    "ASTM C39",
    "ASTM C150/C595",
    "ASTM D6927",
    "ASTM C31",
    "ASTM C1585",
    "ASTM C1260",
    "ASTM C1567",
    "ASTM C1778",
    "AASHTO T 283",
    "AASHTO T 303",
    "AASHTO Pavement Design Guide",
  ],
  India: [
    "IS 456:2000",
    "IS 383:2016",
    "IS 2386",
    "IS 516:2018",
    "IS 10262:2019",
    "IS 1199:2018",
    "IS 1343:2012",
    "IS 4926:2017",
    "IS 9103:2020",
    "IRC 37:2018",
    "IRC 58:2015",
    "IRC 112:2011",
    "MoRTH (5th Revision)",
  ],
};

function GroupCard({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <div className="hidden rounded-2xl bg-white p-5 shadow-card md:block">
        <h3 className="mb-4 text-base font-semibold text-primary">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <details className="rounded-2xl bg-white p-5 shadow-card md:hidden">
        <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-primary">
          {title}
          <ChevronRight className="h-4 w-4" />
        </summary>
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </details>
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          title="Skills"
          subtitle="Technical capabilities, tools, and standards"
          icon={Wrench}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 lg:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <GroupCard title={group.title} items={group.items} />
            </motion.div>
          ))}

          <motion.div variants={fadeInUp} className="rounded-2xl bg-white p-5 shadow-card lg:col-span-2">
            <h3 className="mb-4 text-base font-semibold text-primary">
              Specifications & Standards Knowledge
            </h3>
            {Object.entries(standards).map(([region, values]) => (
              <div key={region} className="mb-4 last:mb-0">
                <p className="mb-2 text-sm font-semibold text-text-primary">{region}</p>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-text-primary"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
