import RoomDetail from '../components/RoomDetail'
import { premium, superior } from '../data/rooms'

function SuperiorRoom() {
  return (
    <RoomDetail
      room={superior}
      otherRoom={premium}
      image="/img/rooms/3.jpg"
      otherImage="/img/rooms/1.jpg"
      heroTitle="A Welcoming Pause on Your Assam Journey"
      overviewHeading="Settle In and Enjoy a Slower Pace"
    />
  )
}

export default SuperiorRoom
