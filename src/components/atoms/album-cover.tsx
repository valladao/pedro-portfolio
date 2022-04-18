import styles from '../../styles/atoms/Album_Cover.module.css'
import buildImageUrl from '../../scripts/build-image-url';

type Album_Cover_Props = {
  albumCover: Sanity_Image
  altText: string
}

const Album_Cover = ({ albumCover, altText }: Album_Cover_Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.Album_Cover}
      src={buildImageUrl(albumCover)}
      alt={altText}
    />
  )
}

export default Album_Cover