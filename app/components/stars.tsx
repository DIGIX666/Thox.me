'use client'

import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  opacity: number
  size: number
  animationDelay: number
}

export default function Stars({ quantity = 100 }) {
  const [stars, setStars] = useState<Star[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const generateStars = (): Star[] => {
      return Array.from({ length: quantity }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 2 + 1,
        animationDelay: Math.random() * 3,
      }))
    }

    setStars(generateStars())
    setMounted(true)
  }, [quantity])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 animate-fade-in">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}