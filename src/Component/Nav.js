import { Navbar, Nav } from "react-bootstrap";
import swal from "sweetalert";
import { useNavigate } from "react-router";
function MyNavbar() {
  const navigate = useNavigate();
  async function logOut() {
    await swal({
      text: "ต้องการออกจากระบบใช่หรือไม่",
      dangerMode: true,
      buttons: ["ยกเลิก", "ตกลง"],
    }).then(async (register) => {
      if (register) {
        localStorage.removeItem("accessToken");
        localStorage.setItem("loginStatus", "false");
        navigate("/");
      }
    });
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Happy Acadamy</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link onClick={logOut}>ออกจากระบบ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
