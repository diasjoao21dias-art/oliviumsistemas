import React from 'react'
import './Industries.css'

function Industries() {
  const industries = [
    {
      icon: '🏪',
      title: 'Comércio',
      description: 'Soluções para varejo, atacado e distribuidoras',
      color: '#3b82f6'
    },
    {
      icon: '🏥',
      title: 'Saúde',
      description: 'Sistemas para clínicas, hospitais e laboratórios',
      color: '#10b981'
    },
    {
      icon: '📚',
      title: 'Educação',
      description: 'Plataformas para escolas e instituições de ensino',
      color: '#f59e0b'
    },
    {
      icon: '🏭',
      title: 'Indústria',
      description: 'Gestão industrial e controle de produção',
      color: '#8b5cf6'
    },
    {
      icon: '🍔',
      title: 'Alimentação',
      description: 'Delivery, restaurantes e food service',
      color: '#ef4444'
    },
    {
      icon: '🏗️',
      title: 'Construção',
      description: 'Gestão de obras e projetos',
      color: '#14b8a6'
    },
    {
      icon: '💼',
      title: 'Serviços',
      description: 'Empresas de consultoria e prestação de serviços',
      color: '#6366f1'
    },
    {
      icon: '🚗',
      title: 'Automotivo',
      description: 'Oficinas, concessionárias e auto peças',
      color: '#ec4899'
    }
  ]

  return (
    <section className="industries section" id="industries">
      <div className="container">
        <h2 className="section-title animate-on-scroll animate-fadeInUp">Setores de Atuação</h2>
        <p className="section-subtitle animate-on-scroll animate-fadeInUp delay-100">
          Desenvolvemos soluções especializadas para diversos segmentos de mercado
        </p>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              className="industry-card shadow-modern-hover animate-on-scroll animate-scaleIn" 
              key={index}
              style={{ '--card-color': industry.color, animationDelay: `${index * 0.08}s` }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
