import styles from './home.module.scss';
import ScrollVideo from '../../features/ScrollVVideo/ScrollVideo';

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

      <section className={styles.workAreas}>
        <div className={styles.container}>
          <div className={styles.animationWrapper}>
            <div className={styles.animation}>
              <ScrollVideo url='her_final.mp4'></ScrollVideo>
            </div>
            <div className={styles.animationDescription}>
              <p>Seksualność kobiet</p>
              <p>Problemy w sferze seksualnej u kobiet </p>
            </div>
          </div>
          <div className={styles.animationWrapper}>
            <div className={styles.animation}>
              <ScrollVideo url='her_final.mp4'></ScrollVideo>
            </div>
            <div className={styles.animationDescription}>
              <p>Seksualność kobiet</p>
              <p>Problemy w sferze seksualnej u kobiet </p>
            </div>
          </div>
          <div className={styles.animationWrapper}>
            <div className={styles.animation}>
              <ScrollVideo url='her_final.mp4'></ScrollVideo>
            </div>
            <div className={styles.animationDescription}>
              <p>Seksualność kobiet</p>
              <p>Problemy w sferze seksualnej u kobiet </p>
            </div>
          </div>
          <div className={styles.animationWrapper}>
            <div className={styles.animation}>
              <ScrollVideo url='her_final.mp4'></ScrollVideo>
            </div>
            <div className={styles.animationDescription}>
              <p>Seksualność kobiet</p>
              <p>Problemy w sferze seksualnej u kobiet </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
