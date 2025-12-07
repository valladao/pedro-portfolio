/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Text_with_Photo.module.css'
import { PortableText } from '@portabletext/react'
import buildImageUrl from '../../scripts/build-image-url'
import Image from 'next/image'

type TextWithPhotoProps = {
  content: Array<Block>
  image: Sanity_Image
  altText: string
}

const Text_with_Photo = ({ content, image, altText }: TextWithPhotoProps) => {

  const url = buildImageUrl(image)
  if (!url) return null

  const size = url.substring(
    url.indexOf("-") + 1,
    url.lastIndexOf(".")
  )

  const width = Number(size.substring(0, size.indexOf("x")))
  const height = Number(size.split('x')[1])

  return (
    <div className={styles.Text_with_Photo}>
      <PortableText
        value={content}
      ></PortableText>
      <Image
        src={url}
        alt={altText}
        width={width}
        height={height}
        sizes={size}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Text_with_Photo;
