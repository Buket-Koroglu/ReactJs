import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, ListGroup, ListGroupItem, Nav, NavItem, Row } from 'reactstrap'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance, FaGlobe, FaPhone, FaEnvelope, FaCcVisa, FaCcPaypal, FaCcAmazonPay, FaCcAmex, FaCcMastercard} from 'react-icons/fa';


export default class BottomPage extends Component {
  render() {
    return (
    <>
    <hr style={{color:'#ccc'}}/>
    <Container>
        <Row>
            <div className='col-xl-9 col-lg-9 col-md-8 col-sm-6  fw-bold text-secondary'>We're confident we're provided all the best for you. Stay connect with us</div>
            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 m-0 border border-top-0 border-bottom-0' style={{borderColor:'#ccc'}}> 
            <Nav>
               <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaFacebook/></NavLink>
                 </NavItem>
               <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaTwitter/></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaInstagram/></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaLinkedin/></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink to="/" className='me-4 text-decoration-none text-black'> <FaBehance/></NavLink>
                 </NavItem>
               </Nav>
               </div>

        </Row>
    </Container>
    <hr style={{color:'#ccc'}}/>
    {/* <!--liste--> */}
        <Container>
            <Row className="col-lg-12 mt-5">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <ListGroup>
                        <ListGroupItem className="border-0 fw-bold">INFORMATION</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Delivery Information</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Discount</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Sitemap</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Privacy Policy</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">My Account</ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <ListGroup>
                        <ListGroupItem className="border-0 fw-bold">MY ACCOUNT</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Sign In</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">View Cart</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">My Wishlist</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Check out</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Track My Order</ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <ListGroup>
                        <ListGroupItem className="border-0 fw-bold">HELP</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">F.A.Q</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Shipping</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Contact Us</ListGroupItem>
                        <ListGroupItem className="border-0 text-secondary fw-bold">Privacy Policy</ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <ListGroup>
                        <ListGroupItem className="border-0 fw-bold">CONTACT INFO</ListGroupItem>
                        <ListGroupItem className="border-0"><FaGlobe/> <span className='text-secondary fw-bold'>1234 Your Address, Country.</span></ListGroupItem>
                        <ListGroupItem className="border-0"><FaPhone/><span className='text-secondary fw-bold'> +1 234 5678 9999 </span></ListGroupItem>
                        <ListGroupItem className="border-0" style={{color:"#4EBF7F"}}><FaEnvelope/> mail@domain.com</ListGroupItem>
                    </ListGroup>
                </div>
        </Row>
        </Container>
        <footer className='col-lg-12 col-md-12 col-sm-12 col-12 bg-black mt-5'>
            <Container>
                <Row>
                    <div className='col-xl-7 col-lg-8 col-md-5 col-sm-5 col-5 text-secondary p-4'> LOGO</div>
                    <div className='col-xl-5 col-lg-4 col-md-7 col-sm-7 col-7 text-white'>
                   
                  <Nav>
                    <NavItem>
                        <NavLink to="/" className='me-4 text-decoration-none text-white fs-1'><FaCcVisa/></NavLink>
                      </NavItem>
                    <NavItem>
                        <NavLink to="/" className='me-4 text-decoration-none text-white fs-1'><FaCcPaypal/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/" className='me-4 text-decoration-none text-white fs-1'><FaCcAmazonPay/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/" className='me-4 text-decoration-none text-white fs-1'><FaCcMastercard/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/" className='me-4 text-decoration-none text-white fs-1'><FaCcAmex/></NavLink>
                      </NavItem>
                    </Nav>
                    </div>

                </Row>
            </Container>
        </footer>
    </>    
)
  }
}
