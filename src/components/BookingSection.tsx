import { Link } from 'react-router-dom'
import DateRangePicker from './DateRangePicker'

type Props = {
  eyebrow?: string
  heading?: string
  text?: string
  rooms?: string[]
  phone?: string
  phoneHref?: string
  // A route ('/contact-us#enquiry') renders a Link; anything else (https:, tel:) a plain anchor.
  bookTo?: string
  bookLabel?: string
  bookMargin?: string
}

function BookingSection({
  eyebrow = 'Plan your stay',
  heading = 'Your Kaziranga Stay Starts Here',
  text = 'Share your dates, guest count and preferred room category. Our team will confirm availability, the applicable rate and the booking terms before you reserve.',
  rooms = ['Premium Room', 'Superior Room'],
  phone = '+91 69012 80887',
  phoneHref = 'tel:+916901280887',
  bookTo = '/contact-us#enquiry',
  bookLabel = 'Check Availability',
  bookMargin = 'mt-4',
}: Props) {
  return (
    <div className="container margin_120_95" id="booking_section">
      <div className="row justify-content-between">
        <div className="col-xl-4">
          <div data-cue="slideInUp">
            <div className="title">
              <small>{eyebrow}</small>
              <h2>{heading}</h2>
            </div>
            <p>{text}</p>
            <p className="phone_element no_borders">
              <a href={phoneHref}>
                <i className="bi bi-telephone"></i>
                <span>
                  <em>Info and bookings</em>
                  {phone}
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="col-xl-7">
          <div data-cue="slideInUp" data-delay="200">
            <div className="booking_wrapper">
              <div className="col-12">
                <DateRangePicker id="date_booking" />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="custom_select">
                    <select className="form-select" defaultValue="">
                      <option value="">Room category</option>
                      {rooms.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="qty-buttons mb-3 version_2">
                        <input type="button" value="+" className="qtyplus" name="adults_booking" />
                        <input type="text" name="adults_booking" id="adults_booking" defaultValue="" className="qty form-control" placeholder="Adults" />
                        <input type="button" value="-" className="qtyminus" name="adults_booking" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3 qty-buttons mb-3 version_2">
                        <input type="button" value="+" className="qtyplus" name="childs_booking" />
                        <input type="text" name="childs_booking" id="childs_booking" defaultValue="" className="qty form-control" placeholder="Children" />
                        <input type="button" value="-" className="qtyminus" name="childs_booking" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={`text-end ${bookMargin}`}>
              {bookTo.startsWith('/') ? (
                <Link to={bookTo} className="btn_1 outline">
                  {bookLabel}
                </Link>
              ) : (
                <a href={bookTo} className="btn_1 outline" target="_blank" rel="noopener noreferrer">
                  {bookLabel}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSection
