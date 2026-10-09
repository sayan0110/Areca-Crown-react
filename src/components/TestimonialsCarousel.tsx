import { useState } from 'react'
import SectionTitle from './SectionTitle'

export type Testimonial = {
  name: string
  date: string
  comment: string
  image?: string
}

type Props = {
  testimonials: Testimonial[]
  backgroundImage?: string
  eyebrow?: string
  heading?: string
}

function TestimonialsCarousel({ testimonials, backgroundImage = `${import.meta.env.BASE_URL}img/hero_home_1.jpg`, eyebrow = 'Testimonials', heading = 'What Clients Says' }: Props) {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <div className="parallax_section_1" style={{ position: 'relative', background: `url(${backgroundImage}) center / cover no-repeat`, backgroundAttachment: 'fixed' }}>
      <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <SectionTitle className="white" eyebrow={eyebrow} heading={heading} eyebrowClassName="mb-1" />
              <div className="carousel_testimonials owl-carousel owl-theme owl-loaded nav-dots-orizontal">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item active" style={{ width: '100%' }}>
                      <div>
                        <div className="box_overlay box_overlay--stacked">
                          <div className="pic">
                            <figure>
                              <img src={current.image ?? `${import.meta.env.BASE_URL}img/testimonial_1.jpg`} alt="" className="img-circle" />
                            </figure>
                            <h4>
                              {current.name}
                              <small>{current.date}</small>
                            </h4>
                          </div>
                          <div className="comment">"{current.comment}"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-dots">
                  {testimonials.map((t, i) => (
                    <button key={t.date} type="button" className={`owl-dot${i === active ? ' active' : ''}`} aria-label={`Testimonial ${i + 1}`} onClick={() => setActive(i)}>
                      <span></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCarousel
