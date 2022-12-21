import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {
Navbar,
Nav,
NavItem,
} from 'reactstrap';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance} from 'react-icons/fa';

export default class NaviTop extends Component {
  render() {
    return (
        <div style={{backgroundColor:'black', padding:"8px"}} className="ps-5">
        <Navbar dark expand="lg" bg="dark" variant="dark"> {/* style={{backgroundColor:'white'}}*/}
            
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/" className='text-decoration-none text-white'> <FaPhone/><text className='p-3'> +1 123 456 789</text> </NavLink>
                </NavItem>
                <span className='opacity-25 mx-4' style={{borderRight:"1px solid",borderColor:'#ddd'}}></span>
                <NavItem>
                  <NavLink to="/" className='text-decoration-none text-white'> <FaEnvelope/> <text className='p-3'>info@company.com </text></NavLink>
                </NavItem>
              
              </Nav>
              <Nav>
              <NavItem>
                  <NavLink to="/" className='me-4 text-decoration-none text-white'> <FaFacebook/></NavLink>
                </NavItem>
              <NavItem>
                  <NavLink to="/" className='me-4 text-decoration-none text-white'> <FaTwitter/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/" className='me-4 text-decoration-none text-white'> <FaInstagram/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/" className='me-4 text-decoration-none text-white'> <FaLinkedin/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/" className='me-4 text-decoration-none text-white'> <FaBehance/></NavLink>
                </NavItem>
              </Nav>
              </Navbar>
           </div>    
        )
  }
}
