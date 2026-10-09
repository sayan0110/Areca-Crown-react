import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'

type Props = {
  image: string
  title: string
  text: string
  eyebrow?: string
  to?: string
  buttonLabel?: string
  reverse?: boolean
  className?: string
}

function LocalAmenity({ image, title, text, eyebrow = 'Local Amenities', to = '/about-us', buttonLabel = 'Read more', reverse = false, className = '' }: Props) {
  return (
    <div className={`row justify-content-between d-flex align-items-center ${className}`.trim()}>
      <div className={`col-lg-6${reverse ? ' order-lg-2' : ''}`}>
        <div className="pinned-image rounded_container pinned-image--small mb-4">
          <div className="pinned-image__container">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className={`col-lg-6${reverse ? ' order-lg-1' : ''}`}>
        <SectionTitle eyebrow={eyebrow} heading={title} as="h3">
          <p>{text}</p>
          <p>
            <Link to={to} className="btn_1 mt-1 outline">
              {buttonLabel}
            </Link>
          </p>
        </SectionTitle>
      </div>
    </div>
  )
}

export default LocalAmenity
