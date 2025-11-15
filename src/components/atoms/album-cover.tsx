import styles from '../../styles/atoms/Album_Cover.module.css'
import buildImageUrl from '../../scripts/build-image-url'
import Image from 'next/image'

type Album_Cover_Props = {
  albumCover: Sanity_Image
  altText: string
}

const Album_Cover = ({albumCover, altText}: Album_Cover_Props) => {
  return (
    <div className={styles.Album_Cover}>
      <Image
        src={buildImageUrl(albumCover)}
        placeholder="blur"
        blurDataURL={buildImageUrl(albumCover) + '?blur=100'}
        alt={altText}
        width={635}
        height={635}
        layout='intrinsic'
      />
    </div>
  )
}

export default Album_Cover