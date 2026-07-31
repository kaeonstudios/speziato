"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function CollectionSection() {
  const collection = [
    {
      name: "Tellicherry Pepper",
      altitude: "1200m",
      aroma: "Citrusy, Sharp, Piney",
      intensity: "Very Bold",
    },
    {
      name: "Green Cardamom",
      altitude: "1500m",
      aroma: "Eucalyptus, Floral, Sweet",
      intensity: "Delicate & Complex",
    },
    {
      name: "Clove Buds",
      altitude: "900m",
      aroma: "Warm, Woody, Penetrating",
      intensity: "Intense Heat",
    },
    {
      name: "High-Grade Nutmeg",
      altitude: "1000m",
      aroma: "Sweet, Nutty, Earthy",
      intensity: "Mild Warmth",
    },
    {
      name: "Ceylon Cinnamon",
      altitude: "800m",
      aroma: "Sweet, Spicy, Delicate",
      intensity: "Sweet Spice",
    },
    {
      name: "Star Anise",
      altitude: "1100m",
      aroma: "Licorice, Anise, Sweet",
      intensity: "Aromatic & Sweet",
    },
  ];

  return (
    <section
      id="collection"
      className="relative min-h-screen bg-cream text-obsidian flex items-center justify-start py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-forest/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content & Interactive Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-20 w-full"
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-forest font-semibold tracking-widest text-xs uppercase">
              <Leaf className="w-4 h-4 text-forest" />
              <span>Gourmet Spices Portfolio</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-obsidian leading-[1.1]">
              The Speziato <br />
              <span className="font-cormorant italic text-forest font-normal">
                Heritage Collection
              </span>
            </h2>
            <p className="text-obsidian/75 font-light font-sans max-w-lg text-sm sm:text-base">
              A curated range of export-grade spices harvested from small family orchards 
              across Southern India. Discover our culinary selection.
            </p>
          </div>

          {/* Interactive Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {collection.map((spice, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(27, 67, 50, 0.4)" }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-obsidian/[0.02] border border-obsidian/[0.05] hover:bg-obsidian/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="font-cormorant text-xl font-bold text-obsidian border-b border-obsidian/5 pb-2">
                    {spice.name}
                  </h3>
                  
                  <div className="space-y-1 text-[11px] font-sans text-obsidian/60">
                    <p className="flex justify-between">
                      <span className="font-semibold text-obsidian/40 uppercase tracking-widest">Altitude:</span>
                      <span>{spice.altitude}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold text-obsidian/40 uppercase tracking-widest">Aroma:</span>
                      <span className="italic">{spice.aroma}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold text-obsidian/40 uppercase tracking-widest">Intensity:</span>
                      <span className="font-medium text-forest">{spice.intensity}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side placeholder space for the Traveling Package */}
        <div className="hidden md:block w-full h-[400px] pointer-events-none" />
      </div>
    </section>
  );
}
