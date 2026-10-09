import RoomDetail from '../components/RoomDetail'
import { premium, superior } from '../data/rooms'
import type { GuestReview } from '../components/GuestReviews'

const reviews: GuestReview[] = [
  {
    name: 'Rahul Sharma',
    date: '12 March',
    comment: '“Areca Crown Hariyali was a wonderful escape into nature. The peaceful surroundings, warm hospitality, and beautiful greenery made our Kaziranga trip truly memorable.”',
  },
  {
    name: 'Priya Das',
    date: '18 June',
    comment: '“A perfect place to relax and enjoy the beauty of Kaziranga. The hospitality was excellent, the atmosphere was refreshing, and every moment felt special.”',
  },
  {
    name: 'Arjun Mahanta',
    date: '24 August',
    comment: '“Our stay at Areca Crown Hariyali was absolutely delightful. Surrounded by nature and away from the city rush, it was the perfect getaway with family.”',
  },
]

function PremiumRoom() {
  return (
    <RoomDetail
      room={premium}
      otherRoom={superior}
      image={`${import.meta.env.BASE_URL}img/rooms/1.jpg`}
      otherImage={`${import.meta.env.BASE_URL}img/rooms/3.jpg`}
      heroTitle="A Comfortable Base for Your Kaziranga Escape"
      overviewHeading="Rest, Recharge and Explore Kaziranga"
      reviews={reviews}
    />
  )
}

export default PremiumRoom
