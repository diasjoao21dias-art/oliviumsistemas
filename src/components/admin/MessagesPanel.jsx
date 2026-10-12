import React, { useEffect, useState } from "react";
import { Trash2, Mail, MessageCircle, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { whatsappUrl, mailtoUrl } from "@/lib/whatsapp";

const STATUS = ["novo", "em_atendimento", "respondido"];

const statusClass = {
  novo: "border-primary/50 bg-primary/10 text-primary",
  em_atendimento: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  respondido: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
};

export default function MessagesPanel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const page = await base44.entities.ContactMessage.filter({}, { sort: "-created_date", limit: 100 });
      setItems(page.items || []);
    } catch (err) {
      setError(err?.message || "Não foi possível carregar as mensagens.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const changeStatus = async (record, status) => {
    setItems((prev) => prev.map((item) => (item.id === record.id ? { ...item, status } : item)));
    try {
      await base44.entities.ContactMessage.update(record.id, { status });
    } catch (err) {
      setError(err?.message || "Não foi possível atualizar o status.");
      load();
    }
  };

  const remove = async (record) => {
    if (!window.confirm(`Remover a mensagem de ${record.name}?`)) return;
    try {
      await base44.entities.ContactMessage.delete(record.id);
      load();
    } catch (err) {
      setError(err?.message || "Não foi possível remover a mensagem.");
    }
  };

  return (
    <div>
      <h2 className="font-heading text-[22px] font-semibold text-white">Mensagens do formulário</h2>
      <p className="mt-2 text-[14.5px] text-muted-foreground">
        Todo contato enviado pelo site chega aqui e também por e-mail.
      </p>

      {error && (
        <p className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-[14px] text-red-300">
          {error}
        </p>
      )}

      {loading ? (
        <div className="mt-8 space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl border border-white/5 bg-white/[0.02]" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-8 text-center text-muted-foreground sm:mt-8 sm:px-6 sm:py-12">
          Nenhuma mensagem recebida ainda. Os novos contatos aparecem aqui automaticamente.
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {items.map((record) => (
            <li key={record.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-heading text-[18px] text-white">{record.name}</p>
                  <p className="mt-1 text-[13.5px] text-muted-foreground">
                    {[record.email, record.phone, record.company].filter(Boolean).join(" · ") || "sem dados de contato"}
                  </p>
                </div>
                <span
                  className={`rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] ${
                    statusClass[record.status] || statusClass.novo
                  }`}
                >
                  {(record.status || "novo").replace("_", " ")}
                </span>
              </div>

              {record.service && (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {record.service}
                </p>
              )}
              <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-white/80">
                {record.message}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <select
                  value={record.status || "novo"}
                  onChange={(e) => changeStatus(record, e.target.value)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                >
                  {STATUS.map((status) => (
                    <option key={status} value={status}>
                      {status.replace("_", " ")}
                    </option>
                  ))}
                </select>
                {record.phone && (
                  <a
                    href={whatsappUrl(`Olá, ${record.name}! Aqui é a equipe da Olivium.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-primary hover:text-primary"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Responder
                  </a>
                )}
                {record.email && (
                  <a
                    href={mailtoUrl(`Resposta da Olivium para ${record.name}`, "")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-primary hover:text-primary"
                  >
                    <Mail className="h-3.5 w-3.5" /> E-mail
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => remove(record)}
                  className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-destructive hover:text-red-400"
                  aria-label="Remover mensagem"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}