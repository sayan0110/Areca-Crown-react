import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  heading: ReactNode
  as?: 'h2' | 'h3'
  className?: string
  eyebrowClassName?: string
  animated?: boolean
  eyebrowDelay?: number
  headingDelay?: number
  children?: ReactNode
}

function SectionTitle({ eyebrow, heading, as: Heading = 'h2', className = '', eyebrowClassName, animated = false, eyebrowDelay, headingDelay, children }: Props) {
  const cue = animated ? 'slideInUp' : undefined
  return (
    <div className={`title ${className}`.trim()}>
      <small className={eyebrowClassName} data-cue={cue} data-delay={animated ? eyebrowDelay : undefined}>
        {eyebrow}
      </small>
      <Heading data-cue={cue} data-delay={animated ? headingDelay : undefined}>
        {heading}
      </Heading>
      {children}
    </div>
  )
}

export default SectionTitle
