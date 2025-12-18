'use client'

import { useState, useEffect } from 'react'
import SplashScreen from './splash-screen'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state on initial render
  useEffect(() => {
    setIsLoading(false)
  }, [])

  // Callback when the splash screen animation is complete
  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (isLoading) {
    return null // no flash on initial load
  }

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
}