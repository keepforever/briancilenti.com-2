import type { Route } from "./+types/hidden";
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Hidden() {
  const comp = useRef<HTMLDivElement>(null)

  useGSAP(
    ctx => {
      console.info('\n', `ctx = `, ctx, '\n') // <-- ctx is the same as comp.current

      const t1 = gsap.timeline()

      t1.from('#intro-slider', { duration: 1, xPercent: '-100', animationDuration: 1.3, delay: 0.5 })

      // stagger the titles
      t1.from('#title-1', { duration: 0.1, xPercent: '-100', animationDuration: 0.5, delay: 0, opacity: 0 })
      t1.from('#title-2', { duration: 0.5, xPercent: '-100', animationDuration: 0.5, delay: 0, opacity: 0 })
      t1.from('#title-3', { duration: 1, xPercent: '-100', animationDuration: 1.5, delay: 0, opacity: 0 })

      // animate the pig
      t1.from('#pig', { duration: 1, xPercent: '100', animationDuration: 1.3, delay: 0.5, opacity: 0 })
      t1.to('#pig', { rotation: 360, y: '-100%', duration: 1.3, repeat: 1, yoyo: true, ease: 'bounce.in' })

      // fade out the intro slider
      t1.to('#intro-slider', { duration: 1, opacity: 0, delay: 0.5, display: 'none' })

      // fade in the welcome message
      t1.from('#welcome', { duration: 1, opacity: 0, delay: 0.5, display: 'none' })
    },
    { scope: comp }, // <-- scope is for selector text (optional)
  )

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute inset-0 z-10 flex h-screen flex-col gap-10 bg-blue-300 p-5 font-space-grotesk text-4xl tracking-tight"
      >
        <h1 id="title-1" className="text-6xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-6xl">
          Musician
        </h1>
        <h1 id="title-3" className="text-6xl">
          Human
        </h1>

        <img id="pig" src="/pig.svg" alt="Pig" className="h-52 w-52" />
        {/* Restart button */}

        <button
          onClick={() => {
            gsap.globalTimeline.clear()
            gsap.globalTimeline.restart()
          }}
          className="mt-5 rounded-md bg-blue-500 p-2 text-white"
        >
          Restart
        </button>
      </div>

      <div className="flex h-screen flex-col place-items-center justify-center bg-slate-400">
        <h1 id="welcome" className="text-center font-space-grotesk text-4xl text-white">
          Welcome.
        </h1>
      </div>

      <div className="flex h-screen flex-col place-items-center justify-center bg-slate-800">
        <h1 id="welcome" className="hidden text-center font-space-grotesk text-4xl text-blue-300">
          And so on and so forth.
        </h1>
      </div>
    </div>
  )
}