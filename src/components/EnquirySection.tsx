import { useState, type FormEvent } from 'react'
import SectionTitle from './SectionTitle'
import { whatsappLink as buildWhatsappLink } from '../utils/whatsapp'

type Props = {
  eyebrow?: string
  heading?: string
  text?: string
  phone?: string
  phoneHref?: string
  whatsappNumber?: string
  categories?: string[]
}

// "Check Availability" enquiry: collects the details and hands them over to WhatsApp.
function EnquirySection({
  eyebrow = 'Areca Crown Hariyali',
  heading = 'Check Availability',
  text = 'Share your dates and guests. Review and send your enquiry on WhatsApp. Your reservation requires hotel confirmation.',
  phone = '+91 69012 80887',
  phoneHref = 'tel:+916901280887',
  whatsappNumber = '916901280887',
  categories = ['Premium', 'Superior'],
}: Props) {
  const [whatsappLink, setWhatsappLink] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setWhatsappLink(
      buildWhatsappLink(whatsappNumber, [
        'Hello Areca Crown Hariyali, I would like to enquire about a stay.',
        `Name: ${data.get('name')}`,
        `Room category: ${data.get('category')}`,
        `Check in: ${data.get('arrival')}`,
        `Check out: ${data.get('departure')}`,
        `Adults: ${data.get('adults')}`,
        `Children: ${data.get('children')}`,
        data.get('message') && `Requirements: ${data.get('message')}`,
      ]),
    )
    setStatus('Your enquiry is ready. Continue on WhatsApp to send it to the hotel.')
  }

  return (
    <div className="container margin_120_95" id="enquiry">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <SectionTitle eyebrow={eyebrow} heading={heading} />
          <p>{text}</p>
          <p className="phone_element">
            <a href={phoneHref}>
              <i className="bi bi-telephone"></i>
              <span>
                Info and bookings<em>{phone}</em>
              </span>
            </a>
          </p>
        </div>
        <div className="col-lg-6">
          <form id="stay-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label>Your name</label>
                <input className="form-control mb-3" name="name" required />
              </div>
              <div className="col-md-6">
                <label>Room category</label>
                <select name="category" className="form-select mb-3">
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label>Check in</label>
                <input className="form-control mb-3" name="arrival" type="date" required />
              </div>
              <div className="col-md-6">
                <label>Check out</label>
                <input className="form-control mb-3" name="departure" type="date" required />
              </div>
              <div className="col-md-6">
                <label>Adults</label>
                <input className="form-control mb-3" name="adults" type="number" min="1" max="24" defaultValue="2" required />
              </div>
              <div className="col-md-6">
                <label>Children</label>
                <input className="form-control mb-3" name="children" type="number" min="0" defaultValue="0" />
              </div>
            </div>
            <label>Your requirements</label>
            <textarea className="form-control mb-3" name="message" rows={3}></textarea>
            <button className="btn_1" type="submit">
              Prepare Enquiry
            </button>
            <p id="enquiry-status" role="status" className="mt-3">
              {status}
            </p>
            <a id="send-enquiry" className="btn_1" href={whatsappLink} hidden={!whatsappLink} target="_blank" rel="noopener noreferrer">
              Continue on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EnquirySection
