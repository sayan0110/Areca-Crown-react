import { useEffect } from 'react'
import commonScriptsUrl from '../js/common_scripts.js?url'
import { loadScript } from '../utils/loadScript'

export type GalleryImage = {
  src: string
  caption: string
}

type Props = {
  images: GalleryImage[]
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
      <div className="gallery-masonry">
        {images.map(({ src, caption }) => (
          <div className="item" key={src}>
            <div className="item-img" data-cue="slideInUp">
              <img src={src} alt={caption} />
              <div className="content">
                <a data-fslightbox={group} data-type="image" data-caption={caption} href={src}>
                  <i className="bi bi-arrows-angle-expand"></i>
                </a>
              </div>
            </div>
            <p className="mt-2 mb-0 text-center">
              <small>{caption}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid
