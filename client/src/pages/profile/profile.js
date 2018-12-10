import React, { Component } from 'react';
import './profile.css';
import {Container , Row, Col} from 'reactstrap';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../../components/navbar/navbar';

class Profile extends Component{
    render(){
        return(
            
            <Container fluid={true}>
                <Navbar/>
                <Row className='body-set'>
                <Col md='2' className='profile-divs'>
                <div className='profile-image'>
                    <h3>this is it and its meant o e so until further notice</h3>
                </div>
                </Col>
                <Col md='7' className='profile-divs'>
                <h5 className='header-text'>hello</h5>
                </Col>
                <Col md='3' className='profile-divs'>
                </Col>
                </Row>
            </Container>
        )
    }
}









export default Profile