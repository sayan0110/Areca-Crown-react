import RoomDetail from '../components/RoomDetail'
import { roomFeatures, roomGalleryImages } from '../data/rooms'

function SuperiorRoom() {
  return (
    <RoomDetail
      title="Superior Room"
      tariff="Listed tariff ₹2,499"
      image="/img/rooms/3.jpg"
      introHeading="Your Superior stay in Kaziranga"
      introParagraphs={[
        '2 Superior rooms are available at the property. Rooms accommodate two to three guests, with final occupancy and bedding confirmed when booking.',
        'Breakfast, free Wi-Fi and parking are included. Check-in is from 1 PM and check-out is by 11 AM. Confirm tariff basis, taxes and cancellation terms before payment.',
      ]}
      features={roomFeatures}
      galleryImages={roomGalleryImages}
      otherRoom={{ image: '/img/rooms/1.jpg', price: 'Listed tariff ₹3,499', title: 'Premium Room', to: '/premium-room' }}
    />
  )
}

export default SuperiorRoom
