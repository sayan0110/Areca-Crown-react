import type { ReactNode } from 'react'
import SectionTitle from './SectionTitle'
import { useScrollReveal } from '../utils/useScrollReveal'

export type BannerFeature = {
  icon: ReactNode
  label: string
}

type Props = {
  image: string
  eyebrow: string
  heading: ReactNode
  features: BannerFeature[]
}

// Full-width banner whose image grows from inset and rounded to edge-to-edge as it scrolls into view,
// with a title and a divided row of icon features over it.
function ScrollRevealBanner({ image, eyebrow, heading, features }: Props) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div className="reveal_section" ref={ref}>
      <div className="reveal_section__media">
        <img src={image} alt="" />
        <div className="reveal_section__overlay"></div>
      </div>
      <div className="pinned_over_content">
        <SectionTitle className="white" eyebrow={eyebrow} heading={heading} animated eyebrowDelay={200} headingDelay={300} />
        <ul className="reveal_features">
          {features.map(({ icon, label }) => (
            <li key={label}>
              <span className="reveal_features__icon">{icon}</span>
              <span className="reveal_features__label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ScrollRevealBanner
