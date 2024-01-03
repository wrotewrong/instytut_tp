import styles from './information.module.scss';

export function Information() {
  return (
    <div className={styles.informationComponent}>
      <div className={styles.container}>
        <div className={styles.informationWrapper}>
          <h3>Czym jest diagnostyka?</h3>
          <p>
            Nasza poradnia realizuje diagnostykę psychologiczną i
            seksuologiczną. Diagnozę przeprowadza psycholog, psycholog seksuolog
            lub psycholog dziecięcy. Wykonujemy diagnostykę na potrzeby
            indywidualnych osób oraz instytucji.
          </p>
          <h4>Diagnozujemy w następujących obszarach:</h4>
          <ul>
            <li>diagnoza osobowości</li>
            <li>diagnoza temperamentu</li>
            <li>diagnoza funkcji poznawczych</li>
            <li>diagnoza psychoneurologiczna</li>
            <li>diagnoza seksuologiczna</li>
            <li>diagnoza dzieci i młodzieży</li>
          </ul>
        </div>
        <div className={styles.informationWrapper}>
          <h3>Czym jest terapia seksuologiczna?</h3>
          <p>
            Prowadzona jest przez psychologa seksuologa. Pierwsza wizyta jest
            wizytą diagnostyczną, podczas której ustalane są przyczyny zaburzeń
            i dyskomfortu. Seksuolog na podstawie zebranych informacji i badań
            kwestionariuszowych proponuje dalszą ścieżkę postępowania. W celu
            doprecyzowania przyczyn problemów niezbędne mogą okazać się dalsze
            badania: ginekologiczne, urologiczne czy biochemiczne krwi. Wówczas
            seksuolog zleci niezbędne wizyty. W przypadku stwierdzenia
            psychogennego charakteru zaburzeń proponowane jest postępowanie
            terapeutyczne.
          </p>
          <h4>
            Pomagamy rozwiązywać problemy związane z następującymi zaburzeniami:
          </h4>
          <ul>
            <li>brak lub utrata apetytu na seks</li>
            <li>brak odczuwania przyjemności z seksu</li>
            <li>trudności w osiąganiu orgazmu</li>
            <li>awersja seksualna</li>
            <li>ból podczas stosunku</li>
            <li>nadmierny popęd seksualny</li>
            <li>przedwczesny lub zbyt wczesny wytrysk</li>
            <li>zaburzenia erekcji</li>
            <li>wsparcie osób transseksualnych w procesie tranzycji</li>
            <li>
              wsparcie osób homoseksualnych i ich rodzin w procesie coming outu
            </li>
            <li>edukacja w zakresie rozwoju seksualnego dzieci i młodzieży</li>
          </ul>
        </div>
        <div className={styles.informationWrapper}>
          <div>
            <h3>Czym jest psychoterapia?</h3>
            <p>
              To cykl spotkań terapeutycznych, podczas których terapeuta
              stosując oddziaływania psychologiczne pomaga pacjentowi poradzić
              sobie z różnorodnymi problemami i osiągnąć zamierzone cele. W
              naszej Klinice terapię prowadzimy głównie w nurcie Terapii
              Skoncentrowanej na Rozwiązaniach oraz Poznawczo – Behawioralnym.
              Korzystamy również z technik Dialogu Motywującego oraz Terapii
              Ericksonowskiej.
            </p>
            <h4>
              Pomagamy radzić sobie z problemami w następujących obszarach:
            </h4>
            <ul>
              <li>zaburzenia depresyjne</li>
              <li>zaburzenia lękowe</li>
              <li>zaburzenia nerwicowe</li>
              <li>nadmierny stres</li>
              <li>trudności w relacjach</li>
              <li>trudności wychowawcze</li>
              <li>relacje w związku i małżeństwie</li>
              <li>stany obniżonego nastroju</li>
              <li>problemy emocjonalne</li>
              <li>poczucie pustki i bezsensu</li>
              <li>kryzysy życiowe</li>
              <li>przemoc fizyczna i psychiczna</li>
              <li>uzależnienia i współuzależnienia</li>
              <li>problemy rodzinne</li>
            </ul>
          </div>
        </div>
        <div className={styles.informationWrapper}>
          <h3>Czy do terapii trzeba się przygotować?</h3>
          <p>
            Nie ma potrzeby specjalnego przygotowywania się do procesu terapii.
            Najważniejsza w początkowej fazie jest gotowość do zmiany. Proces
            terapii jest interakcją pomiędzy terapeutą a pacjentem. Treść
            procesu kształtuje się w trakcie terapii.
          </p>
        </div>
        <div className={styles.informationWrapper}>
          <h3>Jak długo trwa wizyta?</h3>
          <p>
            Wizyta w procesie terapii trwa standardowo 60 minut. Pierwsza wizyta
            może być dłuższa, w zależności od sytuacji pacjenta. Wizyta
            diagnostyczna trwa od 60 do 90 minut.
          </p>
        </div>
        <div className={styles.informationWrapper}>
          <h3>Czego mogę spodziewać się na pierwszej wizycie?</h3>
          <p>
            Podczas pierwszej wizyty terapeuta rozpoczyna proces diagnozy,
            budowania relacji i ustalania celu pracy terapeutycznej. Stąd pojawi
            się sporo pytań tak aby dokładnie rozpoznać problem i podjąć decyzję
            o kierunku pracy.
          </p>
        </div>
        <div className={styles.informationWrapper}>
          <h3>
            Jaka jest różnica pomiędzy psychologiem a lekarzem seksuologiem?
          </h3>
          <p>
            Psycholog seksuolog zajmuje się problemami o podłoży psychogennym.
            Lekarz zajmuje się problemami o podłożu fizjologicznym i
            somatycznym. Decyzja o tym kto powinien leczyć jest podejmowana po
            wizycie diagnostycznej.
          </p>
        </div>
      </div>
    </div>
  );
}
