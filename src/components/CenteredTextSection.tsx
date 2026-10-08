import SectionTitle from './SectionTitle'

type Props = {
  eyebrow: string
  heading: string
  paragraphs: string[]
  buttonLabel?: string
  buttonHref?: string
  id?: string
}

// Centred heading with a narrow text column and an optional button, on the patterned background.
function CenteredTextSection({ eyebrow, heading, paragraphs, buttonLabel, buttonHref, id = 'first_section' }: Props) {
  return (
    <div className="pattern_3">
      <div className="container margin_120_95" id={id}>
        <SectionTitle className="text-center mb-5" eyebrow={eyebrow} heading={heading} />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {buttonLabel && (
              <a className="btn_1" href={buttonHref}>
                {buttonLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenteredTextSection
