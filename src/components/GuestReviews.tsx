import SectionTitle from './SectionTitle'

export type GuestReview = {
  name: string
  date: string
  comment: string
}

export type ReviewScore = {
  label: string
  // Out of 10.
  value: number
}

type Props = {
  reviews: GuestReview[]
  scores?: ReviewScore[]
  eyebrow?: string
  heading?: string
  text?: string
}

const defaultScores: ReviewScore[] = [
  { label: 'Comfort', value: 9.0 },
  { label: 'Facilities', value: 9.5 },
  { label: 'Location', value: 6.0 },
  { label: 'Price', value: 6.0 },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

// Review list in cards (avatar and name on the left, quote and date on the right) beside a "Reviews" heading, intro and score bars.
function GuestReviews({
  reviews,
  scores = defaultScores,
  eyebrow = 'Paradise Hotel',
  heading = 'Reviews',
  text = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
}: Props) {
  return (
    <div style={{ background: '#FAF8F5' }}>
      <div className="roomDetailsContainer margin_120_95">
        <div className="row align-items-start">
          <div className="col-lg-4 order-lg-2 mb-4 mb-lg-0">
            <SectionTitle eyebrow={eyebrow} heading={heading}>
              <p>{text}</p>
            </SectionTitle>
            {scores.map(({ label, value }) => (
              <div className="review_score" key={label}>
                <h6>{label}</h6>
                <div className="review_score__row">
                  <div className="review_score__track">
                    <div className="review_score__fill" style={{ width: `${value * 10}%` }}></div>
                  </div>
                  <strong>{value.toFixed(1)}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-8 order-lg-1">
            {reviews.map(({ name, date, comment }) => (
              <div className="guest_review" key={name}>
                <div className="guest_review__user">
                  <span className="guest_review__avatar">{initials(name)}</span>
                  <h5>{name}</h5>
                </div>
                <div className="guest_review__content">
                  <em>Published {date}</em>
                  <p>{comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestReviews
