# ⚙️ Configurações do Render - Cola Rápida

Use estas configurações ao criar o Static Site no Render:

---

## 🔧 Build Settings

| Campo | Valor |
|-------|-------|
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Branch** | `main` |

---

## 🔐 Environment Variables (Opcional - só se usar EmailJS)

Adicione estas 3 variáveis em **Environment** → **Add Environment Variable**:

```
VITE_EMAILJS_SERVICE_ID = seu_service_id_do_emailjs
VITE_EMAILJS_TEMPLATE_ID = seu_template_id_do_emailjs
VITE_EMAILJS_PUBLIC_KEY = sua_public_key_do_emailjs
```

**Onde conseguir?** Veja o arquivo `CONFIGURACAO_EMAIL.md`

---

## ✅ Isso é tudo!

Com essas configurações, o Render vai:
1. Instalar as dependências (npm install)
2. Fazer o build do projeto (npm run build)
3. Publicar a pasta `dist/` como site
4. Gerar uma URL: `https://seu-site.onrender.com`

---

## 🚀 Tempo estimado

- **Primeiro deploy**: 3-5 minutos
- **Deploys futuros**: 2-3 minutos (automático ao fazer push)

---

**Boa sorte! 🎉**
