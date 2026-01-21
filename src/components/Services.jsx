import React from 'react'
import './Services.css'

function Services() {
  const getIconSVG = (type) => {
    const icons = {
      'sistema': (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="22" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="22" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="22" y="22" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="13" r="1.5" fill="currentColor"/>
          <circle cx="29" cy="13" r="1.5" fill="currentColor"/>
          <circle cx="11" cy="27" r="1.5" fill="currentColor"/>
          <circle cx="29" cy="27" r="1.5" fill="currentColor"/>
        </svg>
      ),
      'web': (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2"/>
          <ellipse cx="20" cy="20" rx="6" ry="15" stroke="currentColor" strokeWidth="2"/>
          <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M11 10 Q20 12 29 10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M11 30 Q20 28 29 30" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      'ecommerce': (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 10 L12 10 L16 28 L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="32" r="2" fill="currentColor"/>
          <circle cx="30" cy="32" r="2" fill="currentColor"/>
          <path d="M12 10 L14 18 L34 18 L32 26 L16 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 12 L28 8 M28 8 L32 12 M28 8 L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      'mobile': (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="12" y="4" width="16" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="32" x2="24" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="8" r="1" fill="currentColor"/>
          <rect x="15" y="12" width="10" height="2" rx="1" fill="currentColor"/>
          <rect x="15" y="16" width="10" height="2" rx="1" fill="currentColor"/>
          <rect x="15" y="20" width="6" height="2" rx="1" fill="currentColor"/>
        </svg>
      ),
      'manutencao': (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M18 8 L22 8 L24 12 L32 12 L32 32 L8 32 L8 12 L16 12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 18 L26 16 M16 26 L14 28 M24 26 L26 28 M16 18 L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      'nuvem': (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 24 C6 24 4 21 4 18 C4 15 6 12 10 12 C10 8 14 4 20 4 C26 4 30 8 30 12 C34 12 36 15 36 18 C36 21 34 24 30 24 L10 24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M20 18 L20 32 M20 32 L16 28 M20 32 L24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
    return icons[type]
  }

  const services = [
    {
      iconType: 'sistema',
      title: 'Desenvolvimento de Sistemas',
      description: 'Sistemas corporativos personalizados, ERPs, CRMs e soluções sob medida para otimizar seus processos de negócio.',
      features: ['Gestão empresarial', 'Automação de processos', 'Integração de sistemas'],
      gradient: 'from-blue-to-purple',
      whatsappMsg: 'Olá! Tenho interesse em Desenvolvimento de Sistemas personalizados.'
    },
    {
      iconType: 'web',
      title: 'Sites Corporativos',
      description: 'Sites institucionais modernos, responsivos e otimizados para SEO, transmitindo profissionalismo e credibilidade.',
      features: ['Design responsivo', 'SEO otimizado', 'Alta performance'],
      gradient: 'from-purple-to-pink',
      whatsappMsg: 'Olá! Gostaria de um orçamento para criação de um Site Corporativo.'
    },
    {
      iconType: 'ecommerce',
      title: 'E-commerce',
      description: 'Lojas virtuais completas com sistemas de pagamento, gestão de estoque e experiência de compra excepcional.',
      features: ['Pagamentos seguros', 'Gestão de produtos', 'Painel administrativo'],
      gradient: 'from-pink-to-cyan',
      whatsappMsg: 'Olá! Preciso de uma Loja Virtual / E-commerce completa.'
    },
    {
      iconType: 'mobile',
      title: 'Aplicativos Web',
      description: 'Aplicações web progressivas (PWA) com performance nativa e experiência fluida em qualquer dispositivo.',
      features: ['Funciona offline', 'Notificações push', 'Multiplataforma'],
      gradient: 'from-cyan-to-blue',
      whatsappMsg: 'Olá! Tenho interesse em desenvolver um Aplicativo Web (PWA).'
    },
    {
      iconType: 'manutencao',
      title: 'Manutenção e Suporte',
      description: 'Suporte técnico contínuo, atualizações, correções e melhorias para manter seu sistema sempre funcionando.',
      features: ['Suporte 24/7', 'Atualizações regulares', 'Backup automático'],
      gradient: 'from-blue-to-purple',
      whatsappMsg: 'Olá! Preciso de Manutenção e Suporte para meu sistema/site.'
    },
    {
      iconType: 'nuvem',
      title: 'Soluções em Nuvem',
      description: 'Migração, hospedagem e gerenciamento de aplicações em nuvem com máxima segurança e escalabilidade.',
      features: ['Alta disponibilidade', 'Escalabilidade', 'Segurança avançada'],
      gradient: 'from-purple-to-pink',
      whatsappMsg: 'Olá! Tenho interesse em Soluções em Nuvem (hospedagem/migração).'
    }
  ]

  const handleServiceClick = (whatsappMsg) => {
    const whatsappUrl = `https://wa.me/5534998250458?text=${encodeURIComponent(whatsappMsg)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header animate-on-scroll animate-fadeInUp">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções tecnológicas completas para transformar e impulsionar seu negócio
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className={`service-card card card-3d-effect clickable-card animate-on-scroll animate-scaleIn delay-${(index % 3 + 1) * 100}`}
              key={index}
              onClick={() => handleServiceClick(service.whatsappMsg)}
            >
              <div className={`service-icon-wrapper ${service.gradient}`}>
                <span className="service-icon">{getIconSVG(service.iconType)}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.1"/>
                      <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="service-cta">
                <span className="cta-text">Solicitar Orçamento</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
