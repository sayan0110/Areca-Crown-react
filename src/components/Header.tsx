import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Logo() {
  return (
    <span className="areca-logo">
      ARECA CROWN<small>HARIYALI</small>
    </span>
  )
}

function Header() {
  const { pathname } = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const [sticky, setSticky] = useState(false)
  // Headroom-style reveal: 'hidden' while scrolling down, 'shown' when scrolling back up.
  const [reveal, setReveal] = useState<'initial' | 'hidden' | 'shown'>('initial')

  useEffect(() => {
    const OFFSET = 50
    const TOLERANCE = 5
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      if (y <= OFFSET) {
        setReveal((r) => (r === 'hidden' ? 'shown' : r))
      } else if (Math.abs(y - lastY) > TOLERANCE) {
        setReveal(y > lastY ? 'hidden' : 'shown')
      } else {
        return
      }
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Turn the header white once the hero's bottom edge reaches the header's bottom edge.
  // Screens without a hero keep the white header, since the transparent one would be unreadable.
  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('.hero, #carousel-home')
      const headerBottom = headerRef.current?.offsetHeight ?? 0
      setSticky(!hero || hero.getBoundingClientRect().bottom <= headerBottom)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // The hero can change height after mount (e.g. the carousel is hidden until it initialises).
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  return (
    <header ref={headerRef} className={`fixed_header menu_v4 submenu_version animated${sticky ? ' sticky' : ''}${reveal === 'hidden' ? ' slideUp' : reveal === 'shown' ? ' slideDown' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to="/" className="logo_normal">
              <Logo />
            </Link>
            <Link to="/" className="logo_sticky">
              <Logo />
            </Link>
          </div>
          <div className="col-9">
            <div className="main-menu">
              <a href="#0" className="closebt open_close_menu">
                <i className="bi bi-x"></i>
              </a>
              <div className="logo_panel">
                <Logo />
              </div>
              <nav id="mainNav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="submenu">
                    <Link to="/rooms" className="rooms-link">
                      Rooms
                    </Link>
                    <ul>
                      <li>
                        <Link to="/rooms">All Rooms</Link>
                      </li>
                      <li>
                        <Link to="/premium-room">Premium Room</Link>
                      </li>
                      <li>
                        <Link to="/superior-room">Superior Room</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/restaurant">Restaurant</Link>
                  </li>
                  <li>
                    <Link to="/explore-kaziranga">Explore Kaziranga</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hamburger_2 open_close_menu float-end">
              <div className="hamburger__box">
                <div className="hamburger__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
