import PageHero from '../components/PageHero'
import StoryBlock from '../components/StoryBlock'
import Facilities from '../components/Facilities'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'
import { usePageMeta } from '../utils/usePageMeta'

// about_1.jpg is not in the project yet, so existing images stand in for it.
const aboutImage = '/img/home_2.jpg'

const nameMeanings = [
  {
    icon: 'bi bi-tree',
    title: 'Areca',
    text: 'The handcrafted façade features polished areca palm trunks. This distinctive detail inspired “Areca”, connecting the property’s identity to a material and form rooted in its setting.',
  },
  {
    icon: 'bi bi-gem',
    title: 'Crown',
    text: '“Crown” draws inspiration from the graceful crown of the areca palm. It also reflects our wish for every guest to feel special, valued and welcome throughout their stay.',
  },
  {
    icon: 'bi bi-flower2',
    title: 'Hariyali',
    text: '“Hariyali” means greenery. The word reflects the natural beauty surrounding Kaziranga and the peaceful character that inspires the stay.',
  },
]

const experiences = [
  { icon: 'bi bi-tree', title: 'Assamese Character', text: 'Discover a property whose name and handcrafted façade take inspiration from Assam.' },
  { icon: 'customicon-double-bed', title: 'Two Room Choices', text: 'Select one of six Premium rooms or two Superior rooms for your preferred stay.' },
  { icon: 'bi bi-signpost-2', title: 'A Convenient Roadside Location', text: 'Reach the property beside National Highway 715 in Bosagaon, Kaziranga.' },
  { icon: 'customicon-breakfast', title: 'Useful Stay Inclusions', text: 'Breakfast, complimentary Wi-Fi and parking are included in the listed stay plan.' },
  { icon: 'bi bi-binoculars', title: 'A Connection to Local Experiences', text: 'Ask about wildlife outings, village visits, tea garden walks and other available activities.' },
  { icon: 'customicon-cocktail', title: 'Heritage Dining', text: 'Discover SEWABHAAT, our in-house Assamese heritage dining experience.' },
]

const faqs = [
  {
    question: 'What does the hotel name mean?',
    answer: 'Areca refers to the palm trunks used in the handcrafted façade. Crown reflects the palm’s crown and the wish to make guests feel valued. Hariyali means greenery.',
  },
  {
    question: 'Is the property suitable for families?',
    answer: 'The property welcomes families. Rooms accommodate two to three guests; confirm children’s occupancy and bedding requirements directly.',
  },
  {
    question: 'How many rooms does the hotel have?',
    answer: 'Areca Crown Hariyali has eight rooms: six Premium and two Superior.',
  },
]

function About() {
  usePageMeta(
    'About Areca Crown Hariyali | Kaziranga Stay',
    'Discover the story of Areca Crown Hariyali, an eight-room nature-inspired stay in Bosagaon, Kaziranga, with Assamese character and welcoming hospitality.',
  )

  return (
    <main>
      <PageHero
        kenburns
        eyebrow="Our story"
        title="Inspired by Assam. Made for Your Stay."
        text="At Areca Crown Hariyali, our name, our surroundings and our hospitality share the same inspiration: Assam. Discover a welcoming stay shaped by nature, local character and the comfort of feeling cared for."
        image={aboutImage}
      />

      <StoryBlock
        image={aboutImage}
        eyebrow="Areca Crown Hariyali"
        heading="A Nature-Inspired Stay in Kaziranga"
        paragraphs={[
          'Areca Crown Hariyali is a charming eight-room property in Bosagaon, Kaziranga, offering a peaceful blend of comfort, traditional Assamese warmth and modern hospitality. Green surroundings and convenient access beside National Highway 715 make it a welcoming choice for families, couples and travellers exploring the region.',
          'Our approach is simple: offer a comfortable place to rest, a connection to Assam and the everyday conveniences that help your journey flow. Choose a Premium or Superior room, begin the day with breakfast and take time to discover Kaziranga at your own pace.',
        ]}
        reverse
      />

      <div className="pattern_2">
        <div className="container margin_120_95">
          <Facilities
            eyebrow="Areca • Crown • Hariyali"
            heading="A Name That Belongs to Its Surroundings"
            text="Every part of our name reflects the spirit behind the property. Together, these three words express our wish to share the warmth of Assam, the beauty of nature and the comfort of modern hospitality."
            facilities={nameMeanings}
            columnClass="col-lg-4 col-md-6"
          />
        </div>
      </div>

      <div className="bg_white">
        <div className="container margin_120_95">
          <Facilities
            eyebrow="The Areca experience"
            heading="A Small Property with a Welcoming Spirit"
            text="Enjoy a stay that brings together local identity, practical comforts and time to experience the region."
            facilities={experiences}
            columnClass="col-lg-4 col-md-6 mb-4"
          />
        </div>
      </div>

      <FaqSection items={faqs} />

      <EnquirySection eyebrow="Plan your stay" heading="Come for Kaziranga. Stay for the Warmth." text="Plan your visit to Areca Crown Hariyali and enjoy a comfortable base for discovering Assam’s wildlife, greenery and local life." />
    </main>
  )
}

export default About
