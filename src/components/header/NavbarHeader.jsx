import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FOREGROUND, GREEN } from '../../helpers/colors';
import { Link } from 'react-router-dom';

function NavbarHeader() {
  return (
    <Container style={{color:FOREGROUND}}>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><span style={{color:GREEN}}>اپلیکیشن مدیریت دانشجویان</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 mx-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link to="/"><span style={{color:FOREGROUND}}>خانه</span></Link></Nav.Link>
            <Nav.Link> <Link to="/about"><span style={{color:FOREGROUND}}>درباره ما</span></Link></Nav.Link>
            <Nav.Link> <Link to="/contact"><span style={{color:FOREGROUND}}>تماس با ما</span></Link></Nav.Link>
            <Nav.Link> <Link to="/courses"><span style={{color:FOREGROUND}}>دوره های ما</span></Link></Nav.Link>
       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جستجو"
              className="ms-2"
              aria-label="Search"
            />
            <Button variant="outline-success">جستجو</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default NavbarHeader;