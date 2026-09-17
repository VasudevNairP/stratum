"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ProductColorway } from "@/data/products";
import { X, Check, ArrowRight, Shield, Layers, Gauge, Truck } from "lucide-react";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, formatPrice } = useCart();
  const [selectedColorway, setSelectedColorway] = useState<ProductColorway | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>(9.5);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColorway(quickViewProduct.colorways[0]);
      const initialSize = quickViewProduct.sizes.find((s) => s.stock !== "out_of_stock")?.size || 9.5;
      setSelectedSize(initialSize);
    }
  }, [quickViewProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && quickViewProduct) {
        setQuickViewProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [quickViewProduct, setQuickViewProduct]);

  if (!quickViewProduct || !selectedColorway) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedColorway, selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-basalt/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-hairline overflow-y-auto max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 hover:text-basalt border border-hairline transition-colors shadow-xs"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Column */}
        <div className="w-full md:w-1/2 bg-[#FAF9F8] p-5 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-hairline">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono-spec text-xs bg-white px-2.5 py-1 rounded-md border border-hairline font-bold text-basalt">
              {quickViewProduct.specs.sku}
            </span>
            <span className="font-mono-spec text-xs text-stone-500 uppercase">
              {quickViewProduct.edition}
            </span>
          </div>

          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-hairline mb-4">
            <Image
              src={selectedColorway.images.lateral || quickViewProduct.primaryImage}
              alt={quickViewProduct.name}
              fill
              decoding="async"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Colorway Switcher */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono-spec mb-2">
              <span className="text-graphite">COLORWAY:</span>
              <span className="font-semibold text-basalt">{selectedColorway.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {quickViewProduct.colorways.map((cw) => (
                <button
                  key={cw.id}
                  onClick={() => setSelectedColorway(cw)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform ${
                    selectedColorway.id === cw.id
                      ? "scale-110 border-basalt ring-2 ring-safety-orange ring-offset-1"
                      : "border-hairline hover:scale-105"
                  }`}
                  style={{ backgroundColor: cw.hex }}
                  aria-label={cw.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details & Purchase Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono-spec text-safety-orange uppercase tracking-wider font-bold">
                {quickViewProduct.category.toUpperCase()} · RECYCLED FIT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-basalt tracking-tight mt-0.5">
                {quickViewProduct.name}
              </h3>
              <p className="text-sm text-graphite font-sans mt-1">
                {quickViewProduct.description}
              </p>
            </div>

            <div className="flex items-baseline justify-between py-2 border-y border-hairline">
              <span className="text-2xl font-bold font-mono-spec text-basalt">
                {formatPrice(quickViewProduct.price)}
              </span>
              <span className="text-xs font-mono-spec text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                IN STOCK · SAME-DAY DISPATCH
              </span>
            </div>

            {/* Size Selector Grid */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-spec">
                <span className="font-semibold text-basalt">SELECT PRECISION SIZE (US M):</span>
                <span className="text-stone-400">TRUE TO ALL-DAY FIT</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {quickViewProduct.sizes.map((sz) => {
                  const isSelected = selectedSize === sz.size;
                  const isOut = sz.stock === "out_of_stock";
                  return (
                    <button
                      key={sz.size}
                      disabled={isOut}
                      onClick={() => setSelectedSize(sz.size)}
                      className={`py-2 rounded-xl text-xs font-mono-spec border transition-all ${
                        isOut
                          ? "bg-stone-100 text-stone-400 border-stone-200 line-through cursor-not-allowed"
                          : isSelected
                          ? "bg-basalt text-white border-basalt font-bold shadow-xs"
                          : "bg-white text-basalt border-hairline hover:border-stone-400 hover:bg-stone-50"
                      }`}
                    >
                      US {sz.size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Engineering Specifications Matrix */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono-spec text-stone-500 uppercase tracking-wider block">
                SUSTAINABILITY & LAB SPECS:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono-spec bg-stone-50 p-3 rounded-xl border border-hairline">
                <div>
                  <span className="text-stone-400 block text-[10px]">RECYCLED:</span>
                  <span className="text-basalt font-medium">{quickViewProduct.specs.recycledPercent}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">CARBON SCORE:</span>
                  <span className="text-basalt font-medium">{quickViewProduct.specs.carbonScore}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">MIDSOLE:</span>
                  <span className="text-basalt font-medium truncate block">{quickViewProduct.specs.midsole}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">DURABILITY:</span>
                  <span className="text-basalt font-medium truncate block">500+ Tested Miles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-hairline space-y-3">
            <button
              onClick={handleAdd}
              className="w-full py-4 rounded-full bg-basalt hover:bg-stone-800 text-white font-mono-spec text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>INVENTORY SECURED (US {selectedSize})</span>
                </>
              ) : (
                <>
                  <span>Add To Bag — {formatPrice(quickViewProduct.price)}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-[11px] font-mono-spec text-stone-500">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3" /> Express Courier Ready
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" /> 100% Circular Take-Back Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
