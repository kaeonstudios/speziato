"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function PepperSection() {
  return (
    <section
      id="pepper"
      className="relative min-h-screen bg-cream text-obsidian flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Column A: Content (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:max-w-xl z-20"
        >
          <div className="flex items-center space-x-2 text-forest font-semibold tracking-widest text-xs uppercase">
            <Flame className="w-4 h-4 text-forest" />
            <span>Volatile Essential Oils</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-obsidian leading-[1.05]">
            Premium <br />
            <span className="font-cormorant italic text-forest font-normal">
              Black Pepper
            </span>
          </h2>

          <p className="text-base sm:text-lg text-obsidian/85 leading-relaxed font-light font-sans">
            Sourced from Kerala's mist-covered hills, our pepper delivers bold aroma, 
            rich flavour, and unmatched freshness.
          </p>

          <p className="text-sm text-obsidian/60 leading-relaxed font-light font-sans">
            Each pepper berry is allowed to ripen on heritage vines before being carefully 
            harvested by hand. This ensures the optimal development of piperine, the core 
            compound responsible for its characteristic heat and complex, woodsy flavor profile.
          </p>
        </motion.div>

        {/* Column B: Stationary Visual (Right) */}
        <div className="relative flex items-center justify-center w-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px]">
          {/* Subtle placeholder container spacing for the traveling package on desktop.
              The static Pepper image sits beside it. */}
          <div className="relative md:absolute inset-0 flex flex-col md:flex-row items-center justify-between w-full h-full">
            
            {/* Stationary local pepper image with scale/fade entrance reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1.0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-1/2 flex items-center justify-center md:justify-start z-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/Pepper.webp"
                alt="Speziato Premium Black Peppercorn"
                className="w-36 sm:w-48 md:w-56 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            {/* Empty space on the Right for the floating Traveling Package */}
            <div className="hidden md:block w-1/2 h-full pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
