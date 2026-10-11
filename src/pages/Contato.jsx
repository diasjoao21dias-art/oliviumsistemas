import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import FaqSection from "@/components/home/FaqSection";
import { services, site } from "@/lib/siteData";
import { whatsappUrl, mailtoUrl } from "@/lib/whatsapp";

const initialForm = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  useSeo({
    title: "Contato: fale com a Olivium",
    description:
      "Fale com a Olivium Tecnologia pelo WhatsApp (34) 99921-4295 ou envie uma mensagem pelo formulário. Atendimento de segunda a sexta, das 8h às 18h.",
    path: "/contato",
  });

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    try {
      const response = await base44.functions.invoke("submitContact", {
        ...form,
        source: "Formulário do site",
      });
      if (response?.data?.success) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        setStatus("error");
        setFeedback(response?.data?.error || "Não foi possível enviar agora. Tente pelo WhatsApp.");
      }
    } catch (error) {
      setStatus("error");
      setFeedback(
        error?.response?.data?.error ||
          "Não foi possível enviar agora. Fale com a gente pelo WhatsApp, por favor."
      );
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contato"
        breadcrumb="Contato"
        title="Conte o que a sua empresa precisa."
        description="Responda o essencial ou fale direto no WhatsApp — o caminho mais rápido para começar."
      />

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-power grid gap-9 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <Reveal>
                <div className="glass rounded-3xl p-6 text-center sm:p-10">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <h2 className="mt-5 font-heading text-[22px] font-semibold text-white sm:mt-6 sm:text-[26px]">
                    Mensagem enviada!
                  </h2>
                  <p className="mt-4 text-[16px] text-muted-foreground">
                    Recebemos o seu contato e vamos responder em horário comercial, das 8h às 18h.
                    Se preferir adiantar, é só chamar no WhatsApp.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] sm:px-7 sm:py-4 text-[#0a0c0e]"
                    >
                      <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] sm:px-7 sm:py-4 text-white transition hover:border-primary hover:text-primary"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
                  <h2 className="font-heading text-[21px] font-semibold text-white sm:text-[24px]">
                    Formulário de contato
                  </h2>
                  <p className="mt-3 text-[15px] text-muted-foreground">
                    Campos com * são obrigatórios. Quanto mais detalhe, melhor a nossa resposta.
                  </p>

                  <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Nome *
                      </span>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Como podemos te chamar?"
                        className="field mt-3"
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        E-mail
                      </span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="seunome@empresa.com.br"
                        className="field mt-3"
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Telefone / WhatsApp
                      </span>
                      <input
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="(34) 90000-0000"
                        className="field mt-3"
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Empresa
                      </span>
                      <input
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Nome da sua empresa"
                        className="field mt-3"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        O que você precisa?
                      </span>
                      <select value={form.service} onChange={update("service")} className="field mt-3">
                        <option value="">Selecione uma opção</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Outro assunto">Outro assunto</option>
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Mensagem *
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Conte um pouco do seu negócio e do que precisa melhorar."
                        className="field mt-3 resize-none"
                      />
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-[14px] text-red-300">
                      {feedback}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e] transition hover:shadow-[0_0_30px_8px_rgba(0,163,255,0.3)] disabled:opacity-60 sm:px-8 sm:py-4"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Enviando
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Enviar mensagem
                        </>
                      )}
                    </button>
                    <p className="text-[13px] text-muted-foreground">
                      Seus dados são usados apenas para responder este contato.
                    </p>
                  </div>
                </form>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-primary/40 bg-primary/[0.07] p-5 transition hover:border-primary sm:p-7"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                      WhatsApp · resposta mais rápida
                    </span>
                    <span className="mt-2 block font-heading text-[22px] text-white">
                      {site.whatsappDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={mailtoUrl("Contato pelo site da Olivium")}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-primary/40 sm:p-7"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      E-mail
                    </span>
                    <span className="mt-2 block break-all font-heading text-[17px] text-white">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Onde estamos
                    </span>
                    <span className="mt-2 block font-heading text-[17px] text-white">{site.city}</span>
                    <span className="mt-1 block text-[14px] text-muted-foreground">{site.region}</span>
                  </span>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Atendimento
                    </span>
                    <span className="mt-2 block font-heading text-[17px] text-white">{site.hours}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection index="01" />
    </>
  );
}
