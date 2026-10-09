import { Link } from 'react-router-dom'
import type { RoomFacility } from './RoomListItem'

type Props = {
  image: string
  eyebrow: string
  title: string
  text: string
  facilities: RoomFacility[]
  readMoreTo: string
  readMoreLabel: string
}

// Half-width variant of RoomListItem, for showing two rooms side by side.
function RoomCard({ image, eyebrow, title, text, facilities, readMoreTo, readMoreLabel }: Props) {
  return (
    <div className="row_list_version_1 room_card">
      <div className="pinned-image rounded_container pinned-image--small">
        <div className="pinned-image__container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="box_item_info">
        <small>{eyebrow}</small>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="facilities clearfix">
          <ul>
            {facilities.map(({ icon, label }) => (
              <li key={label}>
                <i className={icon}></i> {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="box_item_footer">
          <Link to={readMoreTo} className="animated_link">
            <strong>{readMoreLabel}</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
