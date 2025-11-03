import React, { useState } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Sistema ERP Completo',
      category: 'sistema',
      image: '/portfolio/erp-system.jpg',
      emoji: '🏢',
      description: 'Sistema integrado de gestão empresarial para indústria',
      fullDescription: 'Desenvolvemos um sistema ERP completo que integra todos os setores da empresa, desde compras até vendas, estoque, financeiro e recursos humanos. Interface moderna e intuitiva com dashboards customizáveis.',
      tags: ['ERP', 'Gestão', 'Integração'],
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      client: 'Indústria ABC Ltda',
      year: '2024'
    },
    {
      title: 'E-commerce de Moda',
      category: 'ecommerce',
      image: '/portfolio/ecommerce-fashion.jpg',
      emoji: '👗',
      description: 'Loja virtual completa com mais de 5.000 produtos',
      fullDescription: 'Plataforma completa de e-commerce com sistema de pagamento integrado, gestão de estoque, painel administrativo avançado e experiência de compra otimizada para conversão.',
      tags: ['E-commerce', 'Fashion', 'Pagamentos'],
      technologies: ['React', 'Stripe', 'MongoDB'],
      client: 'Loja Fashion Brasil',
      year: '2024'
    },
    {
      title: 'Portal de Educação',
      category: 'web',
      image: '/portfolio/education-platform.jpg',
      emoji: '🎓',
      description: 'Plataforma EAD com gestão de alunos e cursos',
      fullDescription: 'Portal educacional completo com sistema de videoaulas, quiz interativo, certificados digitais, área do aluno personalizada e painel administrativo para professores.',
      tags: ['Educação', 'EAD', 'Vídeos'],
      technologies: ['React', 'Node.js', 'AWS'],
      client: 'EduTech Online',
      year: '2023'
    },
    {
      title: 'App de Delivery',
      category: 'app',
      image: '/portfolio/delivery-app.jpg',
      emoji: '🍕',
      description: 'Aplicativo para pedidos e entregas em tempo real',
      fullDescription: 'Sistema completo de delivery com tracking em tempo real, integração com estabelecimentos, sistema de pagamento online e gestão de entregadores.',
      tags: ['Delivery', 'Tempo Real', 'Mobile'],
      technologies: ['React Native', 'Firebase', 'Maps API'],
      client: 'Delivery Express',
      year: '2024'
    },
    {
      title: 'Sistema Hospitalar',
      category: 'sistema',
      image: '/portfolio/hospital-system.jpg',
      emoji: '🏥',
      description: 'Gestão completa de pacientes e prontuários',
      fullDescription: 'Sistema hospitalar com prontuário eletrônico, agendamento de consultas, controle de medicamentos, gestão de leitos e relatórios gerenciais completos, em conformidade com LGPD.',
      tags: ['Saúde', 'Prontuário', 'LGPD'],
      technologies: ['React', 'Node.js', 'MySQL'],
      client: 'Clínica Saúde+',
      year: '2023'
    },
    {
      title: 'Site Corporativo',
      category: 'web',
      image: '/portfolio/corporate-site.jpg',
      emoji: '💼',
      description: 'Website institucional moderno e responsivo',
      fullDescription: 'Website institucional com design moderno, otimizado para SEO, totalmente responsivo, com CMS integrado para fácil atualização de conteúdo e alta performance.',
      tags: ['Institucional', 'SEO', 'Responsivo'],
      technologies: ['React', 'Vite', 'Tailwind'],
      client: 'TechCommerce Corp',
      year: '2024'
    }
  ]

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'sistema', label: 'Sistemas' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'web', label: 'Sites' },
    { id: 'app', label: 'Apps' }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="portfolio section pattern-dots" id="portfolio">
      <div className="container">
        <h2 className="section-title animate-on-scroll animate-fadeInUp">Portfólio de Projetos</h2>
        <p className="section-subtitle animate-on-scroll animate-fadeInUp delay-100">
          Conheça alguns dos projetos que desenvolvemos com excelência
        </p>
        
        <div className="portfolio-filters animate-on-scroll animate-fadeInUp delay-200">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn btn-modern ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="portfolio-card shadow-modern-hover animate-on-scroll animate-scaleIn" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="portfolio-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-emoji-small">{project.emoji}</span>
                  <button className="view-btn btn-modern">Ver Detalhes</button>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag badge-modern">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              
              <div className="modal-image">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="modal-body">
                <div className="modal-header">
                  <span className="modal-emoji">{selectedProject.emoji}</span>
                  <h2>{selectedProject.title}</h2>
                </div>
                
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>Cliente:</strong> {selectedProject.client}
                  </div>
                  <div className="meta-item">
                    <strong>Ano:</strong> {selectedProject.year}
                  </div>
                </div>
                
                <p className="modal-description">{selectedProject.fullDescription}</p>
                
                <div className="modal-section">
                  <h3>Tecnologias Utilizadas</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-section">
                  <h3>Recursos Principais</h3>
                  <div className="portfolio-tags">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tag badge-modern">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="btn btn-primary modal-cta"
                  onClick={() => {
                    window.open('https://wa.me/5534998408523?text=' + encodeURIComponent(`Olá! Gostaria de saber mais sobre projetos similares ao ${selectedProject.title}`), '_blank')
                  }}
                >
                  Solicitar Projeto Similar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
