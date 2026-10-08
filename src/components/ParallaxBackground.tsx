import { useEffect, useRef } from 'react'

type Props = {
  image: string
  // Fraction of the scroll distance the image lags behind (the template's data-speed).
  speed?: number
  // Slow zoom-in, the template's `kenburns` class.
  kenburns?: boolean
}

// Replaces jarallax for hero sections: the image fills the parent (which must be position: relative)
// and drifts down at `speed` of the scroll distance, so it appears to move slower than the page.
function ParallaxBackground({ image, speed = 0.2, kenburns = false }: Props) {
  const clipRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clip = clipRef.current
    const layer = layerRef.current
    if (!clip || !layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = clip.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      // The layer is 1 + speed times as tall as the hero, so it can drift by speed * height without a gap.
      const offset = Math.min(Math.max(-rect.top * speed, 0), rect.height * speed)
      layer.style.transform = `translate3d(0, ${offset}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return (
    <div ref={clipRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div ref={layerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: `${(1 + speed) * 100}%`, willChange: 'transform' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `url(${image}) center / cover no-repeat`,
            transformOrigin: '50% 50%',
            ...(kenburns && { animation: 'kenburns 15s linear 0s forwards' }),
          }}
        ></div>
      </div>
    </div>
  )
}

export default ParallaxBackground
