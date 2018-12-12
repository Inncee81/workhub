import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import './modal.css'
import Axios from 'axios';
import Validator from 'validator';

class Modals extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          users:{
            email:'',
            password:''
          },
          userId:[]
        };
    
        this.toggle = this.toggle.bind(this);
      }
      handleChange = (event) =>{
        this.setState({
          users: {...this.state.users,[event.target.name]: event.target.value}
        });
      };

      submit = users =>{
        Axios.post('http://localhost:5000/users/login', users)
        .then(res =>{
          console.log(res);
          if(res.status === 200){
            alert(JSON.stringify(res.data.message));
            if(!alert(JSON.stringify(res.data.message))){window.location.reload();}
            sessionStorage.setItem();
            sessionStorage.setItem();
            sessionStorage.setItem();
          }
        })
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        const errors = this.validate(this.state.users);
        this.setState({loading: true});
        this.setState({errors});
        if(Object.keys(errors).length===0){
          this.submit(this.state.users)
        }
      };

      validate = (users) => {
        const errors = {};
        if (!Validator.isEmail(users.email)) errors.email = 'invalid Email';
        if (!users.password) errors.password = 'cant be blank';
        return errors;
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        const { text } = this.props;
        return(
            <div>
        <Button color="default" onClick={this.toggle}>{text}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
        
          <Container className=''>
                <Row classname=''>
                  <Col md='12'>
                  <h4 className='login-text'><strong>User Login</strong></h4>
                        <Form className='login-form' onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Insert Email"  value={this.state.email} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Insert password "  value={this.state.password} onChange={this.handleChange}/>
        </FormGroup>
    
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Remember me
          </Label>
        </FormGroup>
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

export default Modals;