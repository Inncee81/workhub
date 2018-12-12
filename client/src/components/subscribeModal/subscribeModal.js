import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import {Container , Row, Col} from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import './subscribeModal.css'


class SubscribeModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        const { subscribe } = this.props;
        return(
            <div>
        <Button color="success" onClick={this.toggle}>{subscribe}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
        
          <Container className=''>
                <Row classname=''>
                  <Col md='12'>
                  <h4 className='login-text'><strong>Insert Email </strong></h4>
                        <Form className='login-form'>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Insert Email" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
                </Col>    
                </Row>
            </Container>
        </Modal>
      </div>
        )
    }
}

export default SubscribeModal;