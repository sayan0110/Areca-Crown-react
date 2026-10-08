import { useState, type FormEvent } from 'react'
import { whatsappLink } from '../utils/whatsapp'

type Props = {
  eyebrow?: string
  heading?: string
  text?: string
  whatsappNumber?: string
}

// Contact enquiry form: collects the details and hands them over to WhatsApp.
function ContactForm({
  eyebrow = 'Send an enquiry',
  heading = 'Tell Us About Your Visit',
  text = 'Share your travel dates, guest count and preferred room category. Add any dining or activity questions, and our team will help you confirm availability and the complete arrangements.',
  whatsappNumber = '916901280887',
}: Props) {
  const [link, setLink] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setLink(
      whatsappLink(whatsappNumber, [
        'Hello Areca Crown Hariyali, I would like to enquire about a stay.',
        `Name: ${data.get('name')}`,
        `Phone / WhatsApp: ${data.get('phone')}`,
        data.get('email') && `Email: ${data.get('email')}`,
        `Check-in date: ${data.get('arrival')}`,
        `Check-out date: ${data.get('departure')}`,
        `Room category: ${data.get('category')}`,
        `Adults: ${data.get('adults')}`,
        `Children: ${data.get('children')}`,
        data.get('message') && `Special requirements: ${data.get('message')}`,
        'Please confirm availability, the complete price, inclusions and booking terms.',
      ]),
    )
    setStatus('Your enquiry is ready. Review and send it on WhatsApp to contact the hotel.')
  }

  return (
    <>
      <div className="title">
        <small>{eyebrow}</small>
        <h2>{heading}</h2>
      </div>
      <p>{text}</p>
      <div id="message-contact"></div>
      <form id="stay-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="text" id="name_contact" name="name" placeholder="Full Name" required />
              <label htmlFor="name_contact">Full Name*</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="tel" id="phone_contact" name="phone" placeholder="Phone / WhatsApp Number" required />
              <label htmlFor="phone_contact">Phone / WhatsApp Number*</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-4">
          <input className="form-control" type="email" id="email_contact" name="email" placeholder="Email Address" />
          <label htmlFor="email_contact">Email Address</label>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="date" id="arrival_contact" name="arrival" placeholder="Check-in Date" required />
              <label htmlFor="arrival_contact">Check-in Date*</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="date" id="departure_contact" name="departure" placeholder="Check-out Date" required />
              <label htmlFor="departure_contact">Check-out Date*</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-floating mb-4">
              <select className="form-select" id="category_contact" name="category" defaultValue="Help Me Choose">
                <option>Premium</option>
                <option>Superior</option>
                <option>Help Me Choose</option>
              </select>
              <label htmlFor="category_contact">Preferred Room Category</label>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-floating mb-4">
              <input className="form-control" type="number" min="1" max="24" id="adults_contact" name="adults" placeholder="Number of Adults" defaultValue="2" required />
              <label htmlFor="adults_contact">Number of Adults*</label>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-floating mb-4">
              <input className="form-control" type="number" min="0" id="children_contact" name="children" placeholder="Number of Children" defaultValue="0" />
              <label htmlFor="children_contact">Number of Children</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-4">
          <textarea className="form-control" placeholder="Message / Special Requirements" id="message_contact" name="message"></textarea>
          <label htmlFor="message_contact">Message / Special Requirements</label>
        </div>
        <p>
          <small>Submitting an enquiry does not confirm a reservation. The hotel will confirm room availability, the complete price and booking terms.</small>
        </p>
        <p className="mt-3">
          <input type="submit" value="Prepare Enquiry" className="btn_1 outline" id="submit-contact" />
        </p>
        <p id="enquiry-status" role="status" className="mt-3">
          {status}
        </p>
        <a id="send-enquiry" className="btn_1" href={link} hidden={!link} target="_blank" rel="noopener noreferrer">
          Continue on WhatsApp
        </a>
      </form>
    </>
  )
}

export default ContactForm
