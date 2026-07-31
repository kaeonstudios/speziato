"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TravelingPackageProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}

type PackageState =
  | "hidden"
  | "benchmarks"
  | "legacy"
  | "collection"
  | "shopping-entry"
  | "shopping-final"
  | "faq-footer";

export default function TravelingPackage({ contentRef }: TravelingPackageProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [activeSection, setActiveSection] = useState<PackageState>("hidden");
  const [isInstant, setIsInstant] = useState(false);
  const [showcaseOffsetY, setShowcaseOffsetY] = useState(0);
  
  // A ref to keep track of navigation lock to prevent scroll event from overriding target state
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position to handle automatic section state detection and offsets
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const startThreshold = vh * 17.65; // Hide during hero sequence (1800vh)
      const currentScroll = window.scrollY;

      // Force hidden before stories end
      if (currentScroll < startThreshold) {
        setActiveSection("hidden");
        setShowPackage(false);
        return;
      }

      setShowPackage(true);

      // Dynamically calculate vertical screen-center offset of the Shopping placeholder
      const placeholder = document.getElementById("package-placeholder");
      if (placeholder) {
        const rect = placeholder.getBoundingClientRect();
        const placeholderCenterY = rect.top + rect.height / 2;
        const screenCenterY = window.innerHeight / 2;
        setShowcaseOffsetY(placeholderCenterY - screenCenterY);
      }

      // If currently navigating via navbar click, ignore scroll-based state updates
      if (isNavigatingRef.current) return;

      const sections = [
        { id: "pepper", state: "hidden" as PackageState },
        { id: "cardamom", state: "hidden" as PackageState },
        { id: "quality", state: "benchmarks" as PackageState },
        { id: "why-speziato", state: "legacy" as PackageState },
        { id: "collection", state: "collection" as PackageState },
        { id: "final-cta", state: "shopping-entry" as PackageState },
        { id: "faq", state: "faq-footer" as PackageState },
      ];

      let currentActive: PackageState = "hidden";
      const midpoint = window.innerHeight * 0.5;

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if this section spans the midpoint of the viewport
          if (rect.top <= midpoint && rect.bottom >= midpoint) {
            currentActive = sections[i].state;

            // Handle shopping showcase trigger inside final-cta
            if (sections[i].id === "final-cta") {
              if (rect.top <= window.innerHeight * 0.05) {
                currentActive = "shopping-final";
              } else {
                currentActive = "shopping-entry";
              }
            }
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to navigation click events to snap the package instantly
  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { targetState } = customEvent.detail;
      
      isNavigatingRef.current = true;
      setIsInstant(true);
      setActiveSection(targetState as PackageState);

      // Keep locked during the duration of the smooth scroll navigation
      const timer = setTimeout(() => {
        isNavigatingRef.current = false;
        setIsInstant(false);
      }, 950);

      return () => clearTimeout(timer);
    };

    window.addEventListener("nav-click", handleNavClick);
    return () => window.removeEventListener("nav-click", handleNavClick);
  }, []);

  // Coordinate positions mapping to active states
  const variants = {
    hidden: {
      x: isMobile ? "0vw" : "22vw",
      y: isMobile ? "-120px" : 0,
      rotate: 0,
      scale: isMobile ? 0.65 : 1,
      opacity: 0,
    },
    benchmarks: {
      x: isMobile ? "0vw" : "22vw",
      y: isMobile ? "-140px" : 0,
      rotate: 0,
      scale: isMobile ? 0.65 : 1,
      opacity: isMobile ? 0 : 1,
    },
    legacy: {
      x: isMobile ? "0vw" : "-22vw",
      y: isMobile ? "-140px" : 0,
      rotate: 0,
      scale: isMobile ? 0.65 : 1,
      opacity: isMobile ? 0 : 1,
    },
    collection: {
      x: isMobile ? "0vw" : "22vw",
      y: isMobile ? "-140px" : 0,
      rotate: 0,
      scale: isMobile ? 0.65 : 1,
      opacity: isMobile ? 0 : 1,
    },
    "shopping-entry": {
      x: isMobile ? "0vw" : "22vw",
      y: isMobile ? "-140px" : 0,
      rotate: 0,
      scale: isMobile ? 0.65 : 1,
      opacity: isMobile ? 0 : 1,
    },
    "shopping-final": {
      x: "0vw",
      y: showcaseOffsetY, // Binds position to the layout placeholder dynamically on scroll
      rotate: 0,
      scale: 1,
      opacity: 1,
    },
    "faq-footer": {
      x: "0vw",
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 0,
    },
  };

  return (
    <div
      className={`fixed inset-0 w-screen h-screen pointer-events-none z-30 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        showPackage && activeSection !== "hidden" ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={activeSection}
          variants={variants}
          transition={
            isInstant
              ? { duration: 0 }
              : { type: "spring", stiffness: 45, damping: 16, mass: 1 }
          }
          className="w-full flex items-center justify-center"
        >
          <motion.img
            src="/image/packet_static.webp"
            alt="Speziato Premium Spices Package"
            className="w-auto h-auto max-h-[35vh] md:max-h-[50vh] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] filter brightness-[1.06]"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
}
