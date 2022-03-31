import styles from '../../styles/sections/Email_Bar.module.css'
import Email from '../atoms/email';

type Email_Bar_Props = {
  email: string
}

const Email_Bar = ({ email }: Email_Bar_Props) => {
  return (
    <div className={styles.Email_Bar + ' email-bar'}>
      <Email email={email}></Email>
    </div>
  );
};

export default Email_Bar;