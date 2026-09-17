import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Award, Sparkles, MapPin } from "lucide-react";

export const metadata = {
  title: "About STRATUM — Architectural Sustainable Footwear",
  description: "Learn about STRATUM's origin between Kyoto and Zurich, our sugarcane bio-foam innovations, and our circular footwear commitment.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bone text-basalt selection:bg-basalt selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative w-full pt-12 pb-16 sm:pb-24 border-b border-hairline overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-hairline bg-white/90 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-safety-orange" />
                <span className="text-xs font-mono-spec font-semibold tracking-wider uppercase text-basalt">
                  OUR ORIGIN · KYOTO & ZURICH
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-basalt uppercase font-sans leading-[1.08]">
                Architectural Precision. Closed-Loop Motion.
              </h1>

              <p className="text-base sm:text-xl text-graphite font-sans leading-relaxed">
                STRATUM was founded to eliminate a false compromise: sneakers that are either high-performance but made from toxic petroleum waste, or eco-friendly but uncomfortable after 5,000 steps. We engineered out the plastic, the blisters, and the planned obsolescence.
              </p>
            </div>
          </div>
        </section>

        {/* Cinematic Visual Split */}
        <section className="w-full border-b border-hairline bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border border-hairline shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80"
                  alt="STRATUM Footwear in natural city motion"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  sizes="(max-width: 640px) 94vw, (max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-hairline text-xs font-mono-spec text-basalt">
                  TESTED OVER 15,000 DAILY COMMUTER STEPS
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono-spec uppercase text-safety-orange font-bold">
                  <span>THE CRAFT STANDARD</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-basalt uppercase font-sans">
                  Engineered in Japan. Formulated in Switzerland.
                </h2>

                <p className="text-sm sm:text-base text-graphite font-sans leading-relaxed">
                  Our development cycles begin at the Kyoto Ergonomics Studio, where pressure mapping across 1,200 unique plantar geometries dictates the sculpt of our lasts. The prototypes then transfer to our Zurich Material Laboratory, where petroleum-derived EVA foams are replaced with resilient, bouncy bio-elastomers synthesized from sugarcane waste.
                </p>

                <p className="text-sm sm:text-base text-graphite font-sans leading-relaxed">
                  Every silhouette is engineered with zero break-in period. From minute one on the pavement, your feet experience pillowy impact absorption, torsional arch stability, and seamless airflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="w-full py-16 sm:py-24 border-b border-hairline bg-bone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-mono-spec font-bold uppercase tracking-wider text-safety-orange block mb-2">
                FOUR PILLARS OF DESIGN
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-basalt uppercase font-sans">
                What Makes STRATUM Different.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl border border-hairline p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-safety-orange">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-basalt font-sans">
                  Sugarcane Bio-Foam
                </h3>
                <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                  Conventional running shoes rely on petroleum foams that compress and degrade after 200 miles. Our plant-based elastomer delivers bouncy rebound and retains 94% cushioning capacity past 500 miles.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl border border-hairline p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-racing-blue">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-basalt font-sans">
                  12 Ocean Bottles Per Pair
                </h3>
                <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                  We intercept marine and coastal plastics, spinning them into high-tensile 3D knit mesh that hugs your foot with zero friction hotspots and exceptional breathability.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl border border-hairline p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-basalt font-sans">
                  30-Day Real-World Trial
                </h3>
                <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                  Walk in them, commute across the city, put them to the 15,000-step test. If you are not in love within 30 days, send them back for a full, hassle-free refund.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl border border-hairline p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-basalt">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-basalt font-sans">
                  $40 Circular Return Credit
                </h3>
                <p className="text-xs sm:text-sm text-graphite font-sans leading-relaxed">
                  When your pair reaches the end of its life, return it in the prepaid satchel included in your shoe box. We grind the rubber into community running tracks and credit you $40.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Physical Nodes / Studios */}
        <section id="studios" className="w-full py-16 sm:py-24 border-b border-hairline bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-mono-spec font-bold uppercase tracking-wider text-safety-orange block mb-2">
                GLOBAL DESIGN NODES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-basalt uppercase font-sans">
                Where We Build & Test.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-bone border border-hairline space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-spec font-bold text-basalt">
                  <MapPin className="w-4 h-4 text-safety-orange" />
                  <span>KYOTO ERGONOMICS STUDIO</span>
                </div>
                <p className="text-sm font-bold text-basalt">Shimogyo-ku, Kyoto 600-8005, Japan</p>
                <p className="text-xs text-graphite font-sans">
                  Biomechanical plantar analysis, anatomical last sculpting, and low-impact motion capture benchmarking.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-bone border border-hairline space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-spec font-bold text-basalt">
                  <MapPin className="w-4 h-4 text-racing-blue" />
                  <span>ZURICH MATERIAL WORKSHOP</span>
                </div>
                <p className="text-sm font-bold text-basalt">Badenerstrasse 116, 8004 Zürich, Switzerland</p>
                <p className="text-xs text-graphite font-sans">
                  Polymer chemistry synthesis, sugarcane bio-elastomer formulation, and circular composite recycling audits.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-bone border border-hairline space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-spec font-bold text-basalt">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>NEW YORK SOHO SHOWROOM</span>
                </div>
                <p className="text-sm font-bold text-basalt">424 Broadway, SoHo, NY 10013, USA</p>
                <p className="text-xs text-graphite font-sans">
                  Direct retail fitting diagnostics, seasonal preview releases, and community circular take-back drop-off hub.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section id="contact" className="w-full py-16 bg-basalt text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase font-sans tracking-tight">
              Ready to Experience The Difference?
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-sans max-w-xl mx-auto">
              Explore the 2026 fleet of architectural, cloud-cushioned silhouettes backed by our 30-day wear trial.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#category-catalog"
                className="h-11 px-8 rounded-full bg-safety-orange hover:bg-orange-600 text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <span>Shop The Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#featured-drop"
                className="h-11 px-8 rounded-full border border-stone-700 bg-stone-900/80 hover:bg-stone-800 text-white font-mono-spec text-xs font-semibold uppercase tracking-wider flex items-center justify-center transition-all shadow-xs"
              >
                <span>The Daily Runner</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
