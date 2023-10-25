import styles from './home.module.scss';

export function Home() {
  return (
    <div>
      <div className={styles.splashContainer}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Instytut Terapii</h1>
          <h2 className={styles.subTitle}>
            Poradnia psychologiczno - seksuologiczna
          </h2>
        </div>
        <img className={styles.splash} src='splash.jpg' alt='' />
      </div>
      {/* <div className={styles.synfig}>
        <video id='animatedVideo' src='Synvid.mp4'></video>
      </div> */}
      <div className={styles.splashContainer}></div>
    </div>
  );
}
