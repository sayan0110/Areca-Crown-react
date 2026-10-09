import SectionTitle from './SectionTitle'

export type RoomFeature = {
  icon: string
  label: string
}

type Props = {
  eyebrow: string
  heading: string
  paragraphs: string[]
  features: RoomFeature[]
  id?: string
}

// Room detail intro: title + text on the left, icon list of features on the right.
function RoomIntro({ eyebrow, heading, paragraphs, features, id = 'first_section' }: Props) {
  return (
    <div className="bg_white" id={id}>
      <div className="container margin_120_95">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <SectionTitle eyebrow={eyebrow} heading={heading} />
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="room_facilities_list">
              <ul>
                {features.map(({ icon, label }) => (
                  <li key={label}>
                    <i className={icon}></i> 
                    <span style={{fontSize: '1.2rem'}}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomIntro
