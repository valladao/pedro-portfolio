import Image from "next/image"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import styles from "../../styles/sections/Sheet_Music_Archive.module.css"
import buildImageUrl from "../../scripts/build-image-url"
import Portfolio_Bar from "../molecules/portfolio-bar"

type SheetMusicArchiveProps = { title?: string; scores: Array<Sheet_Music> }

const Sheet_Music_Archive = ({ title, scores }: SheetMusicArchiveProps) => {
  const availableScores = scores?.filter((score) => score.thumbnail && score.pdf?.asset?.url) || []
  if (availableScores.length === 0) return null

  return (
    <section className={styles.Sheet_Music_Archive}>
      <Portfolio_Bar title={title || "Scores"} />
      <Swiper className={styles.Carousel} modules={[Navigation]} navigation slidesPerView={2.2} spaceBetween={28} breakpoints={{ 640: { slidesPerView: 3.4, spaceBetween: 36 }, 1024: { slidesPerView: 5.2, spaceBetween: 48 }, 1440: { slidesPerView: 6.2, spaceBetween: 56 } }}>
        {availableScores.map((score) => {
          const thumbnailUrl = buildImageUrl(score.thumbnail)
          if (!thumbnailUrl) return null
          return <SwiperSlide key={score._id} className={styles.Slide}><a className={styles.ScoreLink} href={score.pdf.asset.url} target="_blank" rel="noreferrer" aria-label={`Open score: ${score.title}`}><Image src={thumbnailUrl} alt={score.altText} fill sizes="(max-width: 639px) 42vw, (max-width: 1023px) 27vw, 17vw" /></a></SwiperSlide>
        })}
      </Swiper>
    </section>
  )
}

export default Sheet_Music_Archive
