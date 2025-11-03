import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Chatbot from './Chatbot'
import ScrollToTop from './ScrollToTop'
import ScrollAnimations from './ScrollAnimations'

function Layout() {
  return (
    <div className="App">
      <ScrollAnimations />
      <Header />
      <Outlet />
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </div>
  )
}

export default Layout
