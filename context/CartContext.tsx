"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductColorway } from "@/data/products";

export interface CartItem {
  id: string; // unique item id (productId-colorId-size)
  product: Product;
  colorway: ProductColorway;
  size: number;
  quantity: number;
}

export type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY";

interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number;
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", rate: 1.0 },
  EUR: { code: "EUR", symbol: "€", rate: 0.92 },
  GBP: { code: "GBP", symbol: "£", rate: 0.79 },
  JPY: { code: "JPY", symbol: "¥", rate: 155.0 },
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, colorway: ProductColorway, size: number, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotalUSD: number;
  subtotalFormatted: string;
  freeShippingProgress: number; // 0 to 100
  shippingRemainingUSD: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isDiagnosticOpen: boolean;
  setIsDiagnosticOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (prod: Product | null) => void;
  currency: CurrencyCode;
  setCurrency: (curr: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
  notification: string | null;
  showNotification: (msg: string) => void;
}

const FREE_SHIPPING_THRESHOLD_USD = 250;

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [notification, setNotification] = useState<string | null>(null);

  // Initialize with 1 sample item in cart for high conversion realism
  useEffect(() => {
    import("@/data/products").then(({ PRODUCTS }) => {
      const hero = PRODUCTS[0];
      if (hero) {
        setCart([
          {
            id: `${hero.id}-${hero.colorways[0].id}-9.5`,
            product: hero,
            colorway: hero.colorways[0],
            size: 9.5,
            quantity: 1,
          }
        ]);
      }
    });
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const addToCart = (product: Product, colorway: ProductColorway, size: number, quantity = 1) => {
    const itemId = `${product.id}-${colorway.id}-${size}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, colorway, size, quantity }];
    });
    showNotification(`ADDED TO BAG: ${product.name} (US ${size})`);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalUSD = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const freeShippingProgress = Math.min(100, (subtotalUSD / FREE_SHIPPING_THRESHOLD_USD) * 100);
  const shippingRemainingUSD = Math.max(0, FREE_SHIPPING_THRESHOLD_USD - subtotalUSD);

  const formatPrice = (amountInUSD: number): string => {
    const config = CURRENCIES[currency];
    const converted = amountInUSD * config.rate;
    if (currency === "JPY") {
      return `${config.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${config.symbol}${converted.toFixed(0)}`;
  };

  const subtotalFormatted = formatPrice(subtotalUSD);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotalUSD,
        subtotalFormatted,
        freeShippingProgress,
        shippingRemainingUSD,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isDiagnosticOpen,
        setIsDiagnosticOpen,
        quickViewProduct,
        setQuickViewProduct,
        currency,
        setCurrency,
        formatPrice,
        notification,
        showNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
