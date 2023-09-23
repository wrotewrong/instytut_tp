import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar>
      <Nav className='me-auto position-absolute end-0'>
        <Nav.Link as={NavLink} to='/'>
          Strona Główna
        </Nav.Link>
        <Nav.Link as={NavLink} to='/psychotherapy'>
          Psychoterapia
        </Nav.Link>
        <Nav.Link as={NavLink} to='/sexology'>
          Seksuologia
        </Nav.Link>
        <Nav.Link as={NavLink} to='/diagnostics'>
          Diagnostyka
        </Nav.Link>
        <Nav.Link as={NavLink} to='/contact'>
          Kontakt
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
