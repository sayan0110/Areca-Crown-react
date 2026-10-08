import PageHero from '../components/PageHero'
import StoryBlock from '../components/StoryBlock'
import Facilities from '../components/Facilities'
import CenteredTextSection from '../components/CenteredTextSection'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'
import { usePageMeta } from '../utils/usePageMeta'

// assets/kaziranga.jpg is not in the project yet, so existing images stand in for it.
const heroImage = '/img/hero_home_1.jpg'
const kazirangaImage = '/img/home_2.jpg'

const experiences = [
  {
    icon: 'bi bi-binoculars',
    title: 'Jeep Safari',
    text: 'Explore Kaziranga through a permitted jeep safari and discover the park’s landscape from an authorised route. Safari access, slots and sightings vary. Confirm the operating range, permit requirements, charges and transport arrangements before booking.',
  },
  {
    icon: 'bi bi-compass',
    title: 'Elephant Safari',
    text: 'Ask about permitted elephant safari availability for your dates. These outings operate under the applicable park arrangements and are subject to official permissions and capacity. Confirm the current rules, suitability and price before making plans.',
  },
  {
    icon: 'bi bi-tree',
    title: 'Nature Walk',
    text: 'Take time for a nature walk in an approved, accessible area outside restricted wildlife zones. Ask about a suitable route and any guide arrangements. Enjoy the surroundings while respecting local access rules.',
  },
  {
    icon: 'bi bi-houses',
    title: 'Village Walk',
    text: 'Discover the quieter side of the region through a village visit or walk. Ask about suitable local arrangements and treat residents, homes and daily activities with respect. Seek permission before taking photographs of people.',
  },
  {
    icon: 'bi bi-flower1',
    title: 'Tea Garden Walk',
    text: 'Explore tea garden surroundings where visitor access is permitted. Confirm the location, permission requirements and whether a guided visit can be arranged. Follow the estate’s directions during your visit.',
  },
  {
    icon: 'bi bi-fire',
    title: 'Evening Bonfire',
    text: 'Ask about an evening bonfire at the property as a relaxed way to end the day. Availability depends on weather and safe operating conditions. Confirm arrangements and any additional charges in advance.',
  },
]

const itinerary = [
  { icon: 'bi bi-sunrise', title: 'Morning', text: 'Begin with your confirmed wildlife outing, allowing time for the required reporting and travel arrangements. Coordinate breakfast timing with the hotel if you have an early start.' },
  { icon: 'bi bi-sun', title: 'Midday', text: 'Return to Areca Crown Hariyali to rest. Ask SEWABHAAT about available lunch arrangements and take a pause before your next outing.' },
  { icon: 'bi bi-cloud-sun', title: 'Afternoon', text: 'Choose an available village visit, tea garden walk or nature walk suited to the day’s conditions and local permissions.' },
  { icon: 'bi bi-moon-stars', title: 'Evening', text: 'Return for a relaxed evening. If conditions allow and arrangements are confirmed, enjoy an evening bonfire before settling in for the night.' },
]

const faqs = [
  {
    question: 'Can I ask the hotel about safaris?',
    answer: 'Yes. Contact the team about jeep safari and permitted elephant safari options for your dates. Confirm the actual provider, permissions, availability and charges.',
  },
  {
    question: 'Are activities included in the room tariff?',
    answer: 'No activity inclusion has been confirmed in the listed room plan. Request activity prices separately before booking.',
  },
  {
    question: 'Are wildlife sightings guaranteed?',
    answer: 'No. Wildlife sightings depend on natural conditions and cannot be guaranteed.',
  },
  {
    question: 'Can I explore villages and tea gardens?',
    answer: 'Ask the team about suitable local visits and permitted access. Confirm arrangements and any guide or transport requirements before setting out.',
  },
]

function ExploreKaziranga() {
  usePageMeta(
    'Explore Kaziranga | Areca Crown Hariyali',
    'Explore Kaziranga from Areca Crown Hariyali. Ask about jeep safaris, nature walks, village visits, tea garden walks and available local experiences.',
  )

  return (
    <main>
      <PageHero
        kenburns
        eyebrow="Explore Kaziranga"
        title="Wildlife, Greenery and the Spirit of Assam"
        text="Make your stay more than a stop along the road. Discover Kaziranga’s wildlife landscape, spend time outdoors and explore the village life and tea garden surroundings that add character to your Assam journey."
        image={heroImage}
      />

      <StoryBlock
        image={kazirangaImage}
        eyebrow="Your Kaziranga journey"
        heading="Discover a Place Best Experienced Slowly"
        paragraphs={[
          'Kaziranga National Park is a UNESCO World Heritage Site in Assam, recognised for its remarkable wildlife and its importance to the conservation of the greater one-horned rhinoceros. Its landscape includes grasslands, wetlands and woodland, creating a distinctive setting for nature-focused travel.',
          'Use Areca Crown Hariyali as your base to plan a visit that balances wildlife outings with quieter local experiences. Ask our team about activities for your travel dates and confirm permissions, availability and costs before finalising your itinerary.',
        ]}
        button={{ label: 'Ask About Local Experiences', to: '/contact-us#enquiry' }}
        reverse
      />

      <div className="pattern_2">
        <div className="container margin_120_95">
          <Facilities
            eyebrow="Wildlife • Nature • Culture"
            heading="Make Room for Discovery"
            text="Choose the experiences that interest you, then confirm the available arrangements for your visit. Activities are subject to weather, local access and any required official permissions."
            facilities={experiences}
            columnClass="col-xl-4 col-md-6 mb-4"
          />
        </div>
      </div>

      <div className="bg_white">
        <div className="container margin_120_95">
          <Facilities
            eyebrow="A flexible day in Kaziranga"
            heading="Explore at Your Own Pace"
            text="Use this as a starting point for planning, rather than a confirmed activity package. Adjust the sequence to your permitted safari slot, weather and travel schedule."
            facilities={itinerary}
          />
        </div>
      </div>

      <CenteredTextSection
        id="visitor-information"
        eyebrow="Before you set out"
        heading="A Little Planning Makes the Day Easier"
        paragraphs={[
          'Confirm current park operations, entry requirements and reporting times before travel. Keep the documents required by the activity operator ready and follow the instructions of authorised guides. Wildlife sightings cannot be guaranteed. Avoid feeding animals, keep noise low and respect restricted areas.',
          'The hotel’s room booking and activity arrangements should be confirmed separately. Request the full activity cost, including permits, transport or guide charges, before agreeing to an outing.',
        ]}
      />

      <FaqSection items={faqs} />

      <EnquirySection eyebrow="Plan your stay" heading="Plan a Stay with Time to Explore" text="Share your travel dates and interests. Confirm your room and ask about the experiences available during your visit to Kaziranga." />
    </main>
  )
}

export default ExploreKaziranga
