import styles from './price.module.scss';

export function Price() {
  return (
    <>
      <div className='container'>
        <div className={styles.priceWrapper}>
          <h3>Ceny naszych usług:</h3>
          <div className={styles.service}>
            <p>Terapia indywidualna</p>
            <p>140 zł</p>
            <p>godzina</p>
          </div>
          <div className={styles.service}>
            <p>Terapia par</p>
            <p>160 zł</p>
            <p>godzina</p>
          </div>
          <div className={styles.service}>
            <p>Terapia seksuologiczna</p>
            <p>150 zł</p>
            <p>godzina</p>
          </div>
          <div className={styles.service}>
            <p>Diagnostyka</p>
            <p>150 zł</p>
            <p>spotkanie</p>
          </div>
        </div>
      </div>
    </>
  );
}
