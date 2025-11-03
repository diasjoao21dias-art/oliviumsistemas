# 🚀 Início Rápido - Deploy em 3 Passos

## 1️⃣ GitHub (5 minutos)

```bash
git init
git add .
git commit -m "Projeto Olivium Sistemas"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

> Substitua `SEU-USUARIO` e `SEU-REPO` pelos seus dados

---

## 2️⃣ Render (3 minutos)

1. Acesse [render.com](https://render.com)
2. Clique: **New +** → **Static Site**
3. Selecione seu repositório
4. Preencha:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Clique: **Create Static Site**

---

## 3️⃣ Pronto! 🎉

Aguarde 3-5 minutos e seu site estará online em:
```
https://seu-site.onrender.com
```

---

## 📧 Formulário de Contato (Opcional)

Se quiser usar o formulário, adicione no Render em **Environment**:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Veja detalhes em: `CONFIGURACAO_EMAIL.md`

---

## ❓ Precisa de mais detalhes?

📖 Leia o guia completo: **[DEPLOY_RENDER.md](DEPLOY_RENDER.md)**

---

**É isso! Simples assim! 🚀✨**
