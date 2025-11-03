# 📧 Configuração do Sistema de Email

O formulário de contato suporta envio por **Email** (EmailJS) ou **WhatsApp**.

## ⚙️ Configurar EmailJS (Opcional)

Se você não configurar o EmailJS, o sistema automaticamente usa apenas o WhatsApp, que já funciona perfeitamente!

### Passo a Passo para Ativar Emails:

1. **Criar conta no EmailJS**
   - Acesse: https://www.emailjs.com/
   - Crie uma conta gratuita (permite 200 emails/mês grátis)

2. **Configurar Serviço de Email**
   - No dashboard do EmailJS, clique em "Add New Service"
   - Escolha seu provedor (Gmail, Outlook, etc.)
   - Conecte sua conta de email
   - Copie o **Service ID** gerado

3. **Criar Template de Email**
   - Clique em "Email Templates" → "Create New Template"
   - Use este template básico:

```
Assunto: Novo Contato do Site - {{from_name}}

De: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Serviço de Interesse: {{service}}

Mensagem:
{{message}}
```

   - Salve e copie o **Template ID**

4. **Obter Public Key**
   - Vá em "Account" → "General"
   - Copie sua **Public Key**

5. **Configurar no Projeto**
   
   Crie um arquivo `.env` na raiz do projeto:

```bash
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

6. **Reiniciar o Servidor**

```bash
npm run dev
```

## ✅ Pronto!

Agora o formulário pode enviar tanto por **Email** quanto por **WhatsApp**!

### 💡 Nota:
- **Sem configuração**: Funciona apenas com WhatsApp (já está ativo!)
- **Com configuração**: Oferece opção de Email + WhatsApp

---

**Dúvidas?** Entre em contato pelo WhatsApp! 😊
