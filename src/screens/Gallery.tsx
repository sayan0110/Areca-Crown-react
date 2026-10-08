import { useState } from 'react'
import PageHero from '../components/PageHero'
import GalleryGrid from '../components/GalleryGrid'
import Pagination from '../components/Pagination'
import FaqSection from '../components/FaqSection'

// gallery/1-7.jpg and hero_home_2.jpg are not in the project yet, so existing images stand in for them.
const images = ['/img/rooms/1.jpg', '/img/rooms/2.jpg', '/img/rooms/3.jpg', '/img/home_1.jpg', '/img/home_2.jpg', '/img/local_amenities_1.jpg', '/img/local_amenities_3.jpg']

const faqs = [
  {
    question: 'Are the prototype images actual property photographs?',
    answer: 'No. The hotel has said property photos will be available shortly. The current illustrative images are labelled and will be replaced with approved property photographs.',
  },
  {
    question: 'Will both room categories appear in the gallery?',
    answer: 'Yes. The planned collection includes Premium and Superior rooms, with approved interior and bathroom photographs.',
  },
  {
    question: 'Can I request more room photographs before booking?',
    answer: 'Contact the hotel team to ask for available category-specific images and confirm the details important to your stay.',
  },
]

function Gallery() {
  const [page, setPage] = useState(1)

  return (
    <main>
      <PageHero eyebrow="Luxury Hotel Experience" title="Gallery" image="/img/hero_home_1.jpg" />

      <div className="container margin_120_95">
        <GalleryGrid images={images} />
        <Pagination pages={4} current={page} onChange={setPage} />
      </div>

      <div className="container">
        <p>All hotel images in this prototype are template samples. Premium, Superior, exterior and SEWABHAAT photographs will be replaced with the client’s approved assets.</p>
      </div>

      <FaqSection items={faqs} />
    </main>
  )
}

export default Gallery
