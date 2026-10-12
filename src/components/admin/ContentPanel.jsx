import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Loader2, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const emptyFor = (fields, defaults = {}) =>
  fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]:
        defaults[field.name] ?? (field.type === "switch" ? false : field.type === "list" ? "" : ""),
    }),
    {}
  );

const toForm = (fields, record = {}) =>
  fields.reduce((acc, field) => {
    const value = record[field.name];
    if (field.type === "list") acc[field.name] = Array.isArray(value) ? value.join(", ") : value || "";
    else if (field.type === "switch") acc[field.name] = Boolean(value);
    else acc[field.name] = value ?? "";
    return acc;
  }, {});

const toRecord = (fields, form) =>
  fields.reduce((acc, field) => {
    const value = form[field.name];
    if (field.type === "list") {
      acc[field.name] = String(value || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    } else if (field.type === "switch") {
      acc[field.name] = Boolean(value);
    } else if (field.type === "number") {
      acc[field.name] = value === "" ? 0 : Number(value);
    } else {
      acc[field.name] = value;
    }
    return acc;
  }, {});

export default function ContentPanel({ model, fields, title, description, sort = "-created_date", emptyLabel }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(() => emptyFor(fields));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    const page = await model.filter({}, { sort, limit: 200 });
    setItems(page.items || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyFor(fields));
    setError("");
    setOpen(true);
  };

  const openEdit = (record) => {
    setEditing(record);
    setForm(toForm(fields, record));
    setError("");
    setOpen(true);
  };

  const save = async () => {
    setSaving(true);
    setError("");
    try {
      const payload = toRecord(fields, form);
      if (editing) await model.update(editing.id, payload);
      else await model.create(payload);
      setOpen(false);
      await load();
    } catch (err) {
      setError(
        err?.response?.data?.error ||
          err?.message ||
          "Não foi possível salvar. Confirme se você está logado como administrador."
      );
    } finally {
      setSaving(false);
    }
  };

  const remove = async (record) => {
    if (!window.confirm("Remover este item definitivamente?")) return;
    try {
      await model.delete(record.id);
      await load();
    } catch (err) {
      setError(err?.message || "Não foi possível remover este item.");
    }
  };

  const label = (record, field) => {
    const value = record[field];
    if (Array.isArray(value)) return value.join(" · ");
    if (typeof value === "boolean") return value ? "sim" : "não";
    return value || "—";
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-[22px] font-semibold text-white">{title}</h2>
          <p className="mt-2 text-[14.5px] text-muted-foreground">{description}</p>
        </div>
        <button
          type="button"
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e]"
        >
          <Plus className="h-4 w-4" /> Novo
        </button>
      </div>

      {error && (
        <p className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-[14px] text-red-300">
          {error}
        </p>
      )}

      {loading ? (
        <div className="mt-8 space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 animate-pulse rounded-2xl border border-white/5 bg-white/[0.02]" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-8 text-center text-muted-foreground sm:mt-8 sm:px-6 sm:py-12">
          {emptyLabel || "Nenhum item cadastrado ainda."}
        </p>
      ) : (
        <ul className="mt-8 space-y-3">
          {items.map((record) => (
            <li
              key={record.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5"
            >
              <div className="min-w-0">
                <p className="truncate font-heading text-[17px] text-white">
                  {label(record, fields[0].name)}
                </p>
                <p className="mt-1 truncate text-[13.5px] text-muted-foreground">
                  {fields[1] ? label(record, fields[1].name) : ""}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => openEdit(record)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-primary hover:text-primary"
                  aria-label="Editar"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(record)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-destructive hover:text-red-400"
                  aria-label="Remover"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-white/10 bg-[#0b0e11]">
          <DialogHeader>
            <DialogTitle className="font-heading text-[22px] text-white">
              {editing ? "Editar item" : "Novo item"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              As alterações aparecem no site imediatamente após salvar.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div
                key={field.name}
                className={cn(field.type === "textarea" || field.type === "list" ? "sm:col-span-2" : "")}
              >
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {field.label}
                </label>
                {field.type === "textarea" || field.type === "list" ? (
                  <textarea
                    rows={field.type === "list" ? 2 : 7}
                    value={form[field.name] ?? ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="field mt-3 resize-none"
                  />
                ) : field.type === "switch" ? (
                  <div className="mt-4 flex items-center gap-3">
                    <Switch
                      checked={Boolean(form[field.name])}
                      onCheckedChange={(checked) =>
                        setForm((prev) => ({ ...prev, [field.name]: checked }))
                      }
                    />
                    <span className="text-[14px] text-muted-foreground">
                      {form[field.name] ? "Ativado" : "Desativado"}
                    </span>
                  </div>
                ) : field.type === "select" ? (
                  <select
                    value={form[field.name] ?? ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                    className="field mt-3"
                  >
                    <option value="">Selecione</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
                    value={form[field.name] ?? ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="field mt-3"
                  />
                )}
                {field.hint && (
                  <p className="mt-2 text-[12px] text-muted-foreground">{field.hint}</p>
                )}
              </div>
            ))}
          </div>

          <DialogFooter className="mt-8 gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e] disabled:opacity-60"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Salvar
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}