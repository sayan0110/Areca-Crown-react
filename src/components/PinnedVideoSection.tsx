import type { ReactNode } from 'react'
import SectionTitle from './SectionTitle'

type Props = {
  image?: string
  eyebrow?: string
  heading?: ReactNode
  text?: string
}

function PinnedVideoSection({
  image = `${import.meta.env.BASE_URL}img/hero_home_1.jpg`,
  eyebrow = 'A moment in Kaziranga',
  heading = 'Take a Closer Look at Your Stay',
  text = 'Discover the character of Areca Crown Hariyali, from its areca-inspired façade to its green surroundings and welcoming spaces. Let your Kaziranga journey begin with a glimpse of the setting that awaits you.',
}: Props) {
  return (
    <div className="pinned-image pinned-image--medium">
      <div className="pinned-image__container" id="section_video">
        <img src={image} alt="" />
        <div className="pinned-image__container-overlay"></div>
      </div>
      <div className="pinned_over_content">
        <SectionTitle className="white" eyebrow={eyebrow} heading={heading} animated eyebrowDelay={200} headingDelay={300}>
          <div className='d-flex justify-content-center'>
          <p className='w-50' style={{color: 'white'}}>{text}</p>
          </div>
        </SectionTitle>
      </div>
    </div>
  )
}

export default PinnedVideoSection
