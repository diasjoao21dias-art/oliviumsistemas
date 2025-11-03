# ✅ Checklist - Preparar Deploy no Render

Use este checklist para garantir que não vai esquecer nada!

---

## Antes de começar

- [ ] Tenho conta no GitHub
- [ ] Tenho conta no Render
- [ ] (Opcional) Tenho conta no EmailJS se for usar o formulário

---

## 1️⃣ GitHub

- [ ] Criei o repositório no GitHub
- [ ] Copiei a URL do repositório
- [ ] Executei `git init` (se necessário)
- [ ] Executei `git add .`
- [ ] Executei `git commit -m "Projeto inicial"`
- [ ] Executei `git remote add origin https://github.com/...`
- [ ] Executei `git push -u origin main`
- [ ] ✅ Código aparece no GitHub!

---

## 2️⃣ Render

- [ ] Acessei render.com
- [ ] Cliquei em "New +" → "Static Site"
- [ ] Conectei minha conta do GitHub
- [ ] Selecionei o repositório correto
- [ ] Configurei:
  - [ ] **Build Command**: `npm install && npm run build`
  - [ ] **Publish Directory**: `dist`
- [ ] (Opcional) Adicionei variáveis de ambiente do EmailJS:
  - [ ] `VITE_EMAILJS_SERVICE_ID`
  - [ ] `VITE_EMAILJS_TEMPLATE_ID`
  - [ ] `VITE_EMAILJS_PUBLIC_KEY`
- [ ] Cliquei em "Create Static Site"
- [ ] Aguardei o build finalizar
- [ ] ✅ Site está no ar!

---

## 3️⃣ Testar

- [ ] Acessei a URL do Render
- [ ] Página carregou corretamente
- [ ] Menu funciona
- [ ] Links funcionam
- [ ] Imagens aparecem
- [ ] (Opcional) Testei o formulário de contato
- [ ] ✅ Tudo funcionando!

---

## 📝 Informações Úteis

**URL do repositório GitHub:**
```
https://github.com/SEU-USUARIO/SEU-REPOSITORIO
```

**URL do site no Render:**
```
https://SEU-SITE.onrender.com
```

**Comandos Git para atualizações futuras:**
```bash
git add .
git commit -m "Descrição da atualização"
git push
```

---

## 🎉 Deploy Concluído!

Parabéns! Seu site está online e acessível para o mundo todo! 🚀
