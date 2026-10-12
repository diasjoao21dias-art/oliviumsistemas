import React, { useEffect, useState } from "react";
import { Lock, RefreshCw } from "lucide-react";
import { base44 } from "@/api/base44Client";
import useSeo from "@/lib/useSeo";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ContentPanel from "@/components/admin/ContentPanel";
import MessagesPanel from "@/components/admin/MessagesPanel";

const projectFields = [
  { name: "title", label: "Título do projeto", placeholder: "Ex.: Site institucional para clínica" },
  { name: "slug", label: "Endereço (slug)", placeholder: "site-clinica-exemplo" },
  { name: "category", label: "Categoria", type: "select", options: ["Site institucional", "Loja virtual", "Sistema personalizado", "Aplicativo web", "Landing page", "Soluções em nuvem"] },
  { name: "client", label: "Cliente", placeholder: "Nome do cliente" },
  { name: "year", label: "Ano", placeholder: "2026" },
  { name: "image_url", label: "Imagem (link)", hint: "Use o link de uma imagem enviada aqui no chat." },
  { name: "project_url", label: "Link do projeto (opcional)" },
  { name: "order", label: "Ordem de exibição", type: "number" },
  { name: "featured", label: "Destacar na página inicial", type: "switch" },
  { name: "summary", label: "Resumo curto", type: "textarea", placeholder: "Aparece no cartão do projeto." },
  { name: "description", label: "Descrição completa", type: "textarea" },
  { name: "highlights", label: "Destaques (separados por vírgula)", type: "list", placeholder: "+40% conversão, 30 dias de entrega" },
  { name: "tags", label: "Tecnologias/seções (separados por vírgula)", type: "list", placeholder: "SEO, Blog, Agendamento" },
];

const testimonialFields = [
  { name: "name", label: "Nome do cliente", placeholder: "Ex.: Maria Oliveira" },
  { name: "role", label: "Cargo", placeholder: "Diretora" },
  { name: "company", label: "Empresa" },
  { name: "city", label: "Cidade" },
  { name: "service", label: "Serviço contratado" },
  { name: "rating", label: "Nota (1 a 5)", type: "number" },
  { name: "order", label: "Ordem de exibição", type: "number" },
  { name: "featured", label: "Destacar como principal", type: "switch" },
  { name: "content", label: "Depoimento", type: "textarea", placeholder: "Escreva o depoimento exatamente como o cliente autorizou." },
];

const postFields = [
  { name: "title", label: "Título do artigo" },
  { name: "slug", label: "Endereço (slug)", placeholder: "por-que-ter-um-site-profissional" },
  { name: "category", label: "Categoria", type: "select", options: ["Presença digital", "Sistemas", "Vendas online", "SEO", "Infraestrutura"] },
  { name: "author", label: "Autor" },
  { name: "published_date", label: "Data de publicação", type: "date" },
  { name: "read_time", label: "Tempo de leitura", placeholder: "5 min" },
  { name: "cover_image", label: "Imagem de capa (link)" },
  { name: "published", label: "Publicado no site", type: "switch" },
  { name: "excerpt", label: "Resumo", type: "textarea", placeholder: "Frase que aparece na listagem do blog." },
  {
    name: "content",
    label: "Conteúdo (Markdown)",
    type: "textarea",
    hint: "Use ## para subtítulos, - para listas e **negrito** para destaques.",
  },
  { name: "tags", label: "Tags (separadas por vírgula)", type: "list" },
];

export default function Admin() {
  const [state, setState] = useState({ checking: true, user: null });

  useSeo({
    title: "Área da equipe Olivium",
    description: "Painel interno para publicar artigos, projetos e depoimentos no site da Olivium.",
    path: "/admin",
  });

  const check = () => {
    setState({ checking: true, user: null });
    base44.auth
      .me()
      .then((user) => setState({ checking: false, user }))
      .catch(() => setState({ checking: false, user: null }));
  };

  useEffect(() => {
    check();
  }, []);

  if (state.checking) {
    return (
      <div className="container-power py-20 sm:py-32">
        <div className="h-10 w-56 animate-pulse rounded-full bg-white/5" />
        <div className="mt-8 h-64 animate-pulse rounded-3xl bg-white/[0.03]" />
      </div>
    );
  }

  if (!state.user) {
    return (
      <section className="container-power py-20 sm:py-28">
        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center sm:p-10">
          <Lock className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-6 font-heading text-[26px] font-semibold text-white">
            Área restrita da equipe
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Este painel é usado para publicar artigos, projetos e depoimentos. A edição fica liberada
            apenas para administradores com sessão ativa — por isso, os conteúdos também podem ser
            atualizados pelo painel de dados do app.
          </p>
          <button
            type="button"
            onClick={check}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Verificar novamente
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-power">
        <p className="tech-label">Área da equipe</p>
        <h1 className="display mt-6 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold text-white">
          Gerenciar conteúdo do site
        </h1>
        <p className="mt-5 max-w-2xl text-[16px] text-muted-foreground">
          Tudo o que você publica aqui aparece no site na hora. Blog, portfólio, depoimentos e as
          mensagens recebidas pelo formulário ficam neste painel.
        </p>

        <Tabs defaultValue="mensagens" className="mt-9 sm:mt-14">
          <TabsList className="h-auto flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.03] p-2">
            {[
              { value: "mensagens", label: "Mensagens" },
              { value: "portfolio", label: "Portfólio" },
              { value: "depoimentos", label: "Depoimentos" },
              { value: "blog", label: "Blog" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-[#0a0c0e]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="mensagens" className="mt-10">
            <MessagesPanel />
          </TabsContent>
          <TabsContent value="portfolio" className="mt-10">
            <ContentPanel
              model={base44.entities.Project}
              fields={projectFields}
              title="Projetos do portfólio"
              description="Adicione, edite ou remova os projetos exibidos nas páginas Portfólio e Início."
              sort="order"
              emptyLabel="Nenhum projeto cadastrado ainda."
            />
          </TabsContent>
          <TabsContent value="depoimentos" className="mt-10">
            <ContentPanel
              model={base44.entities.Testimonial}
              fields={testimonialFields}
              title="Depoimentos de clientes"
              description="Publique depoimentos reais, sempre com autorização do cliente."
              sort="order"
              emptyLabel="Nenhum depoimento cadastrado ainda."
            />
          </TabsContent>
          <TabsContent value="blog" className="mt-10">
            <ContentPanel
              model={base44.entities.BlogPost}
              fields={postFields}
              title="Artigos do blog"
              description="Escreva o conteúdo em texto simples ou Markdown e publique quando estiver pronto."
              sort="-published_date"
              emptyLabel="Nenhum artigo cadastrado ainda."
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}