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
  bookTo?: string
  bookLabel?: string
  // 'start': image left, card right. 'end': card left, image right.
  align?: 'start' | 'end'
}

// Room row with the image and an info card that overlaps its edge, laid out with flex (no absolute positioning).
function RoomShowcaseItem({ image, eyebrow, title, text, facilities, readMoreTo, readMoreLabel, bookTo = '/contact-us#enquiry', bookLabel, align = 'start' }: Props) {
  return (
    <div className={`room_showcase${align === 'end' ? ' room_showcase--reverse' : ''}`}>
      <div className="room_showcase__image">
        <img src={image} alt={title} />
      </div>
      <div className="box_item_info room_showcase__card">
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
        <div className="box_item_footer d-flex align-items-center justify-content-between gap-3">
          {bookLabel && (
            <Link to={bookTo} className="btn_1">
              {bookLabel}
            </Link>
          )}
          <Link to={readMoreTo} className="animated_link">
            <strong>{readMoreLabel}</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoomShowcaseItem
