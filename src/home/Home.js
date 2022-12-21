import React, { Component } from 'react'
import { FaAngleRight, FaAngleDoubleRight, FaStar, FaStarHalf} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
    <>
      <div className='mt-5'>
        <text>Home <FaAngleDoubleRight/> Page <FaAngleDoubleRight/> Shop <FaAngleDoubleRight/> <text style={{color:"#4EBF7F"}}> Chechout</text></text>
      </div>
      {/* <Breadcrumb>
      <BreadcrumbItem><Link>Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link>Page</Link></BreadcrumbItem>
      <BreadcrumbItem><Link>Shop</Link></BreadcrumbItem>
      <BreadcrumbItem active><Link>Chechout</Link></BreadcrumbItem>

      </Breadcrumb> */}
      <Row className='mt-5 col-lg-12'>
        <div className='col-lg-10 col-md-8 col-sm-6 col-6 opacity-50 fw-bold'>Showing 1-12 of 44 results</div> 
        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <select className="form-select opacity-50 border-0 fw-bold">
                <option>Sort by newness</option>
            </select>
        </div>
        <hr className='mt-2 mx-3' style={{color:'#ccc'}}/>
      </Row>

      {/* ürün listesi */}
      <div className="mt-4">
            <div className="row col-lg-12 col-md-12 col-sm-12 mt-4 mx-0">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                    <Link to="/urunDetay">
                    <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    </Link>
                     <ListGroup className="position-absolute top-0"> 
                        {/* <span className="text-center opacity-75 text-black p-2">New</span> */}
                        <ListGroupItem className="badge p-3 rounded-0" style={{backgroundColor:"#4EBF7F"}}>New</ListGroupItem>
                        <ListGroupItem className="badge p-3 rounded-0 mt-2" style={{backgroundColor:"#4EBF7F"}}>Sale</ListGroupItem>

                    </ListGroup>

                    <div className='mt-3'>
                        <p className='fw-bold'>Crown Summit Backpack</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Joust Duffle Bag</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Voyage Yoga Bag</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Treatise on the</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>
            </div>

            {/* 2.row */}
            <div className="row col-lg-12 col-md-12 col-sm-12 mt-5 mx-0">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Warrios both reach</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Endeavor Daytrip</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Dual Handle Cardio Ball</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Looks reasonable</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>
            </div>

            <div className="row col-lg-12 mt-5 mx-0">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Strive Shoulder Pack</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Compete Track Tote</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Impulse Duffle</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    <div className='mt-3'>
                        <p className='fw-bold'>Word in classica</p>
                        <p className='fw-bold fs-5' style={{color:"#4EBF7F"}}> $250.00</p>
                        <div className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                    </div>
                </div>
            </div>
    </div>
    <div className='mt-5'>
        <hr style={{color:'#ccc'}}/>
    <Pagination className='container col-lg-4 col-md-6 col-sm-8 col-8 my-0 border border-top-0 border-bottom-0' style={{borderColor:'#ccc'}}>
        <PaginationItem style={{borderBottomWidth:'2px',borderBottomStyle:'solid',borderBottomColor:'#F28705'}}><PaginationLink className='border-0' style={{color:"#F28705"}}>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink className='text-secondary border-0'>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink className='text-secondary border-0'>3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink className='text-secondary border-0'>4</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink className='text-secondary border-0'>5</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink className='text-secondary border-0'>...</PaginationLink></PaginationItem>
        
        <PaginationItem><PaginationLink className='text-secondary border-0'><FaAngleRight/><FaAngleDoubleRight/></PaginationLink></PaginationItem>
    </Pagination> 
    <hr style={{color:'#ccc'}}/>
    </div>
    </>
    
    )
  }
}
