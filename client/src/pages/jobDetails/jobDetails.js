import React, { Component } from 'react';
import './jobDetails.css';
import {Container , Row, Col} from 'reactstrap';
import NavBar from '../../components/navbar/navbar';
import { Button, Form} from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import Footer from '../../components/footer/footer';



class JobDetails extends Component{
    render(){
        return(
            <Container fluid={true}>
                
                <NavBar/>
                
                <Row>
                    <Col md='12'  className='detail-image' >
                    <h1 className='detail-image-h'><b>WELCOME TO WORKHUB</b></h1>
                        </Col>
                </Row>
                <Container className='main-cont'>
                <Row>
                    <Col md='7' className='detail-row'><h4 className='job-detail-title'>Accountant needed at LG emene, Nigeria</h4>
                    <i class="fa fa-map-marker">    &nbsp; Nigeria</i><br/>
                    <i class="fa fa-money">   Salary  : 20,000 - 60,000</i><br/>
                    <i class="fa fa-graduation-cap">   Course Required  : Bsc Accounting</i><br/>
                    <i class="fa fa-calendar">   Years of Experience Required  : 5</i><br/>
                    <i class="fa  fa-free-code-camp">   Company Name : LG Nigeria</i><br/>
                    <Form className='jobDetail-form'>
                    <Button color="success">Apply Now</Button>{' '}
                    </Form>
                    <h4>Job Description:</h4>
                    <p>the person will be an accountant with full knowledge of all accounting skills and will also be ready
                         to beer all the necessary cost in the business as at when due.</p>
                    </Col>
                    <Col md='5'></Col>
                </Row>
                <Row>
                    <Col md='12' className='detail-row'>
                    <h4>More Jobs</h4>
                    <Row>
                    <Col sm="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="success">Apply Now</Button>{' '}
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="success">Apply Now</Button>{' '}
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="success">Apply Now</Button>{' '}
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="success">Apply Now</Button>{' '}
        </Card>
      </Col>
                    </Row>
                    </Col>
                </Row>
                </Container>
                <Row>
                <Footer/>
                </Row> 
            </Container>
            
         
              
        )
    }
}











export default JobDetails