import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import './signup.css'
import Axios from 'axios';
import Validator from 'validator';

class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          users:{
            firstname:'',
            lastname:'',
            email:'',
            status:'',
            password:'',
            password2: '',
            message:'',
            },
          userId:[],
          error: ''
        };
    
        this.toggle = this.toggle.bind(this);
      }
     

      handleChange = (event) =>{
        this.setState({
        //   verify: {...this.state.verify,[event.target.name]: event.target.value}

        [event.target.id]: event.target.value
        });
      };
      handleSubmit = (e) =>{
        e.preventDefault()

        let {firstname,lastname,email,status, password} = this.state

        let users = {firstname:firstname,lastname:lastname,email: email,status:status, password: password}

        console.log(users)
        let {password2} = this.state
        if(password == password2){
            Axios.post('http://localhost:5000/users/create', users)
      .then(res =>{
        console.log(res);

        this.setState({
          message: res.data.message
          
        })
      })
        } else {
            console.log(this.state.error)
            this.setState({
                error: 'password don\'t match'
            })
            
        }
      
    }
      
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        let {message, error} = this.state
        const { Signup } 
        = this.props;
        return(
            <div>
        <Button color="default" onClick={this.toggle}>{Signup}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
        
          <Container className=''>
                <Row classname=''>
                  <Col md='12'>

                  <h4 className='login-text'><strong>User Registration</strong></h4>
                  <div className='alert-div'>{message}</div>
         <Form className='login-form' onSubmit={this.handleSubmit}>
         <FormGroup>
          <Label for="Firstname">Surname  :</Label>
          <Input type="text" id="firstname"  placeholder=" Surname  "  onChange={this.handleChange} />
        </FormGroup> 
        <FormGroup>
          <Label for="Lastname">Other-Names  :</Label>
          <Input type="text" id="lastname"  placeholder="Other-Names"  onChange={this.handleChange} />
        </FormGroup> 
        <FormGroup>
          <Label for="exampleEmail">Email  :</Label>
          <Input type="text" id="email"  placeholder="Insert Email  "  onChange={this.handleChange} />
        </FormGroup> 
        <FormGroup>
          <Label for="status">Select you Status</Label>
          <Input type="select" name="status" id="status" onChange={this.handleChange}>
          {/* <selected value='Select you Status'>Select you Status</selected> */}
          <option></option>
          <option>Employer</option>
            <option>Job Seeker </option>
          </Input>
        </FormGroup> 
        <FormGroup>
          <Label for="exampleEmail">Password :</Label>
          <Input type="password" id="password"  placeholder="Insert Password "  onChange={this.handleChange} />
        </FormGroup>  
        <FormGroup>
          <Label for="password2">Verify password :</Label>
          <Input type="password" id="password2"  placeholder="verify Password "  onChange={this.handleChange} />
        </FormGroup>  
        <div>{error}</div> 
        <Button value='submit' type='submit'>Submit</Button>
      </Form>
                </Col>    
                </Row>
            </Container>
        </Modal>
      </div>
        )
    }
}

export default Signup;