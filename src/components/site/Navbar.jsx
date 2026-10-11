import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/site/Logo";
import { navLinks } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-white/10 bg-[#0a0c0e]/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container-power flex h-16 items-center justify-between gap-4 sm:h-[74px] sm:gap-6">
        <Logo onNavigate={() => setOpen(false)} />

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                    active ? "text-white" : "text-muted-foreground hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary shadow-[0_0_10px_2px_rgba(0,163,255,0.7)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0a0c0e] transition-all duration-300 hover:shadow-[0_0_28px_6px_rgba(0,163,255,0.35)] lg:inline-flex"
          >
            Pedir orçamento
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-primary/50 sm:h-11 sm:w-11 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[#0a0c0e]/97 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-power grid gap-0.5 py-4 sm:gap-1 sm:py-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="flex items-center justify-between border-b border-white/5 py-3 font-heading text-[17px] text-white/90 transition hover:text-primary sm:py-3.5 sm:text-lg"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a0c0e] sm:py-4"
            >
              Pedir orçamento no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
