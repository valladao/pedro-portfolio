import styles from '../../styles/sections/Album_List.module.css'
import Album_Tile from '../molecules/album-tile';
import Portfolio_Bar from '../molecules/portfolio-bar';

type Album_List_Props = {
  itemGroups: Array<Item_Group>
}

const Album_List = ({ itemGroups }: Album_List_Props) => {
  if (!itemGroups || itemGroups.length === 0) return null

  return (
    <>
      {itemGroups.map((group) => {
        if (!group?.items || group.items.length === 0) return null

        return (
          <section key={group._key} className={styles.Album_Group}>
            <Portfolio_Bar title={group.title}></Portfolio_Bar>
            <div className={styles.Album_List + ' album-list'}>
              {group.items.map((item) => {
                const isProject = item._type === "project"
                const title = isProject
                  ? (item as Project).projectTitle
                  : (item as Album).albumTitle
                const cover = isProject
                  ? (item as Project).projectCover
                  : (item as Album).albumCover
                const slug = item.slug?.current
                const description = isProject ? (item as Project).description : undefined

                return (
                  <Album_Tile
                    key={item._id}
                    albumTitle={title}
                    albumCover={cover}
                    altText={item.altText}
                    slug={slug}
                    releaseDate={item.releaseDate}
                    itemType={isProject ? "project" : "album"}
                    description={group.showDescription ? description : undefined}
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
