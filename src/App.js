import React from 'react';
import {Login} from './components/login'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import  { configureFakeBackend} from'./util/mockBackend';
import {PrivateRoute} from './components/PrivateRoute'
import { HomePage } from './components/homePage';
import { UserList } from './components/usersList';

configureFakeBackend();
export class App extends React.Component {
  
  constructor(){
    super()
    console.log(localStorage.getItem('user'))
  }
  render(){
    return (
      <div className="ui container ">
        <Router>
          <div>
            <PrivateRoute exact path='/' component={HomePage}/>
            <PrivateRoute exact path='/users' component={UserList}/>
            <Route path='/login' component={Login}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
