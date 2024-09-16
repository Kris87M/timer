import styles from './Button.module.scss';

const Button = () => {

  return (
    <div>
      <button className={styles.button} /*onClick*={}*/>START</button>
      <button className={styles.button} /*onClick*={}*/>STOP</button>
      <button className={styles.button} /*onClick*={}*/>RESET</button>
    </div>
  );
}

export default Button;