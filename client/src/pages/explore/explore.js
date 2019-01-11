import React ,{Component}from 'react';
import './explore.css';
import searchDropDown from '../../components/searchDropDown/searchDropDown';
import { Container, Row, Col } from "reactstrap";
import LoginNavBar from "../../components/loginNav/loginNav";
import Footer from "../../components/footer/footer";
import RelatedList from "../../components/relatedList/relatedList";
import JobComponent from "../../components/jobcomponent/jobcomponent";
import JobDetails from '../jobDetails/jobDetails';
import AlertModal from '../../components/alertModal/alertModal';
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

applyjob =()=>{
    const apply = {
        id: this.state.details[0]._id,
        user: JSON.parse(sessionStorage.getItem('user')).userToken
    }
    

console.log(apply)
    Axios.post(`http://localhost:5000/users/apply`, apply ).then(res => {
        alert(res.data.message)
        //console.log(res)
      
    })
}



render(){ 
    const {details} = this.state; 
    console.log(this.props.match.params.id)
    return(
        
        details.map(value=>{

            
            let arr = [['Company Name', value.companyName],['Company Details',value.companyDetails],['Job Location', value.state],['Job Qualification',value.academicQualification]
            ,['Job Description',value.jobDescription],['Work Experience',value.yearOfExperience],['Job Salary Range',value.salaryRange],[]]

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
                            
                            {arr.map( el => <div><JobComponent title={el[0]} value={el[1]}/></div>)}
                            <form  >
                            <Button onClick={this.applyjob} color="success" className='register-button'>Apply Now</Button>
                            </form>

                            </Col>
                            <Col md='5'  className='detailRowx'>
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