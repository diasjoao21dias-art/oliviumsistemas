import React, { useState, useEffect, useRef } from 'react'
import './Chatbot.css'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [bottomPosition, setBottomPosition] = useState(32)
  const messagesEndRef = useRef(null)

  const quickReplies = [
    { id: 1, text: 'Quanto custa um site?', icon: '💰' },
    { id: 2, text: 'Qual o prazo de entrega?', icon: '⏱️' },
    { id: 3, text: 'Quais serviços vocês oferecem?', icon: '🛠️' },
    { id: 4, text: 'Como funciona o processo?', icon: '📋' },
    { id: 5, text: 'Falar com atendente', icon: '👤' }
  ]

  const botResponses = {
    'quanto custa': 'Os valores variam de acordo com o projeto:\n\n💻 Sites Institucionais: a partir de R$ 500\n🛒 E-commerce: a partir de R$ 5.000\n⚙️ Sistemas Personalizados: a partir de R$ 8.000\n\nUse nossa Calculadora de Orçamento para uma estimativa personalizada!',
    
    'prazo': 'Os prazos variam conforme a complexidade:\n\n✅ Sites simples: 15-20 dias\n✅ E-commerce: 30-45 dias\n✅ Sistemas complexos: 45-60 dias\n\nApós conversar sobre seu projeto, apresentamos um cronograma detalhado.',
    
    'serviços': 'Oferecemos:\n\n🔹 Desenvolvimento de Sistemas\n🔹 Sites Corporativos\n🔹 E-commerce\n🔹 Aplicativos Web (PWA)\n🔹 Manutenção e Suporte\n🔹 Soluções em Nuvem\n\nClique em "Serviços" no menu para saber mais!',
    
    'processo': 'Nosso processo é simples:\n\n1️⃣ Reunião para entender suas necessidades\n2️⃣ Criação de protótipo/layout\n3️⃣ Desenvolvimento do projeto\n4️⃣ Testes e ajustes\n5️⃣ Entrega e treinamento\n\nVocê acompanha cada etapa!',
    
    'atendente': 'Vou te conectar com nossa equipe no WhatsApp! 😊',
    
    'default': 'Desculpe, não entendi sua pergunta. 😅\n\nEscolha uma das opções rápidas ou fale diretamente com nossa equipe no WhatsApp!'
  }

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const welcomeMessage = {
        text: 'Olá! 👋 Sou o assistente virtual da Olivium Sistemas.\n\nComo posso ajudar você hoje?',
        isBot: true,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleScrollPosition = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset
      const distanceToBottom = documentHeight - (scrollTop + windowHeight)

      if (distanceToBottom < 120) {
        setBottomPosition(152 - distanceToBottom)
      } else {
        setBottomPosition(32)
      }
    }

    window.addEventListener('scroll', handleScrollPosition)
    handleScrollPosition()
    return () => window.removeEventListener('scroll', handleScrollPosition)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('cust') || lowerMessage.includes('preç') || lowerMessage.includes('valor')) {
      return botResponses['quanto custa']
    }
    if (lowerMessage.includes('praz') || lowerMessage.includes('tempo') || lowerMessage.includes('demora')) {
      return botResponses['prazo']
    }
    if (lowerMessage.includes('serviç') || lowerMessage.includes('fazem') || lowerMessage.includes('oferecem')) {
      return botResponses['serviços']
    }
    if (lowerMessage.includes('process') || lowerMessage.includes('funciona') || lowerMessage.includes('como')) {
      return botResponses['processo']
    }
    if (lowerMessage.includes('atendente') || lowerMessage.includes('humano') || lowerMessage.includes('pessoa')) {
      setTimeout(() => {
        window.open('https://wa.me/5534998408523?text=Olá! Vim através do chat do site.', '_blank')
      }, 1000)
      return botResponses['atendente']
    }
    
    return botResponses['default']
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply.text)
    setShowQuickReplies(false)
  }

  const handleSendMessage = (messageText = inputValue) => {
    if (!messageText.trim()) return

    const userMessage = {
      text: messageText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        style={{ bottom: `${bottomPosition}px` }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-window" style={{ bottom: `${bottomPosition + 80}px` }}>
          <div className="chatbot-header">
            <div className="header-info">
              <div className="header-avatar">🤖</div>
              <div className="header-text">
                <h4>Assistente Olivium</h4>
                <span className="status">
                  <span className="status-dot"></span>
                  Online
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                {message.isBot && <div className="message-avatar">🤖</div>}
                <div className="message-bubble">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {showQuickReplies && (
            <div className="quick-replies">
              <p className="quick-replies-label">Respostas Rápidas:</p>
              <div className="quick-replies-grid">
                {quickReplies.map(reply => (
                  <button
                    key={reply.id}
                    className="quick-reply-btn"
                    onClick={() => handleQuickReply(reply)}
                  >
                    <span>{reply.icon}</span>
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="send-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18 2L9 11M18 2l-6 16-3-7-7-3 16-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
