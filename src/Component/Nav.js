import React from 'react'
import { Link } from 'react-router-dom'
// import { PrimaryNav, MenuLink, Menu, Hamburger } from '../CSS/NavElement.js'
import '../CSS/Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 
function Navbar() {
  return (
    <header className="nav-top container-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="navbar__spacer"></div>
          </div>
          <div className="col-2 ">
            <div className="flex v-center">
              <Link to="/" className="font_color_w no-line link-hov">
                หน้าหลัก
              </Link>
              {/* <Link to="/about" className="font_color_w no-line link-hov">
                About
              </Link> */}
            </div>
          </div>
          <div className="col-5">
            <div className="navbar__spacer"></div>
          </div>
          <div className="col-3">
            <div className="flex v-center">
              <Link to="/login" className="font_color_w no-line link-hov">
                เข้าสู่ระบบ
              </Link>
              <Link to="/register" className="font_color_w no-line link-hov">
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    // <>
    //   <PrimaryNav>
    //     <Hamburger />
    //     <Menu>
    //       <MenuLink to="/" >
    //         Home
    //       </MenuLink>
    //       <MenuLink to="/about" >
    //         About
    //       </MenuLink>
    //       <MenuLink to="/about" >
    //         <div style={{width:"40rem"}}>
    //         </div>
    //       </MenuLink>
    //       <MenuLink to="/login">
    //         Login
    //       </MenuLink>
    //       <MenuLink to="/register" >
    //         Register
    //       </MenuLink>
    //     </Menu>
    //   </PrimaryNav>
    // </>
  );
}
export default Navbar