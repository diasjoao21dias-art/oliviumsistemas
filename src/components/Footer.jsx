import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Olivium Sistemas" className="logo-image" loading="lazy" decoding="async" />
            </div>
            <p className="footer-description">
              Transformando ideias em soluções digitais de alto impacto. 
              Desenvolvimento de sistemas, sites e aplicativos personalizados.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-dias-84344b1a9/" target="_blank" rel="noopener noreferrer" className="social-icon">💼</a>
              <a href="https://www.facebook.com/share/1BKAqKvwvr/" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
              <a href="https://www.instagram.com/joaofilhomc?igsh=MWJjemJueXc0bTIzaQ==" target="_blank" rel="noopener noreferrer" className="social-icon">📸</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-links">
              <li><a href="#services">Desenvolvimento de Sistemas</a></li>
              <li><a href="#services">Sites Corporativos</a></li>
              <li><a href="#services">E-commerce</a></li>
              <li><a href="#services">Aplicativos Web</a></li>
              <li><a href="#services">Manutenção e Suporte</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#home">Sobre Nós</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#careers">Carreiras</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-contact">
              <li>📧 dom_dias21@hotmail.com</li>
              <li>📱 (34) 99840-8523</li>
              <li>📍 Patrocínio, MG - Brasil</li>
              <li>⏰ Seg - Sex: 8h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Olivium Sistemas. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <Link to="/privacidade">Política de Privacidade</Link>
            <span>•</span>
            <Link to="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
