/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Spotify_Album.module.css'
import buildImageUrl from '../../scripts/build-image-url'
import Image from 'next/image'

type Spotify_Album_Props = {
  albumCover: Sanity_Image
  altText: string
  albumID: string
}

const Spotify_Album = ({ albumCover, altText, albumID }: Spotify_Album_Props) => {

  let albumUrl = `https://open.spotify.com/embed/album/${albumID}?utm_source=generator&theme=0`
  const coverUrl = buildImageUrl(albumCover)

  return (
    <div className={styles.Spotify_Album}>
      {coverUrl ? (
        <Image src={coverUrl} alt={altText} width={460} height={460} style={{ width: '100%', height: 'auto' }} />
      ) : null}
      <iframe
        src={albumUrl}
        width="100%"
        height="460"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Spotify_Album
