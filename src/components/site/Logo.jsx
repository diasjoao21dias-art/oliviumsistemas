import React from "react";
import { Link } from "react-router-dom";
import { site } from "@/lib/siteData";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";

export const logotipo =
  "https://media.base44.com/images/public/6acac4c5da7b1aec3ab7331a/23adf1847_LogofuturistaOliviumTecnologia.png";

export default function Logo({ className = "", onNavigate }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      aria-label={`${site.fullName} — página inicial`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative h-9 w-9 shrink-0 transition-transform duration-500 group-hover:scale-105 sm:h-11 sm:w-11">
        <Image
          src={logotipo}
          alt={`Logotipo ${site.fullName}`}
          fittingType="fit"
          className="h-full w-full"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[17px] font-semibold tracking-[-0.02em] text-white sm:text-[19px]">
          Olivium
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.34em] text-muted-foreground">
          Tecnologia
        </span>
      </span>
    </Link>
  );
}