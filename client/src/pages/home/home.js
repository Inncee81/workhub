import React, { Component } from 'react';
import './home.css';
import {Container , Row, Col} from 'reactstrap';
import NavBar from '../../components/navbar/navbar';
class Home extends Component{
    render(){
        return(
             <Container>
                <NavBar/>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}









export default Home