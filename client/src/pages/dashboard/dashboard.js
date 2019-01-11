import React, { Component } from 'react';
import LoginNav from '../../components/loginNav/loginNav';
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

class Dashboard extends Component{
    state ={
        userID:sessionStorage.getItem('user')
    }
    componentDidMount(){
        let {userID} = this.state
        if(sessionStorage.getItem('user')){
            Axios.get(`http://localhost:5000/users/${userID}`)
            .then(res => {
                console.log(res)
            })

            
        }
    }
render(){
    return(
        <Container fluid={true}>
            <LoginNav/>
            <Row>

            </Row>
        </Container>
    )
}
}

export  default Dashboard;