"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative min-h-screen bg-obsidian text-cream flex flex-col items-center justify-center py-24 px-6 md:px-12 text-center overflow-hidden"
    >
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0)_20%,#0A0A0A_90%)] pointer-events-none z-10" />

      {/* Luxury radial gold lighting spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-gradient-to-r from-gold-accent/15 to-gold-warm/5 blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12 z-20">
        
        {/* Layout placeholder space for the Traveling Package */}
        <div id="package-placeholder" className="w-[300px] h-[35vh] md:h-[48vh] flex items-center justify-center pointer-events-none" />

        {/* Content & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="space-y-6 max-w-2xl"
        >
          <h2 className="font-cormorant text-4xl sm:text-6xl font-bold tracking-tight text-cream leading-[1.1] uppercase">
            SHOP OUR COLLECTION
          </h2>

          <p className="text-sm sm:text-base text-cream/70 font-light font-sans max-w-lg mx-auto leading-relaxed">
            Premium spices sourced from Kerala's finest plantations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-accent to-gold-warm text-obsidian px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-[0_4px_30px_rgba(212,175,55,0.35)]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Now</span>
            </a>
            
            <a
              href="#collection"
              className="flex items-center justify-center space-x-2 border border-cream/25 hover:border-gold-accent/50 text-cream px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-cream/[0.03] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-gold-accent" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
