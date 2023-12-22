import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id='style'>
      <Container>
        <Navbar.Brand href="#/" style={{ fontSize: 'larger' }}><b>JH BANK</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/Create"><b>CREATE DATA</b> </Nav.Link>
            <Nav.Link href="#/Deposit"><b>SAVE</b></Nav.Link>
            <Nav.Link href="#/Withdraw"><b>PAY</b></Nav.Link>
            <Nav.Link href="#/Alldata"><b>DATABASE</b></Nav.Link>
            <Nav.Link href="#/Loan"><b>BORROW</b></Nav.Link>
            <Nav.Link href="#/Bill"><b>BILLS</b></Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ marginRight: '10px' }}>
            <Nav.Link href="#/Login"><b>LOGIN</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
