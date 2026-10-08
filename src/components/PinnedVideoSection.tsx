import type { ReactNode } from 'react'
import SectionTitle from './SectionTitle'

type VideoSource = { src: string; type: string }

type Props = {
  sources?: VideoSource[]
  eyebrow?: string
  heading?: ReactNode
  text?: string
}

function PinnedVideoSection({
  sources = [
    { src: '/video/swimming_pool_2.mp4', type: 'video/mp4' },
    { src: '/video/swimming_pool_2.webm', type: 'video/webm' },
    { src: '/video/swimming_pool_2.ogv', type: 'video/ogg' },
  ],
  eyebrow = 'A moment in Kaziranga',
  heading = 'Take a Closer Look at Your Stay',
  text = 'Discover the character of Areca Crown Hariyali, from its areca-inspired façade to its green surroundings and welcoming spaces. Let your Kaziranga journey begin with a glimpse of the setting that awaits you.',
}: Props) {
  return (
    <div className="pinned-image pinned-image--medium">
      <div className="pinned-image__container" id="section_video">
        <video loop muted autoPlay playsInline id="video_home">
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
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
