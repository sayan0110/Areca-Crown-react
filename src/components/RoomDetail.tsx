import { Link } from 'react-router-dom'
import PageHero from './PageHero'
import RoomIntro from './RoomIntro'
import Facilities from './Facilities'
import RoomGallery from './RoomGallery'
import RoomStayInfo from './RoomStayInfo'
import GuestReviews, { type GuestReview } from './GuestReviews'
import RoomBox from './RoomBox'
import SectionTitle from './SectionTitle'
// import FaqSection from './FaqSection'
// import EnquirySection from './EnquirySection'
import { roomGalleryImages, roomInformation, stayInclusions, type RoomInfo } from '../data/rooms'
import { usePageMeta } from '../utils/usePageMeta'
import BookingSection from './BookingSection'

type Props = {
  room: RoomInfo
  otherRoom: RoomInfo
  image: string
  otherImage: string
  heroTitle: string
  overviewHeading: string
  // Optional guest reviews, shown under the photo slider.
  reviews?: GuestReview[]
}

// Whole room detail screen (hero, overview, inclusions, gallery, stay info, other room, FAQ, enquiry form).
function RoomDetail({ room, otherRoom, image, otherImage, heroTitle, overviewHeading, reviews }: Props) {
  const { name, count, tariff } = room

  usePageMeta(
    `${name} Room in Kaziranga | Areca Crown Hariyali`,
    `Explore the ${name} Room at Areca Crown Hariyali, Kaziranga. Listed tariff ${tariff} with breakfast, free Wi-Fi and parking. Enquire for availability.`,
  )

  // Used by the FAQ section, which is commented out below.
  /*
  const faqs = [
    {
      question: `What is the listed ${name} Room tariff?`,
      answer: `The listed tariff is ${tariff}. Please confirm its rate basis, applicability for your dates, taxes and any additional guest charges with the hotel.`,
    },
    {
      question: 'How many guests can stay in this category?',
      answer: 'The listed occupancy is two to three guests. The hotel will confirm the bedding and guest arrangements for your booking.',
    },
    {
      question: 'What is included?',
      answer: 'Breakfast, complimentary Wi-Fi and parking are included in the listed stay plan.',
    },
  ]
  */

  return (
    <main>
      <PageHero
        kenburns
        fullHeight
        narrow
        scrollTo="#first_section"
        image={image}
        eyebrow={`${name} Room`}
        title={heroTitle}
        text={`Make yourself at home in our ${name} Room at Areca Crown Hariyali. Enjoy a peaceful stay in Bosagaon, Kaziranga, with breakfast, complimentary Wi-Fi and parking included in the listed plan.`}
        cta={{ label: 'Enquire About This Room', to: '/contact-us#enquiry' }}
      />

      <RoomIntro
        eyebrow="Room overview"
        heading={overviewHeading}
        paragraphs={[
          `Our ${name} Room is a comfortable choice for travellers looking for a welcoming place to stay while exploring Kaziranga. Spend the day discovering wildlife, local villages or the surrounding landscape, then return to a peaceful setting and Assamese hospitality.`,
          `This category has ${count} rooms and accommodates two to three guests. Share your guest count and travel dates with us to confirm the room setup and booking plan. Whether you are visiting with family, as a couple or with a travel companion, our team can help you understand the arrangements before you reserve.`,
        ]}
        features={roomInformation(room)}
      />

      <div className="container margin_120_95" style={{paddingTop: 0}}>
        <Facilities
          eyebrow="Your stay includes"
          heading="Useful Comforts for a Relaxing Visit"
          text="Enjoy the confirmed essentials of your stay, with a welcoming room and conveniences that support your visit to Kaziranga."
          facilities={stayInclusions}
        />
      </div>

      <RoomGallery eyebrow="Take a closer look" heading={`Discover the ${name} Room`} text="Browse photographs of the room interior, sleeping area and bathroom to understand the space before planning your stay." images={roomGalleryImages} buttonLabel="View All Photos" />

      {reviews && <GuestReviews reviews={reviews} />}

      <RoomStayInfo category={name} />

      <div className="container margin_120_95">
        <SectionTitle eyebrow="Explore another option" heading={`Discover Our ${otherRoom.name} Room`}>
          <p>Compare our {otherRoom.name} category before making your choice. Both room categories include breakfast, free Wi-Fi and parking in the listed stay plan.</p>
        </SectionTitle>
        <div className="row">
          <div className="col-xl-8 col-lg-8 m-auto">
            <RoomBox image={otherImage} price={`Listed tariff ${otherRoom.tariff}`} title={`${otherRoom.name} Room`} to={otherRoom.path} />
            <p className="mt-4">
              <Link to={otherRoom.path} className="btn_1 outline">
                View {otherRoom.name} Room
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* <FaqSection items={faqs} /> */}

      <BookingSection />
    </main>
  )
}

export default RoomDetail
