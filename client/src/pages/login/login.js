import React, { Component } from 'react';
import './login.css';
import {Container , Row, Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Login extends Component{
    render(){
        return(
            <Container className='login-container'>
                <Row classname='login-wrapper'>
                    <Col md='3'></Col>
                    <Col md='6'><Row>
                        <Col md='4'></Col>
                        <Col md='4'>
                        <h4 className='headNav'><strong></strong></h4>
                        </Col>
                        <Col md='4'></Col>
                        </Row>
                        <div className='login-div'>
                        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Insert Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Insert password " />
        </FormGroup>
    
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Remember me
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
     
                        </Col>
                    <Col md='3'></Col>
                </Row>
            </Container>
        )
    }
}









export default Login