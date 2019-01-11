import React from 'react';
import './searchDropDown.css';
import {Link} from 'react-router-dom'



const searchDropDown  = ({SearchProp})=>{
    
    console.log(SearchProp)
    if( Array.isArray(SearchProp)){
        return (
    
            SearchProp.map(value => {
                return (
                    
                    <div className='search_divx'>

                    <Link to={`/Explore/${value._id}`}>{value.jobTitle}</Link>
                    </div>
                   
                )
            })
            
        )
    }else{
        return (
            <div>
                {SearchProp.message}
            </div>
        )
    }


}

export default searchDropDown;