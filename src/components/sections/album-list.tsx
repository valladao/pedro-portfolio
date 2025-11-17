import styles from '../../styles/sections/Album_List.module.css'
import Album_Tile from '../molecules/album-tile';
import Portfolio_Bar from '../molecules/portfolio-bar';

type Album_List_Props = {
  albumGroups: Array<Album_Group>
}

const Album_List = ({ albumGroups }: Album_List_Props) => {
  if (!albumGroups || albumGroups.length === 0) return null

  return (
    <>
      {albumGroups.map((group) => {
        if (!group?.albums || group.albums.length === 0) return null

        return (
          <section key={group._key} className={styles.Album_Group}>
            <Portfolio_Bar title={group.title}></Portfolio_Bar>
            <div className={styles.Album_List + ' album-list'}>
              {group.albums.map((album) => {
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
          </section>
        )
      })}
    </>
  )
}

export default Album_List
