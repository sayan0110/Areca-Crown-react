import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SectionTitle from './SectionTitle'
import FacilityCard, { type Facility } from './FacilityCard'
import menu1 from "../assets/menu/menu1.jpeg"
import menu2 from "../assets/menu/menu2.jpeg"

const menuCard = [
  menu1, menu2
]

type Props = {
  facilities: Facility[]
  eyebrow: string
  heading: string
  text?: string
  titleClassName?: string
  columnClass?: string
}

function Facilities({ facilities, eyebrow, heading, text, titleClassName = 'text-center mb-5', columnClass }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the menu with Escape and stop the page scrolling behind it while it is open.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  return (
    <>
      <SectionTitle className={titleClassName} eyebrow={eyebrow} heading={heading} animated headingDelay={100}>
        {text && <p>{text}</p>}
      </SectionTitle>
      <div className="row mt-4">
        {facilities.map((f, i) => (
          <FacilityCard key={f.title} {...f} noBorder={i === 0} columnClass={columnClass} />
        ))}
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <button className="btn_1 outline" type="button" onClick={() => setMenuOpen(true)}>
          <span>View or menu</span>
        </button>
      </div>
      {menuOpen &&
        createPortal(
        <div className="viewMenu" role="dialog" aria-modal="true" aria-label={heading}>
          <button type="button" className="viewMenu__close" aria-label="Close" onClick={() => setMenuOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="viewMenu__content">
            {menuCard.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </div>
        </div>,
          document.body,
        )}
    </>
  )
}

export default Facilities
