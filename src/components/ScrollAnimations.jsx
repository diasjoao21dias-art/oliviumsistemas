import { useEffect } from 'react'

function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          
          if (!prefersReducedMotion) {
            const computedStyle = window.getComputedStyle(entry.target)
            const existingAnimation = computedStyle.animation
            
            let newAnimation = ''
            if (entry.target.classList.contains('animate-fadeInUp')) {
              newAnimation = `fadeInUp 0.6s ease-out forwards`
            } else if (entry.target.classList.contains('animate-fadeInLeft')) {
              newAnimation = `fadeInLeft 0.6s ease-out forwards`
            } else if (entry.target.classList.contains('animate-fadeInRight')) {
              newAnimation = `fadeInRight 0.6s ease-out forwards`
            } else if (entry.target.classList.contains('animate-fadeIn')) {
              newAnimation = `fadeIn 0.6s ease-out forwards`
            } else if (entry.target.classList.contains('animate-scaleIn')) {
              newAnimation = `scaleIn 0.6s ease-out forwards`
            }
            
            if (newAnimation) {
              if (existingAnimation && existingAnimation !== 'none' && !existingAnimation.includes('fadeIn') && !existingAnimation.includes('scaleIn')) {
                entry.target.style.animation = `${existingAnimation}, ${newAnimation}`
              } else {
                entry.target.style.animation = newAnimation
              }
            }
          }
          
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    const throttle = (func, limit) => {
      let inThrottle
      return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit)
        }
      }
    }

    const handleParallax = () => {
      if (document.body.classList.contains('disable-parallax') || prefersReducedMotion) {
        return
      }
      
      const scrolled = window.scrollY
      
      const parallaxSlow = document.querySelectorAll('.parallax-slow')
      parallaxSlow.forEach(el => {
        const speed = 0.3
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
      
      const parallaxMedium = document.querySelectorAll('.parallax-medium')
      parallaxMedium.forEach(el => {
        const speed = 0.5
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
      
      const parallaxFast = document.querySelectorAll('.parallax-fast')
      parallaxFast.forEach(el => {
        const speed = 0.7
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
      
      const parallaxRotate = document.querySelectorAll('.parallax-rotate')
      parallaxRotate.forEach(el => {
        const rotation = scrolled * 0.1
        el.style.transform = `rotate(${rotation}deg)`
      })
      
      const parallaxScale = document.querySelectorAll('.parallax-scale')
      parallaxScale.forEach(el => {
        const scale = 1 + (scrolled * 0.0005)
        el.style.transform = `scale(${Math.min(scale, 1.2)})`
      })
    }

    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return
      
      const buttons = document.querySelectorAll('.btn-magnetic')
      
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect()
        const buttonCenterX = rect.left + rect.width / 2
        const buttonCenterY = rect.top + rect.height / 2
        
        const distanceX = e.clientX - buttonCenterX
        const distanceY = e.clientY - buttonCenterY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        if (distance < 150) {
          const pullStrength = 0.3
          const pullX = distanceX * pullStrength
          const pullY = distanceY * pullStrength
          
          button.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.05)`
        } else {
          button.style.transform = 'translate(0, 0) scale(1)'
        }
      })
    }

    const handleCardHover = (e) => {
      if (prefersReducedMotion) return
      
      const cards = document.querySelectorAll('.card-3d-effect')
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        const cardCenterX = rect.left + rect.width / 2
        const cardCenterY = rect.top + rect.height / 2
        
        const distanceX = e.clientX - cardCenterX
        const distanceY = e.clientY - cardCenterY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        if (distance < 300) {
          const rotateX = (distanceY / rect.height) * -10
          const rotateY = (distanceX / rect.width) * 10
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
        }
      })
    }

    const throttledParallax = throttle(handleParallax, 16)
    const throttledMouseMove = throttle(handleMouseMove, 16)
    const throttledCardHover = throttle(handleCardHover, 16)

    window.addEventListener('scroll', throttledParallax, { passive: true })
    window.addEventListener('mousemove', throttledMouseMove, { passive: true })
    window.addEventListener('mousemove', throttledCardHover, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', throttledParallax)
      window.removeEventListener('mousemove', throttledMouseMove)
      window.removeEventListener('mousemove', throttledCardHover)
    }
  }, [])

  return null
}

export default ScrollAnimations
