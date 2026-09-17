"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const { setIsDiagnosticOpen, currency } = useCart();

  return (
    <footer className="w-full bg-[#EBEBE8] border-t border-hairline py-20 sm:py-24 md:py-28 text-basalt">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-12 sm:space-y-16">
        {/* Brand Wordmark & Studio Heritage */}
        <div className="space-y-4 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase font-sans text-basalt hover:opacity-80 transition-opacity"
            >
              STRATUM
            </Link>
            <span className="text-[10px] tracking-widest uppercase font-mono-spec bg-white text-stone-600 px-2.5 py-1 rounded-full border border-hairline shadow-2xs">
              KYOTO · ZURICH · NEW YORK
            </span>
          </div>
          <p className="text-sm text-stone-600 font-sans leading-relaxed">
            Architectural sustainable footwear engineered with sugarcane bio-elastomers, recycled ocean polymers, and anatomical precision.
          </p>
        </div>

        {/* Clean, Breathable Links Row - Strictly 4 Items */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 text-sm sm:text-base font-medium font-sans">
          <Link
            href="/about"
            className="text-stone-700 hover:text-basalt transition-colors px-4 py-2 rounded-full hover:bg-stone-300/40 flex items-center justify-center text-center"
          >
            About Us
          </Link>
          <Link
            href="/privacy"
            className="text-stone-700 hover:text-basalt transition-colors px-4 py-2 rounded-full hover:bg-stone-300/40 flex items-center justify-center text-center"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-stone-700 hover:text-basalt transition-colors px-4 py-2 rounded-full hover:bg-stone-300/40 flex items-center justify-center text-center"
          >
            Terms & Conditions
          </Link>
          <button
            onClick={() => setIsDiagnosticOpen(true)}
            className="text-stone-800 hover:text-safety-orange transition-colors flex items-center justify-center gap-2 px-4 py-2 rounded-full hover:bg-stone-300/40 text-center"
          >
            <Sparkles className="w-4 h-4 text-safety-orange" />
            <span>Find Your Fit</span>
          </button>
        </nav>

        {/* Roomy Bottom Bar */}
        <div className="pt-10 sm:pt-12 border-t border-hairline/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-spec text-stone-500">
          <div>
            © 2026 STRATUM FOOTWEAR GMBH. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span>CURRENCY: {currency}</span>
            <span>•</span>
            <span className="text-emerald-700 font-medium">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
