import React from "react";
import { Image } from "@/components/ui/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, horizontal = false }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-primary/40 ${
        horizontal ? "w-[85vw] shrink-0 sm:w-[560px]" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image_url}
          alt={`Projeto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/25 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
          {project.category}
        </span>
        {project.year && (
          <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.22em] text-white/60">
            {project.year}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-heading text-[19px] font-semibold leading-tight text-white sm:text-[22px]">
          {project.title}
        </h3>
        {project.client && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {project.client}
          </p>
        )}
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{project.summary}</p>

        {project.highlights?.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-white/5 pt-4 sm:mt-6 sm:gap-4 sm:pt-5">
            {project.highlights.slice(0, 2).map((highlight) => (
              <div key={highlight}>
                <dd className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                  {highlight}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {project.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.project_url && (
          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary"
          >
            Visitar projeto <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}