import React, { Component } from 'react';
import './login.css';
import {Container , Row, Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios'
class Login extends Component{

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
          const user = {
            userToken: res.data.currentUser.userToken,
            token: res.data.token
          }
          sessionStorage.setItem('user', JSON.stringify(user))
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
      
    render(){
        let {message,error} = this.state;
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
                            <h3>Login</h3>
                        <Form  onSubmit={this.handleSubmit}>
                        <div className='message-div'>{message}</div>
                      <div className='message-div'>{error}</div>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Insert Email"  value={this.state.email} onChange={this.handleChange} />
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