import { MailForm } from '../../features/MailForm/MailForm';
import styles from './contact.module.scss';

export function Contact() {
  return (
    <>
      <div className='container'>
        <div className={styles.contactWrapper}>
          <h3>Wyślij wiadomość:</h3>
          <MailForm></MailForm>
        </div>
      </div>
    </>
  );
}
