import { useEffect } from 'react'
import commonScriptsUrl from '../js/common_scripts.js?url'
import { loadScript } from '../utils/loadScript'

type Props = {
  images: string[]
  group?: string
}

// Image grid; each tile opens the fullscreen lightbox (fslightbox, bundled in common_scripts.js).
function GalleryGrid({ images, group = 'gallery_1' }: Props) {
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
    <div className="isotope-wrapper">
      <div className="row justify-content-center">
        {images.map((src) => (
          <div className="item col-xl-4 col-lg-6 mb-4" key={src}>
            <div className="item-img" data-cue="slideInUp">
              <img src={src} alt="" />
              <div className="content">
                <a data-fslightbox={group} data-type="image" href={src}>
                  <i className="bi bi-arrows-angle-expand"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid
