import type { ReactNode } from 'react'
import ParallaxBackground from './ParallaxBackground'

type Props = {
  eyebrow?: string
  title?: ReactNode
  backgroundImage?: string
}

function Hero({
  eyebrow = 'Luxury Hotel Experience',
  title = (
    <>
      A unique Experience
      <br />
      where to stay
    </>
  ),
  backgroundImage = '/img/hero_home_1.jpg',
}: Props) {
  return (
    <div className="hero home-search full-height is-transitioned" style={{ position: 'relative' }}>
      <ParallaxBackground image={backgroundImage} />
      <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">
          <small className="slide-animated one">{eyebrow}</small>
          <h3 className="slide-animated two">{title}</h3>
          <div className="row justify-content-center slide-animated three">
            <div className="col-xl-10">
              <div className="row g-0 booking_form">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input className="form-control" type="text" name="dates" id="dates" placeholder="Check in / Check out" readOnly />
                    <i className="bi bi-calendar2"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pe-lg-0 pe-sm-1">
                  <div className="qty-buttons">
                    <label>Adults</label>
                    <input type="button" value="+" className="qtyplus" name="adults" />
                    <input type="text" name="adults" id="adults" defaultValue="1" className="qty form-control" />
                    <input type="button" value="-" className="qtyminus" name="adults" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 ps-lg-0 ps-sm-1">
                  <div className="qty-buttons">
                    <label>Childs</label>
                    <input type="button" value="+" className="qtyplus" name="childs" />
                    <input type="text" name="childs" id="childs" defaultValue="1" className="qty form-control" />
                    <input type="button" value="-" className="qtyminus" name="childs" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <input type="submit" className="btn_search" value="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mouse_wp slide-animated four">
          <a href="#first_section" className="btn_scrollto">
            <div className="mouse"></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
