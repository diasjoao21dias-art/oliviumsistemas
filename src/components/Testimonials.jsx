import React from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      position: 'CEO, TechCommerce',
      company: 'E-commerce',
      rating: 5,
      text: 'A Olivium transformou completamente nosso e-commerce. O sistema é robusto, intuitivo e aumentou nossas vendas em 150%. Equipe extremamente profissional!',
      color: '#00E5FF'
    },
    {
      name: 'João Santos',
      position: 'Diretor de TI',
      company: 'Indústria ABC',
      rating: 5,
      text: 'A Olivium implementou um ERP completo em tempo recorde. O suporte é excepcional e o sistema atendeu todas as nossas necessidades. Recomendo fortemente!',
      color: '#9D4EDD'
    },
    {
      name: 'Ana Costa',
      position: 'Gestora',
      company: 'Clínica Saúde+',
      rating: 5,
      text: 'O sistema de gestão hospitalar facilitou muito nosso dia a dia. Prontuários digitais, agendamentos e relatórios em um só lugar. Excelente trabalho da Olivium!',
      color: '#0066FF'
    },
    {
      name: 'Carlos Oliveira',
      position: 'Fundador',
      company: 'EduTech Online',
      rating: 5,
      text: 'Nossa plataforma EAD foi desenvolvida com tecnologia de ponta. Os alunos adoraram a interface e temos zero problemas técnicos. Parceria perfeita com a Olivium!',
      color: '#7C3AED'
    },
    {
      name: 'Patricia Lima',
      position: 'Diretora Comercial',
      company: 'Loja Fashion',
      rating: 5,
      text: 'Site lindo, rápido e que converte muito bem. O investimento se pagou em poucos meses. A equipe da Olivium entendeu exatamente o que precisávamos.',
      color: '#00B4D8'
    },
    {
      name: 'Roberto Mendes',
      position: 'CEO',
      company: 'Delivery Express',
      rating: 5,
      text: 'App de delivery perfeito! Interface fluida, pedidos em tempo real e integração com os motoboys. Nossos clientes elogiam muito a experiência. Obrigado, Olivium!',
      color: '#4361EE'
    }
  ]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title animate-on-scroll animate-fadeInUp">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle animate-on-scroll animate-fadeInUp delay-100">
          A satisfação dos nossos clientes é nossa maior conquista
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-card hover-glow animate-on-scroll animate-scaleIn" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-header">
                <div
                  className="testimonial-avatar-initial"
                  style={{ background: `linear-gradient(135deg, ${testimonial.color} 0%, ${testimonial.color}99 100%)` }}
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              <div className="testimonial-rating" aria-label={`${testimonial.rating} de 5 estrelas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star" aria-hidden="true">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
