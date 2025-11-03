import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

const TermosDeUso = lazy(() => import('./pages/TermosDeUso'))
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'))

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Suspense fallback={<div className="loading-spinner">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="termos" element={<TermosDeUso />} />
            <Route path="privacidade" element={<PoliticaPrivacidade />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
