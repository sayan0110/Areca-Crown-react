import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import OwlCarousel from './OwlCarousel'

type Props = {
  images: { src: string; alt: string }[]
  eyebrow?: string
  heading?: string
  viewMoreTo?: string
}

const options = {
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 991: { items: 3 } },
}

// Short image slider with a link through to the full gallery page.
function GallerySlider({ images, eyebrow = 'A glimpse of your stay', heading = 'Gallery', viewMoreTo = '/gallery' }: Props) {
  return (
    <div className="container margin_120_95" style={{paddingTop: 0}}>
      <SectionTitle className="mb-4" eyebrow={eyebrow} heading={heading} animated headingDelay={200} />
      <OwlCarousel className="rounded-img" options={options}>
        {images.map(({ src, alt }) => (
          <div className="item" key={src}>
            <img src={src} alt={alt} style={{ height: '420px', objectFit: 'cover' }} />
          </div>
        ))}
      </OwlCarousel>
      <p className="text-center mt-4 mb-0">
        <Link to={viewMoreTo} className="btn_1 outline">
          View more
        </Link>
      </p>
    </div>
  )
}

export default GallerySlider
