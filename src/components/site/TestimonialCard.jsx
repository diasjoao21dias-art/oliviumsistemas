import React from "react";
import { Star, Quote } from "lucide-react";

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function TestimonialCard({ testimonial, light = false }) {
  return (
    <figure
      className={`relative flex h-full flex-col justify-between rounded-3xl border p-6 transition-all duration-500 sm:p-8 ${
        light
          ? "border-slate-200 bg-white hover:border-primary/50 hover:shadow-[0_18px_50px_-30px_rgba(0,163,255,0.6)]"
          : "border-white/10 bg-white/[0.02] hover:border-primary/40"
      }`}
    >
      <div>
        <Quote className={`h-7 w-7 ${light ? "text-primary/60" : "text-primary/70"}`} />
        <blockquote
          className={`mt-5 text-[15px] leading-relaxed sm:mt-6 sm:text-[17px] ${
            light ? "text-slate-700" : "text-white/85"
          }`}
        >
          “{testimonial.content}”
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t pt-5 sm:mt-8 sm:gap-4 sm:pt-6"
        style={{ borderColor: light ? "#e2e8f0" : "rgba(255,255,255,0.07)" }}
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-heading text-sm font-semibold text-primary">
          {initials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span className={`block font-heading text-[15px] ${light ? "text-[#0a0c0e]" : "text-white"}`}>
            {testimonial.name}
          </span>
          <span className={`block truncate text-[13px] ${light ? "text-slate-500" : "text-muted-foreground"}`}>
            {[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}
          </span>
        </span>
        <span className="ml-auto flex shrink-0 gap-0.5" aria-label={`${testimonial.rating || 5} de 5`}>
          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}