import styles from "../../styles/sections/Photo_Slides.module.css"
import { FreeMode, Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import buildImageUrl from "../../scripts/build-image-url"

type SlideItem = {
  image: Sanity_Image
  altText: string
  widthPercentage: number
  _key?: string
}

type PhotoSlidesProps = {
  sectionHeight: number
  sectionHeightMobile?: number
  slides: Array<SlideItem>
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
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        loop={false}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          nextEl: ".photo-slides-next",
          prevEl: ".photo-slides-prev"
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            pagination: false
          }
        }}
        modules={[FreeMode, Pagination, Navigation]}
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
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className={`swiper-button-prev ${styles.NavButton} ${styles.Prev} photo-slides-prev`}></div>
        <div className={`swiper-button-next ${styles.NavButton} ${styles.Next} photo-slides-next`}></div>
      </Swiper>
    </div>
  )
}

export default Photo_Slides
