import { Link } from 'react-router-dom'

type Props = {
  category: string
  buttonLabel?: string
  buttonTo?: string
  checkIn?: string
  checkOut?: string
  occupancy?: string
}

// Three-column stay information block of the room detail pages: facts, "good to know" notes, booking call-to-action.
function RoomStayInfo({ category, buttonLabel = 'Check Availability', buttonTo = '#enquiry', checkIn = '1:00 PM', checkOut = '11:00 AM', occupancy = '2 to 3 guests' }: Props) {
  return (
    <div className="container margin_120_95">
      <div className="row justify-content-between">
        <div className="col-lg-3">
          <h3>Stay Information</h3>
          <ul className="list-unstyled">
            <li>Check-in: {checkIn}</li>
            <li>Check-out: {checkOut}</li>
            <li>Category: {category}</li>
            <li>Occupancy: {occupancy}</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h3>Good to Know</h3>
          <p>Please confirm the bedding setup, rate basis, taxes and any additional guest charges. Request the applicable payment and cancellation terms before confirming. Early arrival or late departure requires prior confirmation from the hotel.</p>
        </div>
        <div className="col-lg-4">
          <h3>Ready to Plan Your Kaziranga Stay?</h3>
          <p>Share your dates and guest count to confirm {category} Room availability and the complete booking price.</p>
          {buttonTo.startsWith('#') ? (
            <a href={buttonTo} className="btn_1">
              {buttonLabel}
            </a>
          ) : (
            <Link to={buttonTo} className="btn_1">
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoomStayInfo
