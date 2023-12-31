import styles from './price.module.scss';

export function Price() {
  return (
    <div className={styles.priceComponent}>
      <div className={styles.container}>
        <div className={styles.servicesWrapper}>
          <h3>Ceny naszych usług:</h3>
          <div className={styles.services}>
            <div className={styles.service}>
              <p>Terapia indywidualna</p>
              <p>140 zł / godzina</p>
            </div>
            <div className={styles.service}>
              <p>Terapia par</p>
              <p>160 zł / godzina</p>
            </div>
            <div className={styles.service}>
              <p>Terapia seksuologiczna</p>
              <p>150 zł / godzina</p>
            </div>
            <div className={styles.service}>
              <p>Diagnostyka</p>
              <p>150 zł / spotkanie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
