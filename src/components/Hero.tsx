import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ParallaxBackground from './ParallaxBackground'

type Props = {
  eyebrow?: string
  title?: ReactNode
  text?: string
  backgroundImage?: string
}

function Hero({
  eyebrow = 'Areca Crown Hariyali • Kaziranga',
  title = 'A Peaceful Stay, Rooted in Assam',
  text = 'Discover a nature-inspired stay in Bosagaon, Kaziranga, where green surroundings, comfortable rooms and Assamese warmth welcome you. Stay beside National Highway 715 and make time for wildlife experiences, local walks and a slower pace of travel.',
  backgroundImage = '/img/hero_home_1.jpg',
}: Props) {
  return (
    <div className="hero home-search full-height is-transitioned" style={{ position: 'relative' }}>
      <ParallaxBackground image={backgroundImage} blur={0.2} />
      <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">
          <small className="slide-animated one">{eyebrow}</small>
          <h1 className="slide-animated two">{title}</h1>
          <div className="row justify-content-center slide-animated two">
            <div className="col-xl-8">
              <p>{text}</p>
              <p>
                {/* <Link to="/contact-us#enquiry" className="btn_1 mt-2 me-2">
                  Check Availability
                </Link> */}
                <Link to="/rooms" className="btn_1 outline white mt-2 ">
                  Explore Our Rooms
                </Link>
              </p>
            </div>
          </div>
          <div className="row justify-content-center slide-animated three">
            <div className="col-xl-10">
              <div className="row g-0 booking_form">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input className="form-control" type="text" name="dates" id="dates" placeholder="Check-in / Check-out" readOnly />
                    <i className="bi bi-calendar2"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pe-lg-0 pe-sm-1">
                  <div className="qty-buttons">
                    <label>Adults</label>
                    <input type="button" value="+" className="qtyplus" name="adults" />
                    <input type="text" name="adults" id="adults" defaultValue="2" className="qty form-control" />
                    <input type="button" value="-" className="qtyminus" name="adults" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 ps-lg-0 ps-sm-1">
                  <div className="qty-buttons">
                    <label>Children</label>
                    <input type="button" value="+" className="qtyplus" name="childs" />
                    <input type="text" name="childs" id="childs" defaultValue="0" className="qty form-control" />
                    <input type="button" value="-" className="qtyminus" name="childs" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <input type="submit" className="btn_search" value="Check Availability" />
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
