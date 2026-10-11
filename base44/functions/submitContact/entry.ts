import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

const NOTIFY_EMAIL = "dom_dias21@hotmail.com";

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export default async function (req) {
  try {
    if (req.method !== "POST") {
      return Response.json({ error: "Método não permitido." }, { status: 405 });
    }

    const body = await req.json().catch(() => ({}));
    const name = clean(body?.name, 120);
    const email = clean(body?.email, 160);
    const phone = clean(body?.phone, 40);
    const company = clean(body?.company, 120);
    const service = clean(body?.service, 80);
    const message = clean(body?.message, 2000);
    const source = clean(body?.source, 120);

    if (!name || !message) {
      return Response.json(
        { error: "Informe o seu nome e conte o que você precisa." },
        { status: 400 }
      );
    }
    if (!email && !phone) {
      return Response.json(
        { error: "Informe um e-mail ou um telefone para retornarmos." },
        { status: 400 }
      );
    }
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return Response.json({ error: "O e-mail informado não parece válido." }, { status: 400 });
    }

    const base44 = createClientFromRequest(req);

    const record = await base44.asServiceRole.entities.ContactMessage.create({
      name,
      email,
      phone,
      company,
      service,
      message,
      status: "novo",
      source: source || "Site Olivium",
    });

    const html = `
      <h2>Novo contato pelo site da Olivium</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email || "não informado")}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(phone || "não informado")}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company || "não informada")}</p>
      <p><strong>Assunto:</strong> ${escapeHtml(service || "geral")}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: NOTIFY_EMAIL,
        subject: `Novo contato pelo site: ${name}`,
        body: html,
      });
    } catch (notifyError) {
      console.log("Aviso: não foi possível enviar o e-mail de notificação.", notifyError?.message);
    }

    return Response.json({ success: true, id: record?.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
