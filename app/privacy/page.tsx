import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, EyeOff, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — STRATUM Footwear",
  description: "STRATUM's privacy policy: zero-sale data commitment, cryptographic checkout security, and GDPR/CCPA consumer protections.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bone text-basalt selection:bg-basalt selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb & Header */}
          <div className="space-y-4 border-b border-hairline pb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono-spec text-stone-500 hover:text-basalt transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Collection</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hairline bg-white shadow-xs">
              <Lock className="w-3.5 h-3.5 text-safety-orange" />
              <span className="text-xs font-mono-spec font-semibold tracking-wider uppercase text-basalt">
                DATA SECURITY & PRIVACY PROTOCOL
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-basalt uppercase font-sans">
              Privacy Policy
            </h1>

            <p className="text-sm text-graphite font-mono-spec">
              Effective Date: January 1, 2026 · STRATUM Footwear GmbH · Global Privacy Standard
            </p>
          </div>

          {/* Privacy Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-hairline space-y-2 shadow-xs">
              <EyeOff className="w-5 h-5 text-emerald-600" />
              <h3 className="text-sm font-bold text-basalt font-sans">Zero Data Sale</h3>
              <p className="text-xs text-graphite font-sans leading-relaxed">
                We never sell, broker, or rent your personal data to advertisers or third parties.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-hairline space-y-2 shadow-xs">
              <Shield className="w-5 h-5 text-racing-blue" />
              <h3 className="text-sm font-bold text-basalt font-sans">Encrypted Checkout</h3>
              <p className="text-xs text-graphite font-sans leading-relaxed">
                PCI-DSS Level 1 tokenized processing. Card numbers never touch our servers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-hairline space-y-2 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-safety-orange" />
              <h3 className="text-sm font-bold text-basalt font-sans">GDPR & CCPA Compliant</h3>
              <p className="text-xs text-graphite font-sans leading-relaxed">
                Complete autonomy to inspect, export, or permanently erase your profile data.
              </p>
            </div>
          </div>

          {/* Policy Body */}
          <div className="space-y-10 bg-white rounded-3xl border border-hairline p-6 sm:p-10 shadow-xs leading-relaxed text-sm text-graphite font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                01. Our Core Principle
              </h2>
              <p>
                At STRATUM, we build high-performance sustainable footwear. We do not build surveillance advertising networks. We collect only the minimum technical and transactional telemetry required to craft your shoes, calculate your ergonomic sizing, and deliver packages to your door.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                02. Information We Collect
              </h2>
              <p>Depending on your interaction with STRATUM, we collect:</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>
                  <strong>Transactional Data:</strong> Full name, shipping destination, billing address, phone contact, and email for order dispatch confirmation.
                </li>
                <li>
                  <strong>Biomechanical Fit Telemetry:</strong> Optional data you submit via our Fit Diagnostic Quiz (arch type, stride terrain, cushioning preferences) used strictly to prescribe the ideal silhouette model.
                </li>
                <li>
                  <strong>Technical & Session Data:</strong> Masked IP address, device viewport, browser type, and selected currency preference for proper site rendering and bag state persistence.
                </li>
              </ul>
            </section>

            <section className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                03. Purpose of Processing
              </h2>
              <p>
                Your personal information is processed exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Fulfilling orders, processing courier dispatches, and managing the Loop 00 circular take-back return satchels.</li>
                <li>Transmitting 15-minute priority access reservation keys for upcoming limited edition drops (only upon explicit email subscription).</li>
                <li>Customer support inquiries, warranty evaluations, and 30-day wear trial refunds.</li>
                <li>Fraud prevention and encrypted payment handshake verification.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                04. Payment Security & Tokenization
              </h2>
              <p>
                All payment transactions are conducted through Tier-1, PCI-DSS Level 1 certified processors. Payment information is encrypted in transit using TLS 1.3 protocols. STRATUM never views, stores, or processes raw credit card credentials on our servers.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                05. Cookie & Storage Protocol
              </h2>
              <p>
                We use strictly necessary first-party cookies to remember items in your shopping bag, maintain your selected currency (USD, EUR, GBP, JPY), and authenticate secure sessions. We do not use third-party behavioral cross-site tracking cookies.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                06. Your Legal Rights (GDPR / CCPA)
              </h2>
              <p>
                Regardless of your country of residence, you hold complete autonomy over your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Right to Inspect:</strong> Request a comprehensive export of all data associated with your profile.</li>
                <li><strong>Right to Rectify:</strong> Correct any inaccurate shipping or sizing information.</li>
                <li><strong>Right to Erasure (Be Forgotten):</strong> Request permanent deletion of all customer records, subject only to statutory tax retention periods.</li>
                <li><strong>Right to Opt-Out:</strong> Unsubscribe from priority drop notifications with one click at any time.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                07. Contact Our Data Protection Team
              </h2>
              <p>
                To exercise any of your data rights or discuss our privacy protocols, contact our Data Protection Officer:
              </p>
              <p className="text-xs text-stone-500 font-mono-spec pt-1">
                STRATUM Footwear GmbH · Data Privacy Node · Badenerstrasse 116, 8004 Zürich · Email: privacy@stratumfootwear.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
