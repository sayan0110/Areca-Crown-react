export type Facility = {
  icon: string
  title: string
  text: string
}

type Props = Facility & { noBorder?: boolean; columnClass?: string }

function FacilityCard({ icon, title, text, noBorder = false, columnClass = 'col-xl-3 col-md-6' }: Props) {
  return (
    <div className={columnClass}>
      <div className={`box_facilities${noBorder ? ' no-border' : ''}`} data-cue="slideInUp">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default FacilityCard
