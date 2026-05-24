"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const toolsData = [
  { name: "Excel", hours: 950 },
  { name: "Word", hours: 950 },
  { name: "PowerPoint", hours: 900 },
  { name: "AutoCAD", hours: 800 },
  { name: "Photoshop", hours: 280 },
  { name: "Lightroom", hours: 250 },
  { name: "Python", hours: 200 },
  { name: "Illustrator", hours: 200 },
  { name: "STAAD Pro", hours: 150 },
  { name: "E-TABs", hours: 150 },
  { name: "3Ds MAX", hours: 100 },
  { name: "MATLAB", hours: 80 },
];

const codesUsed = [
  {
    title: "Bureau of Indian Standards",
    codes: "IS-1201–1220, IS-456-2000, IS-800-2007",
  },
  {
    title: "Indian Roads Congress",
    codes: "IRC-37-2001, IRC-110-2005, IRC-84-2014",
  },
  {
    title: "ASTM",
    codes: "D4&5, D113, C128, C136, C39, D6927",
  },
  {
    title: "Schedule Rates",
    codes: "Maharashtra SSR 2021-22, DSR 2021-22",
  },
];

export default function Toolbox() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          title="Toolbox"
          subtitle="Software proficiency & engineering codes"
          icon={Wrench}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="h-[420px] w-full rounded-2xl bg-background p-4 shadow-card sm:p-6"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={toolsData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            >
              <XAxis type="number" tick={{ fill: "#4A4A6A", fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                width={75}
                tick={{ fill: "#1A1A2E", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #E8F4F4",
                  background: "#fff",
                }}
                formatter={(value: number) => [`${value} hrs`, "Hours"]}
              />
              <Bar dataKey="hours" radius={[0, 6, 6, 0]} barSize={18}>
                {toolsData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#2D7D7D" : "#C8A96E"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="mb-6 text-lg font-semibold text-text-primary">
            Codes Used
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {codesUsed.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-accent bg-accent/30 p-5"
              >
                <h4 className="text-sm font-semibold text-primary">
                  {group.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {group.codes}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
