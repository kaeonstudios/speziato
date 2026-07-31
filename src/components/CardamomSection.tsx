"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CardamomSection() {
  return (
    <section
      id="cardamom"
      className="relative min-h-screen bg-obsidian text-cream flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle green ambient lighting in the background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-forest/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Column A: Stationary Visual (Left) */}
        <div className="relative flex items-center justify-center w-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px]">
          <div className="relative md:absolute inset-0 flex flex-col md:flex-row items-center justify-between w-full h-full">
            
            {/* Empty space on the Left for the floating Traveling Package */}
            <div className="hidden md:block w-1/2 h-full pointer-events-none" />

            {/* Stationary local cardamom image with scale/fade entrance reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1.0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-1/2 flex items-center justify-center md:justify-end z-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/Cardamom.webp"
                alt="Speziato Premium Green Cardamom Pod"
                className="w-40 sm:w-52 md:w-60 h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Column B: Content (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:max-w-xl z-20"
        >
          <div className="flex items-center space-x-2 text-gold-accent font-semibold tracking-widest text-xs uppercase">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span>Exquisite Sweetness & Spice</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-cream leading-[1.05]">
            Green <br />
            <span className="font-cormorant italic text-gold-accent font-normal">
              Cardamom
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cream/80 leading-relaxed font-light font-sans">
            Carefully selected for aroma and flavour, delivering sweetness and complexity in every pod.
          </p>

          <p className="text-sm text-cream/55 leading-relaxed font-light font-sans">
            Our green cardamom pods are hand-picked at the optimal moisture level, 
            locking in a sweet, floral bouquet of eucalyptus and citrus spice. 
            Widely considered the queen of spices, it adds a layered, refreshing complexity.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
