'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrambleTextPlugin, useGSAP)

export function AnimatedTitle() {
  const titleRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const title = titleRef.current

    if (!title || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.fromTo(
      title,
      { autoAlpha: 0, y: 8 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.25,
        ease: 'power2.out',
        scrambleText: {
          text: '~Thox~',
          chars: '01XO<>/{}',
          speed: 0.45,
          revealDelay: 0.2,
        },
      }
    )
  }, [])

  return (
    <i ref={titleRef} className="inline-block text-[#C8C8C8]">
      ~Thox~
    </i>
  )
}
