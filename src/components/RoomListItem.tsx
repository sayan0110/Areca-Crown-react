import { Link } from 'react-router-dom'

export type RoomFacility = {
  icon: string
  label: string
}

type Props = {
  image: string
  // Small line above the title (room tag or listed tariff).
  eyebrow: string
  title: string
  text: string
  facilities: RoomFacility[]
  readMoreTo: string
  readMoreLabel: string
  // The primary "book" button is only rendered when bookLabel is given.
  bookTo?: string
  bookLabel?: string
  align?: 'start' | 'end'
}

// One row of the room list: pinned image with an overlapping info card.
function RoomListItem({ image, eyebrow, title, text, facilities, readMoreTo, readMoreLabel, bookTo = '/contact-us#enquiry', bookLabel, align = 'start' }: Props) {
  return (
    <div className="row_list_version_1" style={{marginBottom: 0}}>
      <div className="pinned-image rounded_container pinned-image--medium">
        <div className="pinned-image__container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className={`row justify-content-${align}`}>
        <div className="col-lg-8">
          <div className={`box_item_info${align === 'end' ? ' float-lg-end' : ''}`} data-jarallax-element="-30">
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
            <div className="box_item_footer d-flex align-items-center justify-content-between">
              {bookLabel && (
                <Link to={bookTo} className="btn_4 learn-more" style={{width: '18rem'}}>
                  <span className="circle">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text text-nowrap">{bookLabel}</span>
                </Link>
              )}
              <Link to={readMoreTo} className="animated_link">
                <strong>{readMoreLabel}</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomListItem
