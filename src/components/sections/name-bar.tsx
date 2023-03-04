import styles from '../../styles/sections/Name_Bar.module.css'
import Full_Name from '../atoms/full-name'

const Name_Bar = ({fullName, shortName}: {fullName: string, shortName: string}) => {
  return (
    <div className={styles.Name_Bar + ' name-bar'}>
      <Full_Name name={shortName}></Full_Name>
      <Full_Name name={fullName}></Full_Name>
    </div>
  );
};

export default Name_Bar