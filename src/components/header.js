import React from 'react';
import {authService} from './../services/login.service';
import { NavLink} from 'react-router-dom'
 export class Header extends React.Component{
 logoutAction=()=>{
        authService.logout()
     }
    render(){
        return <div class="ui secondary  menu">
        <div class="left menu">
            <NavLink to='/' exact className="item">Home</NavLink>  
        </div>
        <div class="left menu">
            <NavLink to='/users' className="item">User Listing</NavLink>  
        </div>
        <div class="right menu">
           <a className="item" href="#" onClick={this.logoutAction}>Logout</a>  
           </div>
         </div>
    } 
}