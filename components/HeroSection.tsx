"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS, HERO_HOTSPOTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ArrowRight, Layers, Activity, Sparkles, Check, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const { setQuickViewProduct, addToCart } = useCart();
  const heroProduct = PRODUCTS[0];
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>(9.5);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleQuickHeroAdd = () => {
    addToCart(heroProduct, heroProduct.colorways[0], selectedSize, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <section className="relative w-full pt-4 sm:pt-10 pb-12 lg:pb-20 overflow-hidden border-b border-hairline">
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#121212 1px, transparent 1px), linear-gradient(to right, #121212 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Floating Badge */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-hairline bg-white/90 shadow-xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-safety-orange animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono-spec font-semibold tracking-wider uppercase text-basalt">
              EDITION 04 · LIMITED RESTOCK
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono-spec text-emerald-700 font-semibold bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200">
            ✓ 94% RECYCLED
          </span>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              <span className="font-mono-spec text-[11px] sm:text-xs uppercase tracking-widest text-safety-orange font-bold">
                THE ALL-DAY PERFORMANCE SNEAKER
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-basalt leading-[1.08] sm:leading-[1.05] uppercase font-sans">
                Feels Like Nothing Else. Built For All-Day Motion.
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-graphite leading-relaxed max-w-xl font-sans">
              Featherlight, cloud-cushioned, and spun from ocean plastics. The daily runner that keeps your feet energized through 15,000 steps of hard pavement.
            </p>

            {/* Benefit Highlights Micro-Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-hairline max-w-lg">
              <div>
                <span className="block text-[10px] sm:text-[11px] font-mono-spec text-stone-400 uppercase">Weight</span>
                <span className="text-xs sm:text-base font-mono-spec font-bold text-basalt">215g Light</span>
              </div>
              <div>
                <span className="block text-[10px] sm:text-[11px] font-mono-spec text-stone-400 uppercase">Cushion</span>
                <span className="text-xs sm:text-base font-mono-spec font-bold text-safety-orange">Cloud Bio-Foam</span>
              </div>
              <div>
                <span className="block text-[10px] sm:text-[11px] font-mono-spec text-stone-400 uppercase">Comfort</span>
                <span className="text-xs sm:text-base font-mono-spec font-bold text-basalt">Zero Break-In</span>
              </div>
            </div>

            {/* Dual CTAs & Responsive Size Selection */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-4">
                <button
                  onClick={handleQuickHeroAdd}
                  className="w-full xs:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-basalt hover:bg-stone-800 text-white font-mono-spec text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center text-center gap-2 transition-all shadow-md active:scale-98 group"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>BAG RESERVED</span>
                    </>
                  ) : (
                    <>
                      <span>Get The Drop — $220</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <button
                  onClick={() => setQuickViewProduct(heroProduct)}
                  className="w-full xs:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border border-hairline bg-white hover:bg-stone-50 text-basalt font-mono-spec text-xs sm:text-sm font-medium uppercase tracking-wider transition-all flex items-center justify-center text-center gap-2 shadow-xs"
                >
                  <Layers className="w-4 h-4 text-graphite" />
                  <span>Inspect Materials</span>
                </button>
              </div>

              {/* Inline size selector helper */}
              <div className="space-y-2 pt-1 text-xs font-mono-spec text-graphite">
                <div className="flex items-center justify-between">
                  <span>Select Size (US Men):</span>
                  <span className="text-stone-400 text-[11px]">• Free Shipping & Returns</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[8.5, 9.0, 9.5, 10.0, 10.5, 11.0].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-lg text-xs border transition-all flex items-center justify-center text-center ${
                        selectedSize === sz
                          ? "bg-basalt text-white border-basalt font-bold shadow-2xs"
                          : "bg-white border-hairline text-stone-600 hover:border-stone-400"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card with Interactive Hotspots */}
          <div className="lg:col-span-6">
            <div className="relative w-full bg-white rounded-2xl sm:rounded-3xl border border-hairline p-4 sm:p-8 shadow-xl group">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between border-b border-hairline pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono-spec text-xs font-bold text-basalt">
                    STRATA-01 · SIGNATURE RUNNER
                  </span>
                  <span className="font-mono-spec text-[10px] px-2 py-0.5 rounded bg-safety-orange/10 text-safety-orange font-bold border border-safety-orange/20">
                    SELLING FAST
                  </span>
                </div>
                <span className="font-mono-spec text-xs text-stone-500 flex items-center gap-1">
                  HOVER PINS TO INSPECT
                </span>
              </div>

              {/* Shoe Image Container with Hotspot Overlays */}
              <div
                className="relative aspect-4/3 sm:aspect-16/10 w-full rounded-xl bg-[#FAF9F8] border border-hairline flex items-center justify-center"
                onMouseLeave={() => setActiveHotspot(null)}
              >
                {/* Clipped image wrapper so image zoom stays contained within rounded corners */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <Image
                    src={heroProduct.primaryImage}
                    alt="STRATA-01 Architectural Performance Footwear"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 640px) 94vw, (max-width: 1024px) 50vw, 600px"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Hotspot Markers */}
                {HERO_HOTSPOTS.map((spot) => {
                  const isActive = activeHotspot === spot.id;
                  const isLeft = spot.x < 35;
                  const isRight = spot.x > 65;
                  const isBottom = spot.y > 50;

                  return (
                    <div
                      key={spot.id}
                      className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer touch-manipulation"
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      onMouseEnter={() => setActiveHotspot(spot.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                    >
                      {/* Radar pulse ring */}
                      <span
                        className="absolute -inset-2 rounded-full opacity-75 animate-radar pointer-events-none"
                        style={{ backgroundColor: spot.color }}
                      />

                      {/* Central pin button */}
                      <button
                        type="button"
                        className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 border-2 shadow-lg cursor-pointer ${
                          isActive
                            ? "scale-125 border-white bg-basalt text-white ring-2 ring-safety-orange"
                            : "scale-100 border-white bg-white text-basalt hover:scale-110"
                        }`}
                        aria-label={`Inspect ${spot.title}`}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: spot.color }}
                        />
                      </button>

                      {/* Tooltip Overlay - Foreground & Clamped for Mobile */}
                      {isActive && (
                        <div
                          className="absolute z-50 w-52 xs:w-56 sm:w-64 max-w-[calc(100vw-3rem)] bg-basalt text-white p-3 sm:p-3.5 rounded-xl shadow-2xl border border-stone-700 backdrop-blur-md animate-in fade-in zoom-in-95 duration-150 pointer-events-auto select-none"
                          style={{
                            left: isLeft ? "0px" : isRight ? "auto" : "50%",
                            right: isRight ? "0px" : "auto",
                            bottom: isBottom ? "calc(100% + 10px)" : "auto",
                            top: isBottom ? "auto" : "calc(100% + 10px)",
                            transform: isLeft || isRight ? "none" : "translateX(-50%)",
                          }}
                        >
                          <div className="flex items-center justify-between mb-1.5 gap-2">
                            <span className="font-semibold text-xs text-white tracking-tight font-sans truncate">
                              {spot.title}
                            </span>
                            <span
                              className="text-[9px] font-mono-spec font-bold px-1.5 py-0.5 rounded shrink-0 uppercase"
                              style={{
                                backgroundColor: spot.color === "#FF4F00" ? "#FF4F00" : "#1B4DFF",
                                color: "#FFFFFF",
                              }}
                            >
                              TECH SPEC
                            </span>
                          </div>
                          <p className="text-[11px] font-mono-spec text-stone-300 mb-1.5">
                            {spot.spec}
                          </p>
                          <p className="text-xs text-stone-300 leading-snug font-sans">
                            {spot.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card Ribbon */}
              <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-xs font-mono-spec text-graphite">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-basalt font-medium">★ 4.9/5 Rating (840+ Walkers & Athletes)</span>
                </div>
                <button
                  onClick={() => setQuickViewProduct(heroProduct)}
                  className="hover:text-basalt flex items-center gap-1 font-semibold text-basalt"
                >
                  <span>Explore Shoe Craft</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
