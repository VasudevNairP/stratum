"use client";

import React, { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, Product } from "@/data/products";
import { Search, X, ArrowRight, CornerDownLeft } from "lucide-react";
import Image from "next/image";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct, formatPrice } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.subname.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.specs.midsole.toLowerCase().includes(q) ||
      p.specs.plate.toLowerCase().includes(q) ||
      p.specs.weight.toLowerCase().includes(q) ||
      p.specs.sku.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-basalt/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-hairline overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-hairline bg-[#FAF9F8]">
          <Search className="w-5 h-5 text-graphite shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search silhouettes, materials, carbon plates, SKUs..."
            className="w-full px-3 py-4 text-sm sm:text-base text-basalt bg-transparent focus:outline-hidden placeholder:text-stone-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-stone-200 rounded-full text-stone-500 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-mono-spec px-2 py-1 rounded bg-stone-200 text-stone-700 hover:bg-stone-300"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-stone-50 border-b border-hairline flex flex-wrap gap-2 text-xs">
          <span className="font-mono-spec text-stone-400 uppercase text-[11px] self-center">Filter:</span>
          {["Pebax", "Carbon Plate", "Trail", "Zero-Drop", "210g", "Road"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="font-mono-spec px-2.5 py-1 rounded-full bg-white border border-hairline text-stone-600 hover:text-basalt hover:border-basalt transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-hairline">
          {filteredProducts.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm text-stone-500 font-sans">No matching silhouettes or specs found for &quot;{query}&quot;.</p>
              <p className="text-xs font-mono-spec text-stone-400 mt-1">Try querying by component: Pebax, Carbon, Vibram, or Road.</p>
            </div>
          ) : (
            filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  setQuickViewProduct(prod);
                  setIsSearchOpen(false);
                }}
                className="group flex items-center justify-between p-4 hover:bg-stone-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-14 bg-stone-100 rounded-lg overflow-hidden border border-hairline shrink-0">
                    <Image
                      src={prod.primaryImage}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-basalt tracking-tight group-hover:text-safety-orange transition-colors">
                        {prod.name}
                      </h4>
                      <span className="font-mono-spec text-[10px] uppercase bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-hairline">
                        {prod.specs.sku}
                      </span>
                    </div>
                    <p className="text-xs text-graphite line-clamp-1 mt-0.5">{prod.tagline}</p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11px] font-mono-spec text-stone-500">
                      <span>WT: {prod.specs.weight.split(" ")[0]}</span>
                      <span>•</span>
                      <span>DROP: {prod.specs.drop}</span>
                      <span>•</span>
                      <span className="text-basalt font-semibold">{formatPrice(prod.price)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-4 shrink-0">
                  <span className="text-xs font-mono-spec text-stone-400 group-hover:text-basalt group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                    Inspect <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-stone-100 border-t border-hairline flex items-center justify-between text-[11px] font-mono-spec text-stone-500">
          <div className="flex items-center gap-1">
            <CornerDownLeft className="w-3 h-3" /> Select to open quick spec inspect
          </div>
          <span>STRATUM · FOOTWEAR SEARCH</span>
        </div>
      </div>
    </div>
  );
}
