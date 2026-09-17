"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, Product } from "@/data/products";
import { X, ArrowRight, RotateCcw, Check, Sparkles, Footprints, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function FitDiagnosticModal() {
  const { isDiagnosticOpen, setIsDiagnosticOpen, addToCart, formatPrice } = useCart();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [archType, setArchType] = useState<"neutral" | "high" | "flat">("neutral");
  const [terrain, setTerrain] = useState<"road" | "trail" | "intervals" | "recovery">("road");
  const [cushion, setCushion] = useState<"propulsive" | "plush" | "minimal">("propulsive");
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  if (!isDiagnosticOpen) return null;

  const handleComplete = () => {
    let match = PRODUCTS[0]; // default STRATA-01
    if (terrain === "trail") {
      match = PRODUCTS.find((p) => p.id === "terra-02") || PRODUCTS[1];
    } else if (terrain === "intervals") {
      match = PRODUCTS.find((p) => p.id === "aer-03") || PRODUCTS[2];
    } else if (terrain === "recovery") {
      match = PRODUCTS.find((p) => p.id === "nexus-00") || PRODUCTS[3];
    }
    setRecommendedProduct(match);
  };

  const handleReset = () => {
    setStep(1);
    setRecommendedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-basalt/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-hairline overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-hairline bg-[#FAF9F8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Footprints className="w-5 h-5 text-safety-orange" />
            <div>
              <h3 className="font-bold text-base text-basalt tracking-tight">
                BIOMECHANICAL FIT DIAGNOSTIC
              </h3>
              <p className="text-xs text-graphite font-mono-spec">
                PRECISION FIT PROTOCOL · KYOTO & ZURICH
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDiagnosticOpen(false)}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Diagnostic Steps */}
        {!recommendedProduct ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs font-mono-spec text-stone-500 mb-4">
              <span>STEP 0{step} OF 03</span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 w-8 rounded-full transition-all ${
                      s <= step ? "bg-basalt" : "bg-stone-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question 1: Arch Support */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-basalt tracking-tight">
                  01. What is your natural plantar arch structure?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "neutral", title: "Medium / Neutral", desc: "Even pressure distribution under weight." },
                    { id: "high", title: "High / Rigid Arch", desc: "Excess pressure concentrated on heel and balls." },
                    { id: "flat", title: "Low / Flexible Flat", desc: "Pronates inward; requires midfoot stabilizing bed." },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setArchType(option.id as any)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        archType === option.id
                          ? "border-basalt bg-stone-50 ring-2 ring-safety-orange shadow-xs"
                          : "border-hairline hover:border-stone-400 bg-white"
                      }`}
                    >
                      <span className="font-bold text-sm text-basalt font-sans block mb-1">
                        {option.title}
                      </span>
                      <span className="text-xs text-graphite font-sans">
                        {option.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question 2: Terrain & Cadence */}
            {step === 2 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-basalt tracking-tight">
                  02. What is your primary mission terrain & daily use?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "road", title: "All-Day Urban Walking", desc: "Daily city commuting, long pavement walks, and travel." },
                    { id: "trail", title: "Alpine Trail & Outdoor Hikes", desc: "Technical forest paths, loose gravel, scree, and rain." },
                    { id: "intervals", title: "High-Pace Daily Miles", desc: "Fast-tempo walking, brisk commutes, and track laps." },
                    { id: "recovery", title: "Post-Activity Bio-Relief", desc: "Plantar fascial unloading and joint restoration." },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setTerrain(option.id as any)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        terrain === option.id
                          ? "border-basalt bg-stone-50 ring-2 ring-safety-orange shadow-xs"
                          : "border-hairline hover:border-stone-400 bg-white"
                      }`}
                    >
                      <span className="font-bold text-sm text-basalt font-sans block mb-1">
                        {option.title}
                      </span>
                      <span className="text-xs text-graphite font-sans">
                        {option.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question 3: Cushioning Philosophy */}
            {step === 3 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-basalt tracking-tight">
                  03. Cushioning response & comfort preference?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "propulsive", title: "Sugarcane Bio-Foam", desc: "Springy rebound with composite arch support." },
                    { id: "plush", title: "Deep Cushion Stack", desc: "Maximum impact absorption for knee and back relief." },
                    { id: "minimal", title: "Zero-Drop Natural", desc: "Direct ground connection and barefoot alignment." },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setCushion(option.id as any)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        cushion === option.id
                          ? "border-basalt bg-stone-50 ring-2 ring-safety-orange shadow-xs"
                          : "border-hairline hover:border-stone-400 bg-white"
                      }`}
                    >
                      <span className="font-bold text-sm text-basalt font-sans block mb-1">
                        {option.title}
                      </span>
                      <span className="text-xs text-graphite font-sans">
                        {option.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="pt-6 border-t border-hairline flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep((step - 1) as any)}
                  className="text-xs font-mono-spec text-stone-500 hover:text-basalt"
                >
                  ← BACK
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  onClick={() => setStep((step + 1) as any)}
                  className="px-6 py-2.5 rounded-full bg-basalt text-white text-xs font-mono-spec uppercase font-semibold flex items-center gap-1.5"
                >
                  <span>NEXT SPEC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="px-6 py-2.5 rounded-full bg-safety-orange hover:bg-orange-600 text-white text-xs font-mono-spec uppercase font-bold flex items-center gap-1.5 shadow-md"
                >
                  <span>CALCULATE IDEAL LAST</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Recommendation Result View */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-[#FAF9F8] p-6 rounded-2xl border border-hairline flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-36 h-36 bg-white rounded-xl overflow-hidden border border-hairline shrink-0">
                <Image
                  src={recommendedProduct.primaryImage}
                  alt={recommendedProduct.name}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block font-mono-spec text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  98.4% ANATOMICAL MATCH
                </div>
                <h4 className="text-xl font-bold text-basalt tracking-tight">
                  {recommendedProduct.name}
                </h4>
                <p className="text-xs text-graphite font-sans">
                  {recommendedProduct.tagline}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono-spec text-stone-600 justify-center sm:justify-start pt-1">
                  <span>WEIGHT: {recommendedProduct.specs.weight.split(" ")[0]}</span>
                  <span>•</span>
                  <span>DROP: {recommendedProduct.specs.drop}</span>
                  <span>•</span>
                  <span className="font-bold text-basalt">{formatPrice(recommendedProduct.price)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-hairline text-xs font-sans text-graphite leading-relaxed">
              <span className="font-bold text-basalt font-mono-spec block mb-1">
                BIOMECHANICAL PRESCRIPTION:
              </span>
              Based on your {archType} arch and {terrain} requirements, the {recommendedProduct.name} provides optimal torsional stiffness without restricting terminal stance pronation.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => {
                  addToCart(recommendedProduct, recommendedProduct.colorways[0], 9.5, 1);
                  setIsDiagnosticOpen(false);
                }}
                className="w-full sm:flex-1 py-3.5 rounded-full bg-basalt hover:bg-stone-800 text-white font-mono-spec text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Add Prescribed Shoe (US 9.5) — {formatPrice(recommendedProduct.price)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-3.5 rounded-full border border-hairline hover:bg-stone-100 text-stone-600 text-xs font-mono-spec uppercase flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-calibrate</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
