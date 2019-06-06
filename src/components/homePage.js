import React from 'react';
import {authService} from './../services/login.service';
import { Header} from './header';

export class HomePage extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    async componentDidMount(){
       const users= await authService.getAll()
       console.log(users) 
       this.setState({
        users
        })
    }

    render(){
        let userList=this.state.users.map((item,index)=>{
            return <div className='item' key={index}> <div className="content"> <div className="header">{item.username}</div> </div>  </div>
        })
        return <div className="ui container">
           <Header/>
            <div className="ui items"> {userList}</div>
        </div>
    }
}