'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current

      if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      const items = gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]', root)

      items.forEach((item) => {
        const isTimelineEntry = item.dataset.gsapReveal === 'timeline'

        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            x: isTimelineEntry ? 24 : 0,
            y: isTimelineEntry ? 0 : 20,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              once: true,
            },
          }
        )

        if (isTimelineEntry) {
          const dot = item.querySelector('.timeline-dot')
          const line = item.querySelector('.timeline-line')

          if (dot) {
            gsap.fromTo(
              dot,
              { scale: 0.5 },
              {
                scale: 1,
                boxShadow: '0 0 18px rgba(96, 165, 250, 0.7)',
                duration: 0.55,
                ease: 'back.out(2)',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 88%',
                  once: true,
                },
              }
            )
          }

          if (line) {
            gsap.fromTo(
              line,
              { scaleY: 0, transformOrigin: 'top center' },
              {
                scaleY: 1,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 88%',
                  once: true,
                },
              }
            )
          }
        }
      })
    },
    { scope: rootRef }
  )

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  )
}
