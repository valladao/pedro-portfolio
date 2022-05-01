import styles from '../../styles/sections/Album_List.module.css'
import Album_Tile from '../molecules/album-tile';
import Portfolio_Bar from '../molecules/portfolio-bar';

type Album_List_Props = {
  albuns: Array<Album>
}

const Album_List = ({ albuns }: Album_List_Props) => {

  return (
    <>
      <Portfolio_Bar></Portfolio_Bar>
      <div className={styles.Album_List + ' album-list'}>
        {albuns.map((album) => {
          return (
            <Album_Tile
              key={album._id}
              albumTitle={album.albumTitle}
              albumCover={album.albumCover}
              altText={album.altText}
              slug={album.slug.current}
              releaseDate={album.releaseDate}
            ></Album_Tile>
          )
        })}
      </div>
    </>
  )
}

export default Album_List