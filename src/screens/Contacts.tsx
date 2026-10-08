import PageHero from '../components/PageHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import CenteredTextSection from '../components/CenteredTextSection'
import FaqSection from '../components/FaqSection'
import BookingSection from '../components/BookingSection'
import { whatsappLink } from '../utils/whatsapp'
import { usePageMeta } from '../utils/usePageMeta'

const directionsLink = whatsappLink('916901280887', ['Hello Areca Crown Hariyali, could you share directions and the confirmed property location?'])

const faqs = [
  {
    question: 'How can I contact the hotel?',
    answer: 'Call +91 69012 80887 or +91 70024 99397. You can also WhatsApp +91 69012 80887 or email arecacrownhariyali@gmail.com.',
  },
  {
    question: 'What details should I share when enquiring?',
    answer: 'Send your dates, guest count, preferred room category and any relevant requirements. This helps the hotel confirm suitable arrangements.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Please request the cancellation and refund terms that apply to your booking before confirming your reservation.',
  },
  {
    question: 'Can I request early check-in or late check-out?',
    answer: 'Discuss your request with the hotel in advance. Availability, approval and any charges must be confirmed for your booking.',
  },
]

function Contacts() {
  usePageMeta(
    'Contact Areca Crown Hariyali | Kaziranga Bookings',
    'Contact Areca Crown Hariyali in Bosagaon, Kaziranga. Call or WhatsApp +91 69012 80887 for room availability, dining enquiries and booking details.',
  )

  return (
    <main>
      <PageHero
        eyebrow="Contact & bookings"
        title="Let’s Plan Your Kaziranga Stay"
        text="Ask about rooms, dining or local experiences at Areca Crown Hariyali. Share your dates and requirements so our team can help you confirm the arrangements before your visit."
        image="/img/hero_home_1.jpg"
      />

      <div className="container margin_120_95 pb-0" id="enquiry">
        <div className="title">
          <small>Get in touch</small>
          <h2>A Conversation Away from Your Stay</h2>
          <p>Contact us directly for availability, applicable rates, room arrangements and booking terms. For dining or local activities, include your requirements so the team can confirm available options.</p>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-5">
            <ContactInfo
              address={
                <>
                  ARECA CROWN HARIYALI
                  <br />
                  Bosagaon, Kaziranga National Park
                  <br />
                  District Golaghat, Assam 785609
                  <br />
                  Beside National Highway 715
                </>
              }
              email="arecacrownhariyali@gmail.com"
              phones={[
                { label: '+91 69012 80887', href: 'tel:+916901280887' },
                { label: '+91 70024 99397', href: 'tel:+917002499397' },
              ]}
              whatsapp={{ label: '+91 69012 80887', href: 'https://wa.me/916901280887' }}
              timings={['Check-in: 1:00 PM', 'Check-out: 11:00 AM']}
            />
          </div>
          <div className="col-xl-7 col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>

      <CenteredTextSection
        id="location"
        eyebrow="Find us in Bosagaon"
        heading="Conveniently Located Beside NH715"
        paragraphs={['Areca Crown Hariyali is located beside National Highway 715 in Bosagaon, Kaziranga, in Assam’s Golaghat district. Contact us before arrival for directions and the confirmed property location.']}
        buttonLabel="Ask for Directions"
        buttonHref={directionsLink}
      />

      <CenteredTextSection
        id="booking-information"
        eyebrow="Before you confirm"
        heading="Know Your Booking Details"
        paragraphs={['Confirm your dates, room category and guest arrangements with the hotel. Ask for the total price, taxes, additional guest charges, payment process and cancellation terms. Keep the hotel’s confirmation for your travel reference. If your arrival or departure falls outside the listed timings, discuss the request before travel.']}
      />

      <FaqSection items={faqs} />

      <BookingSection eyebrow="Plan your stay" heading="We Look Forward to Welcoming You" text="Get in touch to plan your room, clarify your booking details and begin your Kaziranga journey." bookTo="https://wa.me/916901280887" bookLabel="Call or WhatsApp Us" bookMargin="mt-5" />
    </main>
  )
}

export default Contacts
