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
        <img className={styles.splash} src='splash.webp' alt='' />
      </div>

      <section className={styles.workAreas}>
        <h2>Obszary pracy:</h2>
        <div className={styles.container}>
          <div className={styles.workAreasWrapper}>
            <div className={styles.animationWrapper}>
              <div className={styles.animation}>
                <ScrollVideo url='puzzle_final.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Terapia indywidualna</p>
                <p>Pomagamy lepiej radzić sobie w życiu</p>
              </div>
            </div>
            <div className={styles.animationWrapper}>
              <div className={styles.animation}>
                <ScrollVideo url='brain_final.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Diagnostyka</p>
                <p>Diagnoza osobowości oraz funkcji poznawczych</p>
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
                <ScrollVideo url='his_final.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Seksualność mężczyzn</p>
                <p>Problemy w sferze seksualnej u mężczyzn </p>
              </div>
            </div>
            <div className={styles.animationWrapper}>
              <div className={styles.animation}>
                <ScrollVideo url='relations with text.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Relacje</p>
                <p>Terapia par i małżeństw oraz problemy seksualne par </p>
              </div>
            </div>
            <div className={styles.animationWrapper}>
              <div className={styles.animation}>
                <ScrollVideo url='kid_final.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Dzieci i młodzież</p>
                <p>Terapia oraz diagnostyka dzieci i młodzieży</p>
              </div>
            </div>
            <div className={styles.animationWrapper}>
              <div className={styles.animation}>
                <ScrollVideo url='conflict_final.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Konflikty</p>
                <p>Pomagamy w rozwiązywaniu konfliktów</p>
              </div>
            </div>
            <div className={styles.animationWrapper}>
              <div className={styles.animation}>
                <ScrollVideo url='diet.mp4'></ScrollVideo>
              </div>
              <div className={styles.animationDescription}>
                <p>Psychodietetyka</p>
                <p>Pomoc w zaburzeniach związanych z obszarem odżywiania się</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
