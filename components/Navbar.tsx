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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          {/* Brand Wordmark */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2 sm:gap-3">
              <span className="font-extrabold tracking-tight text-lg sm:text-2xl uppercase font-sans text-basalt group-hover:opacity-80 transition-opacity">
                STRATUM
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-stone-500 bg-stone-200/60 px-2 sm:px-2.5 py-0.5 rounded-full border border-hairline/80 hidden xs:inline-block">
                FOOTWEAR
              </span>
            </Link>
          </div>

          {/* Center Navigation Links (Desktop Only) */}
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

          {/* Right Action Trigger Group */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Extended Live Search Bar */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex h-10 items-center justify-between gap-3 px-4 w-48 sm:w-56 md:w-64 rounded-full border border-hairline bg-white/90 hover:bg-white text-stone-600 hover:text-basalt text-xs font-medium transition-all shadow-xs shrink-0"
              aria-label="Search footwear collection"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Search className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="whitespace-nowrap">Search footwear...</span>
              </div>
              <kbd className="hidden lg:inline-flex items-center text-[10px] font-mono-spec px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 border border-hairline shrink-0">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Compact Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-hairline bg-white/90 hover:bg-white text-stone-600 hover:text-basalt transition-all shadow-xs shrink-0"
              aria-label="Search footwear collection"
            >
              <Search className="w-4 h-4 text-stone-600" />
            </button>

            {/* Desktop Currency Selector */}
            <div className="relative hidden md:block">
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

            {/* Desktop Member Account / Sign In */}
            <Link
              href="/login"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white/90 hover:bg-white text-stone-600 hover:text-basalt transition-all shadow-xs shrink-0"
              aria-label="Member Sign In / Account"
              title="Member Account"
            >
              <User className="w-4 h-4 text-stone-600" />
            </Link>

            {/* Shopping Bag CTA */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="h-9 sm:h-10 flex items-center justify-center text-center gap-1.5 sm:gap-2 px-3 sm:px-4 rounded-full bg-basalt text-white hover:bg-stone-800 transition-all shadow-xs group shrink-0 whitespace-nowrap"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-stone-300 group-hover:text-white transition-colors shrink-0" />
              <span className="text-xs font-semibold tracking-wider uppercase whitespace-nowrap hidden xs:inline">Bag</span>
              <span
                className={`text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 min-w-[18px] sm:min-w-[20px] h-4 sm:h-5 rounded-full flex items-center justify-center transition-colors ${
                  cartCount > 0 ? "bg-safety-orange text-white" : "bg-stone-700 text-stone-300"
                }`}
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile Sandwich / Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-hairline text-basalt bg-white/90 hover:bg-white transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Sandwich Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-hairline bg-bone/98 backdrop-blur-xl px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
            {/* Primary Navigation Links */}
            <div className="space-y-1.5">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-2.5 text-base font-medium text-basalt hover:bg-white rounded-xl transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/#featured-drop"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-2.5 text-base font-medium text-basalt hover:bg-white rounded-xl transition-colors"
              >
                The Daily Runner
              </Link>
              <Link
                href="/#category-catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-2.5 text-base font-medium text-basalt hover:bg-white rounded-xl transition-colors"
              >
                Browse Silhouettes
              </Link>
            </div>

            {/* Find Your Fit Quiz Banner CTA */}
            <div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDiagnosticOpen(true);
                }}
                className="w-full py-3 px-4 text-sm font-semibold text-safety-orange bg-orange-50/80 rounded-xl flex items-center justify-center gap-2 transition-colors text-center border border-safety-orange/20 shadow-2xs"
              >
                <Sparkles className="w-4 h-4 text-safety-orange shrink-0" />
                <span>Find Your Fit Quiz</span>
              </button>
            </div>

            {/* Member Account / Authentication Section */}
            <div className="pt-3 border-t border-hairline/80 space-y-2">
              <span className="block text-[10px] font-mono-spec tracking-wider uppercase text-stone-400 px-1">
                MEMBER COLLECTIVE
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-center text-xs font-semibold text-basalt bg-white rounded-xl border border-hairline shadow-2xs"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-center text-xs font-semibold text-white bg-basalt rounded-xl shadow-2xs"
                >
                  Create Account
                </Link>
              </div>
            </div>

            {/* Currency Selector & Quick Legal Links */}
            <div className="pt-3 border-t border-hairline/80 space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono-spec tracking-wider uppercase text-stone-400">
                  CURRENCY
                </span>
                <div className="flex gap-1">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-2 py-0.5 text-[11px] font-mono-spec rounded-md border transition-all ${
                        currency === c
                          ? "bg-basalt text-white border-basalt font-bold"
                          : "bg-white text-stone-600 border-hairline"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs font-mono-spec text-stone-500 pt-1">
                <Link
                  href="/terms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-basalt underline"
                >
                  Terms
                </Link>
                <span>•</span>
                <Link
                  href="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-basalt underline"
                >
                  Privacy
                </Link>
                <span>•</span>
                <Link
                  href="/about#studios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-basalt underline"
                >
                  Studios
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
