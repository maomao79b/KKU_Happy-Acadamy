import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Happy Acadamy</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav> */}
        <Nav className="ml-auto">
          <Nav.Link href="/" onClick={logOut}>ออกจากระบบ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

function logOut(){
  localStorage.removeItem('accessToken');
  localStorage.setItem('loginStatus', "false");
}