import React, { useState, useEffect } from 'react'
import './ScrollToTop.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [bottomPosition, setBottomPosition] = useState(110)

  useEffect(() => {
    const handleScrollAndPosition = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset
      const distanceToBottom = documentHeight - (scrollTop + windowHeight)

      if (distanceToBottom < 120) {
        setBottomPosition(230 - distanceToBottom)
      } else {
        setBottomPosition(110)
      }
    }

    window.addEventListener('scroll', handleScrollAndPosition)
    handleScrollAndPosition()
    return () => window.removeEventListener('scroll', handleScrollAndPosition)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          style={{ bottom: `${bottomPosition}px` }}
          aria-label="Voltar ao topo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
