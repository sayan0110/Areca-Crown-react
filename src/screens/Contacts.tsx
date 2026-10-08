import PageHero from '../components/PageHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import BookingSection from '../components/BookingSection'

function Contacts() {
  return (
    <main>
      <PageHero eyebrow="Areca Crown Hariyali · Kaziranga" title="Contact Us" image="/img/hero_home_1.jpg" />

      <div className="container margin_120_95">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-5 order-lg-2">
            <ContactInfo
              address={
                <>
                  Areca Crown Hariyali, Bosagaon, Kaziranga National Park, Golaghat, Assam 785609. Beside NH 715.
                  <br />
                  California - US.
                </>
              }
              email="arecacrownhariyali@gmail.com"
              phones={[
                { label: '+91 69012 80887', href: 'tel:+916901280887' },
                { label: '+91 70024 99397', href: 'tel:+917002499397' },
              ]}
            />
          </div>
          <div className="col-xl-7 col-lg-7 order-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="map_contact"></div>

      <BookingSection bookTo="#0" bookMargin="mt-5" />
    </main>
  )
}

export default Contacts
