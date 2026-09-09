'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import SplashScreen from './splash-screen'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const SPLASH_STORAGE_KEY = 'thox-splash-seen'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [showSplash, setShowSplash] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const pageRef = useRef<HTMLDivElement>(null)

  // Show the intro only on the first visit in this browser.
  useEffect(() => {
    try {
      const hasSeenSplash = window.localStorage.getItem(SPLASH_STORAGE_KEY)

      if (hasSeenSplash) {
        setShowSplash(false)
      } else {
        window.localStorage.setItem(SPLASH_STORAGE_KEY, 'true')
      }
    } catch {
      // Keep the intro available when browser storage is disabled.
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Callback when the splash screen animation is complete
  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  useGSAP(
    () => {
      const page = pageRef.current

      if (!page || isLoading || showSplash) {
        return
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(page, { clearProps: 'all' })
        return
      }

      gsap.fromTo(
        page,
        { autoAlpha: 0, y: 10, filter: 'blur(5px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.55,
          ease: 'power2.out',
          clearProps: 'filter,transform',
        }
      )
    },
    { dependencies: [pathname, isLoading, showSplash], scope: pageRef }
  )

  if (isLoading) {
    return null // no flash on initial load
  }

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <div
        className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        {!showSplash && (
          <div ref={pageRef} key={pathname}>
            {children}
          </div>
        )}
      </div>
    </>
  )
}
