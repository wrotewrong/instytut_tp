import styles from './about.module.scss';

export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutPhoto}>
          <img src='owner.webp' alt='the owner' />
        </div>
        <div className={styles.aboutDescription}>
          <h3 className={styles.aboutHeader}>mgr Tomasz Poręba</h3>
          <p className={styles.ownerSign}>Psycholog, Seksuolog, Terapeuta </p>
          <p className={styles.aboutOwner}>
            Jestem założycielem i właścicielem Poradni
            Psychologiczno-Seksuologicznej
          </p>
          <p className={styles.aboutText}>
            Jesteśmy specjalistycznym ośrodkiem zapewniającym kompleksową pomoc
            psychologiczną i seksuologiczną dla dorosłych i dzieci. Naszym celem
            jest szybka i efektywna pomoc osobom borykającym się z problemami
            natury psychologicznej i seksualnej. Zespół naszych specjalistów
            zapewnia profesjonalną opiekę w oparciu o najwyższe standardy i
            najnowszą wiedzę. W naszym ośrodku uzyskają Państwo pomoc, która
            pozwoli poradzić sobie z problemami oraz uczynić Państwa życie takim
            jakiego Państwo chcą. Nasi specjaliści łączą wieloletnie
            doświadczenie z wiedzą ekspercką i pasją, co pozwala im pomagać
            pacjentom w realizacji ich celów.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
