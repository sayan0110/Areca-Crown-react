import { useRef, type MouseEvent } from 'react'

type Props = {
  question: string
  answer: string
}

const DURATION = 300

// <details> that slides open/closed. The native toggle is instant, so the click is
// intercepted and the answer's height is animated; `open` is removed only after the close finishes.
function FaqItem({ question, answer }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const animation = useRef<Animation | null>(null)
  const expanded = useRef(false)

  const handleToggle = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const details = detailsRef.current
    const content = contentRef.current
    if (!details || !content) return

    // Start from wherever an interrupted animation currently is.
    // (A closed <details> still reports its content's layout height, so treat it as 0.)
    const startHeight = details.open ? content.getBoundingClientRect().height : 0
    const startOpacity = details.open ? Number(getComputedStyle(content).opacity) : 0
    animation.current?.cancel()

    expanded.current = !expanded.current
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : DURATION

    if (expanded.current) {
      details.open = true
      const endHeight = content.scrollHeight
      animation.current = content.animate(
        { height: [`${startHeight}px`, `${endHeight}px`], opacity: [startOpacity, 1] },
        { duration, easing: 'ease' },
      )
    } else {
      animation.current = content.animate(
        { height: [`${startHeight}px`, '0px'], opacity: [startOpacity, 0] },
        { duration, easing: 'ease' },
      )
    }

    const anim = animation.current
    anim.onfinish = () => {
      if (!expanded.current) details.open = false
      animation.current = null
    }
    anim.oncancel = () => {
      anim.onfinish = null
    }
  }

  return (
    <details ref={detailsRef} className="areca-faq">
      <summary onClick={handleToggle}>{question}</summary>
      <div ref={contentRef} style={{ overflow: 'hidden' }}>
        <p className='QAanswer'>{answer}</p>
      </div>
    </details>
  )
}

export default FaqItem
