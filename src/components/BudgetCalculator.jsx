import React, { useState } from 'react'
import './BudgetCalculator.css'

function BudgetCalculator() {
  const [projectType, setProjectType] = useState('')
  const [features, setFeatures] = useState([])
  const [complexity, setComplexity] = useState('medium')
  const [showResult, setShowResult] = useState(false)

  const projectTypes = [
    { id: 'site', name: 'Site Institucional', basePrice: 500, baseDays: 15 },
    { id: 'ecommerce', name: 'E-commerce', basePrice: 5000, baseDays: 30 },
    { id: 'sistema', name: 'Sistema Personalizado', basePrice: 8000, baseDays: 45 },
    { id: 'app', name: 'Aplicativo Web (PWA)', basePrice: 6000, baseDays: 35 },
    { id: 'portal', name: 'Portal/Plataforma', basePrice: 10000, baseDays: 60 }
  ]

  const availableFeatures = [
    { id: 'admin', name: 'Painel Administrativo', price: 1500, days: 7 },
    { id: 'auth', name: 'Sistema de Login', price: 800, days: 3 },
    { id: 'payment', name: 'Pagamento Online', price: 2000, days: 10 },
    { id: 'api', name: 'API REST', price: 1200, days: 5 },
    { id: 'chat', name: 'Chat ao Vivo', price: 1000, days: 4 },
    { id: 'email', name: 'Sistema de E-mails', price: 600, days: 3 },
    { id: 'reports', name: 'Relatórios Avançados', price: 1500, days: 7 },
    { id: 'mobile', name: 'Versão Mobile', price: 2500, days: 12 }
  ]

  const complexityMultiplier = {
    simple: 0.8,
    medium: 1,
    complex: 1.3
  }

  const handleProjectTypeSelect = (typeId) => {
    setProjectType(typeId)
    setTimeout(() => {
      const featuresSection = document.querySelector('.calc-step:nth-child(2)')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const toggleFeature = (featureId) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter(f => f !== featureId))
    } else {
      setFeatures([...features, featureId])
    }
  }

  const calculateBudget = () => {
    if (!projectType) return { price: 0, days: 0 }

    const selectedType = projectTypes.find(t => t.id === projectType)
    let totalPrice = selectedType.basePrice
    let totalDays = selectedType.baseDays

    features.forEach(featureId => {
      const feature = availableFeatures.find(f => f.id === featureId)
      if (feature) {
        totalPrice += feature.price
        totalDays += feature.days
      }
    })

    totalPrice = Math.round(totalPrice * complexityMultiplier[complexity])
    totalDays = Math.round(totalDays * complexityMultiplier[complexity])

    return { price: totalPrice, days: totalDays }
  }

  const handleCalculate = () => {
    if (projectType) {
      setShowResult(true)
      setTimeout(() => {
        const resultElement = document.querySelector('.calculator-result')
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      }, 100)
    }
  }

  const handleSendQuote = () => {
    const budget = calculateBudget()
    const selectedType = projectTypes.find(t => t.id === projectType)
    const selectedFeatures = features.map(fId => 
      availableFeatures.find(f => f.id === fId)?.name
    ).join(', ')

    const message = `
*Solicitação de Orçamento*

*Tipo de Projeto:* ${selectedType.name}
*Complexidade:* ${complexity === 'simple' ? 'Simples' : complexity === 'medium' ? 'Média' : 'Alta'}
*Funcionalidades:* ${selectedFeatures || 'Nenhuma adicional'}

*Estimativa Gerada:*
💰 Valor: R$ ${budget.price.toLocaleString('pt-BR')}
📅 Prazo: ${budget.days} dias úteis

Gostaria de mais informações sobre este projeto!
    `.trim()

    window.open(`https://wa.me/5534998250458?text=${encodeURIComponent(message)}`, '_blank')
  }

  const budget = calculateBudget()

  return (
    <section className="budget-calculator section" id="calculator">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Calculadora de Orçamento</h2>
          <p className="section-subtitle">
            Descubra quanto custa seu projeto em poucos cliques
          </p>
        </div>

        <div className="calculator-wrapper">
          <div className="calculator-form">
            <div className="calc-step">
              <h3 className="step-title">1. Tipo de Projeto</h3>
              <div className="project-types">
                {projectTypes.map(type => (
                  <button
                    key={type.id}
                    className={`type-btn ${projectType === type.id ? 'active' : ''}`}
                    onClick={() => handleProjectTypeSelect(type.id)}
                  >
                    <span className="type-name">{type.name}</span>
                    <span className="type-price">A partir de R$ {type.basePrice.toLocaleString('pt-BR')}</span>
                  </button>
                ))}
              </div>
            </div>

            {projectType && (
              <>
                <div className="calc-step">
                  <h3 className="step-title">2. Funcionalidades Adicionais</h3>
                  <div className="features-grid">
                    {availableFeatures.map(feature => (
                      <label key={feature.id} className="feature-checkbox">
                        <input
                          type="checkbox"
                          checked={features.includes(feature.id)}
                          onChange={() => toggleFeature(feature.id)}
                        />
                        <span className="checkbox-custom"></span>
                        <div className="feature-info">
                          <span className="feature-name">{feature.name}</span>
                          <span className="feature-price">+R$ {feature.price.toLocaleString('pt-BR')}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="calc-step">
                  <h3 className="step-title">3. Complexidade do Projeto</h3>
                  <div className="complexity-options">
                    <button
                      className={`complexity-btn ${complexity === 'simple' ? 'active' : ''}`}
                      onClick={() => setComplexity('simple')}
                    >
                      <span className="complexity-icon">🟢</span>
                      <span className="complexity-name">Simples</span>
                      <span className="complexity-desc">-20% no valor</span>
                    </button>
                    <button
                      className={`complexity-btn ${complexity === 'medium' ? 'active' : ''}`}
                      onClick={() => setComplexity('medium')}
                    >
                      <span className="complexity-icon">🟡</span>
                      <span className="complexity-name">Média</span>
                      <span className="complexity-desc">Valor padrão</span>
                    </button>
                    <button
                      className={`complexity-btn ${complexity === 'complex' ? 'active' : ''}`}
                      onClick={() => setComplexity('complex')}
                    >
                      <span className="complexity-icon">🔴</span>
                      <span className="complexity-name">Alta</span>
                      <span className="complexity-desc">+30% no valor</span>
                    </button>
                  </div>
                </div>

                <button className="btn btn-primary calculate-btn" onClick={handleCalculate}>
                  Calcular Orçamento
                </button>
              </>
            )}
          </div>

          {showResult && projectType && (
            <div className="calculator-result">
              <div className="result-header">
                <h3>Estimativa do Seu Projeto</h3>
                <p>Valores aproximados baseados nas suas escolhas</p>
              </div>

              <div className="result-values">
                <div className="result-item price-item">
                  <span className="result-icon">💰</span>
                  <div className="result-content">
                    <span className="result-label">Investimento Estimado</span>
                    <span className="result-value">R$ {budget.price.toLocaleString('pt-BR')}</span>
                  </div>
                </div>

                <div className="result-item">
                  <span className="result-icon">📅</span>
                  <div className="result-content">
                    <span className="result-label">Prazo de Entrega</span>
                    <span className="result-value">{budget.days} dias úteis</span>
                  </div>
                </div>
              </div>

              <div className="result-note">
                <p>
                  ⓘ Esta é uma estimativa inicial. O valor final pode variar após análise detalhada 
                  dos requisitos do projeto.
                </p>
              </div>

              <button className="btn btn-primary result-cta" onClick={handleSendQuote}>
                Solicitar Orçamento Detalhado
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BudgetCalculator
