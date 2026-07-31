"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function AeoFaq() {
  const faqs: FAQItem[] = [
    {
      question: "Why is Kerala black pepper famous?",
      answer: "Kerala black pepper, historically known as 'Black Gold', is famous globally due to its intense heat, robust aroma, and high concentration of piperine. Grown in the nutrient-rich volcanic soil of Kerala's Western Ghats, it features unique citrusy and woodsy undertones that are unmatched by pepper from any other region.",
    },
    {
      question: "What makes Speziato premium?",
      answer: "Speziato premium pepper is sourced in small batches from high-altitude, heritage plantations in Kerala. It is handpicked at peak maturity, sun-dried naturally, and packed fresh in vacuum-sealed custom tin packets to preserve the essential oils, aroma, and bold flavor, guaranteeing export-grade quality.",
    },
    {
      question: "How is black pepper processed?",
      answer: "Speziato pepper is harvested by hand, separating the fully ripe green peppercorns from the stems. They are briefly blanched in hot water to clean and trigger the enzymatic browning process, then dried under the sun on hygienic raised beds for several days until they turn deep black and wrinkled, locking in full flavor.",
    },
    {
      question: "What are the health benefits of black pepper?",
      answer: "Black pepper is rich in piperine, a powerful antioxidant that offers digestive support, stimulates nutrient absorption (specifically increasing bioavailability of curcumin by up to 2000%), boosts metabolic function, and has anti-inflammatory properties used in traditional wellness practices.",
    },
    {
      question: "How should black pepper be stored?",
      answer: "To maintain optimal freshness and protect its volatile essential oils, store Speziato black pepper in our airtight packaging in a cool, dark, and dry place. Avoid heat source exposure and direct sunlight, and grind the peppercorns right before culinary use for maximum aroma.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-obsidian text-cream pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-gold-accent/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-20 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gold-accent font-semibold tracking-widest text-xs uppercase">
            <HelpCircle className="w-4 h-4 text-gold-accent" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-cream leading-[1.1]">
            Curated Knowledge & <br />
            <span className="font-cormorant italic text-gold-accent font-normal">
              Essential Details
            </span>
          </h2>
          <p className="text-cream/60 font-light font-sans max-w-lg mx-auto text-xs sm:text-sm">
            Optimized guidance on culinary science, health properties, and shelf-life 
            preservation of premium Tellicherry peppercorns.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-cream/10 bg-cream/[0.02] hover:bg-cream/[0.04] transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="font-cormorant text-xl font-bold text-cream">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-cream/5">
                        <p className="text-sm text-cream/70 leading-relaxed font-sans font-light pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
