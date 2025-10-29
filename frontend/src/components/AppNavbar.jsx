import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/Logo.png";


function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
  <Container fluid className="d-flex align-items-center justify-content-between">
    <Navbar.Brand href="/" className="d-flex align-items-center gap-2 m-0 p-0">
      <img
        src={logo}
        alt="SSNB Logo"
        width="85"
        height="70"
        className="d-inline-block align-top rounded"
      />
      
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" navbarScroll>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default AppNavbar;
