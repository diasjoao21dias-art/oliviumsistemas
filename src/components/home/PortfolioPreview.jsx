import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionHeading from "@/components/site/SectionHeading";
import ProjectCard from "@/components/site/ProjectCard";
import Reveal from "@/components/site/Reveal";

export default function PortfolioPreview() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    base44.entities.Project.filter({}, { sort: "order", limit: 6 })
      .then((page) => active && setProjects(page.items || []))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  if (!loading && projects.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="container-power">
        <div className="flex flex-col justify-between gap-5 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow="Portfólio"
            title="Projetos que já estão no mundo."
            description="Cada entrega é uma prova de como tecnologia bem feita muda a rotina de quem usa."
          />
          <Reveal delay={0.1}>
            <Link
              to="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary sm:px-7 sm:py-4"
            >
              Ver portfólio completo <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 hide-scrollbar sm:mt-14 sm:gap-6 sm:px-8 sm:pb-6 md:px-12 lg:px-20">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-[360px] w-[85vw] shrink-0 animate-pulse rounded-3xl border border-white/5 bg-white/[0.02] sm:h-[430px] sm:w-[520px]"
              />
            ))
          : projects.map((project) => (
              <div key={project.id} className="snap-start">
                <ProjectCard project={project} horizontal />
              </div>
            ))}
      </div>
    </section>
  );
}
