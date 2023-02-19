// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../CSS/Nav.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Navbar() {
//   return (
//     <header className="nav-top container-wrapper">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <div className="navbar__spacer"></div>
//           </div>
//           <div className="col-2 ">
//             <div className="flex v-center">
//               <Link to="/home" className="font_color_w no-line link-hov">
//                 หน้าหลัก
//               </Link>
//             </div>
//           </div>
//           <div className="col-5">
//             <div className="navbar__spacer"></div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Navbar

import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Happy Acadamy</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/">ออกจากระบบ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
