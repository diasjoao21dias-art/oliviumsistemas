import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { services, site } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";

const quickTopics = [...services.map((s) => s.title), "Outro assunto"];

export default function WhatsAppDock() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [note, setNote] = useState("");
  const reduce = useReducedMotion();

  const message = [
    topic ? `Olá! Tenho interesse em: ${topic}.` : site.defaultMessage,
    note.trim(),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* Desktop — vertical magnetic bar on the right edge */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Iniciar projeto pelo WhatsApp"
          className="group flex w-[54px] flex-col items-center gap-3 rounded-l-2xl border border-r-0 border-white/10 bg-[#0a0c0e]/85 py-6 backdrop-blur-xl transition-all duration-500 hover:w-[62px] hover:border-primary/50"
        >
          <MessageCircle className="h-5 w-5 text-primary" />
          <span
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/80 transition-colors group-hover:text-white"
            style={{ writingMode: "vertical-rl" }}
          >
            Iniciar projeto
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
        </button>
      </div>

      {/* Mobile — floating action button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary shadow-[0_10px_30px_-6px_rgba(0,163,255,0.8)] lg:hidden"
      >
        <MessageCircle className="h-6 w-6 text-[#0a0c0e]" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="veil"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              role="dialog"
              aria-label="Conversar com a Olivium"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-[420px] flex-col border-l border-white/10 bg-[#0b0e11]/95 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7 sm:py-6">
                <div>
                  <p className="tech-label">Direct link</p>
                  <h2 className="mt-1 font-heading text-xl text-white sm:text-2xl">Vamos conversar</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-primary/60"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-7">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Escolha o assunto e escreva o que você precisa. A conversa abre direto no
                  WhatsApp da Olivium, com o contexto já preenchido.
                </p>

                <p className="tech-label mt-6 sm:mt-8">Sobre o que vamos falar?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickTopics.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item === topic ? "" : item)}
                      className={`rounded-full border px-3.5 py-2 text-[13px] transition ${
                        item === topic
                          ? "border-primary bg-primary/15 text-white"
                          : "border-white/10 text-muted-foreground hover:border-primary/50 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <p className="tech-label mt-6 sm:mt-8">Seu contexto</p>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  placeholder="Ex.: tenho uma clínica em Uberlândia e quero um site com agendamento."
                  className="field mt-4 resize-none"
                />

                <a
                  href={whatsappUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a0c0e] transition hover:shadow-[0_0_30px_8px_rgba(0,163,255,0.3)] sm:mt-7 sm:py-4"
                >
                  <Send className="h-4 w-4" /> Abrir WhatsApp
                </a>

                <div className="mt-7 space-y-2 border-t border-white/5 pt-6 text-sm text-muted-foreground">
                  <p>{site.whatsappDisplay}</p>
                  <p>{site.hours}</p>
                  <p>{site.email}</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}