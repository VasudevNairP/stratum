"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ShieldCheck, Terminal } from "lucide-react";

export default function EmailAcquisition() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-basalt text-white py-12 sm:py-20 lg:py-24 border-b border-hairline-dark relative overflow-hidden">
      {/* Precision grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(to right, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6 sm:space-y-8">
        {/* Terminal Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1A] border border-stone-800 text-stone-400 font-mono-spec text-[11px] sm:text-xs">
          <Terminal className="w-3.5 h-3.5 text-safety-orange" />
          <span>EXCLUSIVE ACCESS · UPCOMING DROP 05</span>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase font-sans">
            Receive Sustainable Drop Coordinates 15 Minutes Before Public Release.
          </h2>
          <p className="text-stone-400 text-xs sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Zero marketing hyperbole. Only cryptographic release timestamps, zero-waste batch allocations, and 15-minute priority inventory reservation keys.
          </p>
        </div>

        {/* Form Container */}
        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#1C1C1A] border border-stone-800 max-w-md mx-auto animate-in zoom-in-95 duration-200">
            <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <span className="font-mono-spec text-xs font-bold text-emerald-400 uppercase tracking-widest block">
              COORDINATES CONFIRMED
            </span>
            <p className="text-xs text-stone-400 mt-1 font-sans">
              Encrypted handshake dispatched to <span className="text-white font-mono-spec">{email}</span>. Edition 05 priority key active.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#1C1C1A] p-1.5 rounded-2xl sm:rounded-full border border-stone-800 focus-within:border-stone-500 transition-colors shadow-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="architect@stratum.design"
                className="w-full sm:flex-1 px-4 py-3 bg-transparent text-white placeholder:text-stone-500 font-mono-spec text-xs focus:outline-hidden"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-safety-orange hover:bg-orange-600 text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 active:scale-98"
              >
                <span>Authorize Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 text-[10px] font-mono-spec text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-stone-400" /> End-to-End Encrypted
              </span>
              <span>•</span>
              <span>Single-click unsubscribe anytime</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
