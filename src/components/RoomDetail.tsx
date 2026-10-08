import PageHero from './PageHero'
import RoomIntro, { type RoomFeature } from './RoomIntro'
import RoomGallery from './RoomGallery'
import RoomBox, { type RoomCategory } from './RoomBox'
import SectionTitle from './SectionTitle'
import EnquirySection from './EnquirySection'

type Props = {
  title: string
  tariff: string
  image: string
  introHeading: string
  introParagraphs: string[]
  features: RoomFeature[]
  galleryImages: string[]
  otherRoom: RoomCategory
}

// Whole room detail screen (hero, intro, gallery, "other room" card, enquiry form).
function RoomDetail({ title, tariff, image, introHeading, introParagraphs, features, galleryImages, otherRoom }: Props) {
  return (
    <main>
      <PageHero
        kenburns
        fullHeight
        narrow
        scrollTo="#first_section"
        image={image}
        eyebrow="Areca Crown Hariyali · Kaziranga"
        title={title}
        text={`${tariff} · Breakfast, free Wi-Fi and parking`}
      />

      <RoomIntro eyebrow="Luxury Experience" heading={introHeading} paragraphs={introParagraphs} features={features} />

      <RoomGallery images={galleryImages} />

      <div className="container margin_120_95">
        <SectionTitle eyebrow="Explore another category" heading="Our Other Room" />
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <RoomBox {...otherRoom} />
          </div>
        </div>
      </div>

      <EnquirySection />
    </main>
  )
}

export default RoomDetail
