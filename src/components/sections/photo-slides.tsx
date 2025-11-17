import styles from "../../styles/sections/Photo_Slides.module.css"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import Image from "next/image"
import buildImageUrl from "../../scripts/build-image-url"

type PhotoSlidesProps = {
  slides: Array<{
    image: Sanity_Image
    altText: string
    _key?: string
  }>
}

const Photo_Slides = ({ slides }: PhotoSlidesProps) => {
  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className={styles.Photo_Slides}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode
        loop
        modules={[FreeMode]}
        className="photo-slides-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._key || slide.altText}>
            <Image
              src={buildImageUrl(slide.image)}
              alt={slide.altText}
              width={1920}
              height={1080}
              loading="lazy"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Photo_Slides
