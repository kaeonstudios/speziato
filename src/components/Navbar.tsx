"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Pepper", href: "#pepper" },
    { name: "Cardamom", href: "#cardamom" },
    { name: "Quality", href: "#quality" },
    { name: "Collection", href: "#collection" },
    { name: "Contact", href: "#footer" },
  ];

  const handleNavLinkClick = (href: string) => {
    const targetId = href.replace("#", "");
    let targetState = "hidden";
    
    if (targetId === "pepper" || targetId === "cardamom" || targetId === "story") targetState = "hidden";
    else if (targetId === "quality") targetState = "benchmarks";
    else if (targetId === "why-speziato") targetState = "legacy";
    else if (targetId === "collection") targetState = "collection";
    else if (targetId === "final-cta") targetState = "shopping-final";
    else if (targetId === "footer") targetState = "faq-footer";

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("nav-click", {
          detail: { targetState, targetId },
        })
      );
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian/80 backdrop-blur-md border-b border-gold-accent/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavLinkClick("#story")}
            className="font-cormorant text-2xl md:text-3xl font-bold tracking-[0.2em] text-gold-accent hover:text-gold-warm transition-colors"
          >
            SPEZIATO
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className="text-xs font-semibold tracking-widest uppercase text-cream/70 hover:text-gold-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#final-cta"
              onClick={() => handleNavLinkClick("#final-cta")}
              className="flex items-center space-x-2 bg-gradient-to-r from-gold-accent to-gold-warm text-obsidian px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream hover:text-gold-accent transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-lg border-b border-gold-accent/10 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavLinkClick(link.href);
              }}
              className="text-xl font-cormorant font-medium tracking-widest uppercase text-cream hover:text-gold-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#final-cta"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleNavLinkClick("#final-cta");
            }}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-accent to-gold-warm text-obsidian px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform duration-300 w-full max-w-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Now</span>
          </a>
        </div>
      </div>
    </>
  );
}
