import React, { Component } from 'react';
import {Container , Row, Col} from 'reactstrap';
import NavBar from '../../components/navbar/navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './verifyPage.css';
import Axios from 'axios'
class verifyPage extends Component{
    state = {
        email:'',
        verifyCode:'',
        message: '',
        error:''
    }

    handleChange = (event) =>{
        this.setState({
        //   verify: {...this.state.verify,[event.target.name]: event.target.value}

        [event.target.id]: event.target.value
        });
      };

      handleSubmit = (e) =>{
          e.preventDefault()

          let {email, verifyCode} = this.state

          let verify = {email: email, statusCode: verifyCode}

          console.log(verify)
        Axios.post('http://localhost:5000/users/verify', verify)
        .then(res =>{
          console.log(res);
          this.setState({
            message: res.data.message
          })
          if(res.data.message == 'Sorry such email has not yet been registered!!!'){
            console.log(this.props)
            this.props.history.push('/')
          }else if(res.data.message == 'Sorry Your Account has already been comfirmed!!'){
            this.setState({
              message: res.data.message
            })
          }else if(res.data.message == 'Sorry Your Account has already been comfirmed!!'){
            this.setState({
              message: res.data.message
            })
          }else if(res.data.message == 'Sorry Code Inserted Does not match with the code sent to you!!'){
            this.setState({
              message: res.data.message
            }) 
          }else if(res.data.message == 'Account verification Successfull , please proceed to login!!'){
            this.setState({
              message: res.data.message
            }) 
          }else{
            this.setState({
              error:'Please check your inputs correctly '
            })
          }
        })
      }

    render(){
        let {message,error} = this.state
        return(
          <Container fluid={true}>
              <NavBar/>
              <Container>
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
        <Form onSubmit={this.handleSubmit}>
            <div className='message'>{message}</div>
            <div className='Error-message'>{error}</div>
        <FormGroup>
          <Label for="exampleEmail">Email  :</Label>
          <Input type="text" id="email"  placeholder="Insert Email  "  onChange={this.handleChange} />
        </FormGroup> 
        <FormGroup>
          <Label for="exampleEmail">Verification Code :</Label>
          <Input type="text" id="verifyCode"  placeholder="Insert Verify Code "  onChange={this.handleChange} />
        </FormGroup>    
        <Button>Submit</Button>
      </Form>
      </div>
     
                        </Col>
                    <Col md='3'></Col>
                </Row>
              </Container>
             
          </Container>
        )
    }
}
export default verifyPage;