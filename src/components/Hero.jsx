import React from 'react'
import './Hero.css'
import VisualElements3D from './VisualElements3D'
import AnimatedCounter from './AnimatedCounter'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      
      // No mobile, foca direto no primeiro campo do formulário
      setTimeout(() => {
        const nameInput = document.getElementById('name')
        if (nameInput && window.innerWidth <= 768) {
          nameInput.focus()
          nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 800)
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <VisualElements3D />
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
        <div className="hero-grid"></div>
        <div className="geometric-lines">
          <svg className="circuit-line line-1" width="200" height="200" viewBox="0 0 200 200">
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6"/>
            <circle cx="180" cy="180" r="3" fill="currentColor" opacity="0.6"/>
            <line x1="20" y1="20" x2="180" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          </svg>
          <svg className="circuit-line line-2" width="150" height="150" viewBox="0 0 150 150">
            <circle cx="10" cy="140" r="2" fill="currentColor" opacity="0.5"/>
            <circle cx="140" cy="10" r="2" fill="currentColor" opacity="0.5"/>
            <line x1="10" y1="140" x2="140" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
          </svg>
          <svg className="circuit-line line-3" width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="10" r="3" fill="currentColor" opacity="0.6"/>
            <circle cx="90" cy="170" r="3" fill="currentColor" opacity="0.6"/>
            <line x1="90" y1="10" x2="90" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-on-scroll animate-fadeIn">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">Soluções Digitais de Alta Performance</span>
            </div>
            
            <h1 className="hero-title animate-on-scroll animate-fadeInUp delay-100">
              Transformamos suas{' '}
              <span className="highlight">ideias</span>
              {' '}em{' '}
              <span className="highlight">realidade digital</span>
            </h1>
            
            <p className="hero-description animate-on-scroll animate-fadeInUp delay-200">
              Desenvolvemos sistemas personalizados, sites corporativos e aplicativos web 
              com design moderno e tecnologia de ponta para impulsionar seu negócio.
            </p>
            
            <div className="hero-buttons animate-on-scroll animate-fadeInUp delay-300">
              <button className="btn btn-primary btn-large btn-magnetic" onClick={scrollToContact}>
                <span>Iniciar Projeto</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-outline btn-large btn-magnetic" onClick={scrollToServices}>
                <span>Explorar Serviços</span>
              </button>
            </div>
            
            <div className="hero-stats animate-on-scroll animate-fadeInUp delay-400">
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={500} suffix="+" duration={2500} />
                </div>
                <div className="stat-label">Projetos Entregues</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={98} suffix="%" duration={2500} />
                </div>
                <div className="stat-label">Clientes Satisfeitos</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={10} suffix="+" duration={2500} />
                </div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-card card-1 animate-on-scroll animate-fadeInRight delay-100">
              <div className="card-icon">💻</div>
              <div className="card-content">
                <div className="card-title">Desenvolvimento Web</div>
                <div className="card-bar"></div>
              </div>
            </div>
            <div className="visual-card card-2 animate-on-scroll animate-fadeInRight delay-200">
              <div className="card-icon">🚀</div>
              <div className="card-content">
                <div className="card-title">Deploy em Produção</div>
                <div className="card-status">
                  <span className="status-dot"></span>
                  <span className="status-text">Online</span>
                </div>
              </div>
            </div>
            <div className="visual-card card-3 animate-on-scroll animate-fadeInRight delay-300">
              <div className="card-icon">📊</div>
              <div className="card-content">
                <div className="card-title">Performance</div>
                <div className="card-metric">+250%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
