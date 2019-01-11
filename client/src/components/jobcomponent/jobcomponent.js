import React from 'react';
import { Container, Row, Col } from "reactstrap";

const JobComponent = ({title, value})=>{
    
        return (

               <Row>
            <Col md='4'>
            <p className='titleStyle'> {title} :</p>
            </Col>
            <Col md='6'>
            <p className='titleStyle'> {value} </p>

            </Col>
            </Row>
         
        );
    
}
 export default JobComponent;