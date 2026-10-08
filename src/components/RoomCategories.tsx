import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import RoomCategoryCard, { type RoomCategory } from './RoomCategoryCard'

type Props = {
  rooms: RoomCategory[]
  eyebrow?: string
  heading?: string
  viewAllTo?: string
}

function RoomCategories({ rooms, eyebrow = 'Luxury experience', heading = 'Rooms & Suites', viewAllTo = '/rooms' }: Props) {
  return (
    <>
      <SectionTitle className="mb-3" eyebrow={eyebrow} heading={heading} animated headingDelay={200} />
      <div className="row justify-content-center add_bottom_90" data-cues="slideInUp" data-delay="300">
        {rooms.map((room, i) => (
          <RoomCategoryCard key={room.title} {...room} featured={i === 0} />
        ))}
        <p className="text-end">
          <Link to={viewAllTo} className="btn_1 outline mt-2">
            View all Rooms
          </Link>
        </p>
      </div>
    </>
  )
}

export default RoomCategories
