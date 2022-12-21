import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import BottomPage from '../bottomPage/BottomPage'
import Home from '../home/Home'
import Navi from '../navbar/Navi'

export default class Dashboard extends Component {
  render() {
    return (
        <>
        <Navi/> 
        <Container>
        <Row>
            <Col xs="12">
             <Home/>
            </Col>
        </Row>
        </Container>
        <BottomPage/>
        </>    )
  }
}
