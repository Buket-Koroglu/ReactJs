import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {
Navbar,
NavbarBrand,
Nav,
NavItem,
} from 'reactstrap';
import { FaShoppingCart, FaSearch, FaBars} from 'react-icons/fa';

export default class NaviSepet extends Component {
  render() {
    return (
        <div style={{backgroundColor:'white'}}>
         
         <Navbar light expand="lg" className='shadow p-3'>
             <NavbarBrand href="/" className='ms-5' style={{color:"#4EBF7F", fontSize:"30px"}}> LOGO </NavbarBrand>          

               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink to="/Dashboard" className='me-5 text-decoration-none fw-bold' style={{color:"#4EBF7F"}} activeStyle={{color:"#4EBF7F"}}>HOME</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/components/account" className='me-5 text-decoration-none fw-bold text-secondary'>WOMEN</NavLink> {/*{({ isActive }) => (isActive ? "style={border-bottom:'2px solid black}'" : "style={border-bottom:'2px solid red}'")}*/}
                 </NavItem>
                 <NavItem>
                   <NavLink to="/components/plans" className='me-5 text-decoration-none fw-bold text-secondary'>MEN</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/components/communication" className='me-5 text-decoration-none fw-bold text-secondary'>KIDS</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/components/plans" className='me-5 text-decoration-none fw-bold text-secondary'>JEWELLERY</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/components/communication" className='text-decoration-none fw-bold text-secondary'>ACCESSORIES</NavLink>
                 </NavItem>
               </Nav>
               {/* </Container> */}
               <Nav>
               <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black position-relative'> <FaShoppingCart/>
                   <span class="position-absolute top-0 start-90 translate-middle bg-success border border-light rounded-circle text-white"> +3 </span>
                  </NavLink>
                 </NavItem>
               <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaSearch/></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaBars/></NavLink>
                 </NavItem>
               </Nav>
         {/* </Collapse> */}
         </Navbar>
         
         </div>
        )
  }
}
