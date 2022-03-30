import styles from '../../styles/sections/Email_Bar.module.css'
import Email from '../atoms/email';

const Email_Bar = () => {
  return (
    <div className={styles.Email_Bar + ' email-bar'}>
      <Email></Email>
    </div>
  );
};

export default Email_Bar;