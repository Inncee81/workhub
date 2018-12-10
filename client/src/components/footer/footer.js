import React, { Component } from 'react';
import './footer.css';
import {Container , Row, Col} from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Row className='footer-row'>
                <Col md='1' className='col-tag'><p className='head-tag'><b></b></p> </Col>
                <Col md='4' className='col-tag'><p className='head-tag'><b>About Workhub.com</b></p>
                <p className='footer-writeup'>
                Workhub is part of Media24; and member of the Naspers group.
                Known as one of the leading job portals in Nigeria, Workhub 
                brings two groups of people together - the job seeker and the recruiter.
                We provide job seekers with thousands of vacancies that are posted by hundreds 
                of registered recruiters and employers. For top jobs and top candidates - 
                join Workhub.com now. 
                </p>
                 </Col>
                <Col md='2' className='col-tag'>
                <ul  className='head-tag'>
                <p className='head-tag'><b>Company</b></p>
                    <li className='li'>
                    Contact-Us
                    </li>
                    <li className='li'>
                    Advertise With-Us
                    </li>
                </ul>
                 </Col>
                <Col md='2' className='col-tag'>
                <ul  className='head-tag'>
                <p className='head-tag'><b>Quick-link</b></p>
                    <li className='li'>
                    Mobile 
                    </li>
                    <li className='li'>
                    Admin-Recruiter 
                    </li>
                    <li className='li'>
                    Search
                    </li>
                    </ul>
               
                       </Col>
                <Col md='2' className='col-tag'>
                <ul  className='head-tag'>
                <p className='head-tag'><b>Follow-Us</b></p>
                    <li className='li'>
                    Mobile 
                    </li>
                    <li className='li'>
                    Admin-Recruiter 
                    </li>
                    <li className='li'>
                    Search
                    </li>
                    </ul>
                 </Col>
                 <Col md='1' className='col-tag'>
                  
                 </Col>
                </Row>
            </Container>
        )
    }
}
export default Footer;