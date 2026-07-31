"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CalendarRange, Package, HeartHandshake } from "lucide-react";

export default function WhySpeziato() {
  const pillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-gold-accent" />,
      title: "Direct Sourcing",
      desc: "By removing industrial middlemen, we form direct heritage partnerships with organic farmers in the Western Ghats, securing the crop at its absolute prime.",
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-gold-accent" />,
      title: "Small Batch Quality",
      desc: "We curate and process only limited volumes. This allows us to inspect, smell, and verify every single pod and peppercorn for size consistency and oil concentration.",
    },
    {
      icon: <Package className="w-5 h-5 text-gold-accent" />,
      title: "Premium Packaging",
      desc: "Double-walled tin containment systems isolate the product from temperature changes, air, and UV deterioration, guaranteeing kitchen-fresh fragrance.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-accent" />,
      title: "Quality Assurance",
      desc: "Every crop batch undergoes strict moisture, density, and microbiological tests at origin before receiving export certification approval.",
    },
  ];

  return (
    <section
      id="why-speziato"
      className="relative min-h-screen bg-obsidian text-cream flex items-center justify-end py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side placeholder space for the Traveling Package */}
        <div className="hidden md:block w-full h-[400px] pointer-events-none" />

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-20 w-full"
        >
          <div className="space-y-3">
            <span className="text-gold-accent font-semibold tracking-widest text-xs uppercase">
              The Speziato Legacy
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-cream leading-[1.1]">
              Why the World <br />
              <span className="font-cormorant italic text-gold-accent font-normal">
                Chooses Speziato
              </span>
            </h2>
            <p className="text-cream/60 font-light font-sans max-w-lg text-sm sm:text-base">
              We build bridges between ancient agricultural mastery and the modern gourmet kitchen. 
              Here is how we preserve culinary perfection.
            </p>
          </div>

          {/* Pillars List */}
          <div className="space-y-6 max-w-xl">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-cream/[0.02] border border-cream/[0.04] hover:bg-cream/[0.04] hover:border-gold-accent/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 p-2.5 bg-gold-accent/10 rounded-xl h-fit group-hover:scale-115 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-cormorant text-lg font-bold text-cream">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-cream/50 leading-relaxed font-light font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
