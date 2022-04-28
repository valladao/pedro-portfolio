import styles from '../../styles/sections/Album_List.module.css'
import Album_Tile from '../molecules/album-tile';
import Portfolio_Bar from '../molecules/portfolio-bar';

const Album_List = () => {

  const albumCover: Sanity_Image = {
    _type: "image",
    asset: {
      _ref: "image-a3be459e8b6070347aa691d247b7e3d1db15ca31-1600x1600-jpg",
      _type: "reference"
    }
  }

  return (
    <>
      <Portfolio_Bar></Portfolio_Bar>
      <div className={styles.Album_List + ' album-list'}>
        <Album_Tile
          albumTitle="Adagio for Orchestra, Op. 1"
          albumCover={albumCover}
          altText="Adagio for Orchestra, Op. 1"
          slug="adagio"
        ></Album_Tile>
      </div>
    </>
  );
};

export default Album_List;