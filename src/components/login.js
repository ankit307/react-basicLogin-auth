import React from 'react';
import {authService} from './../services/login.service'

export class Login extends React.Component{
    constructor(){
      super()
      this.state={
        username:'',
        password:'',
        submitted:false,
        loading:false,
        error:'',
      }
      authService.logout()
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange(e){
      const { name , value}=e.target;
      this.setState({
        [name]:value
      })
    }
    handleSubmit(e){
        e.preventDefault();
       const { username,password} =this.state
        console.log(e.target.username.value);
        if(!(username && password))
          return;
        authService.login(username,password)
        .then(
          user=>{
            console.log(user)
            console.log(this.props.location.state.from);
            const { from } =this.props.location.state || { from:{ pathname:"/"}};
            this.setState({
              error:''
            })
            this.props.history.push(from);
          }
        ).catch(error=>{ 
        this.setState({
          error
        })
        })
      }
    render(){
        return <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Username" onChange={this.handleChange} required name="username" />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input type="password" name="password" placeholder="password" required onChange={this.handleChange} />
                  <i className="lock icon"></i>
                </div>
              </div>
              {this.state.error!=='' && <div className='ui red message'> {this.state.error}</div>}
             
              <button className="ui blue submit button" >Login</button>
            </form>
          </div>
        </div>
        <div className='ui info message'> UserName: test Password:test</div>
      </div>
    }
}