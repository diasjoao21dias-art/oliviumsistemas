import React from "react";
import { Cloud, Headphones, ShieldCheck } from "lucide-react";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import PlanCard from "@/components/site/PlanCard";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/site/CtaBand";
import { plans } from "@/lib/siteData";

const extras = [
  {
    icon: Cloud,
    title: "Hospedagem e domínio",
    text: "Infraestrutura em nuvem, registro de domínio, e-mails profissionais e certificado SSL sob responsabilidade da Olivium.",
  },
  {
    icon: Headphones,
    title: "Suporte contínuo",
    text: "Atualizações, correções, backups e pequenas melhorias todo mês, com atendimento direto pelo WhatsApp.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e monitoramento",
    text: "Acompanhamento de disponibilidade e atualizações de segurança para o projeto não parar.",
  },
];

export default function Planos() {
  useSeo({
    title: "Planos e escopos de projeto",
    description:
      "Compare os escopos de projeto da Olivium Tecnologia: presença digital, crescimento e operação. Valores definidos na proposta conforme o seu projeto.",
    path: "/planos",
  });

  return (
    <>
      <PageHero
        eyebrow="Planos e preços"
        breadcrumb="Planos"
        title="Escopos que mostram exatamente o que está incluído."
        description="Sem preço engessado e sem surpresa: você escolhe o nível de escopo e recebe uma proposta ajustada ao seu projeto."
      />

      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-power">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                <PlanCard plan={plan} detailed />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-3xl text-center text-[15px] leading-relaxed text-muted-foreground sm:mt-10">
              Os planos descrevem scope e nível de acompanhamento — não valores fixos. O investimento
              depende do número de páginas, das integrações e do prazo. Na conversa, entendemos o
              cenário e enviamos a proposta com o valor e o cronograma.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#080a0c] py-14 sm:py-20 md:py-28">
        <div className="container-power">
          <SectionHeading
            index="01"
            eyebrow="Serviços complementares"
            title="O que pode acompanhar o seu projeto."
            description="Itens que entram conforme a necessidade — sempre definidos na proposta."
          />
          <div className="mt-9 grid gap-px md:mt-14 md:grid-cols-3">
            {extras.map((extra, i) => (
              <Reveal key={extra.title} delay={i * 0.08} className="h-full">
                <div className="h-full border-t border-white/10 pt-6 md:px-8 md:pt-8 md:first:pl-0">
                  <extra.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-heading text-[19px] font-semibold text-white sm:mt-6 sm:text-[21px]">
                    {extra.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4">
                    {extra.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection index="02" />
      <CtaBand
        title="Peça uma proposta com o seu escopo."
        description="Conte o tamanho do projeto e o prazo desejado — a resposta volta com valor e cronograma."
        message="Olá! Vi os planos no site da Olivium e quero uma proposta para o meu projeto."
      />
    </>
  );
}
