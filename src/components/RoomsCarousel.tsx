import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import OwlCarousel from './OwlCarousel'
import RoomBox, { type RoomCategory } from './RoomBox'

type Props = {
  rooms: RoomCategory[]
  eyebrow?: string
  heading?: string
  viewAllTo?: string
}

const options = {
  loop: true,
  margin: 5,
  nav: true,
  dots: false,
  center: true,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: { 0: { items: 1 }, 600: { items: 1 }, 991: { items: 2 } },
}

function RoomsCarousel({ rooms, eyebrow = 'Luxury experience', heading = 'Rooms & Suites', viewAllTo = '/rooms' }: Props) {
  return (
    <div className="container margin_120_95">
      <SectionTitle className="mb-4" eyebrow={eyebrow} heading={heading} animated headingDelay={200} />
      <div data-cues="zoomIn" data-delay="200">
        <OwlCarousel className="carousel_item_centered_rooms rounded-img" options={options}>
          {rooms.map((room) => (
            <div className="item" key={room.title}>
              <RoomBox {...room} />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <p className="text-end mt-2">
        <Link to={viewAllTo} className="btn_1 outline">
          View all rooms
        </Link>
      </p>
    </div>
  )
}

export default RoomsCarousel
