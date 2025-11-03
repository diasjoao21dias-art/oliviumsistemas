import React from 'react'
import './VisualElements3D.css'

function VisualElements3D() {
  return (
    <div className="visual-elements-3d">
      <div className="floating-shape shape-cube">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face left"></div>
        <div className="cube-face right"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
      
      <div className="floating-shape shape-sphere">
        <div className="sphere-inner"></div>
      </div>
      
      <div className="floating-shape shape-pyramid">
        <div className="pyramid-face pyramid-1"></div>
        <div className="pyramid-face pyramid-2"></div>
        <div className="pyramid-face pyramid-3"></div>
        <div className="pyramid-face pyramid-4"></div>
      </div>
      
      <svg className="abstract-shape shape-1" viewBox="0 0 200 200" fill="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.6"/>
          </linearGradient>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="M50,20 L180,50 L150,180 L20,150 Z" fill="url(#gradient1)" filter="url(#glow1)" opacity="0.8"/>
        <circle cx="50" cy="20" r="5" fill="#00E5FF"/>
        <circle cx="180" cy="50" r="5" fill="#9D4EDD"/>
        <circle cx="150" cy="180" r="5" fill="#FF6B35"/>
        <circle cx="20" cy="150" r="5" fill="#00FF88"/>
      </svg>
      
      <svg className="abstract-shape shape-2" viewBox="0 0 150 150" fill="none">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.7"/>
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <polygon points="75,10 140,130 10,130" fill="url(#gradient2)" filter="url(#glow2)" opacity="0.7"/>
      </svg>
      
      <svg className="abstract-shape shape-3" viewBox="0 0 180 180" fill="none">
        <defs>
          <radialGradient id="gradient3">
            <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#00FF88" stopOpacity="0.3"/>
          </radialGradient>
        </defs>
        <circle cx="90" cy="90" r="70" fill="url(#gradient3)" opacity="0.6"/>
        <circle cx="90" cy="90" r="50" fill="none" stroke="#00E5FF" strokeWidth="2" opacity="0.8"/>
        <circle cx="90" cy="90" r="30" fill="none" stroke="#9D4EDD" strokeWidth="2" opacity="0.8"/>
      </svg>
      
      <div className="geometric-line line-animated-1"></div>
      <div className="geometric-line line-animated-2"></div>
      <div className="geometric-line line-animated-3"></div>
    </div>
  )
}

export default VisualElements3D
