import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import './modal.css'
import Axios from 'axios';
// import Validator from 'validator';

class Modals extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          users:{
            email:'',
            password:''
          },
          userId:[],
          message:'',
          error:'',
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

        let {email, password} = this.state

        let users = {email: email, password: password}

        console.log(users)
      Axios.post('http://localhost:5000/users/login', users)
      .then(res =>{
        console.log(res);
        if (res.data.message == 'Username or Password is Incorrect !!'){
          this.setState({
            message: res.data.message
            
          })
        }else if(res.data.message == 'Please complete your account verification before loggin in'){
          this.props.history.push('/Verify');
        }else if(res.data.message == 'You Are logged in as Job seeker'){
          console.log('i just route you idiot') 
          this.setState({
            message: res.data.message,
            
            
          })
          sessionStorage.setItem('user', res.data.token._id)
          this.props.history.push('/Dashboard');
          console.log(this.props)

        }else if(res.data.message == 'You Are logged in as Employer'){
          
          this.props.history.push('/JobDetails');
        }else{
          this.setState({
            error:'Please check your inputs correctly '
          })
        }
        
      })
    }
      
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        const { text } = this.props;
        let {message,error} = this.state;
        return(
            <div>
        <Button color="default" onClick={this.toggle}>{text}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
        
          <Container className=''>
                <Row classname=''>
                  <Col md='12'>
                  <h4 className='login-text'><strong>User Login</strong></h4>
                        <Form className='login-form' onSubmit={this.handleSubmit}>
                        <div className='message-div'>{message}</div>
                         <div className='message-div'>{error}</div>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Insert Email"  value={this.state.email} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Insert password "  value={this.state.password} onChange={this.handleChange}/>
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

export default withRouter(Modals);