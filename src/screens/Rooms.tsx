import PageHero from '../components/PageHero'
import RoomListItem from '../components/RoomListItem'
import Facilities from '../components/Facilities'
import Marquee from '../components/Marquee'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'
import { mainFacilities } from '../data/facilities'

const inclusions = [
  { icon: 'customicon-wifi', label: 'Free Wi-Fi' },
  { icon: 'bi bi-cup-hot', label: 'Breakfast' },
  { icon: 'bi bi-car-front', label: 'Parking' },
]

// Images: rooms/4.jpg (hero) is not in the project yet, so rooms/2.jpg stands in for it.
const rooms = [
  {
    image: '/img/rooms/1.jpg',
    tariff: 'Listed tariff ₹3,499',
    title: 'Premium Room',
    text: '6 rooms in this category. Occupancy for two to three guests, with breakfast, free Wi-Fi and parking. Confirm tariff basis, taxes and extra guest arrangements.',
    readMoreTo: '/premium-room',
    align: 'start' as const,
  },
  {
    image: '/img/rooms/3.jpg',
    tariff: 'Listed tariff ₹2,499',
    title: 'Superior Room',
    text: '2 rooms in this category. Occupancy for two to three guests, with breakfast, free Wi-Fi and parking. Confirm tariff basis, taxes and extra guest arrangements.',
    readMoreTo: '/superior-room',
    align: 'end' as const,
  },
]

const faqs = [
  {
    question: 'What is the Premium room tariff?',
    answer: 'The listed Premium tariff as ₹3,499. Confirm its basis, the rate for your dates, taxes and any additional guest charges with the hotel.',
  },
  {
    question: 'What is the Superior room tariff?',
    answer: 'The listed Superior tariff as ₹2,499. Confirm its basis, the rate for your dates, taxes and any additional guest charges with the hotel.',
  },
  {
    question: 'How many people can stay in a room?',
    answer: 'The stated room occupancy is two to three people. Confirm the category-specific arrangements, bedding and any third-guest charge before booking.',
  },
  {
    question: 'Is breakfast included?',
    answer: 'Yes. Breakfast, free Wi-Fi and parking are listed as inclusions. Confirm the complete plan in your quotation.',
  },
  {
    question: 'Can I book both room categories for a group?',
    answer: 'You can enquire about a mix of Premium and Superior rooms. Availability and the final room allocation must be confirmed by the hotel.',
  },
]

function Rooms() {
  return (
    <main>
      <PageHero eyebrow="Areca Crown Hariyali" title="Our Rooms" image="/img/rooms/2.jpg" />

      <div className="container margin_120_95 pb-0" id="first_section">
        {rooms.map((room) => (
          <RoomListItem key={room.title} {...room} facilities={inclusions} />
        ))}
      </div>

      <div className="bg_white">
        <div className="container margin_120_95">
          <Facilities facilities={mainFacilities} titleClassName="center mb-5" columnClass="col-xl-3 col-lg-6 col-md-6" />
        </div>
        <Marquee />
      </div>

      <FaqSection items={faqs} />

      <EnquirySection />
    </main>
  )
}

export default Rooms
