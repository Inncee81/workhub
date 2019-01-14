import React, { Component } from 'react';
import LoginNav from '../../components/loginNav/loginNav';
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from '../../components/footer/footer';
import {Link } from 'react-router-dom'
import Axios from 'axios';
import './dashboard.css'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardTitle,
    CardText,
    Card
  } from "reactstrap";
class Dashboard extends Component{
    state ={
        userID:JSON.parse(sessionStorage.getItem('user')).userToken,
        RelJobs:[]
    }

    componentDidMount(){
       this.getUser();
       this.getRelatedJobs();
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
    getRelatedJobs = ()=>{
        let{userID} = this.state
        Axios.get(`http://localhost:5000/users/relatedJobs/${userID}`)
        .then(RelJobs=>{
            console.log(RelJobs)
           this.setState({
            RelJobs:RelJobs.data.output
           })
        })
    }
render(){
    let {RelJobs} = this.state
    return(
        <Container fluid={true}>
        <LoginNav/>
        <Row>
        <Col md='12' className='header_dash1'><h3 className='dash-write'> <strong>Get Your Dream Career Coming To Your Door Step...</strong> </h3></Col>
         </Row>
        <Container>
            <h2 className='SubTitile'><strong>User Related Jobs:</strong></h2>
           <Row>
           { RelJobs && RelJobs.length > 0 ?(
            RelJobs.map(jobs=>{
                return(
                    <Col md="3" className="home-latest-jobs" key={jobs}>
                    <Card body>
                      <CardTitle>{jobs.jobTitle}</CardTitle>
                      <CardText>{jobs.state}</CardText>
                     <Link to={`/Explore/${jobs._id}`}><Button color="success">Apply Now</Button></Link> 
                    </Card>
                  </Col>
                )
            })
           ) : (
               <div>Related Job Not Available</div>
           )} 
            </Row> 
         </Container>
           <Footer className='foot'/>
        </Container>
    )
}
}

export  default Dashboard;