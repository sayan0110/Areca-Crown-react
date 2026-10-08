import SectionTitle from './SectionTitle'

type Props = {
  eyebrow: string
  heading: string
  lead: string
  paragraphs: string[]
  hoursLabel: string
  hours: string
  hoursNote: string
  phoneLabel: string
  phone: string
  phoneHref: string
}

// Restaurant intro: story on the left, opening hours and dining enquiry phone on the right.
function RestaurantIntro({ eyebrow, heading, lead, paragraphs, hoursLabel, hours, hoursNote, phoneLabel, phone, phoneHref }: Props) {
  return (
    <div className="container margin_120_95">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5">
          <div className="intro">
            <SectionTitle eyebrow={eyebrow} heading={heading} />
            <p className="lead">{lead}</p>
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="col-lg-5">
          <div>
            <ul>
              <li className="d-flex justify-content-between mb-2">
                <strong>{hoursLabel}</strong>
                <span>{hours}</span>
              </li>
              <li>{hoursNote}</li>
            </ul>
            <p>
              <a href={phoneHref}>
                <i className="bi bi-telephone"></i>
                <span>
                  <em>{phoneLabel}</em>
                  {phone}
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantIntro
