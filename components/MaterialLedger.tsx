"use client";

import React from "react";
import { Leaf, RefreshCw, BarChart2, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function MaterialLedger() {
  return (
    <section id="sustainability-ledger" className="w-full py-12 sm:py-20 lg:py-24 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-safety-orange rounded-full" />
              <span className="font-mono-spec text-[11px] sm:text-xs uppercase tracking-widest text-safety-orange font-bold">
                SUSTAINABLE INNOVATION · CIRCULAR CRAFT
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-basalt uppercase font-sans leading-tight">
              Light On Your Feet. Easy On The Planet.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-graphite font-mono-spec max-w-md">
            We engineered out the petroleum, the blisters, and the waste. What is left is pure, high-rebound everyday comfort.
          </p>
        </div>

        {/* 3-Column Compelling Visual Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Column 1: Ocean Plastic */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-hairline p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-stone-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-spec text-xs font-bold text-basalt uppercase">
                  CRAFT · 01
                </span>
                <span className="p-2 rounded-xl bg-stone-100 text-basalt">
                  <BarChart2 className="w-4 h-4" />
                </span>
              </div>

              <div>
                <span className="font-mono-spec text-3xl sm:text-4xl font-bold text-basalt block">
                  12 <span className="text-lg font-normal text-graphite">BOTTLES</span>
                </span>
                <span className="font-mono-spec text-xs text-safety-orange font-bold uppercase mt-1 block">
                  DIVERTED PER PAIR
                </span>
              </div>

              <h3 className="font-bold text-lg text-basalt tracking-tight">
                From Ocean Waste to Second-Skin Knit
              </h3>

              <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                We intercept marine plastics before they reach the sea, spinning them into a silky, breathable 3D matrix that wraps your foot with zero friction points.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-hairline space-y-2 text-xs font-mono-spec text-stone-600">
              <div className="flex items-center justify-between">
                <span>SEAMLESS WEAVE</span>
                <span className="text-emerald-700 font-bold">Zero Blister Risk</span>
              </div>
              <div className="flex items-center justify-between">
                <span>MATERIAL BASE</span>
                <span className="text-basalt font-medium">100% Ocean rPET</span>
              </div>
              <div className="flex items-center justify-between">
                <span>AIRFLOW INDEX</span>
                <span className="text-basalt font-medium">High Breathability</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sugarcane Bio-Foam */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-hairline p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-stone-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-spec text-xs font-bold text-basalt uppercase">
                  CRAFT · 02
                </span>
                <span className="p-2 rounded-xl bg-stone-100 text-basalt">
                  <Leaf className="w-4 h-4" />
                </span>
              </div>

              <div>
                <span className="font-mono-spec text-3xl sm:text-4xl font-bold text-basalt block">
                  100% <span className="text-lg font-normal text-graphite">PLANT-BASED</span>
                </span>
                <span className="font-mono-spec text-xs text-emerald-700 font-bold uppercase mt-1 block">
                  ZERO PETROLEUM FOAM
                </span>
              </div>

              <h3 className="font-bold text-lg text-basalt tracking-tight">
                Cloud Cushion Powered by Sugarcane
              </h3>

              <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                Conventional sneakers use toxic fossil-fuel foam. We formulate a springy, resilient bio-cushion from sugarcane waste that protects your knees on concrete.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-hairline space-y-2 text-xs font-mono-spec text-stone-600">
              <div className="flex items-center justify-between">
                <span>IMPACT ABSORPTION</span>
                <span className="text-emerald-700 font-bold">Pillowy All-Day Bounce</span>
              </div>
              <div className="flex items-center justify-between">
                <span>DURABILITY LIFETIME</span>
                <span className="text-basalt font-medium">500+ Tested Miles</span>
              </div>
              <div className="flex items-center justify-between">
                <span>CARBON REDUCTION</span>
                <span className="text-basalt font-medium">-42% vs Industry Standard</span>
              </div>
            </div>
          </div>

          {/* Column 3: The 500-Mile Return Guarantee */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-hairline p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-stone-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-spec text-xs font-bold text-basalt uppercase">
                  CRAFT · 03
                </span>
                <span className="p-2 rounded-xl bg-stone-100 text-basalt">
                  <RefreshCw className="w-4 h-4" />
                </span>
              </div>

              <div>
                <span className="font-mono-spec text-3xl sm:text-4xl font-bold text-basalt block">
                  $40 <span className="text-lg font-normal text-graphite">CREDIT</span>
                </span>
                <span className="font-mono-spec text-xs text-racing-blue font-bold uppercase mt-1 block">
                  CLOSED-LOOP CIRCULAR REWARD
                </span>
              </div>

              <h3 className="font-bold text-lg text-basalt tracking-tight">
                Wear Them Out. Send Them Back.
              </h3>

              <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                Once you surpass 500 miles, return your pair using the prepaid satchel in your box. We grind the rubber into public running tracks and give you $40 off your next pair.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-hairline space-y-2 text-xs font-mono-spec text-stone-600">
              <div className="flex items-center justify-between">
                <span>PREPAID RETURN SATCHEL</span>
                <span className="text-emerald-700 font-bold">Included in Every Box</span>
              </div>
              <div className="flex items-center justify-between">
                <span>DOWNSTREAM USE</span>
                <span className="text-basalt font-medium">Community Track Regrind</span>
              </div>
              <div className="flex items-center justify-between">
                <span>NEXT PAIR VOUCHER</span>
                <span className="text-basalt font-bold">$40 Instantly Applied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
