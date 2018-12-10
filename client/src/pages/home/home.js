import React, { Component } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardTitle, 
    CardText,
    Card
   } from 'reactstrap';
import './home.css';
import {Container , Row, Col} from 'reactstrap';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Axios from 'axios'
class Home extends Component{

    constructor(props) {
        super(props);
        // state = {jobs:[]}
        
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        // this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
          dropdownOpen: false,
          jobs: []
        //   splitButtonOpen: false
        };
      }
      componentDidMount(){
          Axios.get('http://localhost:5000/jobs/')
          .then(res => {
              console.log(res)
            this.setState({
                jobs: res.data.message
            })
          })
          
          
      }
    
      toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
    //   toggleSplit() {
    //     this.setState({
    //       splitButtonOpen: !this.state.splitButtonOpen
    //     });
    //   }

      
    render(){
        let {jobs} = this.state;
        console.log(this.state.jobs)
        return(
           <Container fluid={true}>
               <NavBar/>
              
               <Row id='home-top'>
               <Col id='home-top-part'>
               <Row id='home-top-row'>
                   <Col></Col>
                   <Col><h1>Search For Jobs</h1></Col>
                   <Col></Col>
               </Row>
               <Row id='home-mid-row'>
                    <Col md='2'></Col>
                   <Col md='4'>
                        <InputGroup>
                            {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
                            <Input placeholder="search for jobs" />
                        </InputGroup>
                   </Col>
                    <Col md='4'>
                        <InputGroup>
                            <Input />
                                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                <DropdownToggle caret color='success'>
                                    Places
                                </DropdownToggle>
                                <DropdownMenu id='home-place-dropdown'>
                                    <DropdownItem>Abia</DropdownItem>
                                    <DropdownItem>Adamawa</DropdownItem>
                                    <DropdownItem>Akwa Ibom</DropdownItem>
                                    <DropdownItem>Anambra</DropdownItem>
                                    <DropdownItem>Bauchi</DropdownItem>
                                    <DropdownItem>Bayelsa</DropdownItem>
                                    <DropdownItem>Benue</DropdownItem>
                                    <DropdownItem>Borno</DropdownItem>
                                    <DropdownItem>Cross River</DropdownItem>
                                    <DropdownItem>Delta</DropdownItem>
                                    <DropdownItem>Ebonyi</DropdownItem>
                                    <DropdownItem>Enugu</DropdownItem>
                                    <DropdownItem>Edo</DropdownItem>
                                    <DropdownItem>Ekiti</DropdownItem>
                                    <DropdownItem>Gombe</DropdownItem>
                                    <DropdownItem>Imo</DropdownItem>
                                    <DropdownItem>Jigawa</DropdownItem>
                                    <DropdownItem>Kaduna</DropdownItem>
                                    <DropdownItem>Kano</DropdownItem>
                                    <DropdownItem>Katsina</DropdownItem>
                                    <DropdownItem>Kebbi</DropdownItem>
                                    <DropdownItem>Kogi</DropdownItem>
                                    <DropdownItem>Kwara</DropdownItem>
                                    <DropdownItem>Lagos</DropdownItem>
                                    <DropdownItem>Nasarawa</DropdownItem>
                                    <DropdownItem>Niger</DropdownItem>
                                    <DropdownItem>Ogun</DropdownItem>
                                    <DropdownItem>Ondo</DropdownItem>
                                    <DropdownItem>Osun</DropdownItem>
                                    <DropdownItem>Oyo</DropdownItem>
                                    <DropdownItem>Plateau</DropdownItem>
                                    <DropdownItem>Rivers</DropdownItem>
                                    <DropdownItem>Sokoto</DropdownItem>
                                    <DropdownItem>Taraba</DropdownItem>
                                    <DropdownItem>Yobe</DropdownItem>
                                    <DropdownItem>Zamfara</DropdownItem>

                                </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Button id='home-top-btn' color='success'>Go</Button>
                        </InputGroup>
                    </Col>
                    <Col md='2'></Col>
               </Row>
               </Col>
               </Row>
               <Container>
               <Row className='home-row'>
               <Col md='12' id='home-latest-jobs-h3Col'><h3>Latest Jobs</h3></Col>
               </Row>
               <Row id='home-latest-jobs-cards'>
                   {
                       jobs &&
                       jobs.length > 0 ?
                        (
                            jobs.map(job => {
                                return (
                                    <Col md='3' className='home-latest-jobs' key={job}>
                                        <Card body>
                                            <CardTitle>{job.jobTitle}</CardTitle>
                                            <CardText>{job.state}</CardText>
                                            <Button color='success'>Apply Now</Button>
                                        </Card>
                                    </Col>
                                )
                            })
                        )
                        :
                        (<div>loading...</div>)
                   }
               </Row>
                   {/* <Row id='home-bottom-div'> */}
               
                   {/* </Row> */}
            
               <Row className='home-row' id='home-row-sub-div'>
                   <Col md='2'></Col>
                   <Col md='8' id='home-subscription-div'>
                        <Row>
                        <Col md='7' id='home-sud-txt-cover'>
                            <h3>Subscribe for latest job update</h3>
                            <Row><Button id='home-subscribe-btn' color='success'>Subscribe</Button></Row>
                        </Col>
                        <Col md='4'></Col>
                        </Row>
                   </Col>
                   <Col md='2'></Col>
               </Row>
               <Row >
                   <Col md='12' id='home-bottom-header'>
                        <h2>Browse jobs</h2>
                   </Col>
               </Row>
               <Row id='home-row-bottom'>
                   <Col md='3'>
                        <ul>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                        </ul>
                   </Col>
                   <Col md='3'>
                        <ul>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                        </ul>
                   </Col>
                   <Col md='3'>
                        <ul>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                        </ul>
                   </Col>
                   <Col md='3'>
                        <ul>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                            <li>Porn Vancy</li>
                        </ul>
                   </Col>
               </Row>
               </Container>
               <Footer/>
           </Container>
        )
    }
}









export default Home