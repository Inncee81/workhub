import React from 'react';
import {BrowserRouter, Route,  Switch } from 'react-router-dom';
import Home from '../src/pages/home/home';
import  About from '../src/pages/about/about';
import Profile from '../src/pages/profile/profile';
import Explore from '../src/pages/explore/explore';
import Signup from '../src/pages/signup/signup';
import Login from '../src/pages/login/login';
import JobDetails from '../src/pages/jobDetails/jobDetails';

const Router =()=>{
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/About' component={About}/>
                <Route path='/Profile' component={Profile}/>
                <Route path='/Explore' component={Explore}/>
                <Route path='/Signup' component={Signup}/>
                <Route path='/Login' component={Login}/>
                <Route path='/JobDetails' component={JobDetails}/>


            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
