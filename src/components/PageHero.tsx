import ParallaxBackground from './ParallaxBackground'

type Props = {
  title: string
  eyebrow?: string
  text?: string
  image?: string
  fullHeight?: boolean
  // Narrow text column (col-lg-8) used by the room detail pages.
  narrow?: boolean
  // Shows the scroll-down mouse icon linking to this anchor, e.g. '#first_section'.
  scrollTo?: string
  // Slow zoom on the background image (template `kenburns`).
  kenburns?: boolean
}

// Inner-page hero ("hero medium-height" / "hero full-height") with a background image and centred title.
function PageHero({ title, eyebrow, text, image = '/img/hero_home_1.jpg', fullHeight = false, narrow = false, scrollTo, kenburns = false }: Props) {
  const content = (
    <>
      {eyebrow && <small className="slide-animated one">{eyebrow}</small>}
      <h1 className="slide-animated two">{title}</h1>
      {text && <p className="slide-animated three">{text}</p>}
    </>
  )

  return (
    <div className={`hero ${fullHeight ? 'full-height' : 'medium-height'} is-transitioned`} style={{ position: 'relative' }}>
      <ParallaxBackground image={image} kenburns={kenburns} />
      <div className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">
          {narrow ? (
            <div className="row justify-content-center">
              <div className="col-lg-8">{content}</div>
            </div>
          ) : (
            content
          )}
        </div>
        {scrollTo && (
          <div className="mouse_wp slide-animated four">
            <a href={scrollTo} className="btn_explore">
              <div className="mouse"></div>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHero
