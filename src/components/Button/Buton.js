import styles from './Button.module.scss';

const Button = props => {

  return (
    <div>
      <button className={styles.button} onClick={() => props.start(true)}>START</button>
      <button className={styles.button} onClick={() => props.start(false)}>STOP</button>
      <button className={styles.button} onClick={() => props.start(null, props.setTime(0))}>RESET</button>
    </div>
  );
}

export default Button;