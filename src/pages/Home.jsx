import React from "react";
import useSeo from "@/lib/useSeo";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import PlansPreview from "@/components/home/PlansPreview";
import BlogPreview from "@/components/home/BlogPreview";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/site/CtaBand";

export default function Home() {
  useSeo({
    title: "Sites e sistemas sob medida",
    description:
      "A Olivium Tecnologia cria sites, lojas virtuais e sistemas personalizados para empresas de todo o Brasil. Fale com a gente pelo WhatsApp e peça um orçamento.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsPreview />
      <PlansPreview />
      <BlogPreview />
      <FaqSection />
      <CtaBand />
    </>
  );
}
