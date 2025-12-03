import Link from 'next/link'
import styles from '../../styles/molecules/Album_Tile.module.css'
import Album_Cover from '../atoms/album-cover'
import Album_Title from '../atoms/album-title'
import Album_Title_2 from '../atoms/album-title-2'
import Link_Button from '../atoms/link-button'
import Link_Button_2 from '../atoms/link-button-2'
import Release_Date from '../atoms/release-date'
import Item_Description from '../atoms/item-description'

type Album_Tile_Props = {
  albumTitle: string
  albumCover: Sanity_Image
  altText: string
  slug?: string
  releaseDate?: number
  itemType?: "album" | "project"
  description?: string
}

const Album_Tile = ({
  albumTitle,
  albumCover,
  altText,
  slug,
  releaseDate,
  itemType = "album",
  description
}: Album_Tile_Props) => {
  const href = slug ? `/${itemType === "project" ? "project" : "album"}/${slug}` : undefined

  const tileContent = (
    <>
      <Link_Button_2></Link_Button_2>
      <div className={styles.Album_Box}>
        <Link_Button></Link_Button>
        <Album_Cover albumCover={albumCover} altText={altText}></Album_Cover>
      </div>
      <Album_Title_2 albumTitle={albumTitle}></Album_Title_2>
    </>
  )

  return (
    <div className={styles.Album_Tile + ' album-tile'}>
      {releaseDate ? <Release_Date releaseDate={releaseDate}></Release_Date> : null}
      {href ? <Link href={href}>{tileContent}</Link> : tileContent}
      <Album_Title albumTitle={albumTitle}></Album_Title>
      {description ? <Item_Description description={description}></Item_Description> : null}
    </div>
  )
}

export default Album_Tile
