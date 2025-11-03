import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendMethod, setSendMethod] = useState('email')

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Nome é obrigatório'
        if (value.trim().length < 3) return 'Nome deve ter pelo menos 3 caracteres'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email é obrigatório'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Email inválido'
        return ''
      
      case 'phone':
        if (!value.trim()) return 'Telefone é obrigatório'
        const phoneRegex = /^[\d\s()-]+$/
        if (!phoneRegex.test(value)) return 'Telefone inválido'
        if (value.replace(/\D/g, '').length < 10) return 'Telefone deve ter pelo menos 10 dígitos'
        return ''
      
      case 'service':
        if (!value) return 'Selecione um serviço'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Mensagem é obrigatória'
        if (value.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres'
        return ''
      
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({
        ...errors,
        [name]: error
      })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched({
      ...touched,
      [name]: true
    })
    
    const error = validateField(name, value)
    setErrors({
      ...errors,
      [name]: error
    })
  }

  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true
    })
    return Object.keys(newErrors).length === 0
  }

  const sendEmail = async () => {
    setSending(true)
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    
    if (!serviceId || !templateId || !publicKey) {
      alert('⚠️ Configuração de email não encontrada. Redirecionando para WhatsApp...')
      setSending(false)
      sendWhatsApp()
      return false
    }
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'dom_dias21@hotmail.com'
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      return true
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      alert('❌ Erro ao enviar email. Por favor, tente via WhatsApp.')
      setSending(false)
      sendWhatsApp()
      return false
    } finally {
      setSending(false)
    }
  }

  const sendWhatsApp = () => {
    const whatsappNumber = '5534998408523'
    const whatsappMessage = `
*Novo Contato do Site*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}

*Mensagem:*
${formData.message}
    `.trim()
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    if (sendMethod === 'email') {
      const success = await sendEmail()
      if (success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          })
          setErrors({})
          setTouched({})
        }, 5000)
      }
    } else {
      sendWhatsApp()
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
        setErrors({})
        setTouched({})
      }, 3000)
    }
  }

  return (
    <section className="contact section pattern-grid" id="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll animate-fadeInUp">Entre em Contato</h2>
        <p className="section-subtitle animate-on-scroll animate-fadeInUp delay-100">
          Vamos conversar sobre seu projeto e transformar suas ideias em realidade
        </p>
        
        <div className="contact-wrapper">
          <div className="contact-info glass-card animate-on-scroll animate-fadeInLeft delay-200">
            <h3 className="contact-info-title">Fale Conosco</h3>
            <p className="contact-info-text">
              Nossa equipe está pronta para atender você e desenvolver a solução perfeita para seu negócio.
            </p>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>dom_dias21@hotmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Telefone</h4>
                  <p>(34) 99840-8523</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Localização</h4>
                  <p>Rua Secundino Farias Tavares, 555<br/>Centro - Patrocínio, MG - Brasil</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Horário</h4>
                  <p>Seg - Sex: 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-dias-84344b1a9/" target="_blank" rel="noopener noreferrer" className="social-link btn-modern">💼 LinkedIn</a>
              <a href="https://www.facebook.com/share/1BKAqKvwvr/" target="_blank" rel="noopener noreferrer" className="social-link btn-modern">📘 Facebook</a>
              <a href="https://www.instagram.com/joaofilhomc?igsh=MWJjemJueXc0bTIzaQ==" target="_blank" rel="noopener noreferrer" className="social-link btn-modern">📸 Instagram</a>
            </div>
          </div>

          <form className="contact-form glass-card shadow-modern-hover animate-on-scroll animate-fadeInRight delay-200" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✅ {sendMethod === 'email' ? 'Email enviado com sucesso!' : 'Redirecionando para WhatsApp...'} Entraremos em contato em breve.
              </div>
            )}
            
            <div className="send-method-toggle">
              <button
                type="button"
                className={`method-btn ${sendMethod === 'email' ? 'active' : ''}`}
                onClick={() => setSendMethod('email')}
              >
                📧 Enviar por Email
              </button>
              <button
                type="button"
                className={`method-btn ${sendMethod === 'whatsapp' ? 'active' : ''}`}
                onClick={() => setSendMethod('whatsapp')}
              >
                💬 Enviar por WhatsApp
              </button>
            </div>
            
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? 'error' : ''}
                placeholder="Seu nome"
              />
              {errors.name && touched.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'error' : ''}
                  placeholder="seu@email.com"
                />
                {errors.email && touched.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone && touched.phone ? 'error' : ''}
                  placeholder="(11) 98765-4321"
                />
                {errors.phone && touched.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Serviço de Interesse *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.service && touched.service ? 'error' : ''}
              >
                <option value="">Selecione um serviço</option>
                <option value="sistema">Desenvolvimento de Sistema</option>
                <option value="site">Site Corporativo</option>
                <option value="ecommerce">E-commerce</option>
                <option value="app">Aplicativo Web</option>
                <option value="manutencao">Manutenção e Suporte</option>
                <option value="cloud">Soluções em Nuvem</option>
                <option value="outro">Outro</option>
              </select>
              {errors.service && touched.service && (
                <span className="error-message">{errors.service}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message && touched.message ? 'error' : ''}
                rows="5"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
              {errors.message && touched.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-submit btn-modern" disabled={sending}>
              {sending ? 'Enviando...' : sendMethod === 'email' ? '📧 Enviar Email' : '💬 Abrir WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
