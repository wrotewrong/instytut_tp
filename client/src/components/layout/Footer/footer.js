import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h1 className={styles.footerLogo}>Instytut Terapii</h1>
        <h2 className={styles.footerLogoText}>
          Poradnia psychologiczno - seksuologiczna
        </h2>
      </div>
    </div>
  );
}
