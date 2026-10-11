import React from "react";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          {index && (
            <span className={cn("font-mono text-[11px]", light ? "text-slate-500" : "text-muted-foreground")}>
              {index}
            </span>
          )}
          <span className="h-px w-10 pulse-line" />
          <span className="tech-label">{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={cn(
            "display mt-5 text-balance text-[clamp(1.8rem,7.8vw,2.05rem)] font-semibold sm:mt-6 sm:text-[clamp(2.1rem,4.6vw,3.6rem)]",
            light ? "text-[#0a0c0e]" : "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-[15px] leading-relaxed sm:mt-6 sm:text-[17px]",
              light ? "text-slate-600" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
