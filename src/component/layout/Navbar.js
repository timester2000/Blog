import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="row">
          <div className="col md-6">
            <Link className="navbar-brand" style={{color:'red'}} to="/">
            <i className="fas fa-home">Home</i></Link>
          </div>
            <div className="col md-6">
            <div className="col md-8">             
            <Link className="navbar-brand" to="/about">About</Link>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col mx-2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <i className="fas fa-lock">Login</i>
                  </Link>
                </li>
                </ul>
                </div>
          <div className="col mx-2">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/singUp" className="nav-link">
                      <i className="fas fa-unlock">SingUp</i>
                    </Link>
                  </li>
                  </ul>
                  </div>
                </div>
                
      </nav>
    )
  }
}

export default Navbar