"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    subtotalUSD,
    formatPrice,
    freeShippingProgress,
    shippingRemainingUSD,
    clearCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === "STRATA10" || code === "VIP" || code === "EDITION4") {
      setDiscountPercent(10);
      setPromoMessage("10% VIP DROP APPLIED");
    } else {
      setPromoMessage("INVALID PROTOCOL CODE");
      setTimeout(() => setPromoMessage(null), 2500);
    }
  };

  const discountAmount = (subtotalUSD * discountPercent) / 100;
  const finalTotalUSD = Math.max(0, subtotalUSD - discountAmount);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        clearCart();
        setOrderComplete(false);
        setIsCartOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-basalt/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer content panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-hairline animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-hairline flex items-center justify-between bg-[#FAF9F8]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base tracking-tight text-basalt font-sans">
              SHOPPING BAG
            </span>
            <span className="font-mono-spec text-xs bg-basalt text-white px-2 py-0.5 rounded-full font-bold">
              {cartCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-basalt transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3.5 bg-stone-50 border-b border-hairline">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-mono-spec text-stone-600 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-stone-500" />
              {shippingRemainingUSD === 0 ? (
                <span className="text-emerald-700 font-semibold font-mono-spec">
                  QUALIFIED FOR COMPLIMENTARY COURIER DISPATCH
                </span>
              ) : (
                <>
                  Add <span className="font-semibold text-basalt font-mono-spec">{formatPrice(shippingRemainingUSD)}</span> for free express shipping
                </>
              )}
            </span>
            <span className="font-mono-spec text-[11px] text-stone-400 font-semibold">
              {Math.round(freeShippingProgress)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                shippingRemainingUSD === 0 ? "bg-emerald-600" : "bg-safety-orange"
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Body Content */}
        {orderComplete ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#FAF9F8]">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="font-mono-spec text-xs text-emerald-700 font-bold uppercase tracking-wider">
              ORDER STR-8921 CONFIRMED
            </span>
            <h3 className="text-xl font-bold text-basalt mt-1">Dispatch Scheduled</h3>
            <p className="text-xs text-graphite mt-2 max-w-xs font-sans">
              Your architectural footwear order has been transmitted to our Kyoto assembly hub. Tracking coordinates will arrive via SMS/Email.
            </p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-stone-400" />
            </div>
            <h3 className="font-semibold text-basalt text-base">Your bag is currently empty</h3>
            <p className="text-xs text-graphite mt-1.5 max-w-xs">
              Explore the Edition 04 restock and select your precision size to begin.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-6 px-5 py-2.5 rounded-full bg-basalt text-white text-xs font-mono-spec uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              Browse Silhouettes
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto divide-y divide-hairline px-6 py-2">
            {cart.map((item) => (
              <div key={item.id} className="py-4 flex gap-4">
                <div className="relative w-20 h-20 bg-stone-100 rounded-xl overflow-hidden border border-hairline shrink-0">
                  <Image
                    src={item.colorway.images.lateral || item.product.primaryImage}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-sm text-basalt tracking-tight">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-graphite">{item.colorway.name}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-red-500 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono-spec text-[11px] bg-stone-100 border border-hairline px-2 py-0.5 rounded text-stone-700">
                        SIZE US {item.size}
                      </span>
                      <span className="font-mono-spec text-[11px] text-stone-400">
                        {item.product.specs.sku}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-hairline rounded-full bg-stone-50">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-stone-200 rounded-full transition-colors text-stone-600"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-mono-spec font-semibold text-basalt">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-stone-200 rounded-full transition-colors text-stone-600"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-semibold text-sm font-mono-spec text-basalt">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Drawer Footer with Checkout */}
        {cart.length > 0 && !orderComplete && (
          <div className="border-t border-hairline bg-[#FAF9F8] p-6 space-y-4">
            {/* Promo Code Bar */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="PROMO CODE (e.g. STRATA10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-white border border-hairline rounded-lg px-3 py-2 text-xs font-mono-spec uppercase text-basalt focus:outline-hidden focus:border-basalt"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-basalt text-xs font-mono-spec font-medium rounded-lg transition-colors"
              >
                Apply
              </button>
            </form>

            {promoMessage && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono-spec text-safety-orange font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>{promoMessage}</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs font-mono-spec text-graphite pt-1">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span className="text-basalt font-medium">{formatPrice(subtotalUSD)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-safety-orange">
                  <span>DISCOUNT ({discountPercent}%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>ESTIMATED COURIER</span>
                <span className="text-basalt font-medium">
                  {shippingRemainingUSD === 0 ? "FREE" : formatPrice(15)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-basalt pt-2 border-t border-hairline">
                <span className="font-sans">TOTAL DUE</span>
                <span>{formatPrice(shippingRemainingUSD === 0 ? finalTotalUSD : finalTotalUSD + 15)}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 rounded-full bg-basalt hover:bg-stone-800 text-white font-mono-spec text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group disabled:opacity-75"
            >
              {isCheckingOut ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>SECURING LAB INVENTORY...</span>
                </>
              ) : (
                <>
                  <span>CONFIRM DISPATCH CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] font-mono-spec text-stone-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-stone-500" /> 30-DAY TRIAL GUARANTEE
              </span>
              <span>•</span>
              <span>CARBON-NEUTRAL FULFILLMENT</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
