"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";
import QuickViewModal from "./QuickViewModal";
import FitDiagnosticModal from "./FitDiagnosticModal";
import NotificationToast from "./NotificationToast";
import MobileStickyBar from "./MobileStickyBar";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <SearchModal />
      <QuickViewModal />
      <FitDiagnosticModal />
      <NotificationToast />
      <MobileStickyBar />
    </CartProvider>
  );
}
