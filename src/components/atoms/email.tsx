import styles from '../../styles/atoms/Email.module.css'

type Email_Props = {
  email: string
}

const Email = ({ email }: Email_Props) => {
  return (
    <p className={styles.Email}>{email}</p>
  );
};

export default Email;