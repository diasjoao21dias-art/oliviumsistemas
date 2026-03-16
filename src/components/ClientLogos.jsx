import React from 'react'
import './ClientLogos.css'

function ClientLogos() {
  const clients = [
    { name: 'TechCommerce', sector: 'E-commerce', rating: 5 },
    { name: 'Indústria ABC', sector: 'Indústria', rating: 5 },
    { name: 'Clínica Saúde+', sector: 'Saúde', rating: 5 },
    { name: 'EduTech Online', sector: 'Educação', rating: 5 },
    { name: 'Loja Fashion', sector: 'Varejo', rating: 5 },
    { name: 'Delivery Express', sector: 'Alimentação', rating: 5 },
  ]

  return (
    <section className="client-logos">
      <div className="container">
        <p className="client-logos-label">Empresas que confiam na Olivium</p>
        <div className="client-logos-track-wrapper">
          <div className="client-logos-track">
            {[...clients, ...clients].map((client, index) => (
              <div className="client-logo-card" key={index}>
                <div className="client-logo-stars">
                  {'★'.repeat(client.rating)}
                </div>
                <div className="client-logo-name">{client.name}</div>
                <div className="client-logo-sector">{client.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
