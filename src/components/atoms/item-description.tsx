import styles from '../../styles/atoms/Item_Description.module.css'

type Item_Description_Props = {
  description: string
}

const Item_Description = ({ description }: Item_Description_Props) => {
  if (!description) return null

  return (
    <p className={styles.Item_Description}>{description}</p>
  )
}

export default Item_Description
