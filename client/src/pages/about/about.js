import React, { Component } from 'react';
import './about.css';
import {Container , Row, Col} from 'reactstrap';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer'

class About extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Navbar/>
                <Row>
                    <Col md='12' className='head-col'>
                    <h3 className='banner-text'>ABOUT WORKHUB</h3>
                    </Col>
                </Row>
                <Container>
                    <Row className='col-row'>
                    <Col md='5' className='column-tab'>
                    <h3 className='text'>About the Director</h3>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin 
                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                         Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Col>
                    <Col md='2' className=''></Col>
                    <Col md='5' className=''></Col>
                    </Row>
                    <Row className='col-row'>
                   
                    <Col md='5' className=''></Col>
                    <Col md='2' className=''></Col>
                    <Col md='5' className='column-tab'>
                    <h3 className='text'>About the Director</h3>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin 
                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                         Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Col>
                    </Row>
                    <Row className='col-row'>
                    <Col md='5' className='column-tab'>
                    <h3 className='text'>About the Director</h3>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin 
                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                         Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Col>
                    <Col md='2' className=''></Col>
                    <Col md='5' className=''></Col>
                    </Row>
                    <Row className='col-row'>
                   
                    <Col md='5' className=''></Col>
                    <Col md='2' className=''></Col>
                    <Col md='5' className='column-tab'>
                    <h3 className='text'>About the Director</h3>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin 
                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                         Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Col>
                    </Row>
                </Container>
                <Footer/>
            </Container>
        )
    }
}









export default About 