"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import TravelingPackage from "@/components/TravelingPackage";
import PepperSection from "@/components/PepperSection";
import CardamomSection from "@/components/CardamomSection";
import QualityGrid from "@/components/QualityGrid";
import WhySpeziato from "@/components/WhySpeziato";
import CollectionSection from "@/components/CollectionSection";
import AeoFaq from "@/components/AeoFaq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* Luxury Navigation Bar */}
      <Navbar />

      {/* Phase 1: High DPI Canvas Scrollytelling Sequence (1800vh scroll space) */}
      <HeroCanvas />

      {/* Phase 2: Traveling Package Handoff (fades in and glides between sections) */}
      <TravelingPackage contentRef={contentRef} />

      {/* Narrative sections that coordinate with TravelingPackage coordinates */}
      <div ref={contentRef} className="relative z-20">
        {/* Section 1: The Pepper Story (Cream, content Left, package Right) */}
        <PepperSection />

        {/* Section 2: The Cardamom Story (Dark, content Right, package Left) */}
        <CardamomSection />

        {/* Section 3: Quality Standards Bento Grid (Cream, bento Left, package Right) */}
        <QualityGrid />

        {/* Section 4: Why Speziato Pillars (Dark, content Right, package Left) */}
        <WhySpeziato />

        {/* Section 5: Product Collection Catalog (Cream, grid Left, package Right) */}
        <CollectionSection />

        {/* Section 6: Shopping Section Showcase (Final CTA!) */}
        <FinalCta />
      </div>

      {/* FAQ Accordion Section (AEO/SEO optimized) */}
      <AeoFaq />

      {/* Minimal Luxury Footer */}
      <Footer />
    </>
  );
}



