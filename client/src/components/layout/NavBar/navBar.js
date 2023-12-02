import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.scss';

export function NavBar() {
  return (
    <Navbar className={styles.bar}>
      <input id={styles.hamburger} type='checkbox' />
      <label
        className={styles.hamburgerButtonContainer}
        htmlFor={styles.hamburger}
      >
        <div className={styles.hamburgerButton}></div>
      </label>
      <Nav className={styles.nav}>
        <Nav.Link className={styles.link} as={NavLink} to='/'>
          Strona Główna
        </Nav.Link>
        <Nav.Link className={styles.link} as={NavLink} to='/information'>
          Informacje
        </Nav.Link>
        <Nav.Link className={styles.link} as={NavLink} to='/about'>
          O nas
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
