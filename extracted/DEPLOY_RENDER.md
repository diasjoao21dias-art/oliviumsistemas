# 🚀 Guia de Deploy no Render - Passo a Passo

Este guia vai te ajudar a publicar seu site no Render de forma rápida e gratuita!

---

## ✅ Pré-requisitos

1. Conta no [GitHub](https://github.com) (gratuita)
2. Conta no [Render](https://render.com) (gratuita)
3. Se for usar o formulário de contato: conta no [EmailJS](https://www.emailjs.com) (gratuita)

---

## 📦 PASSO 1: Preparar o Código no GitHub

### 1.1 - Criar repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique no botão **"New"** (ou ícone **+** → **"New repository"**)
3. Preencha:
   - **Repository name**: `olivium-sistemas` (ou o nome que preferir)
   - **Description**: `Site profissional da Olivium Sistemas`
   - **Visibility**: Pode ser **Public** ou **Private** (ambos funcionam)
4. **NÃO marque** "Initialize this repository with a README"
5. Clique em **"Create repository"**

### 1.2 - Enviar código para o GitHub

No terminal do Replit (ou seu terminal local), execute os comandos abaixo **um por um**:

```bash
# Configurar o Git (apenas na primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"

# Inicializar o repositório Git (se ainda não estiver inicializado)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Projeto inicial - Site Olivium Sistemas"

# Conectar com seu repositório do GitHub
# SUBSTITUA: seu-usuario e olivium-sistemas pelos seus dados
git remote add origin https://github.com/seu-usuario/olivium-sistemas.git

# Enviar o código
git branch -M main
git push -u origin main
```

> 💡 **Dica**: O GitHub vai pedir seu usuário e senha. Se der erro de autenticação, use um [Personal Access Token](https://github.com/settings/tokens) em vez da senha.

---

## 🌐 PASSO 2: Deploy no Render

### 2.1 - Criar novo Static Site

1. Acesse [render.com](https://render.com) e faça login
2. No dashboard, clique em **"New +"** → **"Static Site"**
3. Conecte sua conta do GitHub se ainda não conectou
4. Selecione o repositório **olivium-sistemas** (ou o nome que você escolheu)

### 2.2 - Configurar o Build

Na tela de configuração, preencha:

| Campo | Valor |
|-------|-------|
| **Name** | `olivium-sistemas` (ou qualquer nome) |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### 2.3 - Configurar Variáveis de Ambiente (OPCIONAL)

⚠️ **Importante**: Só faça isso se você for usar o formulário de contato com EmailJS!

1. Role a página até **"Environment Variables"**
2. Clique em **"Add Environment Variable"**
3. Adicione as 3 variáveis abaixo:

| Key (Nome) | Value (Valor) |
|------------|---------------|
| `VITE_EMAILJS_SERVICE_ID` | Seu Service ID do EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Seu Template ID do EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Sua Public Key do EmailJS |

> 📧 **Como obter as credenciais do EmailJS**: Veja o arquivo `CONFIGURACAO_EMAIL.md` neste projeto

### 2.4 - Finalizar Deploy

1. Clique no botão **"Create Static Site"**
2. Aguarde o build (leva 2-5 minutos)
3. Quando terminar, você verá: ✅ **"Live"**

---

## 🎉 PASSO 3: Acessar seu Site

Após o deploy concluir:

1. Render vai gerar uma URL automática: `https://olivium-sistemas.onrender.com`
2. Clique na URL para abrir seu site
3. **Pronto!** Seu site está no ar! 🚀

---

## 🔧 Atualizações Futuras

Para atualizar o site no futuro:

```bash
# Faça suas alterações nos arquivos
# Depois execute:

git add .
git commit -m "Descrição da atualização"
git push
```

✨ **O Render detecta automaticamente** e faz o redeploy sozinho!

---

## 📝 Domínio Personalizado (OPCIONAL)

Quer usar um domínio próprio tipo `www.oliviumsistemas.com.br`?

1. No Render, vá em **Settings** → **Custom Domains**
2. Clique em **"Add Custom Domain"**
3. Digite seu domínio
4. Configure os DNS conforme as instruções do Render

---

## ⚠️ Troubleshooting (Problemas Comuns)

### ❌ Erro: "Build failed"
- Verifique se o `package.json` está correto
- Certifique-se que commitou todos os arquivos

### ❌ Página em branco
- Verifique se o **Publish Directory** está como `dist`
- Veja os logs do build para identificar erros

### ❌ Formulário de contato não funciona
- Confira se as variáveis de ambiente do EmailJS estão configuradas
- Veja o console do navegador (F12) para erros

---

## 💰 Quanto Custa?

✅ **GRATUITO!** O plano gratuito do Render inclui:
- Sites estáticos ilimitados
- SSL (HTTPS) automático
- Builds automáticos
- 100 GB de largura de banda/mês

---

## 📞 Precisa de Ajuda?

- [Documentação Render](https://render.com/docs/static-sites)
- [Documentação Vite](https://vitejs.dev/guide/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

---

**Boa sorte com seu deploy! 🚀✨**
