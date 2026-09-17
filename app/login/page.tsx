"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Lock } from "lucide-react";

export default function LoginPage() {
  const { showNotification } = useCart();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification("Please provide both email and password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      showNotification(`Welcome back, ${email.split("@")[0]}! Session authenticated.`);
    }, 900);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
      showNotification("Enter your email address above to receive a reset telemetry link.");
    } else {
      showNotification(`Password reset instructions transmitted to ${email}.`);
    }
  };

  const handleSocialAuth = (provider: string) => {
    showNotification(`Connecting to ${provider} secure OAuth node...`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bone text-basalt selection:bg-basalt selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Card Container */}
          <div className="bg-white rounded-3xl border border-hairline p-5 sm:p-10 shadow-sm transition-all duration-300">
            {/* Header Telemetry */}
            <div className="space-y-2.5 text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] font-mono-spec tracking-wider uppercase border border-hairline">
                <Lock className="w-3 h-3 text-stone-500" />
                <span>MEMBER ACCESS PROTOCOL</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-basalt">
                Sign In to STRATUM
              </h1>
              <p className="text-xs sm:text-[13px] text-stone-500 font-sans leading-relaxed max-w-xs mx-auto">
                Access your exclusive drop reservations, order telemetry, and Loop 00 circular credit balance.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-basalt">Authenticated</h3>
                  <p className="text-xs text-stone-500">
                    Welcome back to the STRATUM Collective. Redirecting to account telemetry...
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center text-center h-11 px-6 rounded-full bg-basalt text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                >
                  Return to Storefront
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-mono-spec uppercase tracking-wider text-stone-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@stratum.design"
                    className="w-full h-11 px-4 rounded-xl border border-hairline bg-[#FAF9F8] text-basalt text-sm focus:outline-none focus:border-basalt focus:bg-white transition-all font-sans placeholder:text-stone-400"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-mono-spec uppercase tracking-wider text-stone-600">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-[11px] font-mono-spec text-stone-500 hover:text-basalt underline transition-colors"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full h-11 pl-4 pr-11 rounded-xl border border-hairline bg-[#FAF9F8] text-basalt text-sm focus:outline-none focus:border-basalt focus:bg-white transition-all font-sans placeholder:text-stone-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-basalt transition-colors p-1"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between pt-1 text-xs text-stone-600">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-hairline text-basalt focus:ring-basalt accent-basalt w-4 h-4"
                    />
                    <span>Remember this workstation</span>
                  </label>
                  <span className="text-[10px] font-mono-spec text-stone-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    256-BIT SSL
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 mt-2 rounded-full bg-basalt text-white hover:bg-stone-800 disabled:opacity-60 text-xs font-semibold uppercase tracking-wider flex items-center justify-center text-center transition-all shadow-xs group"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Sign In to Member Portal</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-hairline" />
              </div>
              <span className="relative bg-white px-3 text-[10px] font-mono-spec uppercase tracking-wider text-stone-400">
                Or Continue With
              </span>
            </div>

            {/* Fast 1-Click Auth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialAuth("Apple")}
                className="h-10 px-4 rounded-xl border border-hairline bg-[#FAF9F8] hover:bg-stone-100 text-xs font-medium text-basalt flex items-center justify-center text-center gap-2 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z" />
                </svg>
                <span>Apple</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialAuth("Google")}
                className="h-10 px-4 rounded-xl border border-hairline bg-[#FAF9F8] hover:bg-stone-100 text-xs font-medium text-basalt flex items-center justify-center text-center gap-2 transition-all"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google</span>
              </button>
            </div>

            {/* Footer Navigation Switcher */}
            <div className="mt-8 pt-6 border-t border-hairline text-center">
              <p className="text-xs text-stone-600 font-sans">
                New to the STRATUM Collective?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-basalt hover:text-safety-orange underline transition-colors"
                >
                  Create an account →
                </Link>
              </p>
            </div>
          </div>

          {/* Member Benefits Micro-Pill Strip */}
          <div className="bg-white/60 rounded-2xl border border-hairline p-4 text-[11px] font-mono-spec text-stone-500 space-y-2 text-center">
            <div className="flex items-center justify-center gap-1.5 text-stone-700 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-safety-orange" />
              <span>Collective Member Privileges</span>
            </div>
            <p className="leading-normal text-stone-500">
              Guaranteed Drop 05 reservation rights · $40 circular return credits · Express carbon-neutral delivery.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
