import { useEffect, useRef, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

type FooterLink = { label: string; to: string }

type Props = {
  brandDescription?: string
  address?: string[]
  email?: string
  phones?: { label: string; href: string; bold?: boolean }[]
  links?: FooterLink[]
  enquiryText?: string
  whatsappHref?: string
  timings?: [string, string]
  copyright?: string
  note?: ReactNode
  backgroundImage?: string
}

const defaultLinks: FooterLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Explore Kaziranga', to: '/explore-kaziranga' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact-us' },
]

function Footer({
  brandDescription = 'A nature-inspired stay in Bosagaon, Kaziranga, bringing together comfortable rooms, Assamese warmth and convenient access beside National Highway 715.',
  address = ['Bosagaon, Kaziranga National Park, Golaghat, Assam 785609'],
  email = 'arecacrownhariyali@gmail.com',
  phones = [
    { label: '+91 69012 80887', href: 'tel:+916901280887', bold: true },
    { label: '+91 70024 99397', href: 'tel:+917002499397' },
  ],
  links = defaultLinks,
  enquiryText = 'Share your dates and preferred room category. Contact us to confirm availability and the complete booking details.',
  whatsappHref = 'https://wa.me/916901280887',
  timings = ['Check-in: 1:00 PM', 'Check-out: 11:00 AM'],
  copyright = `© ${new Date().getFullYear()} Areca Crown Hariyali. All rights reserved.`,
  note = (
    <>
      Template demo photos and video are illustrative, not property assets. Kaziranga photo: Yathin S Krishnappa, CC BY-SA 3.0, displayed with cropping.{' '}
      <a href="https://commons.wikimedia.org/wiki/File:Rhinoceros_unicornis,_Kaziranga_(2006).jpg">Source</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/">Licence</a>
    </>
  ),
  backgroundImage = `${import.meta.env.BASE_URL}img/rooms/3.jpg`,
}: Props) {
  const { pathname } = useLocation()
  const footerRef = useRef<HTMLElement>(null)

  // Footer reveal (template's footerReveal): on wide screens the footer is fixed at the bottom
  // behind <main>, which scrolls away from it. Re-evaluated on every screen change and resize.
  useEffect(() => {
    const footer = footerRef.current
    const main = footer?.previousElementSibling as HTMLElement | null
    if (!footer || !main) return

    const reset = () => {
      footer.style.position = ''
      footer.style.bottom = ''
      footer.style.width = ''
      footer.style.zIndex = ''
      main.style.marginBottom = ''
      main.style.backgroundColor = ''
    }

    const apply = () => {
      const wide = window.innerWidth >= 1024
      const longPage = main.offsetTop + main.offsetHeight >= window.innerHeight
      if (!wide || !longPage || footer.offsetHeight > window.innerHeight) {
        reset()
        return
      }
      footer.style.position = 'fixed'
      footer.style.bottom = '0'
      footer.style.width = '100%'
      footer.style.zIndex = '1'
      // Read the height after fixing it: the footer can reflow once it spans the full viewport width.
      main.style.marginBottom = `${footer.offsetHeight}px`
      main.style.backgroundColor = '#fff' // main must be opaque so the footer behind it stays hidden
    }

    apply()
    window.addEventListener('resize', apply)
    const observer = new ResizeObserver(apply)
    observer.observe(main)
    observer.observe(footer)
    return () => {
      window.removeEventListener('resize', apply)
      observer.disconnect()
      reset()
    }
  }, [pathname])

  return (
    <footer ref={footerRef} className="revealed">
      <div className="footer_bg">
        <div className="gradient_over"></div>
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="container">
        <div className="row move_content">
          <div className="col-lg-4 col-md-12">
            <h5>Contact Details</h5>
            <p>{brandDescription}</p>
            <ul>
              <li>
                {address.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </li>
              <li>
                <strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </strong>
              </li>
              {phones.map(({ label, href, bold }) => (
                <li key={href}>
                  {bold ? (
                    <strong>
                      <a href={href}>{label}</a>
                    </strong>
                  ) : (
                    <a href={href}>{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 ms-lg-auto">
            <h5>Quick Links</h5>
            <div className="footer_links">
              <ul>
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Direct Enquiries</h5>
            <p>{enquiryText}</p>
            <a className="btn_1" href={whatsappHref}>
              WhatsApp Us
            </a>
            <p className="mt-3">
              <strong>Stay Timings</strong>
              <br />
              {timings[0]}
              <br />
              {timings[1]}
            </p>
          </div>
        </div>
        <div className="row add_top_25">
          <div className="col-lg-12">
            <p>{copyright}</p>
            <p className="demo-note">{note}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
