import PageHero from '../components/PageHero'
import StoryBlock from '../components/StoryBlock'
import FaqSection from '../components/FaqSection'
import EnquirySection from '../components/EnquirySection'

// about_1.jpg is not in the project yet, so existing images stand in for it.
const aboutImage = '/img/home_2.jpg'
const altImage = '/img/home_1.jpg'

const stories = [
  {
    image: aboutImage,
    eyebrow: 'OUR STORY',
    heading: 'A nature-inspired stay in Kaziranga',
    paragraphs: [
      'Areca Crown Hariyali brings together comfortable accommodation, traditional Assamese warmth and modern hospitality. Located in Bosagaon beside National Highway 715, our property welcomes travellers visiting Kaziranga and guests journeying through the region.',
      'Green surroundings and a peaceful ambience shape the experience here. We want your stay to feel relaxed, with the everyday conveniences that make travel easier. Comfortable rooms, in-house dining and ample parking give you a place to settle in between the experiences that bring you to Assam.',
    ],
  },
  {
    image: altImage,
    eyebrow: 'THE NAME',
    heading: 'The meaning of Areca Crown Hariyali',
    paragraphs: [
      'Our name begins with the areca palm. Polished areca palm trunks feature in the handcrafted façade, giving the property a distinctive connection to the material and inspiring the word “Areca.” It is a detail that places Assam’s character at the entrance to your stay.',
      '“Crown” draws on the graceful crown of the areca palm. It also expresses our wish for guests to feel special and valued. “Hariyali,” meaning greenery, reflects the natural beauty around Kaziranga. Together, the words connect the property’s appearance, setting and approach to hospitality.',
    ],
  },
  {
    image: aboutImage,
    eyebrow: 'OUR WELCOME',
    heading: 'Comfort for the way you travel',
    paragraphs: [
      'Families, couples and nature lovers are at the heart of the property’s welcome. Some guests arrive with safari plans already in place; others want a restful stop on a longer journey. Our convenient highway location allows you to include Areca Crown Hariyali in either kind of itinerary.',
      'With eight rooms across two categories, we keep the room choice simple. Premium and Superior accommodation, breakfast, free Wi-Fi and parking provide the practical starting point for your visit. Tell us about your guest count and requirements so we can confirm the right arrangements.',
    ],
  },
  {
    image: altImage,
    eyebrow: 'FOOD AND PLACE',
    heading: 'Assamese hospitality at the table',
    paragraphs: [
      'SEWABHAAT, our in-house restaurant, is dedicated to Assamese Heritage Dining. It gives guests a place to discover the region through a meal, alongside the wildlife and countryside experiences on their itinerary.',
      'The restaurant is open from 6 AM to 10 PM. Guests can ask about the current menu, available meal timings and dietary preferences before arriving. Our invitation is simple: taste the heritage of Assam and take time to enjoy the welcome that comes with it.',
    ],
  },
  {
    image: aboutImage,
    eyebrow: 'BEYOND YOUR ROOM',
    heading: 'A stay connected to the outdoors',
    paragraphs: [
      'Kaziranga encourages you to look beyond a room and spend time in the surroundings. The property lists evening bonfires, nature walks, village and tea garden walks, jeep safaris and elephant safaris among its experiences.',
      'Availability depends on the activity, season and arrangements. Contact the team to discuss what is suitable for your visit, and confirm charges or permits before setting plans. We can help you start that conversation without turning every day into a rushed schedule.',
    ],
  },
  {
    image: altImage,
    eyebrow: 'YOUR VISIT',
    heading: 'Let us know what you have in mind',
    paragraphs: [
      'A short family holiday, a wildlife-focused visit or a stop during a road journey can each begin with a direct enquiry. Share your dates, preferred category and number of guests, and ask about any essentials before confirming.',
      'Call or WhatsApp +91 69012 80887, call +91 70024 99397, or email arecacrownhariyali@gmail.com. We look forward to welcoming you to Areca Crown Hariyali.',
    ],
  },
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
  return (
    <main>
      <PageHero kenburns eyebrow="Areca Crown Hariyali · Kaziranga" title="About Us" text="Discover the story behind our name and the welcome at Areca Crown Hariyali." image={aboutImage} />

      {stories.map((story, i) => (
        <StoryBlock key={story.eyebrow} {...story} reverse={i % 2 === 0} pattern={i % 2 === 1} />
      ))}

      <FaqSection items={faqs} />

      <EnquirySection />
    </main>
  )
}

export default About
