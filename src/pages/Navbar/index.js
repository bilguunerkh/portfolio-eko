import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./style.module.scss";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light"  className={styles.Navbar}  sticky="top" >
        <Navbar.Brand href="#home">MOO-PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default CollapsibleExample;