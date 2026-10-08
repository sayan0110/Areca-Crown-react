import { useState } from 'react'
import PageHero from '../components/PageHero'
import GalleryGrid, { type GalleryImage } from '../components/GalleryGrid'
import SectionTitle from '../components/SectionTitle'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'
import { usePageMeta } from '../utils/usePageMeta'

type Category = { label: string; text: string; images: GalleryImage[] }

// Template stand-ins: no approved property photographs are in the project yet, so every caption is marked illustrative.
// Replace the files and captions with approved assets before publication; captions must match the actual photograph.
const categories: Category[] = [
  {
    label: 'Property & Exterior',
    text: 'Discover the façade inspired by polished areca palm trunks and the exterior character of Areca Crown Hariyali.',
    images: [],
  },
  {
    label: 'Premium Rooms',
    text: 'Take a closer look at the interiors and details of our Premium room category.',
    images: [
      { src: `${import.meta.env.BASE_URL}img/rooms/1.jpg`, caption: 'Premium Room interior (illustrative)' },
      { src: `${import.meta.env.BASE_URL}img/rooms/2.jpg`, caption: 'Premium Room interior (illustrative)' },
      { src: `${import.meta.env.BASE_URL}img/home_1.jpg`, caption: 'Premium Room bathroom (illustrative)' },
    ],
  },
  {
    label: 'Superior Rooms',
    text: 'Explore the interiors and details of our Superior room category.',
    images: [{ src: `${import.meta.env.BASE_URL}img/rooms/3.jpg`, caption: 'Superior Room interior (illustrative)' }],
  },
  {
    label: 'SEWABHAAT Restaurant',
    text: 'See the setting for Assamese heritage dining at our in-house restaurant.',
    images: [{ src: `${import.meta.env.BASE_URL}img/local_amenities_1.jpg`, caption: 'SEWABHAAT dining area (illustrative)' }],
  },
  {
    label: 'Common Spaces',
    text: 'Explore the shared areas that form part of your stay at the property.',
    images: [{ src: `${import.meta.env.BASE_URL}img/home_2.jpg`, caption: 'Common space (illustrative)' }],
  },
  {
    label: 'Surroundings',
    text: 'Discover glimpses of the greenery and local setting around our Kaziranga stay.',
    images: [{ src: `${import.meta.env.BASE_URL}img/hero_home_1.jpg`, caption: 'Greenery around Kaziranga (illustrative)' }],
  },
]

const allImages = categories.flatMap((c) => c.images)

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
  usePageMeta(
    'Photo Gallery | Areca Crown Hariyali, Kaziranga',
    'Explore the Areca Crown Hariyali gallery featuring the property exterior, Premium and Superior rooms, SEWABHAAT restaurant and Kaziranga surroundings.',
  )

  const [active, setActive] = useState<string>('All')
  const selected = categories.find((c) => c.label === active)
  const images = selected ? selected.images : allImages

  return (
    <main>
      <PageHero
        eyebrow="Photo gallery"
        title="A Closer Look at Areca Crown Hariyali"
        text="Discover our property, rooms, restaurant and surroundings through photographs. Explore the details of your stay and the natural setting that makes our Kaziranga location special."
        image={`${import.meta.env.BASE_URL}img/hero_home_1.jpg`}
      />

      <div className="container margin_120_95">
        <SectionTitle className="text-center mb-4" eyebrow="Spaces • Details • Surroundings" heading="Picture Your Stay in Kaziranga">
          <p>Browse the gallery to get a feel for Areca Crown Hariyali before your visit. From the handcrafted façade to the room categories and common spaces, each collection offers a closer look at the property.</p>
        </SectionTitle>

        <p className="text-center mb-4">
          {['All', ...categories.map((c) => c.label)].map((label) => (
            <button key={label} type="button" className={`btn_1 ${label === active ? '' : 'outline'} me-2 mb-2`} onClick={() => setActive(label)}>
              {label}
            </button>
          ))}
        </p>
        {selected && <p className="text-center mb-5">{selected.text}</p>}

        {images.length > 0 ? <GalleryGrid key={active} images={images} /> : <p className="text-center">Approved photographs for this collection are pending.</p>}
      </div>

      <div className="container">
        <p>All hotel images in this prototype are template samples. Premium, Superior, exterior and SEWABHAAT photographs will be replaced with the client’s approved assets.</p>
      </div>

      <FaqSection items={faqs} />

      <EnquirySection eyebrow="Plan your stay" heading="Like What You See? Plan Your Visit." text="Choose your room category and contact us to confirm availability for your travel dates." />
    </main>
  )
}

export default Gallery
