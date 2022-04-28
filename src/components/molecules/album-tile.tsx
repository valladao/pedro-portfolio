import Link from 'next/link'
import styles from '../../styles/molecules/Album_Tile.module.css'
import Album_Cover from '../atoms/album-cover'
import Album_Title from '../atoms/album-title'
import Album_Title_2 from '../atoms/album-title-2'
import Link_Button from '../atoms/link-button'
import Link_Button_2 from '../atoms/link-button-2'
import Release_Date from '../atoms/release-date'

type Album_Tile_Props = {
  albumTitle: string
  albumCover: Sanity_Image
  altText: string
  slug: string
}

const Album_Tile = ({ albumTitle, albumCover, altText, slug }: Album_Tile_Props) => {
  return (
    <div className={styles.Album_Tile + ' album-tile'}>
      <Release_Date></Release_Date>
      <Link href={`/album/${slug}`}>
        <a>
          <Link_Button_2></Link_Button_2>
          <div className={styles.Album_Box}>
            <Link_Button></Link_Button>
            <Album_Cover albumCover={albumCover} altText={altText}></Album_Cover>
          </div>
          <Album_Title_2 albumTitle={albumTitle}></Album_Title_2>
        </a>
      </Link>
      <Album_Title></Album_Title>
    </div>
  )
}

export default Album_Tile