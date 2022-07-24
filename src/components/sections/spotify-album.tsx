/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Spotify_Album.module.css'

const Spotify_Album = () => {
  return (
    <div className={styles.Spotify_Album}>
      <img src="/assets/photos/album-cover.jpg" alt="Understreet" />
      <iframe
        src="https://open.spotify.com/embed/album/19Ib36kOVkwoSIINATsNRm?utm_source=generator&theme=0"
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