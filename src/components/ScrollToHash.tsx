import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On navigation: scroll to the #hash target if there is one (e.g. /contact-us#enquiry), otherwise to the top.
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    // Wait a frame so the new screen has rendered.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView()
      else window.scrollTo(0, 0) // unknown anchor on this screen: start at the top
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default ScrollToHash
