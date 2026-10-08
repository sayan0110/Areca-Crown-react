import SectionTitle from './SectionTitle'

type Props = {
  image: string
  eyebrow: string
  heading: string
  paragraphs: string[]
  reverse?: boolean
  pattern?: boolean
}

// Image + text row. `pattern` swaps the white background for the patterned one.
function StoryBlock({ image, eyebrow, heading, paragraphs, reverse = false, pattern = false }: Props) {
  return (
    <div className={pattern ? 'pattern_2' : 'bg_white'}>
      <div className="container margin_120_95">
        <div className={`row justify-content-between align-items-center${reverse ? ' flex-lg-row-reverse' : ' '}`}>
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid rounded-img" />
          </div>
          <div className="col-lg-5">
            <SectionTitle eyebrow={eyebrow} heading={heading} />
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryBlock
