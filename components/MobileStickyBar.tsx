"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { Check, ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function MobileStickyBar() {
  const pathname = usePathname();
  const { addToCart, formatPrice } = useCart();
  const heroProduct = PRODUCTS[0];
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number>(9.5);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 480px (past hero)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname !== "/" || !isVisible) return null;

  const handleMobileAdd = () => {
    addToCart(heroProduct, heroProduct.colorways[0], selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-hairline p-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        {/* Product thumbnail & basic info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-11 h-11 bg-stone-100 rounded-lg overflow-hidden border border-hairline shrink-0">
            <Image
              src={heroProduct.primaryImage}
              alt={heroProduct.name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-basalt truncate">STRATA-01</h4>
            <span className="text-[11px] font-mono-spec font-bold text-basalt">
              {formatPrice(heroProduct.price)}
            </span>
          </div>
        </div>

        {/* Size Picker Dropdown / Selector */}
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(Number(e.target.value))}
          className="bg-stone-100 text-xs font-mono-spec px-2 py-2.5 rounded-lg border border-hairline text-basalt focus:outline-hidden"
        >
          {heroProduct.sizes.filter((s) => s.stock !== "out_of_stock").map((s) => (
            <option key={s.size} value={s.size}>
              US {s.size}
            </option>
          ))}
        </select>

        {/* 1-Tap Quick Add Button */}
        <button
          onClick={handleMobileAdd}
          className="flex-1 py-2.5 px-4 rounded-full bg-basalt text-white font-mono-spec text-xs font-semibold uppercase tracking-wider flex items-center justify-center text-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>ADDED</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
