# Olivium Sistemas - Site Corporativo

## 📋 Visão Geral

Site profissional para a **Olivium Sistemas**, empresa de desenvolvimento de sistemas e sites localizada em Patrocínio/MG.

- **Tecnologias**: React 19 + Vite 7
- **Estilo**: CSS3 moderno com animações
- **Responsivo**: Desktop, Tablet e Mobile

## 🎨 Recursos Principais

### Seções do Site
1. **Hero** - Banner principal com animações e estatísticas
2. **Serviços** - 6 serviços principais com cards interativos
3. **Setores** - 8 áreas de atuação
4. **Portfólio** - Projetos com filtros
5. **Depoimentos** - Avaliações de clientes
6. **FAQ** - Perguntas frequentes
7. **Calculadora de Orçamento** - Ferramenta interativa
8. **Contato** - Formulário com EmailJS

### Componentes Especiais
- **Chatbot** - Assistente virtual
- **WhatsApp Button** - Botão flutuante
- **Elementos 3D** - Formas geométricas animadas
- **Scroll Animations** - Animações ao rolar a página

## 🔧 Mudanças Recentes (03/11/2025)

### Correções de Animações

**Problema identificado**: Animações não estavam sendo exibidas em alguns componentes.

**Causa**: 
- Faltavam classes de animação (`animate-on-scroll`, `animate-fadeInUp`, etc.) em alguns componentes
- Conflito entre definições da classe `.animate-on-scroll` em `index.css` e `animations.css`

**Correções aplicadas**:
1. ✅ Adicionadas classes de animação no componente **Hero.jsx**:
   - `.animate-on-scroll animate-fadeIn` no hero-badge
   - `.animate-on-scroll animate-fadeInUp delay-100` no título
   - `.animate-on-scroll animate-fadeInUp delay-200` na descrição
   - `.animate-on-scroll animate-fadeInUp delay-300` nos botões
   - `.animate-on-scroll animate-fadeInUp delay-400` nas estatísticas
   - `.animate-on-scroll animate-fadeInRight delay-X` nos cards visuais

2. ✅ Adicionadas classes de animação no componente **Services.jsx**:
   - `.animate-on-scroll animate-fadeInUp` no header da seção
   - `.animate-on-scroll animate-scaleIn delay-X` nos cards de serviço

3. ✅ Removido conflito em **index.css**:
   - Removidas propriedades `content-visibility` e `contain-intrinsic-size` da classe `.animate-on-scroll`
   - Mantida apenas a definição em `animations.css` com `opacity: 0`

### Sistema de Animações

O sistema utiliza:
- **IntersectionObserver** para detectar quando elementos entram na viewport
- **Classes CSS** para definir o tipo de animação (fadeIn, fadeInUp, fadeInLeft, fadeInRight, scaleIn)
- **Delays** para criar sequências de animação
- **Efeitos especiais**: Parallax, efeito magnético, cards 3D

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── AnimatedCounter.jsx
│   ├── BudgetCalculator.jsx
│   ├── Chatbot.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Industries.jsx
│   ├── Layout.jsx
│   ├── Portfolio.jsx
│   ├── ScrollAnimations.jsx
│   ├── ScrollToTop.jsx
│   ├── ScrollToTopOnMount.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   ├── VisualElements3D.jsx
│   └── WhatsAppButton.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── PoliticaPrivacidade.jsx
│   └── TermosDeUso.jsx
├── animations.css
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

O servidor roda em `http://localhost:5000`

## 📱 Informações de Contato

- **Empresa**: Olivium Sistemas
- **Localização**: Patrocínio/MG
- **WhatsApp**: +55 (34) 99840-8523
- **Email**: dom_dias21@hotmail.com
- **Endereço**: Rua Secundino Farias Tavares, 555

## 🔗 Links Importantes

- [LinkedIn](https://www.linkedin.com/in/joão-dias-84344b1a9/)
- [Facebook](https://www.facebook.com/share/1BKAqKvwvr/)
- [Instagram](https://www.instagram.com/joaofilhomc)

## 📝 Notas de Desenvolvimento

- O projeto usa **lazy loading** para otimizar performance
- **EmailJS** está configurado para o formulário de contato
- Site está pronto para **deploy no Render** (ver DEPLOY_RENDER.md)
- Todas as animações respeitam `prefers-reduced-motion` para acessibilidade
