import SectionTitle from './SectionTitle'
import FaqItem from './FaqItem'

export type FaqItem = {
  question: string
  answer: string
}

type Props = {
  items: FaqItem[]
  eyebrow?: string
  heading?: string
}

function FaqSection({ items, eyebrow = 'Useful information', heading = 'Before Your Visit' }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <SectionTitle eyebrow={eyebrow} heading={heading} />
        </div>
        <div className="col-lg-8">
          {items.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection
