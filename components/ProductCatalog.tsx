"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Eye, Plus, Check, ArrowUpRight } from "lucide-react";

type CategoryFilter = "all" | "road" | "trail" | "recovery";

export default function ProductCatalog() {
  const { setQuickViewProduct, addToCart, formatPrice } = useCart();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const filtered = PRODUCTS.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  const handleQuickAdd = (p: Product) => {
    // Default to first available size
    const availableSize = p.sizes.find((s) => s.stock !== "out_of_stock")?.size || 9.5;
    addToCart(p, p.colorways[0], availableSize, 1);
    setAddedProductId(p.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <section id="category-catalog" className="w-full py-12 sm:py-20 lg:py-24 border-b border-hairline bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Segmented Filter Switchers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-6 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-safety-orange rounded-full" />
              <span className="font-mono-spec text-[11px] sm:text-xs uppercase tracking-widest text-safety-orange font-bold">
                THE 2026 LINEUP · ENGINEERED IN JAPAN
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-basalt uppercase font-sans leading-tight">
              Built For Every Pace & Stride.
            </h2>
          </div>

          {/* Touch-Friendly Horizontally Scrollable Segmented Filter Switcher */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="inline-flex items-center p-1 bg-white rounded-full border border-hairline shadow-xs min-w-max">
              {(
                [
                  { id: "all", label: "All Silhouettes" },
                  { id: "road", label: "Daily Walk & City" },
                  { id: "trail", label: "Trail & Outdoor" },
                  { id: "recovery", label: "Recovery Slides" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-mono-spec uppercase rounded-full transition-all flex items-center justify-center text-center whitespace-nowrap shrink-0 ${
                    activeFilter === tab.id
                      ? "bg-basalt text-white shadow-xs font-bold"
                      : "text-stone-600 hover:text-basalt"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((prod) => {
            const isHovered = hoveredProduct === prod.id;
            const isAdded = addedProductId === prod.id;

            return (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl border border-hairline overflow-hidden flex flex-col justify-between shadow-xs hover:border-stone-400 hover:shadow-md transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(prod.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Card Media */}
                <div className="relative aspect-square w-full bg-[#F4F4F2] overflow-hidden">
                  <Image
                    src={isHovered ? prod.hoverImage : prod.primaryImage}
                    alt={prod.name}
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1.5 pointer-events-none">
                    <span className="font-mono-spec text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/95 text-basalt border border-hairline shadow-xs whitespace-nowrap">
                      {prod.specs.sku}
                    </span>
                    {prod.badge && (
                      <span className="font-mono-spec text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-basalt text-white shadow-xs whitespace-nowrap">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  {/* Quick View Hover Button */}
                  <button
                    onClick={() => setQuickViewProduct(prod)}
                    className="absolute inset-x-4 bottom-4 py-2.5 rounded-xl bg-white/95 hover:bg-white text-basalt font-mono-spec text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 border border-hairline shadow-md translate-y-2 group-hover:translate-y-0 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-500" />
                    <span>Quick Spec View</span>
                  </button>
                </div>

                {/* Product Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-mono-spec text-[11px] text-stone-400 uppercase">
                        {prod.category} geometry
                      </span>
                      <span className="font-mono-spec text-sm font-bold text-basalt">
                        {formatPrice(prod.price)}
                      </span>
                    </div>

                    <h3
                      onClick={() => setQuickViewProduct(prod)}
                      className="text-base font-bold text-basalt tracking-tight hover:text-safety-orange transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h3>
                    <p className="text-xs text-graphite line-clamp-2 mt-1 font-sans">
                      {prod.tagline}
                    </p>

                    {/* Specs micro strip */}
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-hairline text-[11px] font-mono-spec text-stone-500">
                      <span>RECYCLED: {prod.specs.recycledPercent}</span>
                      <span>•</span>
                      <span>DROP: {prod.specs.drop.split(" ")[0]}</span>
                    </div>
                  </div>

                  {/* Add to Bag Inline Button */}
                  <div className="pt-4 mt-3 border-t border-hairline flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {prod.colorways.map((cw) => (
                        <span
                          key={cw.id}
                          className="w-3 h-3 rounded-full border border-stone-300"
                          style={{ backgroundColor: cw.hex }}
                          title={cw.name}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => handleQuickAdd(prod)}
                      className={`px-3.5 py-1.5 rounded-full font-mono-spec text-xs font-semibold uppercase tracking-wider flex items-center justify-center text-center gap-1.5 transition-all ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-stone-100 text-basalt hover:bg-basalt hover:text-white border border-hairline"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Reserved</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Quick Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
