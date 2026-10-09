import SectionTitle from './SectionTitle'

type Props = {
  eyebrow: string
  heading: string
  lead: string
  paragraphs: string[]
  // Label/value rows of the information panel on the right.
  details: { label: string; value: string }[]
  id?: string
}

// Restaurant intro: story on the left, information panel on the right.
function RestaurantIntro({ eyebrow, heading, lead, paragraphs, details, id = 'first_section' }: Props) {
  return (
    <div className="container margin_120_95" id={id}>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5">
          <div className="intro">
            <SectionTitle eyebrow={eyebrow} heading={heading} />
            <p className="lead">{lead}</p>
            {paragraphs.map((p) => (
              <p className='lead' key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="col-lg-5 resturantTime">
          <ul>
            {details.map(({ label, value }) => (
              <li key={label} className="d-flex justify-content-between mb-2">
                <strong>{label}</strong>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RestaurantIntro
