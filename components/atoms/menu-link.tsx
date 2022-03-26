import Link from 'next/link'
import styles from '../../styles/atoms/Menu_Link.module.css'

type Menu_Link_Props = {
  href: string
  title: string
}

const Menu_Link = (props: Menu_Link_Props) => {
  return (
    <li className={styles.Menu_Link}>
      <Link href={props.href}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default Menu_Link