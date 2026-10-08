import { Link } from 'react-router-dom'

export type RoomFacility = {
  icon: string
  label: string
}

type Props = {
  image: string
  tariff: string
  title: string
  text: string
  facilities: RoomFacility[]
  readMoreTo: string
  bookTo?: string
  align?: 'start' | 'end'
}

// One row of the room list: pinned image with an overlapping info card.
function RoomListItem({ image, tariff, title, text, facilities, readMoreTo, bookTo = '/contact-us#enquiry', align = 'start' }: Props) {
  return (
    <div className="row_list_version_1">
      <div className="pinned-image rounded_container pinned-image--medium">
        <div className="pinned-image__container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className={`row justify-content-${align}`}>
        <div className="col-lg-8">
          <div className={`box_item_info${align === 'end' ? ' float-lg-end' : ''}`} data-jarallax-element="-30">
            <small>{tariff}</small>
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
              <Link to={bookTo} className="btn_4 learn-more">
                <span className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Book Now</span>
              </Link>
              <Link to={readMoreTo} className="animated_link">
                <strong>Read more</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomListItem
