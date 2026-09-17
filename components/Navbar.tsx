"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart, CurrencyCode } from "@/context/CartContext";
import { Search, ShoppingBag, Globe, Menu, X, Sparkles, User } from "lucide-react";

export default function Navbar() {
  const { cartCount, setIsCartOpen, setIsSearchOpen, currency, setCurrency, setIsDiagnosticOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  const currencies: CurrencyCode[] = ["USD", "EUR", "GBP", "JPY"];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-hairline bg-bone/90 backdrop-blur-md transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Brand Wordmark */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <span className="font-extrabold tracking-tight text-xl sm:text-2xl uppercase font-sans text-basalt group-hover:opacity-80 transition-opacity">
                STRATUM
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 bg-stone-200/60 px-2.5 py-0.5 rounded-full border border-hairline/80 hidden sm:inline-block">
                FOOTWEAR
              </span>
            </Link>
          </div>

          {/* Center Navigation Links - Extended Single-Line Items */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/about"
              className="h-10 flex items-center justify-center text-center px-5 rounded-full text-xs lg:text-[13px] font-medium tracking-wide text-stone-600 hover:text-basalt hover:bg-stone-200/50 transition-colors whitespace-nowrap shrink-0"
            >
              About Us
            </Link>
            <button
              onClick={() => setIsDiagnosticOpen(true)}
              className="h-10 flex items-center justify-center text-center gap-2 px-5 rounded-full text-xs lg:text-[13px] font-medium tracking-wide text-basalt hover:bg-stone-200/50 transition-colors whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-safety-orange shrink-0" />
              <span className="whitespace-nowrap">Find Your Fit</span>
            </button>
          </nav>

          {/* Right Action Trigger Group - Airy & Well Spaced */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Extended Live Search Bar */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="h-10 flex items-center justify-between gap-3 px-4 w-44 sm:w-56 md:w-64 rounded-full border border-hairline bg-white/90 hover:bg-white text-stone-600 hover:text-basalt text-xs font-medium transition-all shadow-xs shrink-0"
              aria-label="Search footwear collection"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Search className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="whitespace-nowrap">Search footwear...</span>
              </div>
              <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono-spec px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 border border-hairline shrink-0">
                ⌘K
              </kbd>
            </button>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="h-10 flex items-center justify-center text-center gap-1.5 px-3.5 rounded-full border border-hairline bg-white/90 hover:bg-white text-xs font-medium text-basalt transition-all shadow-xs shrink-0 whitespace-nowrap"
                aria-label="Change currency"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="whitespace-nowrap">{currency}</span>
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-hairline rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-stone-50 ${
                        currency === c ? "font-semibold text-safety-orange bg-orange-50/50" : "text-basalt"
                      }`}
                    >
                      <span>{c}</span>
                      {currency === c && <span className="w-1.5 h-1.5 rounded-full bg-safety-orange" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Member Account / Sign In */}
            <Link
              href="/login"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-hairline bg-white/90 hover:bg-white text-stone-600 hover:text-basalt transition-all shadow-xs shrink-0"
              aria-label="Member Sign In / Account"
              title="Member Account"
            >
              <User className="w-4 h-4 text-stone-600" />
            </Link>

            {/* Shopping Bag CTA */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="h-10 flex items-center justify-center text-center gap-2.5 px-4 sm:px-5 rounded-full bg-basalt text-white hover:bg-stone-800 transition-all shadow-xs group shrink-0 whitespace-nowrap"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-stone-300 group-hover:text-white transition-colors shrink-0" />
              <span className="text-xs font-semibold tracking-wider uppercase whitespace-nowrap">Bag</span>
              <span
                className={`text-[11px] font-bold px-1.5 py-0.5 min-w-[20px] h-5 rounded-full flex items-center justify-center transition-colors ${
                  cartCount > 0 ? "bg-safety-orange text-white" : "bg-stone-700 text-stone-300"
                }`}
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full border border-hairline text-basalt bg-white/90 hover:bg-white transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-hairline bg-bone px-6 py-6 space-y-3">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-base font-medium text-basalt hover:bg-white rounded-xl transition-colors whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-base font-medium text-basalt hover:bg-white rounded-xl transition-colors whitespace-nowrap"
            >
              Member Sign In / Account
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDiagnosticOpen(true);
              }}
              className="w-full py-3.5 px-4 text-base font-medium text-safety-orange bg-orange-50/80 rounded-xl flex items-center justify-center gap-2 transition-colors text-center border border-safety-orange/20 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-safety-orange shrink-0" />
              <span className="whitespace-nowrap">Find Your Fit</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
}
