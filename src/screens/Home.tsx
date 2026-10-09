import Hero from '../components/Hero'
import AboutIntro from '../components/AboutIntro'
import PinnedVideoSection from '../components/PinnedVideoSection'
import SectionTitle from '../components/SectionTitle'
import RoomCard from '../components/RoomCard'
import { Link } from 'react-router-dom'
import Facilities from '../components/Facilities'
import { mainFacilities } from '../data/facilities'
import LocalAmenity from '../components/LocalAmenity'
import FaqSection from '../components/FaqSection'
import GallerySlider from '../components/GallerySlider'
import Marquee from '../components/Marquee'
import BookingSection from '../components/BookingSection'
import { usePageMeta } from '../utils/usePageMeta'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import { testimonials } from '../data/testimonials'

const rooms = [
  {
    image: `${import.meta.env.BASE_URL}img/rooms/1.jpg`,
    eyebrow: 'Listed tariff: ₹3,499',
    title: 'Premium Room',
    text: 'A comfortable base for relaxed mornings and restful evenings in Kaziranga. With six rooms in this category, our Premium accommodation is a welcoming choice for couples, families and nature-loving travellers.',
    facilities: [{ icon: 'bi bi-people', label: 'Occupancy: 2 to 3 guests' }],
    readMoreTo: '/premium-room',
    readMoreLabel: 'View Premium Room',
  },
  {
    image: `${import.meta.env.BASE_URL}img/rooms/3.jpg`,
    eyebrow: 'Listed tariff: ₹2,499',
    title: 'Superior Room',
    text: 'A welcoming place to pause between your journeys through Assam. Our two Superior rooms bring together a peaceful stay and the essential conveniences of breakfast, free Wi-Fi and parking.',
    facilities: [{ icon: 'bi bi-people', label: 'Occupancy: 2 to 3 guests' }],
    readMoreTo: '/superior-room',
    readMoreLabel: 'View Superior Room',
  },
]

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}img/rooms/1.jpg`, alt: 'Premium room' },
  { src: `${import.meta.env.BASE_URL}img/rooms/3.jpg`, alt: 'Superior room' },
  { src: `${import.meta.env.BASE_URL}img/local_amenities_1.jpg`, alt: 'Kaziranga surroundings' },
  { src: `${import.meta.env.BASE_URL}img/local_amenities_3.jpg`, alt: 'Areca Crown Hariyali property' },
]

const faqs = [
  {
    question: 'Where is Areca Crown Hariyali located?',
    answer: 'Areca Crown Hariyali is in Bosagaon, Kaziranga National Park, Golaghat district, Assam 785609, beside National Highway 715.',
  },
  {
    question: 'What room categories are available?',
    answer: 'We offer six Premium rooms and two Superior rooms. Each category accommodates two to three guests, subject to confirmation of the room and bedding arrangements.',
  },
  {
    question: 'What is included in the stay?',
    answer: 'The listed stay plan includes breakfast, complimentary Wi-Fi and parking. Confirm the complete booking plan with the hotel.',
  },
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is at 1:00 PM and check-out is at 11:00 AM.',
  },
]

function Home() {
  usePageMeta(
    'Areca Crown Hariyali | Stay in Kaziranga, Assam',
    'Stay at Areca Crown Hariyali in Bosagaon, Kaziranga. Explore Premium and Superior rooms with breakfast, free Wi-Fi, parking and easy NH715 access.',
  )

  return (
    <main>
      <Hero />

      <div className="pattern_2">
        <AboutIntro />
        <PinnedVideoSection />
      </div>

      <div className="margin_120_95" style={{background: "#FAF8F5"}}>
        <div className='container'>
          <SectionTitle className="mb-3" eyebrow="Our accommodation" heading="Two Room Categories. A Welcoming Stay." animated headingDelay={200}>
            <p>Choose between our Premium and Superior rooms for your visit to Kaziranga. Both categories welcome two to three guests and come with breakfast, free Wi-Fi and parking in the listed stay plan. Contact us to confirm the room arrangements and complete price for your dates.</p>
          </SectionTitle>
          <div className="row g-4">
            {rooms.map((room) => (
              <div key={room.title} className="col-lg-6">
                <RoomCard {...room} />
              </div>
            ))}
          </div>
          <p className="text-center my-4">
            <Link to="/rooms" className="btn_1 outline mt-2">
              View All Rooms
            </Link>
          </p>
          {/* <p>
            <small>Listed tariffs are indicative. Please confirm the applicable rate, rate basis, taxes, inclusions and any additional guest charges for your travel dates.</small>
          </p> */}
        </div>
      </div>

      <div className="" style={{background: "#FAF8F5"}}>
        <div className="container">
          <Facilities eyebrow="Stay comfortably" heading="Simple Comforts That Make Travel Easier" text="Enjoy the essentials of a comfortable Kaziranga stay, with a convenient location and thoughtful inclusions." facilities={mainFacilities} />
        </div>
        <Marquee words={['Areca Crown Hariyali']} repeat={10} />
      </div>

      <div className="container margin_120_95">
        {/* <div className="title">
          <h2 className='kazirangaHeadeing text-center'>Explore kaziranga</h2>
        </div> */}
        <LocalAmenity
          className=""
          image={`${import.meta.env.BASE_URL}img/local_amenities_1.jpg`}
          eyebrow="Wildlife • Nature • Local life"
          title="Make Time for the Kaziranga Experience"
          text="Discover a landscape shaped by wildlife, greenery and the everyday rhythms of Assam. Ask about jeep safaris, permitted elephant safaris, nature walks, village visits and tea garden walks. Activities depend on local permissions, weather and availability; confirm arrangements and charges before planning your day."
          to="/explore-kaziranga"
          buttonLabel="Explore Kaziranga"
        />
        <LocalAmenity
          reverse
          image={`${import.meta.env.BASE_URL}img/local_amenities_3.jpg`}
          eyebrow="WILDLIFE • SAFARI"
          title="Safaris in Kaziranga"
          text="Kaziranga National Park is a UNESCO World Heritage Site, known for the greater one-horned rhinoceros. Ask us about permitted jeep and elephant safaris, then confirm slots, permits and charges before planning."
          to="/gallery"
          buttonLabel="Explore Kaziranga"
        />
      </div>

      <GallerySlider images={galleryImages} />

      <div className="bg_white margin_120_95" style={{paddingTop: 0}}>
        <FaqSection items={faqs} />
      </div>
      <TestimonialsCarousel testimonials={testimonials} />
      <BookingSection />
    </main>
  )
}

export default Home
