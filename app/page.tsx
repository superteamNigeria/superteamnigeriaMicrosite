import { Nav } from "@/components/sections/nav";
import { HeroSection } from "@/components/sections/hero-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductsSection } from "@/components/sections/products-section";
import { EarnSection } from "@/components/sections/earn-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { CtaSection } from "@/components/sections/cta";
import { Metrics } from "@/components/sections/metrics";
import PartnersSection from "@/components/ui/partners-section";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] scroll-smooth pt-14">
      <Nav />
      <HeroSection />
      <GallerySection />
      <Metrics />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <EarnSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
