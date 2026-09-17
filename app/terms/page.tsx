import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Scale, RefreshCw, Truck } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — STRATUM Footwear",
  description: "Official terms and conditions, 30-day wear trial policy, circular take-back protocols, and warranty coverage for STRATUM Footwear.",
};

export default function TermsPage() {
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
              <Scale className="w-3.5 h-3.5 text-safety-orange" />
              <span className="text-xs font-mono-spec font-semibold tracking-wider uppercase text-basalt">
                LEGAL PROTOCOLS · VERSION 2.6
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-basalt uppercase font-sans">
              Terms & Conditions
            </h1>

            <p className="text-sm text-graphite font-mono-spec">
              Effective Date: January 1, 2026 · Last Updated: September 2026 · STRATUM Footwear GmbH
            </p>
          </div>

          {/* Key Guarantee Callout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-hairline space-y-2 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="text-sm font-bold text-basalt font-sans">30-Day Wear Trial</h3>
              <p className="text-xs text-graphite font-sans leading-relaxed">
                Test on city streets. 100% full refund if you do not experience cloud comfort.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-hairline space-y-2 shadow-xs">
              <RefreshCw className="w-5 h-5 text-racing-blue" />
              <h3 className="text-sm font-bold text-basalt font-sans">$40 Circular Credit</h3>
              <p className="text-xs text-graphite font-sans leading-relaxed">
                Return worn pairs past 500 miles in your prepaid box satchel for track regrind.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-hairline space-y-2 shadow-xs">
              <Truck className="w-5 h-5 text-safety-orange" />
              <h3 className="text-sm font-bold text-basalt font-sans">Complimentary Dispatch</h3>
              <p className="text-xs text-graphite font-sans leading-relaxed">
                Free express courier shipping on all footwear orders over $250.
              </p>
            </div>
          </div>

          {/* Legal Text Content Body */}
          <div className="space-y-10 bg-white rounded-3xl border border-hairline p-6 sm:p-10 shadow-xs leading-relaxed text-sm text-graphite font-sans">
            <section id="scope" className="space-y-3">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                01. Scope & Operating Entity
              </h2>
              <p>
                These General Terms and Conditions govern all sales, reservations, and deliveries conducted through the STRATUM online retail platform and physical studio nodes. Operations are managed by <strong>STRATUM Footwear GmbH</strong> (Zurich, Switzerland) in direct partnership with STRATUM Design Laboratories K.K. (Kyoto, Japan) and STRATUM US Inc. (New York, USA).
              </p>
              <p>
                By placing an order or reserving an edition drop, you acknowledge and agree to be bound by these legal protocols without modification.
              </p>
            </section>

            <section id="orders" className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                02. Order Placement & Inventory Reservation
              </h2>
              <p>
                All drops are released in limited zero-waste production batches. Adding a silhouette to your digital shopping bag reserves the inventory unit for a period of 15 minutes. If checkout authorization is not completed within this window, the unit returns to active inventory.
              </p>
              <p>
                A legally binding contract of sale is formed only when we dispatch an encrypted order confirmation email containing your dispatch tracking code and invoice.
              </p>
            </section>

            <section id="trial" className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                03. 30-Day Real-World Wear Trial Policy
              </h2>
              <p>
                We believe footwear cannot be properly evaluated by standing on a store carpet for three minutes. Therefore, STRATUM provides an unconditional <strong>30-Day Real-World Trial</strong> from the date of package delivery.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>You may wear your shoes on outdoor city sidewalks, asphalt, and daily commutes.</li>
                <li>If the fit, cushioning, or arch support does not exceed your expectations, initiate a return via our portal.</li>
                <li>Returned pairs in trial condition are cleaned and redirected to our community circular redistribution or regrind programs. Full purchase price is refunded to the original payment method within 3 business days of receipt.</li>
              </ul>
            </section>

            <section id="circular" className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                04. Loop 00 Circular Take-Back Protocols ($40 Credit)
              </h2>
              <p>
                Every pair of STRATUM footwear is designed for circular dismantling. Included in your shoe box is a biodegradable, prepaid return satchel. Once your pair surpasses its active lifespan (typically 500+ miles), place the pair in the satchel and deposit it with any postal carrier.
              </p>
              <p>
                Upon receipt at our Zurich Material Workshop, the sugarcane bio-foam and tire rubber outsoles are mechanically granulated for community running track surfaces. A <strong>$40 circular credit voucher</strong> is instantly credited to your customer account for use on your next order.
              </p>
            </section>

            <section id="shipping" className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                05. Shipping, Deliveries & Customs
              </h2>
              <p>
                Complimentary express courier shipping is provided on all orders totaling $250 or greater. Orders below this threshold are subject to a flat $15 standard courier fee.
              </p>
              <p>
                Orders placed before 14:00 CET/EST are dispatched same-day from our nearest regional fulfillment node (Kyoto, Zurich, or New Jersey). Delivery timeframes average 2–4 business days domestically and 3–6 business days internationally. All duties, tariffs, and customs fees are prepaid by STRATUM at checkout.
              </p>
            </section>

            <section id="warranty" className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                06. 1-Year Structural Craft Warranty
              </h2>
              <p>
                Every silhouette is warranted against structural defects, sole delamination, composite shank failure, and seam rupture for 365 days from delivery. This warranty excludes normal aesthetic tread wear over 500 miles, cosmetic scuffs, or misuse. Defective pairs will be repaired, replaced, or refunded at our discretion.
              </p>
            </section>

            <section id="governing" className="space-y-3 pt-6 border-t border-hairline">
              <h2 className="text-lg font-bold text-basalt uppercase font-sans tracking-tight">
                07. Governing Law & Dispute Resolution
              </h2>
              <p>
                These terms are governed by and construed in accordance with the substantive laws of Switzerland, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). For consumers residing within the United States or European Union, statutory consumer protection provisions remain unaffected.
              </p>
              <p className="text-xs text-stone-500 font-mono-spec pt-2">
                Inquiries regarding terms or active orders: support@stratumfootwear.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
