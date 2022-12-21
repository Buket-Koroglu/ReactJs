import React, { Component } from 'react'
import BottomPage from '../bottomPage/BottomPage'
import {FaAngleDoubleRight,FaAngleDoubleLeft, FaStar, FaStarHalf, FaShoppingCart, FaHeart, FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import NaviTop from '../navbar/NaviTop';
import NaviSepet from '../navbar/NaviSepet';

export default class UrunDetay extends Component {
  render() {
    return (    
      <>
      <NaviTop/>
      <NaviSepet/>
      <Container>
        
      <div className='mt-5'>
        <text>Home <FaAngleDoubleRight/> Page <FaAngleDoubleRight/> Shop <FaAngleDoubleRight/> <text style={{color:"#4EBF7F"}}> Product</text></text>
        </div>
      {/* Breadcrumb kullanarak yapılabilir */}

      <Row className='mt-5'>
        <div className='col-xl-5 col-lg-4 col-md-12'>
        <img src={require("../images/imgBlack.jpg")} alt="images" height="600" width="450"/>

        </div>
        <div className='col-xl-6 col-lg-8 col-md-12'>
            <h3>This is product name</h3>
            <span className='fs-4 pe-2' style={{color:"#4EBF7F"}}> $250.00 </span>
            <span className='pe-3' style={{color:"#F28705"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></span>
            <p className='mt-4 fw-bold text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <hr className='mt-4' style={{color:'#ccc'}}/>

            <div className="col-lg-6 mt-5">
            <select className="form-select opacity-50 fw-bold">
                <option>Select size</option>
            </select>
            </div>

            <ButtonGroup className='col-lg-6 mt-4 rounded-0'>
            <Button className='col-lg-2 bg-light border-1 text-black fw-bold' style={{borderColor:'#ccc'}}> - </Button>
            <Button className='col-lg-4 bg-light border-1 text-black fw-bold' style={{borderColor:'#ccc'}}> 3 </Button>
            <Button className='col-lg-2 bg-light border-1 text-black fw-bold' style={{borderColor:'#ccc'}}> + </Button>
            </ButtonGroup>

            <div className='mt-4'>
                <Button className='border-0 rounded-0 p-3' style={{backgroundColor:"#4EBF7F"}}><FaShoppingCart/> ADD TO CART</Button>
                <Button className='bg-light border-0 rounded-0 text-black ms-2 p-3'><FaHeart/></Button>
            </div>

        </div>
      </Row>
      <div className='col-lg-5 mt-4'>
      <Button className='bg-light border-0 rounded-0 text-black ms-2 me-3' style={{height:"110px"}}><FaAngleDoubleLeft/></Button>
      <img src={require("../images/imgBlack.jpg")} alt="images" height="110" width="90" className='me-3'/>
      <img src={require("../images/imgBlack.jpg")} alt="images" height="110" width="90" className='me-3'/>
      <img src={require("../images/imgBlack.jpg")} alt="images" height="110" width="90" className='me-3'/>
      <Button className='border-0 rounded-0 text-white ms-2' style={{height:"110px", backgroundColor:"#4EBF7F"}}><FaAngleDoubleRight/></Button>

      </div>
      </Container>
    <Container>
    <nav className='mt-4'>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{backgroundColor:"#F0F0F2"}}>Description</button>
      <button className="nav-link text-black"  type="button" role="tab" aria-selected="false">Review (2)</button>
    </div>
  </nav>
    <div className="tab-content" id="nav-tabContent" style={{backgroundColor:"#F0F0F2"}}>
      <div className="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas, justo eget laoreet bibendum, orci magna commodo risus, at elementum eros arcu at nulla. Vivamus tempor convallis erat tincidunt tempor. Duis non magna arcu. Integer tincidunt accumsan dolor vitae euismod. Donec feugiat magna quis velit lobortis bibendum. Vestibulum tincidunt est nec velit elementum rutrum. Sed porta luctus nisl eu fringilla. Donec dignissim sodales augue. Fusce id pharetra lectus. Mauris laoreet dapibus iaculis. Praesent tincidunt rutrum leo at posuere. Quisque faucibus luctus odio, eget gravida urna faucibus id. Sed est felis, mollis in enim quis, placerat vestibulum nunc. Cras faucibus erat vitae risus posuere hendrerit. Fusce sodales euismod fermentum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas, justo eget laoreet bibendum, orci magna commodo risus, at elementum eros arcu at nulla. Vivamus tempor convallis erat tincidunt tempor. Duis non magna arcu. Integer tincidunt accumsan dolor vitae euismod. Donec feugiat magna quis velit lobortis bibendum. Vestibulum tincidunt est nec velit elementum rutrum. Sed porta luctus nisl eu fringilla. Donec dignissim sodales augue. Fusce id pharetra lectus. Mauris laoreet dapibus iaculis. Praesent tincidunt rutrum leo at posuere. Quisque faucibus luctus odio, eget gravida urna faucibus id. Sed est felis, mollis in enim quis, placerat vestibulum nunc. Cras faucibus erat vitae risus posuere hendrerit. Fusce sodales euismod fermentum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas, justo eget laoreet bibendum, orci magna commodo risus, at elementum eros arcu at nulla. Vivamus tempor convallis erat tincidunt tempor. Duis non magna arcu. Integer tincidunt accumsan dolor vitae euismod. Donec feugiat magna quis velit lobortis bibendum. Vestibulum tincidunt est nec velit elementum rutrum. Sed porta luctus nisl eu fringilla. Donec dignissim sodales augue. Fusce id pharetra lectus. Mauris laoreet dapibus iaculis. Praesent tincidunt rutrum leo at posuere. Quisque faucibus luctus odio, eget gravida urna faucibus id. Sed est felis, mollis in enim quis, placerat vestibulum nunc. Cras faucibus erat vitae risus posuere hendrerit. Fusce sodales euismod fermentum.</p>
 
      </div>
    </div>
    {/* Product list */}
      
      <div className='col-lg-12 mt-4'>
      <Row>
        <div className='col-lg-10 fw-bold fs-5'>Related Products</div>  
        <div className='col-lg-2'>
          <Button className='bg-light border-0 rounded-0 text-black m-2'><FaArrowLeft/></Button>
          <Button className='border-0 rounded-0 text-white' style={{backgroundColor:"#4EBF7F"}}><FaArrowRight/></Button>
        </div>  
           </Row>
      </div>
      <div className="mt-4">
            <div className="row col-lg-12 mt-4 mx-0">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10 position-relative">
                    <Link to="/urunDetay">
                    <img src={require("../images/imgBlack.jpg")} alt="images" height="400" width="270"/>
                    </Link>
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
        </div>
      
    </Container>
    <div className='mt-5'><BottomPage/></div>
      </>
    )
  }
}
