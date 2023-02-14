import React from 'react'
import { Link } from 'react-router-dom'
// import { PrimaryNav, MenuLink, Menu, Hamburger } from '../CSS/NavElement.js'
import '../CSS/Nav.css'
// import 
function Navbar() {
  return (
    <header className='nav-top container-wrapper'>
      <div className='nav-wrapper container-wrapper'>
        <nav className='navbar container'>
          <div className='flex v-center '>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <div className='navbar__spacer'></div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
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
  )
}
export default Navbar