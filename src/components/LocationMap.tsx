import SectionTitle from './SectionTitle'

type Props = {
  // Search text or "lat,lng" shown on the map.
  query: string
  title?: string
  id?: string
  eyebrow: string
  heading: string
  paragraphs: string[]
  buttonLabel?: string
  buttonHref?: string
}

// Location section: centred text on the patterned background with an optional button, then a full-width Google Maps embed.
// The share link (maps.app.goo.gl) can't be framed, so the embed URL is built from a query.
function LocationMap({ query, title = 'Location map', id = 'location', eyebrow, heading, paragraphs }: Props) {
  return (
    <>
      <div className="pattern_3">
        <div className="container" id={id} style={{marginTop: '5rem'}}>
          <SectionTitle className="text-center mb-5" eyebrow={eyebrow} heading={heading} />
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {paragraphs.map((p) => (
                <p className="fs-5 text-center" key={p}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="location_map">
        <iframe title={title} src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default LocationMap
