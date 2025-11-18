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

const Photo_Slides = ({ slides, sectionHeight, sectionHeightMobile }: PhotoSlidesProps) => {
  if (!slides || slides.length === 0) {
    return null
  }

  const desktopHeight = Number(sectionHeight) > 0 ? sectionHeight : 550
  const mobileHeight = Number(sectionHeightMobile) > 0 ? sectionHeightMobile : desktopHeight

  const heightVars = {
    ["--photo-slides-height" as string]: `${desktopHeight}px`,
    ["--photo-slides-height-mobile" as string]: `${mobileHeight}px`
  }

  const hasSingleSlide = slides.length === 1

  if (hasSingleSlide) {
    const slide = slides[0]
    return (
      <div className={styles.Photo_Slides} style={heightVars}>
        <div className={styles.SingleSlide}>
          <Image
            src={buildImageUrl(slide.image)}
            alt={slide.altText}
            fill
            style={{ objectFit: "cover" }}
            loading="eager"
            sizes="100vw"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.Photo_Slides} style={heightVars}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="photo-slides-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._key || slide.altText}>
            <div className={styles.SlideImage}>
              <Image
                src={buildImageUrl(slide.image)}
                alt={slide.altText}
                fill
                style={{ objectFit: "cover" }}
                loading="eager"
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
