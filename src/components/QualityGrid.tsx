"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Heart, PackageCheck, ThermometerSun, Leaf } from "lucide-react";

export default function QualityGrid() {
  const cards = [
    {
      icon: <Leaf className="text-forest w-5 h-5" />,
      title: "Farm Sourced",
      desc: "Acquired straight from single-origin partner plantations in high-altitude slopes of Kerala.",
      size: "col-span-1",
    },
    {
      icon: <Award className="text-forest w-5 h-5" />,
      title: "Hand Selected",
      desc: "Each pod and pepper berry is selected by hand, ensuring density and size uniformity.",
      size: "col-span-1",
    },
    {
      icon: <ThermometerSun className="text-forest w-5 h-5" />,
      title: "Naturally Processed",
      desc: "Sun-dried natural curing. No chemical washing, color enhancements, or sulfur treating.",
      size: "col-span-1 sm:col-span-2",
    },
    {
      icon: <PackageCheck className="text-forest w-5 h-5" />,
      title: "Premium Packaging",
      desc: "Custom embossed tins featuring UV barrier filters and airtight oxygen isolation.",
      size: "col-span-1",
    },
    {
      icon: <ShieldCheck className="text-forest w-5 h-5" />,
      title: "Export Quality",
      desc: "Tested for high piperine concentrations and moisture levels before leaves origin.",
      size: "col-span-1",
    },
  ];

  return (
    <section
      id="quality"
      className="relative min-h-screen bg-cream text-obsidian flex items-center justify-start py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-forest/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Bento Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-20"
        >
          <div className="space-y-3">
            <span className="text-forest font-semibold tracking-widest text-xs uppercase">
              Excellence Benchmarks
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-obsidian leading-[1.1]">
              The Benchmarks of <br />
              <span className="font-cormorant italic text-forest font-normal">
                Speziato Quality
              </span>
            </h2>
            <p className="text-obsidian/75 font-light font-sans max-w-lg text-sm sm:text-base">
              Every single spice crop undergoes rigorous screening. Our benchmarks preserve 
              natural volatile essential oils from plantation to package.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`${card.size} p-6 rounded-2xl bg-obsidian/[0.02] border border-obsidian/[0.05] hover:bg-obsidian/[0.04] hover:border-forest/20 transition-all duration-300 group`}
              >
                <div className="mb-4 p-2 bg-forest/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-cormorant text-xl font-bold text-obsidian mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-obsidian/60 leading-relaxed font-light font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side placeholder space for the Traveling Package */}
        <div className="hidden md:block w-full h-[400px] pointer-events-none" />
      </div>
    </section>
  );
}
