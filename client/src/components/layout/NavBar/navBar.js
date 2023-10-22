import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.scss';

export function NavBar() {
  return (
    <Navbar className={styles.bar}>
      <Nav className={styles.nav}>
        <Nav.Link className={styles.link} as={NavLink} to='/'>
          Strona Główna
        </Nav.Link>
        <Nav.Link className={styles.link} as={NavLink} to='/psychotherapy'>
          Psychoterapia
        </Nav.Link>
        <Nav.Link className={styles.link} as={NavLink} to='/sexology'>
          Seksuologia
        </Nav.Link>
        <Nav.Link className={styles.link} as={NavLink} to='/diagnostics'>
          Diagnostyka
        </Nav.Link>
        <Nav.Link className={styles.link} as={NavLink} to='/contact'>
          Kontakt
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
