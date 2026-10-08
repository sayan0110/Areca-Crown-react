import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'

type Props = {
  image?: string
  overlayImage?: string
  eyebrow?: string
  heading?: string
  lead?: string
  text?: string
  signature?: string
  buttonLabel?: string
  buttonTo?: string
}

function AboutIntro({
  image = `${import.meta.env.BASE_URL}img/home_2.jpg`,
  overlayImage = `${import.meta.env.BASE_URL}img/home_1.jpg`,
  eyebrow = 'Welcome to Areca Crown Hariyali',
  heading = 'The Warmth of Assam. The Calm of Kaziranga.',
  lead = 'Set in Bosagaon beside National Highway 715, Areca Crown Hariyali brings together a peaceful natural setting and the comforts that make travel easier. Our eight-room property offers six Premium rooms and two Superior rooms, with breakfast, complimentary Wi-Fi and parking included in the listed stay plan.',
  text = 'Whether you are travelling as a couple, with family or for the love of nature, settle into a welcoming base for your Kaziranga journey. Spend your day exploring, return to a restful room and enjoy hospitality inspired by the place we call home.',
  signature = 'Inspired by Assam. Surrounded by Greenery.',
  buttonLabel = 'Our Story',
  buttonTo = '/about-us',
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
            <p>
              <Link to={buttonTo} className="btn_1 outline">
                {buttonLabel}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
