'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState('meteor-shower')
  const [revealedLetters, setRevealedLetters] = useState<boolean[]>([false, false, false, false])
  const [showClickPrompt, setShowClickPrompt] = useState(false)

  useEffect(() => {
    // Phase 1: Background meteor shower
    const showerTimer = setTimeout(() => {
      setAnimationPhase('letter-revealing')
    }, 2000)

    // Phase 2: Reveal letters one by one
    const letterTimers = [
      setTimeout(() => setRevealedLetters([true, false, false, false]), 2500), // T
      setTimeout(() => setRevealedLetters([true, true, false, false]), 3000),   // H
      setTimeout(() => setRevealedLetters([true, true, true, false]), 3500),    // O
      setTimeout(() => setRevealedLetters([true, true, true, true]), 4000),     // X
    ]

    // Phase 3: Show click prompt
    const promptTimer = setTimeout(() => {
      setShowClickPrompt(true)
      setAnimationPhase('complete')
    }, 4800)

    return () => {
      clearTimeout(showerTimer)
      letterTimers.forEach(clearTimeout)
      clearTimeout(promptTimer)
    }
  }, [])

  const handleClick = () => {
    setAnimationPhase('fadeOut')
    setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 800)
  }

  if (!isVisible) return null

  const letters = ['T', 'H', 'O', 'X']

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-tl from-black via-zinc-900 to-black transition-opacity duration-800 ${animationPhase === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>

      {/* Background Meteor Shower */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`meteor meteor-${i} ${animationPhase === 'meteor-shower' || animationPhase === 'letter-revealing' ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Letter-specific shooting stars */}
      {animationPhase === 'letter-revealing' && (
        <div className="absolute inset-0">
          {letters.map((letter, index) => (
            <div
              key={`star-${letter}`}
              className={`letter-star letter-star-${index} ${!revealedLetters[index] ? 'active' : ''}`}
            />
          ))}
        </div>
      )}

      {/* Text Container */}
      <div className="text-center relative">
        <div className="text-6xl md:text-8xl font-bold tracking-tight flex justify-center space-x-1 md:space-x-2">
          {letters.map((letter, index) => (
            <span
              key={letter}
              className={`transition-all duration-500 cursor-pointer ${
                revealedLetters[index]
                  ? 'text-white opacity-100 letter-glow hover:text-blue-300 hover:scale-110'
                  : 'text-transparent opacity-0'
              }`}
              onClick={animationPhase === 'complete' ? handleClick : undefined}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Click Prompt */}
        {showClickPrompt && (
          <div className="mt-8 animate-pulse">
            <p className="text-lg text-zinc-300 font-light tracking-wide">
              Click to enter the cosmos
            </p>
            <div className="mt-4 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .meteor {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #4f9eff);
          border-radius: 50%;
          opacity: 0;
        }

        .meteor::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: rotate(45deg);
          transform-origin: right center;
        }

        .meteor.active {
          animation: meteorShower var(--duration) ease-out infinite;
          animation-delay: var(--delay);
        }

        .meteor-0 { --duration: 1.2s; --delay: 0s; top: 10%; left: -50px; }
        .meteor-1 { --duration: 1.5s; --delay: 0.3s; top: 15%; left: -50px; }
        .meteor-2 { --duration: 1.8s; --delay: 0.6s; top: 25%; left: -50px; }
        .meteor-3 { --duration: 1.3s; --delay: 0.9s; top: 35%; left: -50px; }
        .meteor-4 { --duration: 1.6s; --delay: 1.2s; top: 45%; left: -50px; }
        .meteor-5 { --duration: 1.4s; --delay: 1.5s; top: 55%; left: -50px; }
        .meteor-6 { --duration: 1.7s; --delay: 0.2s; top: 20%; right: -50px; }
        .meteor-7 { --duration: 1.9s; --delay: 0.7s; top: 30%; right: -50px; }
        .meteor-8 { --duration: 1.1s; --delay: 1.0s; top: 40%; right: -50px; }
        .meteor-9 { --duration: 1.5s; --delay: 1.3s; top: 60%; right: -50px; }
        .meteor-10 { --duration: 1.8s; --delay: 0.5s; top: 70%; left: -50px; }
        .meteor-11 { --duration: 1.2s; --delay: 1.1s; top: 80%; right: -50px; }

        .letter-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #4f9eff;
          border-radius: 50%;
          box-shadow: 0 0 15px #4f9eff, 0 0 30px #4f9eff;
          opacity: 0;
        }

        .letter-star::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(79,158,255,1), transparent);
          transform: rotate(45deg);
          transform-origin: right center;
        }

        .letter-star.active {
          animation: letterReveal 0.8s ease-out forwards;
        }

        .letter-star-0 { top: 30%; left: 20%; }
        .letter-star-1 { top: 25%; left: 35%; }
        .letter-star-2 { top: 35%; right: 35%; }
        .letter-star-3 { top: 30%; right: 20%; }

        .letter-glow {
          text-shadow:
            0 0 10px rgba(255,255,255,0.8),
            0 0 20px rgba(79,158,255,0.6),
            0 0 30px rgba(79,158,255,0.4),
            0 0 40px rgba(79,158,255,0.2);
        }

        @keyframes meteorShower {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(50vh);
            opacity: 0;
          }
        }

        @keyframes letterReveal {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(40vw) translateY(20vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}