import React from 'react';
import {Link} from 'react-router-dom';
import './relatedList.css';

const RelatedList = ({JobList})=>{
    console.log(JobList)
    if( Array.isArray(JobList)){
        return (
    
            JobList.map(value => {
                return (
                    <div className=''>
                    <Link to={`/Explore/${value._id}`} className='list'>{value.jobTitle}</Link>
                    </div>
                   
                )
            })
            
        )
    }else{
        return (
            <div>
                {JobList.message}
            </div>
        )
    }
}

export default RelatedList;