'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState('typing')

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('glow')
    }, 1200)

    const timer2 = setTimeout(() => {
      setAnimationPhase('fadeOut')
    }, 2500)

    const timer3 = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-tl from-black via-zinc-900 to-black transition-opacity duration-1000 ${animationPhase === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className={`text-6xl md:text-8xl font-bold tracking-tight text-white ${
          animationPhase === 'typing'
            ? 'typing-animation'
            : animationPhase === 'glow'
            ? 'glow-animation'
            : ''
        }`}>
          Thox
        </h1>
        {animationPhase === 'glow' && (
          <div className="mt-4">
            <div className="w-16 h-1 bg-white mx-auto animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}