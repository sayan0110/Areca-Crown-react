import SectionTitle from './SectionTitle'
import FacilityCard, { type Facility } from './FacilityCard'

type Props = {
  facilities: Facility[]
  eyebrow: string
  heading: string
  text?: string
  titleClassName?: string
  columnClass?: string
}

function Facilities({ facilities, eyebrow, heading, text, titleClassName = 'text-center mb-5', columnClass }: Props) {
  return (
    <>
      <SectionTitle className={titleClassName} eyebrow={eyebrow} heading={heading} animated headingDelay={100}>
        {text && <p>{text}</p>}
      </SectionTitle>
      <div className="row mt-4">
        {facilities.map((f, i) => (
          <FacilityCard key={f.title} {...f} noBorder={i === 0} columnClass={columnClass} />
        ))}
      </div>
    </>
  )
}

export default Facilities
