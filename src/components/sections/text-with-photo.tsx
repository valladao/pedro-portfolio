/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Text_with_Photo.module.css'
import { PortableText } from '@portabletext/react'
import buildImageUrl from '../../scripts/build-image-url'

const Text_with_Photo = ({ content, image, altText }: Text_with_Photo) => {
  return (
    <div className={styles.Text_with_Photo}>
      <PortableText
        value={content}
      ></PortableText>
      <img src={buildImageUrl(image)} alt={altText} />
    </div>
  );
};

export default Text_with_Photo;