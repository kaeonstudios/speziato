"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      id="footer"
      className="bg-obsidian text-cream pt-12 pb-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <h3 className="font-cormorant text-2xl md:text-3xl font-bold tracking-[0.2em] text-gold-accent">
            SPEZIATO
          </h3>
          <p className="text-xs text-cream/40 leading-relaxed font-sans max-w-sm">
            Speziato curates the absolute finest agricultural products of South India, 
            combining historical farming excellence with high-barrier containment systems 
            to bring culinary luxury into your kitchen.
          </p>
          <div className="flex items-center space-x-4 pt-2 text-cream/50">
            <a
              href="https://instagram.com/speziato"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold-accent transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="mailto:hello@speziato.com"
              aria-label="Email"
              className="hover:text-gold-accent transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-cormorant text-base font-bold text-gold-accent tracking-widest uppercase">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-cream/50 font-sans">
            <li>
              <a href="#" className="hover:text-gold-accent transition-colors">
                Story
              </a>
            </li>
            <li>
              <a href="#origin" className="hover:text-gold-accent transition-colors">
                Origin
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-gold-accent transition-colors">
                Benefits
              </a>
            </li>
            <li>
              <a href="#recipes" className="hover:text-gold-accent transition-colors">
                Recipes
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold-accent transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-cormorant text-base font-bold text-gold-accent tracking-widest uppercase">
            Newsletter
          </h4>
          <p className="text-xs text-cream/45 leading-relaxed font-sans">
            Subscribe to receive exclusive batch updates, recipe guides, and culinary studies.
          </p>
          {subscribed ? (
            <p className="text-xs text-gold-accent font-semibold">
              Thank you for subscribing.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-cream/[0.03] border border-cream/10 rounded-full py-2.5 pl-4 pr-12 text-xs text-cream placeholder-cream/35 focus:outline-none focus:border-gold-accent/40 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-gold-accent to-gold-warm text-obsidian rounded-full p-2 hover:scale-105 transition-transform"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto my-12 h-[1px] bg-cream/5" />

      {/* Sub Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-cream/30 uppercase tracking-widest font-sans font-semibold">
        <p>&copy; {new Date().getFullYear()} Speziato. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.kaeonstudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-accent/80 hover:text-gold-accent transition-colors underline"
          >
            Kaeon
          </a>
        </p>
      </div>
    </footer>
  );
}
