import styles from '../../styles/sections/Preheading_Bar.module.css'
import Preheading from '../atoms/preheading';

const Preheading_Bar = () => {
  return (
    <div className={styles.Preheading_Bar}>
      <Preheading></Preheading>
    </div>
  );
};

export default Preheading_Bar;