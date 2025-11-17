import styles from "../../styles/sections/Photo_Slides.module.css"

type PhotoSlidesProps = {
  description: string
}

const Photo_Slides = ({ description }: PhotoSlidesProps) => {
  return (
    <p className={styles.Photo_Slides}>{description}</p>
  )
}

export default Photo_Slides
