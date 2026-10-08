import { useEffect } from 'react'
import commonScriptsUrl from '../js/common_scripts.js?url'
import { loadScript } from '../utils/loadScript'
import OwlCarousel from './OwlCarousel'

type Props = {
  images: string[]
  group?: string
  buttonLabel?: string
}

const options = {
  loop: true,
  margin: 5,
  nav: true,
  dots: false,
  center: true,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 2 } },
}

// Centered image carousel plus a "FullScreen Gallery" button that opens fslightbox
// (bundled in common_scripts.js) on the same images.
function RoomGallery({ images, group = 'gallery_1', buttonLabel = 'FullScreen Gallery' }: Props) {
  useEffect(() => {
    let cancelled = false
    loadScript(commonScriptsUrl).then(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!cancelled) (window as any).refreshFsLightbox?.()
    })
    return () => {
      cancelled = true
    }
  }, [images, group])

  return (
    <div className="bg_white add_bottom_120">
      <div className="container-fluid p-lg-0">
        <div data-cues="zoomIn">
          <OwlCarousel className="carousel_item_centered kenburns rounded-img" options={options}>
            {images.map((src, i) => (
              <div className="item" key={`${src}-${i}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div className="text-center mt-5">
          <a className="btn_1 outline" data-fslightbox={group} data-type="image" href={images[0]}>
            {buttonLabel}
          </a>
          {images.slice(1).map((src, i) => (
            <a key={`${src}-${i}`} data-fslightbox={group} data-type="image" href={src}></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoomGallery
