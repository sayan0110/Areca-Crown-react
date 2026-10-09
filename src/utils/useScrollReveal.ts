import { useEffect, useRef } from 'react'

// Scroll-linked reveal. Sets a --reveal CSS variable (0 -> 1) on the returned ref's element as it
// scrolls into view; 1 is reached when the element is centred in the viewport. Pair with the
// .reveal_section styles in style.css.
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const update = () => {
      frame = 0
      if (reduceMotion) {
        el.style.setProperty('--reveal', '1')
        return
      }
      const { top, height } = el.getBoundingClientRect()
      const vh = window.innerHeight
      const end = (vh - height) / 2
      const progress = Math.min(1, Math.max(0, (vh - top) / (vh - end)))
      el.style.setProperty('--reveal', progress.toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
