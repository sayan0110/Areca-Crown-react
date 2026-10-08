import { useEffect, useRef, type ReactNode } from 'react'
import commonScriptsUrl from '../js/common_scripts.js?url'
import { loadScript } from '../utils/loadScript'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  options: Record<string, unknown>
  className?: string
  // Called with the jQuery-wrapped element right before owlCarousel() runs, to bind events.
  setup?: (owl: any) => void
  children: ReactNode
}

// Wraps the template's Owl Carousel (bundled in common_scripts.js). Children are the slides.
function OwlCarousel({ options, className = '', setup, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let owl: any
    let cancelled = false

    loadScript(commonScriptsUrl).then(() => {
      if (cancelled || !ref.current) return
      owl = (window as any).jQuery(ref.current)
      setup?.(owl)
      owl.owlCarousel(options)
    })

    return () => {
      cancelled = true
      owl?.trigger('destroy.owl.carousel')
    }
    // Initialised once on mount; options/setup are expected to be stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className={`owl-carousel owl-theme ${className}`.trim()}>
      {children}
    </div>
  )
}

export default OwlCarousel
