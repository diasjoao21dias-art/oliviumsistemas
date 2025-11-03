import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [pendingSection, setPendingSection] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      
      const sections = ['home', 'services', 'industries', 'portfolio', 'testimonials', 'calculator', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.dataset.scrollY = scrollY.toString()
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || '0', 10)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      delete document.body.dataset.scrollY
      
      // Restaura a posição do scroll
      if (scrollY) {
        window.scrollTo(0, scrollY)
      }
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [menuOpen])

  // Effect para fazer scroll após o menu fechar
  useEffect(() => {
    if (!menuOpen && pendingSection) {
      // Desabilita efeitos parallax temporariamente
      document.body.classList.add('disable-parallax')
      
      // Aguarda o body ser desbloqueado e o DOM atualizar
      setTimeout(() => {
        const element = document.getElementById(pendingSection)
        
        if (element) {
          const headerOffset = 90
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerOffset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          // Reabilita efeitos parallax após o scroll completar
          setTimeout(() => {
            document.body.classList.remove('disable-parallax')
          }, 800)
        }
        
        setPendingSection(null)
      }, 100)
    }
  }, [menuOpen, pendingSection])

  const scrollToSection = (id) => {
    // Define a seção pendente e fecha o menu
    // O scroll será feito pelo useEffect após o body ser desbloqueado
    setPendingSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-gradient-border"></div>
        <div className="container">
          <nav className="navbar">
            <div className="logo" onClick={() => scrollToSection('home')}>
              <img src="/logo.png" alt="Olivium Sistemas" className="logo-image" />
            </div>
            
            <div className="header-tagline">
              <span className="tagline-text">Soluções Digitais</span>
            </div>
            
            <button 
              className={`menu-toggle ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-wrapper ${menuOpen ? 'active' : ''}`}>
              <ul className="nav-menu">
                <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Início</a></li>
                <li><a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Serviços</a></li>
                <li><a href="#industries" className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>Setores</a></li>
                <li><a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfólio</a></li>
                <li><a href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Depoimentos</a></li>
                <li><a href="#calculator" className={`nav-link ${activeSection === 'calculator' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('calculator'); }}>Orçamento</a></li>
              </ul>
              <a 
                href="https://wa.me/5534998408523?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary header-cta"
                onClick={() => setMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        </div>
      </header>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  )
}

export default Header
