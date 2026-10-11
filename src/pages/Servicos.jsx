import React from "react";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/site/CtaBand";

export default function Servicos() {
  useSeo({
    title: "Serviços: sites, sistemas, lojas virtuais e nuvem",
    description:
      "Conheça as soluções da Olivium: sites e landing pages, sistemas personalizados, lojas virtuais, aplicativos web, suporte e evolução e hospedagem em nuvem.",
    path: "/servicos",
  });

  return (
    <>
      <PageHero
        eyebrow="Serviços"
        breadcrumb="Serviços"
        title="Soluções digitais por completo, sem sobra e sem falta."
        description="Seis frentes de trabalho que se combinam conforme o momento da sua empresa — do primeiro site à operação integrada em nuvem."
      />
      <ServicesSection />
      <ProcessSection />
      <FaqSection index="03" />
      <CtaBand
        title="Qual dessas soluções resolve o seu problema hoje?"
        description="Conte o seu cenário e a gente indica o caminho mais direto — sem empurrar projeto grande para problema pequeno."
        message="Olá! Vi os serviços no site da Olivium e quero entender qual solução faz sentido para minha empresa."
      />
    </>
  );
}
