import PageHero from '../components/PageHero'
import StoryBlock from '../components/StoryBlock'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'

// assets/kaziranga.jpg is not in the project yet, so existing images stand in for it.
const heroImage = '/img/hero_home_1.jpg'
const kazirangaImage = '/img/home_2.jpg'

const stories = [
  {
    eyebrow: 'KAZIRANGA NATIONAL PARK',
    heading: 'Discover a remarkable wildlife destination',
    paragraphs: [
      'Kaziranga National Park is a UNESCO World Heritage Site in Assam, known for the greater one-horned rhinoceros and its floodplain landscape. Grasslands, wetlands and woodland form the setting for a visit that rewards patience and attention.',
      'Stay at Areca Crown Hariyali in Bosagaon beside NH 715 and make space in your itinerary to explore. Confirm your safari entry point and travel arrangements before setting out. The distance and travel time to each range depend on the route, so ask for guidance specific to your booking rather than relying on a general park distance.',
    ],
  },
  {
    eyebrow: 'JEEP SAFARI',
    heading: 'See Kaziranga from an authorised safari route',
    paragraphs: [
      'A jeep safari offers an opportunity to explore the park along its authorised routes. The experience is shaped by the range, current access and wildlife movement, with time to observe the landscape as well as look for animals.',
      'Jeep safari is among the experiences listed by the property. Contact the team to discuss availability and arrangements for your dates. Confirm the range, reporting time, operator, permit requirements and total cost. Wildlife sightings cannot be guaranteed, and access remains subject to official conditions.',
    ],
  },
  {
    eyebrow: 'ELEPHANT SAFARI',
    heading: 'Check the available safari options',
    paragraphs: [
      'Elephant safari is also listed among the property’s experiences. If you are interested, ask about current authorised availability, the operating arrangements and whether it is suitable for your party.',
      'Safari schedules and access can change. Confirm the official requirements, permit availability and any guest restrictions before making a booking decision. Treat this as an enquiry option rather than an activity guaranteed with every hotel stay.',
    ],
  },
  {
    eyebrow: 'NATURE WALKS',
    heading: 'Spend time with the surroundings',
    paragraphs: [
      'A nature walk gives you a different pace after a road journey or safari outing. Take time to observe the surroundings and enjoy being outdoors without filling every hour with a scheduled activity.',
      'Ask the team about available walk arrangements, the route, duration and any guidance required. Nature walks should follow safe, permitted routes and must not be assumed to include unrestricted walking inside the national park. Suitable conditions, footwear and local advice matter.',
    ],
  },
  {
    eyebrow: 'VILLAGE AND TEA GARDEN WALKS',
    heading: 'Look beyond the safari itinerary',
    paragraphs: [
      'Village and tea garden walks are listed by the property as ways to explore the wider area. They can add a local perspective to your visit and create time to learn about the places around your accommodation.',
      'Confirm the route, permissions, timing and charges before joining a walk. Respect residents, working spaces and any restrictions, and ask permission before photographing people. These visits depend on local arrangements and do not imply open access to every village or tea garden.',
    ],
  },
  {
    eyebrow: 'EVENING BONFIRE',
    heading: 'Slow down at the end of the day',
    paragraphs: [
      'An evening bonfire is one of the experiences listed at Areca Crown Hariyali. It can provide a relaxed way to spend time together after a day outside, weather and arrangements permitting.',
      'Enquire about availability for your dates, the timing and any separate charge. Bonfires should take place only where the property permits them and under suitable conditions. Confirm the arrangement in advance if it is an important part of your stay.',
    ],
  },
  {
    eyebrow: 'PLAN YOUR DAYS',
    heading: 'A suggested two-night visit',
    paragraphs: [
      'On your arrival day, check in from 1 PM, settle into your room and spend the afternoon at a comfortable pace. Enjoy a meal at SEWABHAAT and review the next day’s confirmed travel and safari arrangements. An evening bonfire may be possible if the conditions and property arrangements allow.',
      'Use the next day for a booked safari and leave time afterwards for rest or a suitable local walk. On departure day, enjoy breakfast and check out by 11 AM. This is a suggested itinerary, not a fixed package. Activities, permits and additional charges need separate confirmation.',
    ],
  },
  {
    eyebrow: 'RESPONSIBLE VISITING',
    heading: 'Plan around the destination',
    paragraphs: [
      'Assam Forest Department guidance identifies November to April as the best season to visit Kaziranga. Confirm current opening notices, range access and operating dates for your actual journey. General seasonal advice does not guarantee a particular activity will be available.',
      'Follow park staff and guide instructions, stay on authorised routes, keep noise low and never feed wildlife. Carry waste out and respect the people and places you visit. A thoughtful plan makes room for the conditions that protect both visitors and the destination.',
    ],
  },
]

const faqs = [
  {
    question: 'What experiences are listed by the hotel?',
    answer: 'The property lists evening bonfires, jeep safaris, elephant safaris, nature walks, and village and tea garden walks. Confirm availability, charges and arrangements for your dates.',
  },
  {
    question: 'Are safaris included in the room tariff?',
    answer: 'Safaris are not stated as room inclusions. Confirm permits, operators, charges and arrangements separately.',
  },
  {
    question: 'When should I visit Kaziranga?',
    answer: 'Assam Forest Department guidance identifies November to April as the best season. Check current official access and opening notices before travel.',
  },
  {
    question: 'Can I walk inside Kaziranga National Park?',
    answer: 'Do not assume that a nature walk includes park access. Walk only on safe, permitted routes and follow official guidance.',
  },
  {
    question: 'Are wildlife sightings guaranteed?',
    answer: 'No. Sightings depend on wildlife movement, conditions and the safari route.',
  },
]

function ExploreKaziranga() {
  return (
    <main>
      <PageHero
        kenburns
        eyebrow="Areca Crown Hariyali · Kaziranga"
        title="Explore Kaziranga"
        text="Wildlife, walks and time outdoors, with Areca Crown Hariyali as your place to return to."
        image={heroImage}
      />

      {stories.map((story, i) => (
        <StoryBlock key={story.eyebrow} {...story} image={kazirangaImage} reverse={i % 2 === 0} pattern={i % 2 === 1} />
      ))}

      <FaqSection items={faqs} />

      <EnquirySection />
    </main>
  )
}

export default ExploreKaziranga
