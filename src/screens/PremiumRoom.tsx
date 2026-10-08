import RoomDetail from '../components/RoomDetail'
import { premium, superior } from '../data/rooms'

function PremiumRoom() {
  return (
    <RoomDetail
      room={premium}
      otherRoom={superior}
      image={`${import.meta.env.BASE_URL}img/rooms/1.jpg`}
      otherImage={`${import.meta.env.BASE_URL}img/rooms/3.jpg`}
      heroTitle="A Comfortable Base for Your Kaziranga Escape"
      overviewHeading="Rest, Recharge and Explore Kaziranga"
    />
  )
}

export default PremiumRoom
