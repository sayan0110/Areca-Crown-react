import { Link } from 'react-router-dom'
import DateRangePicker from './DateRangePicker'

type Props = {
  rooms?: string[]
  phone?: string
  phoneHref?: string
  bookTo?: string
  bookMargin?: string
}

function BookingSection({ rooms = ['Double Room', 'Deluxe Room', 'Superior Room', 'Junior Suite'], phone = '+41 934 121 1334', phoneHref = 'tel://423424234', bookTo = '/contact-us', bookMargin = 'mt-4' }: Props) {
  return (
    <div className="container margin_120_95" id="booking_section">
      <div className="row justify-content-between">
        <div className="col-xl-4">
          <div data-cue="slideInUp">
            <div className="title">
              <small>Paradise Hotel</small>
              <h2>Check Availability</h2>
            </div>
            <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. </p>
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
                      <option value="">Select Room</option>
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
                        <input type="text" name="childs_booking" id="childs_booking" defaultValue="" className="qty form-control" placeholder="Childs" />
                        <input type="button" value="-" className="qtyminus" name="childs_booking" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={`text-end ${bookMargin}`}>
              <Link to={bookTo} className="btn_1 outline">
                Book Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSection
