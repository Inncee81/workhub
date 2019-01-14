import React, { Component } from 'react';
import './Admin.css';
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import LoginNav from '../../components/loginNav/loginNav';
import Footer from '../../components/footer/footer';
import { Table } from 'reactstrap';
import Axios from 'axios';
class Admin extends Component{
    state={
        users:[],
        userID:JSON.parse(sessionStorage.getItem('user')).userToken
    }
    
    
    componentDidMount (){
        this.GetUsers();
        this.getUser();
    }
    
    GetUsers = ()=>{
        Axios.get("http://localhost:5000/users/")
        .then(res => {
            console.log(res);
            this.setState({
                users:res.data.output
            })
        })
    }
    getUser = ()=>{
        let {userID} = this.state
        console.log(userID);
        if(sessionStorage.getItem('user')){
            Axios.get(`http://localhost:5000/users/${userID}`)
            .then(res => {
                console.log(res)
            })

            
        }
    }
render(){
    let{users} = this.state
    return(
        <Container fluid={true}>
        <LoginNav/>
        <Container>
        <Row  className='Admin-row'>
        <Col md='4'>
        
        </Col>
        <Col md='4'></Col>
        <Col md='4'></Col>
        </Row>
        <Row>
        <Col md='12' >
            <h3 className='UserTitle'><strong>Registered Users</strong></h3>
            <Table >
        <thead className='Usertab'> 
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Status</th>
          </tr>
        </thead>
        {users && users.length > 0 ? (
            users.map(Userdetails => {
                return (
           
        <tbody  className='Usertabs'  key={Userdetails}>
          <tr >
              <td>1</td>
            <td>{Userdetails.firstname}</td>
            <td>{Userdetails.lastname}</td>
            <td>{Userdetails.email}</td>
            <td>{Userdetails.status}</td>
          </tr>
        </tbody>
    
                );
              })
            ) : (
              <div>loading...</div>
            )}
            </Table>
            </Col>
        </Row>
        </Container>
        <Footer/>
        </Container>
    )
}
}

export default Admin;
