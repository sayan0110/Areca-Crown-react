import RoomDetail from '../components/RoomDetail'
import { premium, superior } from '../data/rooms'

function PremiumRoom() {
  return (
    <RoomDetail
      room={premium}
      otherRoom={superior}
      image="/img/rooms/1.jpg"
      otherImage="/img/rooms/3.jpg"
      heroTitle="A Comfortable Base for Your Kaziranga Escape"
      overviewHeading="Rest, Recharge and Explore Kaziranga"
    />
  )
}

export default PremiumRoom
