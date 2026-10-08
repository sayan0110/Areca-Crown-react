import SectionTitle from './SectionTitle'
import FacilityCard, { type Facility } from './FacilityCard'

type Props = {
  facilities: Facility[]
  eyebrow?: string
  heading?: string
  titleClassName?: string
  columnClass?: string
}

function Facilities({ facilities, eyebrow = 'Paradise Hotel', heading = 'Main Facilities', titleClassName = 'text-center mb-5', columnClass }: Props) {
  return (
    <>
      <SectionTitle className={titleClassName} eyebrow={eyebrow} heading={heading} animated headingDelay={100} />
      <div className="row mt-4">
        {facilities.map((f, i) => (
          <FacilityCard key={f.title} {...f} noBorder={i === 0} columnClass={columnClass} />
        ))}
      </div>
    </>
  )
}

export default Facilities
