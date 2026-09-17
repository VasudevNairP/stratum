"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS, EXPLODED_STACK_LAYERS, ProductColorway } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Check, ArrowRight, ShieldCheck, Cpu, Sliders, Layers, ChevronRight, Eye } from "lucide-react";

export default function BentoGrid() {
  const { addToCart, formatPrice, setQuickViewProduct } = useCart();
  const product = PRODUCTS[0]; // STRATA-01

  // Card A state
  const [selectedSize, setSelectedSize] = useState<number>(9.5);
  const [addedCardA, setAddedCardA] = useState(false);

  // Card B state (Exploded stack)
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(1); // default Carbon FlyPlate

  // Card C state (Colorway & View Angles)
  const [selectedColorway, setSelectedColorway] = useState<ProductColorway>(product.colorways[0]);
  const [activeAngle, setActiveAngle] = useState<"lateral" | "topDown" | "heel" | "onFoot">("lateral");

  const handleCardAAdd = () => {
    addToCart(product, selectedColorway, selectedSize, 1);
    setAddedCardA(true);
    setTimeout(() => setAddedCardA(false), 2200);
  };

  const activeLayer = EXPLODED_STACK_LAYERS[activeLayerIndex];

  return (
    <section id="bento-engineering" className="w-full py-12 sm:py-20 lg:py-24 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-6 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-safety-orange rounded-full" />
              <span className="font-mono-spec text-[11px] sm:text-xs uppercase tracking-widest text-safety-orange font-bold">
                ENGINEERED ARCHITECTURE · EDITION 04
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-basalt uppercase font-sans">
              Sustainable Precision In Motion.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-graphite font-mono-spec max-w-md">
            Biomechanical test benches at Kyoto & Zurich laboratories. Real-time circular telemetry, exploded sustainable stack geometry, and interactive sizing.
          </p>
        </div>

        {/* Glean-Style Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* ========================================================================= */}
          {/* CARD A: Large Product Focus with Interactive Size Grid (Span 7 cols)     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-hairline p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:border-stone-400 transition-colors">
            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono-spec text-xs font-bold text-basalt uppercase">
                    THE SIGNATURE RUNNER · EDITION 01
                  </span>
                  <span className="font-mono-spec text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-hairline">
                    SKU: {product.specs.sku}
                  </span>
                </div>
                <span className="font-mono-spec text-xs font-bold text-safety-orange">
                  SUSTAINABLE RESTOCK
                </span>
              </div>

              {/* Product Headline & Price */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-basalt">
                    {product.name}
                  </h3>
                  <p className="text-xs text-graphite font-mono-spec mt-0.5">
                    {product.subname} — {selectedColorway.name}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono-spec text-basalt">
                    {formatPrice(product.price)}
                  </span>
                  <span className="block text-[11px] font-mono-spec text-stone-400">
                    TAX INCLUDED · COMPLIMENTARY DISPATCH
                  </span>
                </div>
              </div>

              {/* Large Image Showcase */}
              <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-[#FAF9F8] border border-hairline mb-6 group">
                <Image
                  src={selectedColorway.images[activeAngle] || product.primaryImage}
                  alt={product.name}
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-hairline text-[11px] font-mono-spec text-basalt">
                  RECYCLED: 94.2% · DROP: 4.0mm
                </div>
              </div>

              {/* Interactive Size Grid (US 7 to 13) */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs font-mono-spec">
                  <span className="font-medium text-basalt uppercase">
                    Select Precision Fit (US Men):
                  </span>
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="text-stone-500 hover:text-basalt underline underline-offset-2"
                  >
                    Fit Calibration Chart
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.sizes.map((sz) => {
                    const isSelected = selectedSize === sz.size;
                    const isOutOfStock = sz.stock === "out_of_stock";
                    const isLow = sz.stock === "low";

                    return (
                      <button
                        key={sz.size}
                        disabled={isOutOfStock}
                        onClick={() => setSelectedSize(sz.size)}
                        className={`relative py-2.5 px-2 rounded-xl text-xs font-mono-spec flex flex-col items-center justify-center transition-all border ${
                          isOutOfStock
                            ? "bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed line-through"
                            : isSelected
                            ? "bg-basalt text-white border-basalt shadow-xs font-bold scale-102"
                            : "bg-white text-stone-800 border-hairline hover:border-stone-400 hover:bg-stone-50"
                        }`}
                      >
                        <span>US {sz.size}</span>
                        {isLow && !isSelected && (
                          <span className="text-[9px] text-safety-orange font-bold uppercase tracking-tighter">
                            Low
                          </span>
                        )}
                        {isSelected && (
                          <span className="text-[9px] text-emerald-300 font-bold uppercase tracking-tighter">
                            Ready
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Inline Action Row */}
            <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleCardAAdd}
                className="w-full sm:flex-1 py-4 rounded-full bg-basalt hover:bg-stone-800 text-white font-mono-spec text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                {addedCardA ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>ADDED TO BAG (US {selectedSize})</span>
                  </>
                ) : (
                  <>
                    <span>Add To Bag — US {selectedSize}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                onClick={() => setQuickViewProduct(product)}
                className="w-full sm:w-auto px-5 py-4 rounded-full border border-hairline hover:bg-stone-100 text-basalt font-mono-spec text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <Eye className="w-4 h-4 text-graphite" />
                <span>Quick View</span>
              </button>
            </div>
          </div>

          {/* Right Column Bento Stack: Cards B, C, D (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* ========================================================================= */}
            {/* CARD B: Midsole Stack Exploded View & Macro Detail                       */}
            {/* ========================================================================= */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-hairline p-6 shadow-xs hover:border-stone-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-spec text-xs font-bold text-basalt uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-safety-orange" />
                  ANATOMY OF ALL-DAY COMFORT
                </span>
                <span className="font-mono-spec text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  SUSTAINABLE BUILD
                </span>
              </div>

              {/* Layer Selection Segmented Bar */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-stone-100 rounded-xl mb-4 border border-hairline">
                {EXPLODED_STACK_LAYERS.map((layer, idx) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`py-1.5 text-[11px] font-mono-spec rounded-lg font-medium transition-all flex items-center justify-center text-center ${
                      activeLayerIndex === idx
                        ? "bg-white text-basalt shadow-xs font-bold"
                        : "text-stone-500 hover:text-basalt"
                    }`}
                  >
                    L0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Active Layer Schematic Inspector */}
              <div className="bg-[#FAF9F8] rounded-xl p-4 border border-hairline space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-basalt font-mono-spec">
                      {activeLayer.name}
                    </h4>
                    <span className="text-xs text-safety-orange font-mono-spec font-medium">
                      {activeLayer.material}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono-spec font-bold text-basalt">
                      {activeLayer.weight}
                    </span>
                    <span className="block text-[10px] font-mono-spec text-stone-400">
                      {activeLayer.thickness}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-graphite font-sans leading-relaxed">
                  {activeLayer.function}
                </p>

                {/* Dynamic Macro Material Visual */}
                <div className="relative h-24 w-full rounded-lg overflow-hidden border border-hairline group">
                  <Image
                    src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1000&q=80"
                    alt="Sustainable Shoe Texture Macro Detail"
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 94vw, (max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white font-mono-spec text-[10px]">
                    <span className="font-bold">MACRO SOLE & CUSHION PROFILE</span>
                    <span className="text-stone-300">ZOOM 1:1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* CARD C: Colorway Selector & Angle Swapper                                */}
            {/* ========================================================================= */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-hairline p-6 shadow-xs hover:border-stone-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-spec text-xs font-bold text-basalt uppercase flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-racing-blue" />
                  COLORWAYS & ON-FOOT STYLING
                </span>
                <span className="font-mono-spec text-[10px] text-stone-400">
                  {selectedColorway.code}
                </span>
              </div>

              {/* Angle Swapper Buttons */}
              <div className="flex items-center gap-2 mb-3">
                {(
                  [
                    { key: "lateral", label: "LATERAL" },
                    { key: "topDown", label: "TOP-DOWN" },
                    { key: "heel", label: "HEEL" },
                    { key: "onFoot", label: "ON-FOOT" },
                  ] as const
                ).map((ang) => (
                  <button
                    key={ang.key}
                    onClick={() => setActiveAngle(ang.key)}
                    className={`flex-1 py-1.5 text-[10px] font-mono-spec uppercase rounded-md border transition-all flex items-center justify-center text-center ${
                      activeAngle === ang.key
                        ? "bg-basalt text-white border-basalt font-semibold shadow-xs"
                        : "bg-white text-stone-600 border-hairline hover:border-stone-400"
                    }`}
                  >
                    {ang.label}
                  </button>
                ))}
              </div>

              {/* Colorway Swatches */}
              <div className="flex items-center justify-between pt-2 border-t border-hairline">
                <span className="text-xs font-mono-spec text-graphite">
                  {selectedColorway.name}:
                </span>
                <div className="flex items-center gap-2">
                  {product.colorways.map((cw) => {
                    const isSelected = selectedColorway.id === cw.id;
                    return (
                      <button
                        key={cw.id}
                        onClick={() => setSelectedColorway(cw)}
                        className={`w-6 h-6 rounded-full border-2 transition-transform duration-150 ${
                          isSelected
                            ? "scale-125 border-basalt ring-2 ring-safety-orange ring-offset-1"
                            : "border-hairline hover:scale-110"
                        }`}
                        style={{ backgroundColor: cw.hex }}
                        aria-label={`Select colorway ${cw.name}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* CARD D: Dynamic Visual & Natural Motion (Edge-to-Edge Lifestyle)         */}
            {/* ========================================================================= */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-hairline-dark overflow-hidden min-h-[260px] flex flex-col justify-between p-6 shadow-md group">
              {/* Full-bleed photography background */}
              <Image
                src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80"
                alt="Shoe in natural motion on city street"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover group-hover:scale-104 transition-transform duration-700"
                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 100vw, 40vw"
              />

              {/* Contrast scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/60 to-basalt/30 pointer-events-none" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono-spec text-[10px] uppercase font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
                  IN MOTION · 15,000-STEP DAILY WEAR
                </span>
                <span className="font-mono-spec text-xs text-emerald-400 font-bold">
                  VERIFIED WEAR
                </span>
              </div>

              {/* Center Quote & Benefits */}
              <div className="relative z-10 space-y-3 my-4">
                <blockquote className="text-white font-sans text-lg sm:text-xl font-bold leading-tight tracking-tight">
                  &ldquo;Felt like floating from day one. Walked 8 miles across Manhattan with zero aches.&rdquo;
                </blockquote>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="font-mono-spec text-[10px] text-stone-200 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    ☁️ Cloud Sugarcane Midsole
                  </span>
                  <span className="font-mono-spec text-[10px] text-stone-200 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    🌊 94% Recycled Ocean Knit
                  </span>
                </div>
              </div>

              {/* Bottom Retail Action Ribbon */}
              <div className="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono-spec text-stone-300">
                <span>30-DAY AT-HOME TRIAL</span>
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="text-white font-semibold flex items-center gap-1 hover:text-safety-orange transition-colors"
                >
                  <span>Experience The Fit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
