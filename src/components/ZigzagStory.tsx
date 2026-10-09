import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'

export type ZigzagItem = {
  image: string
  eyebrow: string
  heading: string
  paragraphs: string[]
  button?: { label: string; to: string }
}

type Props = {
  items: ZigzagItem[]
  pattern?: boolean
}

// Image + text rows that alternate sides: the first row has the image on the left, the next on the right, and so on.
function ZigzagStory({ items, pattern = false }: Props) {
  return (
    <div className={pattern ? 'pattern_2' : 'bg_white'}>
      <div className="container margin_120_95">
        {items.map(({ image, eyebrow, heading, paragraphs, button }, i) => (
          <div key={heading} className={`row justify-content-between align-items-center zigzag_row${i % 2 === 1 ? ' flex-lg-row-reverse' : ''}`}>
            <div className="col-lg-5">
              <img src={image} alt={heading} className="zigzag_image rounded-img" />
            </div>
            <div className="col-lg-7">
              <SectionTitle eyebrow={eyebrow} heading={heading} />
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {button && (
                <p>
                  <Link to={button.to} className="btn_1 outline">
                    {button.label}
                  </Link>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ZigzagStory
