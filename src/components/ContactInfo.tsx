import type { ReactNode } from 'react'

type Phone = { label: string; href: string }

type Props = {
  address: ReactNode
  email: string
  phones: Phone[]
  whatsapp?: Phone
  timings?: [string, string]
}

function ContactInfo({ address, email, phones, whatsapp, timings }: Props) {
  const [firstPhone, ...otherPhones] = phones
  return (
    <div className="contact_info">
      <ul className="clearfix">
        <li>
          <i className="bi bi-geo-alt"></i>
          <h4>Property Address</h4>
          <div>{address}</div>
        </li>
        <li>
          <i className="bi bi-telephone"></i>
          <h4>Phone</h4>
          <div>
            <a href={firstPhone.href}>{firstPhone.label}</a>
            {otherPhones.map(({ label, href }) => (
              <p key={href}>
                <a href={href}>{label}</a>
              </p>
            ))}
          </div>
        </li>
        {whatsapp && (
          <li>
            <i className="bi bi-whatsapp"></i>
            <h4>WhatsApp</h4>
            <p>
              <a href={whatsapp.href}>{whatsapp.label}</a>
            </p>
          </li>
        )}
        <li>
          <i className="bi bi-envelope-paper"></i>
          <h4>Email</h4>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </li>
        {timings && (
          <li>
            <i className="bi bi-clock"></i>
            <h4>Stay Timings</h4>
            <p>
              {timings[0]}
              <br />
              {timings[1]}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ContactInfo
