import Hero from '../components/Hero'
import AboutIntro from '../components/AboutIntro'
import PinnedVideoSection from '../components/PinnedVideoSection'
import RoomCategories from '../components/RoomCategories'
import Facilities from '../components/Facilities'
import { mainFacilities } from '../data/facilities'
import Marquee from '../components/Marquee'
import LocalAmenity from '../components/LocalAmenity'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import NewsSection from '../components/NewsSection'
import BookingSection from '../components/BookingSection'

const rooms = [
  { image: '/img/rooms/1.jpg', price: 'From $250/night', title: 'Junior Suite' },
  { image: '/img/rooms/2.jpg', price: 'From $190/night', title: 'Deluxe Room' },
  { image: '/img/rooms/3.jpg', price: 'From $240/night', title: 'Superior Room' },
]

const amenityText =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

const testimonialComment = 'Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud.'
const testimonials = [
  { name: 'Roberta', date: '12 Oct', comment: testimonialComment },
  { name: 'Roberta', date: '2 Nov', comment: testimonialComment },
  { name: 'Roberta', date: '3 Dec', comment: testimonialComment },
]

const news = [
  { image: '/img/blog-1.jpg', date: '11 Dec', category: 'Travel', title: 'The vacation and travel Guide for experts in 2022' },
  { image: '/img/blog-3.jpg', date: '24 Dec', category: 'Event', title: 'Yayoi Kusama: Infinity Mirror Rooms at Tate Modern' },
  { image: '/img/blog-2.jpg', date: '21 Dec', category: 'Restaurant', title: 'Best Local Restaurant in 2022' },
]

function Home() {
  return (
    <main>
      <Hero />

      <div className="pattern_2">
        <AboutIntro />
        <PinnedVideoSection />
      </div>

      <div className="container margin_120_95">
        <RoomCategories rooms={rooms} />
        <Facilities facilities={mainFacilities} />
      </div>

      <Marquee />

      <div className="bg_white">
        <div className="container margin_120_95">
          <LocalAmenity className="add_bottom_90" image="/img/local_amenities_1.jpg" title="Restaurants" text={amenityText} />
          <LocalAmenity reverse image="/img/local_amenities_3.jpg" title="Art & Culture" text={amenityText} />
        </div>
      </div>

      <TestimonialsCarousel testimonials={testimonials} />

      <div className="bg_white">
        <NewsSection items={news} />
      </div>

      <BookingSection />
    </main>
  )
}

export default Home
