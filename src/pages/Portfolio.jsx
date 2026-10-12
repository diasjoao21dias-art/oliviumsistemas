import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import ProjectCard from "@/components/site/ProjectCard";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";

const CATEGORIES = [
  "Todos",
  "Site institucional",
  "Loja virtual",
  "Sistema personalizado",
  "Aplicativo web",
  "Landing page",
  "Soluções em nuvem",
];

export default function Portfolio() {
  const [category, setCategory] = useState("Todos");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useSeo({
    title: "Portfólio de projetos",
    description:
      "Sites, lojas virtuais e sistemas desenvolvidos pela Olivium Tecnologia para empresas de diferentes segmentos em todo o Brasil.",
    path: "/portfolio",
  });

  useEffect(() => {
    let active = true;
    setLoading(true);
    const query = category === "Todos" ? {} : { category };
    base44.entities.Project.filter(query, { sort: "order", limit: 60 })
      .then((page) => active && setProjects(page.items || []))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [category]);

  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        breadcrumb="Portfólio"
        image="https://media.base44.com/images/public/6acac4c5da7b1aec3ab7331a/02ed80de9_generated_image.png"
        title="Projetos construídos com método e propósito."
        description="Cada projeto tem um contexto: o negócio, o público e o resultado esperado. Veja o que já colocamos no mundo."
      />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container-power">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`rounded-full border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] transition sm:px-5 sm:py-3 ${
                    category === item
                      ? "border-primary bg-primary/15 text-white"
                      : "border-white/10 text-muted-foreground hover:border-primary/50 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          {loading ? (
            <div className="mt-9 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[380px] animate-pulse rounded-3xl border border-white/5 bg-white/[0.02] sm:h-[460px]"
                />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:mt-16 sm:px-8 sm:py-16">
              <p className="font-heading text-[20px] text-white">
                Ainda não publicamos projetos nesta categoria.
              </p>
              <p className="mt-3 text-muted-foreground">
                Fale com a gente no WhatsApp para ver exemplos parecidos com o seu caso.
              </p>
            </div>
          ) : (
            <div className="mt-9 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={(i % 3) * 0.07} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Quer ver o seu projeto nesta lista?"
        description="Conte o que a sua empresa precisa e vamos desenhar o caminho junto."
        message="Olá! Vi o portfólio da Olivium e quero conversar sobre um projeto para minha empresa."
      />
    </>
  );
}