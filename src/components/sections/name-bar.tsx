import styles from '../../styles/sections/Name_Bar.module.css'
import Full_Name from '../atoms/full-name';

const Name_Bar = () => {
  return (
    <div className={styles.Name_Bar + ' name-bar'}>
      <Full_Name fullName="Pedro Henrique Valladao"></Full_Name>
      <Full_Name fullName="Pedro Henrique dos Santos Valladao"></Full_Name>
    </div>
  );
};

export default Name_Bar;