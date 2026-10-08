import PageHero from '../components/PageHero'
import RestaurantIntro from '../components/RestaurantIntro'
import Facilities from '../components/Facilities'
import CenteredTextSection from '../components/CenteredTextSection'
import FaqSection from '../components/FaqSection'
import { whatsappLink } from '../utils/whatsapp'
import { usePageMeta } from '../utils/usePageMeta'

const WHATSAPP = '916901280887'
const diningEnquiry = whatsappLink(WHATSAPP, ['Hello Areca Crown Hariyali, I would like to enquire about dining at SEWABHAAT.'])
const menuEnquiry = whatsappLink(WHATSAPP, ['Hello Areca Crown Hariyali, I would like to ask about the current SEWABHAAT menu and meal prices.'])

// restaurant/slides/slide_*.jpg are not in the project yet, so an existing image stands in for them.
const heroImage = `${import.meta.env.BASE_URL}img/local_amenities_1.jpg`

const highlights = [
  { icon: 'customicon-cocktail', title: 'Assamese Heritage Dining', text: 'Experience the restaurant’s focus on Assam’s food heritage. Ask the team about the dishes currently available.' },
  { icon: 'bi bi-house-heart', title: 'Convenient In-House Dining', text: 'Dine within the property during your stay, with service hours from 6:00 AM to 10:00 PM.' },
  { icon: 'customicon-breakfast', title: 'Breakfast with Your Stay', text: 'Breakfast is included in the listed room plan. Confirm the available breakfast service and timing with the hotel.' },
  { icon: 'bi bi-chat-dots', title: 'Plan Your Meal', text: 'Contact us about menu availability, meal prices, group requirements or dietary preferences before your visit.' },
]

const faqs = [
  { question: 'What is the restaurant called?', answer: 'The restaurant is called SEWABHAAT and offers Assamese heritage dining.' },
  { question: 'What are the opening hours?', answer: 'The restaurant’s listed opening hours are 6:00 AM to 10:00 PM.' },
  { question: 'Is breakfast included in the room plan?', answer: 'Yes. Breakfast is included in the listed stay plan. Confirm service arrangements for your dates.' },
  { question: 'Can I request a particular meal or dietary option?', answer: 'Please share your request before your visit. The restaurant will confirm available options and arrangements.' },
]

function Restaurant() {
  usePageMeta(
    'SEWABHAAT Restaurant | Assamese Dining in Kaziranga',
    'Discover SEWABHAAT at Areca Crown Hariyali, Kaziranga. Enjoy Assamese heritage dining with listed opening hours from 6 AM to 10 PM. Enquire for the menu.',
  )

  return (
    <main>
      <PageHero
        kenburns
        fullHeight
        narrow
        scrollTo="#first_section"
        image={heroImage}
        eyebrow="SEWABHAAT • Assamese Heritage Dining"
        title="Taste the Heritage of Assam"
        text="Discover the warmth of Assamese heritage dining at SEWABHAAT, the in-house restaurant at Areca Crown Hariyali. Bring a sense of place to your stay and make time for a meal inspired by Assam."
        cta={{ label: 'Enquire About Dining', to: diningEnquiry }}
      />

      <RestaurantIntro
        eyebrow="Welcome to SEWABHAAT"
        heading="A Taste of Assam, Close to Your Room"
        lead="A journey through Assam is also a journey through its food and hospitality. At SEWABHAAT, Assamese heritage dining forms part of the Areca Crown Hariyali experience, bringing a local connection to the meals you enjoy during your stay."
        paragraphs={['Whether you are preparing for a day of exploring or returning after time outdoors, our in-house dining offers a convenient place to pause. Contact the team for the current menu, meal arrangements and any dietary requests before your visit.']}
        details={[
          { label: 'Restaurant', value: 'SEWABHAAT' },
          { label: 'Dining Style', value: 'Assamese Heritage Dining' },
          { label: 'Opening Hours', value: '6:00 AM to 10:00 PM' },
          { label: 'Signature Line', value: 'Taste the Heritage of Assam' },
        ]}
      />

      <div className="bg_white">
        <div className="container margin_120_95">
          <Facilities
            eyebrow="Food • Heritage • Hospitality"
            heading="Make Mealtimes Part of the Journey"
            text="Enjoy a dining experience connected to the region you are visiting. SEWABHAAT gives your Kaziranga stay a place to gather, take a break and discover Assamese heritage through food."
            facilities={highlights}
          />
        </div>
      </div>

      <CenteredTextSection
        id="menu"
        eyebrow="Discover the menu"
        heading="Ask What’s Being Served at SEWABHAAT"
        paragraphs={['Contact our team for the current menu and meal prices. If you have food allergies, dietary preferences or a group dining requirement, share the details in advance so the restaurant can confirm what is possible.']}
        buttonLabel="Ask About the Menu"
        buttonHref={menuEnquiry}
      />

      <FaqSection items={faqs} />

      <CenteredTextSection
        id="dining-enquiry"
        eyebrow="Plan your stay"
        heading="Bring the Taste of Assam to Your Stay"
        paragraphs={['Call or message our team to ask about SEWABHAAT, the current menu and dining arrangements.']}
        buttonLabel="Enquire About Dining"
        buttonHref={diningEnquiry}
      />
    </main>
  )
}

export default Restaurant
