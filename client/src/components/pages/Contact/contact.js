import { MailForm } from '../../features/MailForm/MailForm';
import styles from './contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export function Contact() {
  return (
    <div className={styles.contactComponent}>
      <div className={styles.container}>
        <div className={styles.contactWrapper}>
          <h3>Kontakt:</h3>
          <div className={styles.icons}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faMobileScreen} />
              <p>500 047 562 </p>
            </div>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>90-138 Łódź</p>
              <p>ul. Narutowicza 74/5</p>
            </div>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>tomek@instytutterapii.pl</p>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <iframe
              title='googleMaps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9874.889272337632!2d19.47364316462204!3d51.77468339095297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a337cf8ff90c1%3A0xab07f0a2bb768a59!2sInstytut%20Terapii.%20Psycholog%2C%20seksuolog.%20Diagnostyka%20psychologiczna!5e0!3m2!1spl!2spl!4v1703891182630!5m2!1spl!2spl'
              width='600'
              height='450'
              allowFullScreen=''
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>

        {/* <h3>Zobacz opinie:</h3> */}
        {/* <iframe
            title='znanyLekarz'
            frameborder='0'
            scrolling='no'
            allowtransparency='true'
            data-id='2ocrh6lqyg'
            src='https://widgets.znanylekarz.pl/doctor/widget/big/tomasz-poreba?customUtm=null&amp;id=2ocrh6lqyg&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=http%3A%2F%2Fwww.instytutterapii.pl%2Findex.html&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false&amp;saasonly=false'
            // style='border: medium; overflow: hidden; width: 100%; height: 236px;'
          ></iframe> */}
        <h3>Wyślij wiadomość:</h3>
        <MailForm></MailForm>
      </div>
    </div>
  );
}
