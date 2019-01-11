import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import propTypes from 'prop-types';

const UserAuth =({component:Component,...rest})=>(
<Route
{...rest}
render ={props =>

sessionStorage.getItem('user')?<Component {...props}/>: <Redirect to="/login"  />

}
/>
);

UserAuth.propTypes = {
    component:propTypes.func.isRequired
}
export default UserAuth;