import React, { Component } from 'react';
import './App.css';
import  Navbar from './component/layout/Navbar' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './component/posts/Posts'
import Login from './component/auth/Login';
import About from './component/page/About';
import Notfound from './component/page/Notfound';
import Post from './component/posts/Post';
import SingUp from './component/auth/SingUp';


class App extends Component {
    render(){
      return (
    <Router>
    <div className="App">
        <Navbar/>
          <div className="container">
              <Switch>
                <Route
                  exact
                  path = "/"
                  component = { Posts }
                />
                <Route
                  exact
                  path = "/login"
                  component = { Login }
                />
                  <Route
                  exact
                  path = "/about"
                  component = { About }
                />
                  <Route
                  exact
                  path = "/singup"
                  component = { SingUp }
                />                
                  <Route
                    exact
                    path = "/posts/:id"
                    component = { Post }
                  />
                <Route component = { Notfound }  />             
      </Switch>
      </div>
      </div> 
    </Router>
    
  );
}

}



export default App;
