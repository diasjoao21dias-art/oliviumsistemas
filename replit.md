# Olivium Sistemas - Website

## 📋 Visão Geral

Site institucional da Olivium Sistemas, empresa de desenvolvimento de software em Patrocínio MG.

**URL:** https://oliviumsistemas.com.br  
**Hospedagem:** Render  
**Tecnologia:** React + Vite  
**Framework CSS:** CSS customizado com animações

---

## 🚀 Estrutura do Projeto

```
├── public/
│   ├── sitemap.xml          # Mapa do site para SEO
│   ├── robots.txt           # Instruções para bots de busca
│   ├── portfolio/           # Imagens do portfólio
│   └── favicons/            # Ícones do site
├── src/
│   ├── components/          # Componentes React
│   ├── pages/               # Páginas (HomePage, Termos, Privacidade)
│   ├── animations.css       # Animações globais
│   └── main.jsx             # Entry point
└── index.html               # HTML principal com meta tags SEO
```

---

## 🎯 Recursos do Site

### Seções Principais
- **Hero:** Apresentação com animações 3D
- **Serviços:** 6 serviços principais (Sistemas, Sites, E-commerce, etc)
- **Setores:** Indústrias atendidas
- **Portfólio:** Projetos realizados
- **Depoimentos:** Avaliações de clientes
- **FAQ:** Perguntas frequentes
- **Calculadora de Orçamento:** Estimativa de preço
- **Contato:** Formulário com EmailJS

### Funcionalidades
- ✨ Animações suaves e modernas
- 💬 Chatbot integrado
- 📱 WhatsApp button flutuante
- 🎨 Elementos 3D animados
- 📊 Contador animado de estatísticas
- 🚀 Performance otimizada

---

## 🔧 Alterações Recentes (12/01/2025)

### SEO - Otimizações Implementadas

#### 1. **Meta Tags Atualizadas**
- ✅ Title otimizado: "Olivium Sistemas - Desenvolvimento de Sistemas e Sites em Patrocínio MG"
- ✅ Description melhorada com call-to-action
- ✅ Keywords incluindo "olivium sistemas" como primeira palavra
- ✅ Canonical URL corrigido (.com.br)
- ✅ Robots meta tag com `max-snippet` e `max-image-preview`

#### 2. **Arquivos Criados para SEO**
- ✅ `public/sitemap.xml` - Mapa do site com 8 URLs
- ✅ `public/robots.txt` - Configuração de rastreamento

#### 3. **Open Graph / Social Media**
- ✅ URLs corrigidas para .com.br
- ✅ Imagens com URL completa
- ✅ Títulos e descrições otimizadas

#### 4. **Dados Estruturados (Schema.org)**
- ✅ LocalBusiness já implementado
- ✅ URLs atualizadas para .com.br
- ✅ Informações completas (telefone, endereço, horários)

### Animações Corrigidas

#### Problema Resolvido
As 3 caixinhas flutuantes do Hero (Desenvolvimento Web, Deploy, Performance) paravam de animar após algum tempo.

#### Solução Implementada
- ✅ Adicionado `!important` em todas as animações CSS
- ✅ Adicionado `will-change` para melhor performance
- ✅ Removido conflito com ScrollAnimations
- ✅ Garantido loop infinito das animações

#### Animações Ativas
- Flutuação vertical dos cards (`floatCard`)
- Barra de progresso pulsante (`progressBar`)
- Ponto verde piscante (`blink`)
- Gradiente animado no +250% (`gradientFlow`)

---

## 📊 Próximos Passos (SEO)

### Ação Imediata
1. [ ] Deploy das alterações no GitHub/Render
2. [ ] Verificar sitemap.xml e robots.txt no ar
3. [ ] Cadastrar no Google Search Console
4. [ ] Enviar sitemap ao Google
5. [ ] Solicitar indexação manual

### Curto Prazo (1 semana)
1. [ ] Criar Google Meu Negócio
2. [ ] Adicionar fotos da empresa
3. [ ] Compartilhar site nas redes sociais

### Médio Prazo (1 mês)
1. [ ] Conseguir primeiras avaliações no Google
2. [ ] Cadastrar em diretórios de empresas
3. [ ] Criar conteúdo para blog (opcional)

**Consultar:** `GUIA_SEO_GOOGLE.md` para instruções detalhadas

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

---

## 🔧 Alterações Recentes (15/03/2026)

### SEO Avançado - Otimizações de Nível Sênior

#### 1. **Meta Tags Reforçadas**
- ✅ Meta description reformulada com palavras-chave de cauda longa e call-to-action
- ✅ Keywords expandidas com termos hiperlocais (bairro, cidade, região)
- ✅ `og:image:width`, `og:image:height`, `og:image:alt` adicionados
- ✅ `twitter:image:alt` adicionado
- ✅ Geo tags adicionadas (`geo.region`, `geo.placename`, `geo.position`, `ICBM`)
- ✅ `max-video-preview:-1` adicionado ao robots

#### 2. **Structured Data (JSON-LD) — Múltiplos Schemas**
- ✅ `ProfessionalService` enriquecido com `@id`, `logo`, `foundingDate`, `numberOfEmployees`, `postalCode`
- ✅ `areaServed` com entidades nomeadas (City, AdministrativeArea, State) linkadas ao Wikidata
- ✅ `hasOfferCatalog` com 6 serviços detalhados como `Offer > Service`
- ✅ `WebSite` schema com referência ao publisher (conectado ao negócio via `@id`)
- ✅ `FAQPage` schema com todas as 8 perguntas → rich snippets no Google
- ✅ `BreadcrumbList` schema com 4 níveis de navegação

#### 3. **Sitemap Corrigido**
- ✅ Removidas âncoras `#services`, `#portfolio` etc. (Google não indexa hash URLs)
- ✅ `lastmod` atualizado para 2026-03-15
- ✅ Namespace XSD adicionado para conformidade W3C

---

## 📞 Contato

- **Telefone/WhatsApp:** (34) 99825-0458
- **Email:** dom_dias21@hotmail.com
- **Endereço:** Rua Secundino Farias Tavares, 555, Patrocínio MG

---

## 📝 Notas Técnicas

### Performance
- Lazy loading de componentes pesados
- Code splitting configurado
- Imagens otimizadas
- Cache control para assets

### Compatibilidade
- Mobile-first design
- Cross-browser compatible
- Animações com fallback para reduced motion

### Segurança
- HTTPS habilitado
- Formulário com validação
- EmailJS para emails seguros

---

**Última atualização:** 12/01/2025  
**Versão:** 1.1.0 (SEO Update)
