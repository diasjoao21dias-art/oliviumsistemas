import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um site ou sistema?',
      answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional pode ficar pronto em 2-3 semanas, enquanto sistemas complexos podem levar de 1 a 3 meses. Após conversarmos sobre seu projeto, apresentamos um cronograma detalhado.'
    },
    {
      question: 'Qual é a faixa de preço dos serviços?',
      answer: 'Cada projeto é único e o investimento varia conforme funcionalidades e complexidade. Sites institucionais começam a partir de R$ 500, e-commerces a partir de R$ 5.000, e sistemas personalizados são orçados após análise detalhada. Entre em contato para um orçamento personalizado!'
    },
    {
      question: 'Vocês fazem manutenção e suporte após a entrega?',
      answer: 'Sim! Oferecemos planos de manutenção mensal que incluem atualizações, correções, backups automáticos e suporte técnico. Também prestamos suporte pontual para demandas específicas.'
    },
    {
      question: 'O site será responsivo (funciona em celular)?',
      answer: 'Absolutamente! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização e funcionamento em smartphones, tablets e desktops.'
    },
    {
      question: 'Posso atualizar o conteúdo do site sozinho?',
      answer: 'Sim! Entregamos um painel administrativo intuitivo onde você pode atualizar textos, imagens, produtos (no caso de e-commerce) e outras informações sem precisar de conhecimento técnico. Também oferecemos treinamento completo.'
    },
    {
      question: 'Vocês hospedam o site/sistema?',
      answer: 'Sim, oferecemos serviço completo de hospedagem em nuvem com alta disponibilidade, backups automáticos e certificado SSL (segurança). Você também pode optar por usar sua própria hospedagem, se preferir.'
    },
    {
      question: 'O site terá otimização para Google (SEO)?',
      answer: 'Sim! Todos os nossos sites são desenvolvidos seguindo as melhores práticas de SEO: URLs amigáveis, meta tags otimizadas, velocidade de carregamento, estrutura adequada e código limpo para melhor ranqueamento no Google.'
    },
    {
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Primeiro, fazemos uma reunião para entender suas necessidades. Depois, criamos um protótipo/layout para aprovação. Após aprovado, desenvolvemos o projeto, fazemos testes e entregamos. Você acompanha cada etapa e pode solicitar ajustes durante o desenvolvimento.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <svg 
                  className="faq-icon" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path 
                    d="M19 9L12 16L5 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Não encontrou a resposta que procura?</p>
          <a 
            href="https://wa.me/5534998408523?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
