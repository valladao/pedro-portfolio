import styles from "../../styles/sections/Photo_Slides.module.css"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import Image from "next/image"
import buildImageUrl from "../../scripts/build-image-url"

type PhotoSlidesProps = {
  sectionHeight: number
  sectionHeightMobile?: number
  slides: Array<{
    image: Sanity_Image
    altText: string
    widthPercentage: number
    _key?: string
  }>
}

const normalizeWidths = (slides: PhotoSlidesProps["slides"]) => {
  const providedTotal = slides.reduce((sum, slide) => sum + (slide.widthPercentage || 0), 0)
  if (providedTotal <= 0) {
    const fallbackWidth = slides.length > 0 ? 100 / slides.length : 100
    return slides.map((slide) => ({ ...slide, normalizedWidth: fallbackWidth }))
  }

  // If less than 100%, scale up proportionally to reach 100%
  const multiplier = providedTotal < 100 ? 100 / providedTotal : 1
  return slides.map((slide) => ({
    ...slide,
    normalizedWidth: (slide.widthPercentage || 0) * multiplier
  }))
}

const Photo_Slides = ({ slides, sectionHeight, sectionHeightMobile }: PhotoSlidesProps) => {
  if (!slides || slides.length === 0) {
    return null
  }

  const desktopHeight = Number(sectionHeight) > 0 ? sectionHeight : 550
  const mobileHeight = Number(sectionHeightMobile) > 0 ? sectionHeightMobile : desktopHeight

  const normalizedSlides = normalizeWidths(slides)
  const totalWidth = normalizedSlides.reduce((sum, slide) => sum + slide.normalizedWidth, 0)
  const singleSlide = normalizedSlides.length === 1 && totalWidth <= 100

  const heightVars = {
    ["--photo-slides-height" as string]: `${desktopHeight}px`,
    ["--photo-slides-height-mobile" as string]: `${mobileHeight}px`
  }

  if (singleSlide) {
    const slide = normalizedSlides[0]
    return (
      <div className={styles.Photo_Slides} style={heightVars}>
        <div className={styles.SingleSlide}>
          <Image
            src={buildImageUrl(slide.image)}
            alt={slide.altText}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
            sizes="100vw"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.Photo_Slides} style={heightVars}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        freeMode
        loop
        modules={[FreeMode]}
        className="photo-slides-swiper"
      >
        {normalizedSlides.map((slide) => (
          <SwiperSlide
            key={slide._key || slide.altText}
            style={{ width: `${slide.normalizedWidth}%` }}
          >
            <div className={styles.SlideImage}>
              <Image
                src={buildImageUrl(slide.image)}
                alt={slide.altText}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Photo_Slides
