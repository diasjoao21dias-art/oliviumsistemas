import React, { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Industries = lazy(() => import('../components/Industries'))
const Portfolio = lazy(() => import('../components/Portfolio'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const FAQ = lazy(() => import('../components/FAQ'))
const BudgetCalculator = lazy(() => import('../components/BudgetCalculator'))
const Contact = lazy(() => import('../components/Contact'))

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <Industries />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <BudgetCalculator />
        <Contact />
      </Suspense>
    </>
  )
}

export default HomePage
