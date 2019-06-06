import React from 'react';
import axios from 'axios';
import {Header} from './header';

export class UserList extends React.Component{
    constructor(props) {
     super(props)
        this.state={
            users:[]
        }
    }

 async componentDidMount(){
   const URL="https://jsonplaceholder.typicode.com";
    let instance = axios.create({
        baseURL: URL,
        params:{}
      });
    let response=await instance.get('/users',{
        params:{
       _page:1
        }
    })
    this.setState({
        users:response.data 
    });
  }

  render(){
    let userListData=this.state.users.map((item)=>{
        return <tr>
        <td data-label="Id">{item.id}</td>
        <td data-label="Name">{item.name}</td>
        <td data-label="Email">{item.email}</td>
        <td data-label="Phone">{item.phone}</td>
        <td data-label="UserName">{item.username}</td>
        <td data-label="Website">{item.website}</td>
      </tr>
    })
   return  <div>
       <Header/>
       <table className="ui celled table">
    <thead>
      <tr>
      <th>Id</th>
     <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>User Name</th>
      <th>Website</th>
    </tr></thead>
    <tbody>
        {userListData}
     </tbody>
  </table>
       </div>
  }   
}