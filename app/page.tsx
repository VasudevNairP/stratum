import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecTicker from "@/components/SpecTicker";
import BentoGrid from "@/components/BentoGrid";
import ProductCatalog from "@/components/ProductCatalog";
import MaterialLedger from "@/components/MaterialLedger";
import EmailAcquisition from "@/components/EmailAcquisition";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bone text-basalt selection:bg-basalt selection:text-white">
      {/* Sticky Frosted Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Hotspot Telemetry */}
        <div id="featured-drop">
          <HeroSection />
        </div>

        {/* Technical Spec Ticker Strip */}
        <SpecTicker />

        {/* Glean-Style Bento Grid Engineering Showcase */}
        <BentoGrid />

        {/* Specialized Geometries & Category Filter Tabs */}
        <ProductCatalog />

        {/* Material & Carbon Sustainability Ledger */}
        <MaterialLedger />

        {/* High-Contrast VIP Drop Telemetry Acquisition */}
        <EmailAcquisition />
      </main>

      {/* Footwear Utility Footer */}
      <Footer />
    </div>
  );
}
