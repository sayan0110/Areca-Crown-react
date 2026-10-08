import RoomDetail from '../components/RoomDetail'
import { roomFeatures, roomGalleryImages } from '../data/rooms'

function PremiumRoom() {
  return (
    <RoomDetail
      title="Premium Room"
      tariff="Listed tariff ₹3,499"
      image="/img/rooms/1.jpg"
      introHeading="Your Premium stay in Kaziranga"
      introParagraphs={[
        '6 Premium rooms are available at the property. Rooms accommodate two to three guests, with final occupancy and bedding confirmed when booking.',
        'Breakfast, free Wi-Fi and parking are included. Check-in is from 1 PM and check-out is by 11 AM. Confirm tariff basis, taxes and cancellation terms before payment.',
      ]}
      features={roomFeatures}
      galleryImages={roomGalleryImages}
      otherRoom={{ image: '/img/rooms/3.jpg', price: 'Listed tariff ₹2,499', title: 'Superior Room', to: '/superior-room' }}
    />
  )
}

export default PremiumRoom
