import HeroCarousel from '../components/HeroCarousel'
import RestaurantIntro from '../components/RestaurantIntro'
import CenteredTextSection from '../components/CenteredTextSection'

const eyebrow = 'SEWABHAAT · Assamese Heritage Dining'

// restaurant/slides/slide_*.jpg are not in the project yet, so existing images stand in for them.
const slides = [
  { image: '/img/hero_home_1.jpg', eyebrow, title: 'Taste the heritage of Assam', to: '#first_section', align: 'start' as const },
  { image: '/img/local_amenities_1.jpg', eyebrow, title: 'Assamese warmth at the table', to: '#first_section', align: 'center' as const },
  { image: '/img/local_amenities_3.jpg', eyebrow, title: 'Welcome to SEWABHAAT', to: '#first_section', align: 'end' as const, mask: 0.6 },
]

function Restaurant() {
  return (
    <main>
      <HeroCarousel slides={slides} />

      <RestaurantIntro
        eyebrow="Areca Crown Hariyali"
        heading="SEWABHAAT"
        lead="A visit to Assam is also an opportunity to discover its food. SEWABHAAT, the in-house restaurant at Areca Crown Hariyali, brings Assamese Heritage Dining into your Kaziranga stay. It is a place to pause for a meal, spend time together and connect with the region through the dining experience."
        paragraphs={[
          'The restaurant’s invitation, “Taste the Heritage of Assam,” reflects its focus on Assamese food and hospitality. Whether dining fits between your outings or becomes a relaxed part of your evening, SEWABHAAT adds another way to experience the place you have come to explore.',
          'Taste the heritage of Assam',
        ]}
        hoursLabel="Opening hours"
        hours="6 AM to 10 PM"
        hoursNote="Ask us about the current menu and meal service times."
        phoneLabel="Dining enquiries"
        phone="+91 69012 80887"
        phoneHref="tel:+916901280887"
      />

      <CenteredTextSection
        eyebrow="SEWABHAAT"
        heading="Assamese Heritage Dining"
        paragraphs={[
          'Discovering a destination through a meal can be as memorable as exploring it outdoors. At SEWABHAAT, the emphasis is Assamese Heritage Dining, giving guests a reason to ask about the food and flavours available during their stay.',
          'Speak with the team about the current menu and the dining options for your visit. Dishes, seasonal offerings and dietary choices should be confirmed directly. Rather than assuming a fixed menu, let us know what you would like to explore and ask what is available on the day.',
          'Contact the restaurant for the current menu. An approved menu has not yet been supplied.',
        ]}
        buttonLabel="Enquire about dining"
        buttonHref="https://wa.me/916901280887"
      />
    </main>
  )
}

export default Restaurant
