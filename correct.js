import React ,{Component}from 'react';
import './explore.css';
import searchDropDown from '../../components/searchDropDown/searchDropDown';
import { Container, Row, Col } from "reactstrap";
import LoginNavBar from "../../components/loginNav/loginNav";
import Footer from "../../components/footer/footer";
import RelatedList from "../../components/relatedList/relatedList";
import JobDetails from '../jobDetails/jobDetails';
import Axios from "axios";
import {
    
    Input,
    Button,
   
  } from "reactstrap";
class  Explore extends Component {
 state = {
    details:[],
    allJobs:[]
 }  
 
componentDidMount (){
    console.log(222)
  this.getDetail();
  this.relatedJobs();
}

componentDidUpdate (prev){

    if(this.props.match.params.id !== prev.match.params.id ){
        console.log(333)
      this.getDetail();
      this.relatedJobs();
    }
}
getDetail = ()=>{
    const jobParams = this.props.match.params.id
Axios.get(`http://localhost:5000/jobs/searchView/${jobParams}`).then(res =>{
    console.log(res)
    this.setState({
        details:res.data.message
    })
console.log(JobDetails)
})
}
relatedJobs = ()=>{
    Axios.get("http://localhost:5000/jobs/").then(resp =>{
   console.log(resp)
        this.setState({
            allJobs:resp.data.message
        })
    })
}
render(){ 
    const {details} = this.state; 
    console.log(this.props.match.params.id)
    return(
        
        details.map(value=>{
           return(
             <Container fluid={true}>
        <LoginNavBar/>
        <Row>
        <Col md='12' className='detailStyle'>
        <h1 className='title'><strong>JOB DETAILS</strong></h1>
        </Col>
        </Row>
        <Container>
            <Row className='rowDetail'>
            <Col md='7' className='detailRow' >
            <h4 className='jobDetailTItle'>{value.jobTitle}</h4>
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Company Name :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.companyName}</p>

            </Col>
            </Row>
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Company Details :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.companyDetails}</p>

            </Col>
            </Row>
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Job Location :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.state}</p>

            </Col>
            </Row>
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Job Qualification :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.academicQualification}</p>

            </Col>
            </Row>
            
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Job Description :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.jobDescription}</p>

            </Col>
            </Row>
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Work Experience  :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.yearOfExperience}</p>

            </Col>
            </Row>
            <Row>
            <Col md='4'>
            <p className='titleStyle'>Job Salary Range :</p>

            </Col>
            <Col md='6'>
            <p className='titleStyle'>{value.salaryRange}</p>
            <Button color="success" className='register-button'>Apply Now</Button>

            </Col>
            </Row>

            </Col>
            <Col md='5'  className='detailRow'>
            <h4 className='jobDetailTItle'>Related Jobs:</h4>
            <RelatedList  JobList = {this.state.allJobs} className='joblist'/>

            </Col>
            </Row>
        </Container>
        <Footer/>
        </Container>
           ) 
        })
       
    
    )
}
}









export default Explore