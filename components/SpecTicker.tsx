"use client";

import React from "react";

const SPECS = [
  "★ 4.9/5 RATED COMFORT",
  "ALL-DAY CLOUD BOUNCE",
  "ZERO BREAK-IN PERIOD",
  "SPUN FROM OCEAN PLASTICS",
  "FEATHERLIGHT 215G",
  "BUILT FOR 15,000 DAILY STEPS",
  "30-DAY WALKING TRIAL",
  "COMPLIMENTARY DISPATCH OVER $250",
];

export default function SpecTicker() {
  return (
    <div className="w-full bg-[#EBEBE8] border-b border-hairline overflow-hidden py-3 select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...SPECS, ...SPECS].map((spec, i) => (
          <div key={i} className="flex items-center space-x-6 mx-4">
            <span className="text-xs font-mono-spec tracking-wider text-basalt font-medium">
              {spec}
            </span>
            <span className="text-stone-400 font-mono-spec text-xs">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}
