import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = '[data-cue], [data-cues] > *'

// Replaces the template's scrollCue.js: the CSS keeps [data-cue] / [data-cues] > * at
// opacity 0, so reveal them with the matching keyframe animation once they scroll into view.
function ScrollCue() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seen = new WeakSet<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const group = el.parentElement?.closest<HTMLElement>('[data-cues]')
          const name = el.dataset.cue ?? group?.dataset.cues
          const delay = Number(el.dataset.delay ?? group?.dataset.delay ?? 0)
          el.style.animation = `${name} 0.6s ease ${delay}ms both`
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -5% 0px' },
    )

    const observeNew = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        observer.observe(el)
      })
    }

    // Elements rendered later (state changes, hot reload, lazy content) must be picked up too,
    // otherwise they stay hidden forever.
    observeNew()
    const mutations = new MutationObserver(observeNew)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return null
}

export default ScrollCue
