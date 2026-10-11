import React from "react";
import { MapPin, Compass, Layers, Users } from "lucide-react";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import ProcessSection from "@/components/home/ProcessSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { segments, site, stats } from "@/lib/siteData";

const values = [
  {
    icon: Compass,
    title: "Diagnóstico antes da solução",
    text: "Entendemos o negócio e o problema real antes de escolher a tecnologia. Nada de projeto genérico.",
  },
  {
    icon: Layers,
    title: "Sob medida de verdade",
    text: "Cada entrega é desenhada para a rotina da sua equipe — inclusive nos detalhes que ninguém vê.",
  },
  {
    icon: Users,
    title: "Parceria que continua",
    text: "Publicar é o começo. Acompanhamos, corrigimos e evoluímos o projeto conforme a empresa cresce.",
  },
];

export default function Sobre() {
  useSeo({
    title: "Sobre a Olivium Tecnologia",
    description:
      "Empresa de tecnologia em Monte Carmelo, MG, com atendimento nacional. Desenvolvemos sites, sistemas e soluções em nuvem sob medida para empresas e profissionais.",
    path: "/sobre",
  });

  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        breadcrumb="Sobre"
        image="https://media.base44.com/images/public/6acac4c5da7b1aec3ab7331a/58f60446e_generated_image.png"
        title="Perto de você. Onde estiver."
        description="A tecnologia faz mais sentido quando resolve um problema de verdade."
      />

      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-power grid gap-10 sm:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="tech-label flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> {site.city}
              </p>
              <h2 className="display mt-4 text-[clamp(1.7rem,7vw,2rem)] font-semibold text-white sm:mt-6 sm:text-[clamp(2rem,3.8vw,3rem)]">
                Conectados com todo o Brasil.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-6 sm:text-[17px]">
                <p>
                  A Olivium desenvolve soluções a partir do que a sua empresa precisa. Unimos criação
                  de sites, desenvolvimento de sistemas e consultoria digital para conectar presença,
                  processos e gestão em um mesmo lugar.
                </p>
                <p>
                  Estamos em Monte Carmelo, no Triângulo Mineiro, com atendimento nacional e projetos
                  para diferentes segmentos. O jeito de trabalhar é simples: conversa franca,
                  escopo claro e acompanhamento em cada etapa.
                </p>
                <p>
                  Nada de entregar um site bonito que ninguém encontra ou um sistema que a equipe não
                  usa. O objetivo é sempre o mesmo — tecnologia que simplifica a rotina e ajuda a
                  empresa a crescer.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <p className="tech-label">Soluções para diferentes negócios</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {segments.map((segment) => (
                    <li
                      key={segment}
                      className="rounded-full border border-white/10 px-4 py-2 text-[13.5px] text-white/75"
                    >
                      {segment}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:mt-8 sm:gap-6 sm:pt-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-[22px] font-semibold text-white sm:text-[26px]">{stat.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#080a0c] py-14 sm:py-20 md:py-28">
        <div className="container-power">
          <SectionHeading
            index="01"
            eyebrow="Como pensamos"
            title="Três princípios que guiam cada projeto."
          />
          <div className="mt-9 grid gap-px md:mt-14 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} className="h-full">
                <div className="h-full border-t border-white/10 pt-6 md:px-8 md:pt-8 md:first:pl-0">
                  <value.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-heading text-[19px] font-semibold text-white sm:mt-6 sm:text-[21px]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <FaqSection index="02" />
      <CtaBand
        title="Vamos conversar sobre a sua empresa?"
        description="Sem formulário longo: uma conversa no WhatsApp já basta para entender o cenário."
        message="Olá! Conheci a Olivium pelo site e quero conversar sobre o meu negócio."
      />
    </>
  );
}
