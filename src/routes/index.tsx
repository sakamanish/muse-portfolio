import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { AboutSection } from "@/components/AboutSection";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <AboutSection />
      <Gallery />
      <Testimonials />
      <WhatsAppCTA />
    </>
  );
}
