export const site = {
  name: "Olivium",
  fullName: "Olivium Tecnologia",
  tagline: "Tecnologia que move o seu negócio.",
  eyebrow: "Ideias reais. Soluções digitais.",
  whatsappNumber: "5534999214295",
  whatsappDisplay: "(34) 99921-4295",
  email: "dom_dias21@hotmail.com",
  city: "Monte Carmelo, MG",
  region: "Triângulo Mineiro · Atendimento nacional",
  hours: "Segunda a sexta, das 8h às 18h",
  defaultMessage:
    "Olá! Vim pelo site da Olivium e quero conversar sobre um projeto.",
};

export const navLinks = [
  { label: "Início", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Depoimentos", path: "/depoimentos" },
  { label: "Planos", path: "/planos" },
  { label: "Blog", path: "/blog" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

export const services = [
  {
    index: "01",
    slug: "sites-landing-pages",
    title: "Sites & landing pages",
    tagline: "Presença que conecta",
    short: "Sua marca bem apresentada, em qualquer tela.",
    description:
      "Sites rápidos, responsivos e preparados para o Google. Do institucional que apresenta a sua empresa à landing page focada em uma campanha específica, tudo construído para gerar contato.",
    features: [
      "Site institucional com páginas sob medida",
      "Landing pages de campanha e lançamento",
      "Blog e área de conteúdos",
      "SEO técnico desde a primeira linha",
      "Integração direta com WhatsApp",
      "Layout responsivo e carregamento leve",
    ],
    whatsapp: "Olá! Quero conversar sobre um site ou landing page para minha empresa.",
  },
  {
    index: "02",
    slug: "sistemas-personalizados",
    title: "Sistemas personalizados",
    tagline: "Gestão sob medida",
    short: "ERPs, CRMs e integrações que acompanham sua rotina.",
    description:
      "Menos tarefas repetitivas, mais controle da operação. Desenvolvemos sistemas que refletem o jeito que a sua empresa realmente trabalha — e evoluem com ela.",
    features: [
      "ERP e CRM sob medida",
      "Dashboards e relatórios gerenciais",
      "Controle de estoque, vendas e financeiro",
      "Automação de processos internos",
      "Integrações com sistemas que você já usa",
      "Níveis de acesso por equipe",
    ],
    whatsapp: "Olá! Tenho interesse em um sistema personalizado para minha empresa.",
  },
  {
    index: "03",
    slug: "lojas-virtuais",
    title: "Lojas virtuais",
    tagline: "Mais caminhos para vender",
    short: "Seu negócio pronto para vender online.",
    description:
      "Catálogo organizado, pagamentos integrados e gestão de produtos em um só lugar. A loja nasce pronta para receber pedidos e para crescer junto com o seu estoque.",
    features: [
      "Catálogo com variações e categorias",
      "Pagamentos e frete integrados",
      "Painel de pedidos e produtos",
      "Cupons, promoções e recuperação de carrinho",
      "Integração com WhatsApp e redes sociais",
      "Base preparada para SEO de produtos",
    ],
    whatsapp: "Olá! Quero um orçamento para uma loja virtual.",
  },
  {
    index: "04",
    slug: "aplicativos-web",
    title: "Aplicativos web",
    tagline: "Experiências sem barreiras",
    short: "Aplicações que aproximam seu negócio dos usuários.",
    description:
      "Experiência fluida no computador e no celular, sem instalar nada. Aplicativos web que atendem clientes, equipes e parceiros com a mesma qualidade.",
    features: [
      "Áreas de login e perfis de usuário",
      "Aplicativos instaláveis (PWA)",
      "Notificações e comunicação em tempo real",
      "Uso em campo, direto do celular",
      "Integração com APIs e serviços externos",
      "Experiência consistente em qualquer tela",
    ],
    whatsapp: "Olá! Tenho interesse em desenvolver um aplicativo web.",
  },
  {
    index: "05",
    slug: "suporte-evolucao",
    title: "Suporte & evolução",
    tagline: "Parceria após a entrega",
    short: "Atualizações, correções e melhorias para manter seu projeto em dia.",
    description:
      "Seu projeto não termina na publicação. Acompanhamos o desempenho, corrigimos o que aparece e evoluímos o que faz diferença — com apoio contínuo ou para uma necessidade pontual.",
    features: [
      "Manutenção contínua ou pontual",
      "Atualizações de segurança",
      "Backups periódicos",
      "Monitoramento de disponibilidade",
      "Melhorias e novas funcionalidades",
      "Suporte por WhatsApp e e-mail",
    ],
    whatsapp: "Olá! Preciso de manutenção e suporte para meu site ou sistema.",
  },
  {
    index: "06",
    slug: "solucoes-em-nuvem",
    title: "Soluções em nuvem",
    tagline: "Estrutura para crescer",
    short: "Hospedagem, migração e infraestrutura com segurança.",
    description:
      "Infraestrutura preparada para acompanhar o crescimento do seu projeto, com segurança, desempenho e flexibilidade — na nossa nuvem ou na sua estrutura atual.",
    features: [
      "Hospedagem em nuvem gerenciada",
      "Migração de sites e sistemas",
      "Registro e gestão de domínios",
      "E-mails profissionais",
      "Certificado SSL e HTTPS",
      "Escalabilidade conforme a demanda",
    ],
    whatsapp: "Olá! Quero saber mais sobre hospedagem e soluções em nuvem.",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const plans = [
  {
    name: "Essencial",
    focus: "Presença digital",
    tagline: "Para quem precisa existir bem no digital.",
    ideal: "Negócios que estão começando ou reformulando a presença atual.",
    features: [
      "Site institucional de até 6 páginas",
      "Design responsivo (celular, tablet e desktop)",
      "Formulário de contato e botão de WhatsApp",
      "Base de SEO: títulos, descrições e estrutura",
      "Textos revisados e imagens otimizadas",
      "1 rodada de ajustes após a entrega",
      "30 dias de suporte à publicação",
    ],
    highlight: false,
  },
  {
    name: "Profissional",
    focus: "Crescimento",
    tagline: "Para quem quer ser encontrado e gerar contatos.",
    ideal: "Empresas que já têm marca e precisam de tráfego e conteúdo.",
    features: [
      "Tudo do Essencial, com até 12 páginas",
      "Blog ou área de conteúdos gerenciável",
      "SEO avançado por página e sitemap",
      "Google Analytics e Search Console",
      "Integração com redes sociais e WhatsApp",
      "3 rodadas de ajustes após a entrega",
      "90 dias de suporte e evolução",
    ],
    highlight: true,
  },
  {
    name: "Escala",
    focus: "Operação",
    tagline: "Para quem precisa de sistema, integração e escala.",
    ideal: "Operações que dependem de processos, dados e automação.",
    features: [
      "Sistema personalizado ou loja virtual completa",
      "Integrações com pagamentos, estoque e ERPs",
      "Áreas de login e níveis de acesso",
      "Dashboards e relatórios gerenciais",
      "Infraestrutura em nuvem e monitoramento",
      "Cronograma por etapas, acompanhado com você",
      "Suporte contínuo com condições definidas",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    label: "Entender",
    title: "Primeiro, o seu negócio.",
    text: "Conversamos sobre sua rotina, seus desafios e o que você quer alcançar.",
  },
  {
    step: "02",
    label: "Planejar",
    title: "A ideia ganha forma.",
    text: "Definimos o escopo, o prazo e a proposta visual para sua aprovação.",
  },
  {
    step: "03",
    label: "Desenvolver",
    title: "Hora de construir.",
    text: "Desenvolvemos, testamos e ajustamos o projeto com você acompanhando.",
  },
  {
    step: "04",
    label: "Evoluir",
    title: "Seu projeto no mundo.",
    text: "Publicamos a solução e oferecemos suporte para os próximos passos.",
  },
];

export const segments = [
  "Comércio",
  "Saúde",
  "Educação",
  "Indústria",
  "Alimentação",
  "Construção",
  "Serviços",
  "Automotivo",
];

export const faq = [
  {
    q: "Quanto custa um site ou sistema?",
    a: "O investimento depende do tamanho do projeto e das funcionalidades. Sites institucionais partem de um valor base e lojas virtuais ou sistemas entram em outra faixa. Conversamos sobre a sua necessidade antes de preparar a proposta — sem compromisso.",
  },
  {
    q: "Qual é o prazo de desenvolvimento?",
    a: "Como referência, um site institucional pode levar de 2 a 3 semanas, e um sistema mais complexo de 1 a 3 meses. O cronograma é definido na proposta, conforme o escopo do seu projeto.",
  },
  {
    q: "Meu site vai funcionar bem no celular?",
    a: "Sim. Todos os projetos têm layout responsivo, adaptado a celulares, tablets e computadores, com atenção à navegação e à velocidade de carregamento.",
  },
  {
    q: "Vocês ajudam meu site a aparecer no Google?",
    a: "Os sites são desenvolvidos com uma base de SEO: organização do conteúdo, títulos, descrições e desempenho. Isso ajuda o Google a entender as páginas. A posição nas buscas também depende da concorrência e de outros fatores.",
  },
  {
    q: "E depois da entrega, tenho suporte?",
    a: "Sim. Você pode contratar manutenção contínua, com atualizações, correções e backups, ou solicitar suporte pontual. Os serviços e condições são definidos na contratação.",
  },
  {
    q: "A Olivium também cuida da hospedagem?",
    a: "Sim. Oferecemos hospedagem em nuvem e apoio na publicação do projeto. Se preferir, também podemos trabalhar com a sua própria hospedagem, conforme os requisitos da solução.",
  },
];

export const stats = [
  { value: "+120", label: "projetos entregues" },
  { value: "8", label: "segmentos atendidos" },
  { value: "100%", label: "sob medida" },
  { value: "2-3", label: "semanas para um site" },
];
