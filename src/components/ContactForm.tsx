import { useState, type FormEvent } from 'react'
import { whatsappLink } from '../utils/whatsapp'

type Props = {
  heading?: string
  whatsappNumber?: string
}

// "Get in Touch" form: collects the details and hands them over to WhatsApp.
function ContactForm({ heading = 'Get in Touch', whatsappNumber = '916901280887' }: Props) {
  const [link, setLink] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const fullName = [data.get('name'), data.get('lastname')].filter(Boolean).join(' ')
    setLink(
      whatsappLink(whatsappNumber, [
        'Hello Areca Crown Hariyali, I would like to get in touch.',
        `Name: ${fullName}`,
        `Email: ${data.get('email')}`,
        data.get('phone') && `Telephone: ${data.get('phone')}`,
        data.get('message') && `Message: ${data.get('message')}`,
      ]),
    )
    setStatus('Your enquiry is ready. Continue on WhatsApp to send it to the hotel.')
  }

  return (
    <>
      <h3 className="mb-3">{heading}</h3>
      <div id="message-contact"></div>
      <form id="stay-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="text" id="name_contact" name="name" placeholder="Name" required />
              <label htmlFor="name_contact">Name</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="text" id="lastname_contact" name="lastname" placeholder="Last Name" />
              <label htmlFor="lastname_contact">Last name</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="email" id="email_contact" name="email" placeholder="Email" required />
              <label htmlFor="email_contact">Email</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating mb-4">
              <input className="form-control" type="text" id="phone_contact" name="phone" placeholder="Telephone" />
              <label htmlFor="phone_contact">Telephone</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-4">
          <textarea className="form-control" placeholder="Message" id="message_contact" name="message"></textarea>
          <label htmlFor="message_contact">Message</label>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <label htmlFor="verify_contact">Are you human? 3 + 1 =</label>
            </div>
          </div>
        </div>
        <p className="mt-3">
          <input type="submit" value="Prepare WhatsApp enquiry" className="btn_1 outline" id="submit-contact" />
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
