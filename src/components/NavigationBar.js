import '../style/NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (

    <Navbar className='NavigationBar' variant="dark">
        <Container className='NavContainer'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link className="NavLink" href="#home">Beranda</Nav.Link>
            <Nav.Link className="NavLink" href="#features">Profil</Nav.Link>
            <Nav.Link className="NavLink" href="#pricing">Skill</Nav.Link>
            <Nav.Link className="NavLink" href="#pricing">Kontak</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;