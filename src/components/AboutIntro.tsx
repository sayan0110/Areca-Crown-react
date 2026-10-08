import SectionTitle from './SectionTitle'

type Props = {
  image?: string
  overlayImage?: string
  eyebrow?: string
  heading?: string
  lead?: string
  text?: string
  signature?: string
}

function AboutIntro({
  image = '/img/home_2.jpg',
  overlayImage = '/img/home_1.jpg',
  eyebrow = 'About us',
  heading = 'Tailored services and the experience of unique holidays',
  lead = 'Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim.',
  text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  signature = 'Maria...the Owner',
}: Props) {
  return (
    <div className="container margin_120_95" id="first_section">
      <div className="row justify-content-between flex-lg-row-reverse align-items-center">
        <div className="col-lg-5">
          <div className="parallax_wrapper">
            <img src={image} alt="" className="img-fluid rounded-img" />
            <div data-cue="slideInUp" className="img_over">
              <span data-jarallax-element="-30">
                <img src={overlayImage} alt="" className="rounded-img" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="intro">
            <SectionTitle eyebrow={eyebrow} heading={heading} />
            <p className="lead">{lead}</p>
            <p>{text}</p>
            <p>
              <em>{signature}</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
