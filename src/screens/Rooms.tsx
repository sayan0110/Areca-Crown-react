import PageHero from '../components/PageHero'
import CenteredTextSection from '../components/CenteredTextSection'
import RoomListItem from '../components/RoomListItem'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'
import { usePageMeta } from '../utils/usePageMeta'

const inclusions = 'Breakfast • Free Wi-Fi • Parking'

function categoryFacilities(count: number, tariff: string) {
  return [
    { icon: 'bi bi-door-open', label: `Rooms in category: ${count}` },
    { icon: 'bi bi-people', label: 'Occupancy: 2 to 3 guests' },
    { icon: 'bi bi-tag', label: `Listed tariff: ${tariff}` },
    { icon: 'bi bi-cup-hot', label: `Inclusions: ${inclusions}` },
  ]
}

// Images: rooms/4.jpg (hero) is not in the project yet, so rooms/2.jpg stands in for it.
const rooms = [
  {
    image: `${import.meta.env.BASE_URL}img/rooms/1.jpg`,
    eyebrow: 'Premium room',
    title: 'A Welcoming Stay in Premium',
    text: 'Return from a day of exploring to a comfortable room and a peaceful setting. Our Premium category offers the essential stay inclusions of breakfast, free Wi-Fi and parking, making it easy to settle into your Kaziranga visit.',
    facilities: categoryFacilities(6, '₹3,499'),
    readMoreTo: '/premium-room',
    readMoreLabel: 'View Premium Room',
    bookLabel: 'Enquire About Availability',
    align: 'start' as const,
  },
  {
    image: `${import.meta.env.BASE_URL}img/rooms/3.jpg`,
    eyebrow: 'Superior room',
    title: 'A Welcoming Stay in Superior',
    text: 'Return from a day of exploring to a comfortable room and a peaceful setting. Our Superior category offers the essential stay inclusions of breakfast, free Wi-Fi and parking, making it easy to settle into your Kaziranga visit.',
    facilities: categoryFacilities(2, '₹2,499'),
    readMoreTo: '/superior-room',
    readMoreLabel: 'View Superior Room',
    bookLabel: 'Enquire About Availability',
    align: 'end' as const,
  },
]

const faqs = [
  {
    question: 'How many rooms does the property have?',
    answer: 'The property has eight rooms: six Premium rooms and two Superior rooms.',
  },
  {
    question: 'Can three guests stay in a room?',
    answer: 'The listed occupancy is two to three guests. Please confirm the exact bedding setup, guest eligibility and additional guest charges with the hotel.',
  },
  {
    question: 'Is breakfast included?',
    answer: 'Yes. Breakfast is included in the listed stay plan, alongside complimentary Wi-Fi and parking.',
  },
  {
    question: 'How do I book a room?',
    answer: 'Call +91 69012 80887 or +91 70024 99397, or send a WhatsApp enquiry to +91 69012 80887. Your booking requires confirmation from the hotel.',
  },
]

function Rooms() {
  usePageMeta(
    'Premium & Superior Rooms | Areca Crown Hariyali',
    'Explore Premium and Superior rooms at Areca Crown Hariyali, Kaziranga. View listed tariffs, occupancy, breakfast, free Wi-Fi and parking inclusions.',
  )

  return (
    <main>
      <PageHero
        eyebrow="Rooms in Kaziranga"
        title="Find Your Place to Unwind"
        text="Choose a Premium or Superior room at Areca Crown Hariyali. Enjoy a welcoming stay with breakfast, complimentary Wi-Fi and parking in the listed plan, alongside convenient access to National Highway 715."
        image={`${import.meta.env.BASE_URL}img/rooms/2.jpg`}
      />

      <CenteredTextSection
        eyebrow="Premium & Superior"
        heading="Comfort for Your Kaziranga Journey"
        paragraphs={['Our eight rooms are divided into two categories: six Premium rooms and two Superior rooms. Both categories accommodate two to three guests. Tell us your travel dates and guest count so we can confirm availability, room arrangements and the complete booking price.']}
      />

      <div className="container margin_120_95 pb-0 pt-0">
        {rooms.map((room) => (
          <RoomListItem key={room.title} {...room} />
        ))}
      </div>

      <CenteredTextSection
        id="stay-information"
        eyebrow="Before you book"
        heading="Plan Your Stay with Confidence"
        paragraphs={['Check-in is at 1:00 PM and check-out is at 11:00 AM. Please confirm the room setup for your group, applicable rate and taxes, additional guest charges, payment requirements and cancellation terms before confirming your reservation.']}
      />

      <FaqSection items={faqs} />

      <EnquirySection eyebrow="Plan your stay" heading="Choose Your Room. Plan Your Dates." text="Send us your preferred category and travel dates. We will confirm room availability and the complete price for your stay." />
    </main>
  )
}

export default Rooms
