import { Link } from 'react-router-dom'
import OwlCarousel from './OwlCarousel'

export type HeroSlide = {
  image: string
  title: string
  // A route ('/rooms') or an in-page anchor ('#first_section').
  to: string
  mask?: number
  align?: 'start' | 'center' | 'end'
  eyebrow?: string
}

type Props = {
  slides: HeroSlide[]
}

const rowClass = {
  start: 'justify-content-center justify-content-md-start',
  center: 'justify-content-center',
  end: 'justify-content-center justify-content-md-end',
}
const textClass = { start: '', center: ' text-center', end: ' text-end' }

/* eslint-disable @typescript-eslint/no-explicit-any */
// Text of the active slide animates in (is-transitioned), like the template's slider.js.
function animateActive(owl: any) {
  owl.find('.owl-slide-animated').removeClass('is-transitioned')
  owl.find('.owl-item.active .owl-slide-animated').addClass('is-transitioned')
}

const options = {
  items: 1,
  loop: true,
  center: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: false,
  animateOut: 'fadeOut',
  dots: true,
  nav: false,
  smartSpeed: 600,
}

function HeroCarousel({ slides }: Props) {
  const setup = (owl: any) => {
    owl.on('initialized.owl.carousel', () => setTimeout(() => animateActive(owl), 200))
    owl.on('translate.owl.carousel', () => owl.find('.owl-slide-animated').removeClass('is-transitioned'))
    owl.on('translated.owl.carousel', () => animateActive(owl))
  }

  return (
    <div id="carousel-home">
      <OwlCarousel className="kenburns" options={options} setup={setup}>
        {slides.map(({ image, title, to, mask = 0.5, align = 'start', eyebrow = 'Luxury Hotel Experience' }) => (
          <div key={title} className="owl-slide background-image cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="opacity-mask d-flex align-items-center" style={{ backgroundColor: `rgba(0, 0, 0, ${mask})` }}>
              <div className="container">
                <div className={`row ${rowClass[align]}`}>
                  <div className="col-lg-6 static">
                    <div className={`slide-text white${textClass[align]}`}>
                      <small className="owl-slide-animated owl-slide-title">{eyebrow}</small>
                      <h2 className="owl-slide-animated owl-slide-title-2">{title}</h2>
                      <div className="owl-slide-animated owl-slide-title-3">
                        {to.startsWith('#') ? (
                          <a className="btn_1 outline white mt-3" href={to}>
                            Read more
                          </a>
                        ) : (
                          <Link className="btn_1 outline white mt-3" to={to}>
                            Read more
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
      <div className="mouse_wp">
        <a href="#first_section" className="btn_scrollto">
          <div className="mouse"></div>
        </a>
      </div>
    </div>
  )
}

export default HeroCarousel
