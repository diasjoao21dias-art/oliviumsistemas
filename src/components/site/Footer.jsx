import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { logotipo } from "@/components/site/Logo";
import { Image } from "@/components/ui/image";
import { navLinks, services, site } from "@/lib/siteData";
import { whatsappUrl, mailtoUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#07090b]">
      <div className="container-power grid gap-10 py-14 sm:gap-14 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link
            to="/"
            aria-label={`${site.fullName} — página inicial`}
            className="inline-block transition-opacity duration-300 hover:opacity-90"
          >
            <Image
              src={logotipo}
              alt={`Logotipo ${site.fullName}`}
              originWidth={1254}
              originHeight={1254}
              fittingType="fit"
              className="w-44 sm:w-56"
            />
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
            Criamos sites, lojas virtuais e sistemas sob medida para simplificar a operação e
            fortalecer a presença digital de empresas de todo o Brasil.
          </p>
          <div className="mt-7 flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" /> {site.city}
            </span>
            <span className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary" /> {site.hours}
            </span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="tech-label">Navegar</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-[15px] text-muted-foreground transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="tech-label">Soluções</h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="text-[15px] text-muted-foreground transition hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="tech-label">Contato direto</h3>
          <div className="mt-5 space-y-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-primary/50"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  WhatsApp
                </span>
                <span className="font-heading text-lg text-white">{site.whatsappDisplay}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={mailtoUrl("Contato pelo site da Olivium")}
              className="flex items-center gap-3 text-[15px] text-muted-foreground transition hover:text-primary"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a
              href={whatsappUrl("Olá! Vim pelo site da Olivium e quero conversar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
            >
              Iniciar conversa <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-power flex flex-col gap-3 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.</p>
          <p className="font-mono uppercase tracking-[0.24em]">
            {site.region}
          </p>
        </div>
      </div>
    </footer>
  );
}