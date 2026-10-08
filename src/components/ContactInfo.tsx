import type { ReactNode } from 'react'

type Phone = { label: string; href: string }

type Props = {
  address: ReactNode
  email: string
  phones: Phone[]
}

function ContactInfo({ address, email, phones }: Props) {
  const [firstPhone, ...otherPhones] = phones
  return (
    <div className="contact_info">
      <ul className="clearfix">
        <li>
          <i className="bi bi-geo-alt"></i>
          <h4>Address</h4>
          <div>{address}</div>
        </li>
        <li>
          <i className="bi bi-envelope-paper"></i>
          <h4>Email address</h4>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </li>
        <li>
          <i className="bi bi-telephone"></i>
          <h4>Telephone</h4>
          <div>
            <a href={firstPhone.href}>{firstPhone.label}</a>
            {otherPhones.map(({ label, href }) => (
              <p key={href}>
                <a href={href}>{label}</a>
              </p>
            ))}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContactInfo
