"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Check, ShoppingBag } from "lucide-react";

export default function NotificationToast() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-top-3 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-basalt/95 text-white rounded-full shadow-2xl border border-stone-700 backdrop-blur-md">
        <span className="w-5 h-5 rounded-full bg-safety-orange flex items-center justify-center text-white">
          <Check className="w-3 h-3 stroke-[3]" />
        </span>
        <span className="text-xs font-mono-spec font-semibold tracking-tight">
          {notification}
        </span>
      </div>
    </div>
  );
}
