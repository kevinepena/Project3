import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    const loggedIn = this.props.auth.isAuthenticated();
    const canWrite = this.props.auth.userHasScopes(["write:blog"]);
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={require("./coaNicaragua.png")} id="navimg" width="30" height="30" alt=""/>
  <Link className="navbar-brand" to="/">
    Nicaragua
  </Link>
  <button
    className="navbar-toggler"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>


  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/forum">Forum</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/photos">Photos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/donations"><strong>Donate</strong></Link>
      </li>
      {!loggedIn ? (<li className="nav-item nav-link" 
           onClick={this.props.auth.login}>Log In</li>
        ) : (
          <li className="nav-item nav-link"  onClick={this.props.auth.logout}>Log Off</li>
        )}

        {/* <Link to="/">Home&nbsp;</Link>  */}

        {loggedIn && canWrite ? (
          <Link to="/createpost">Create a Post&nbsp;</Link>
        ) : (
          ""
        )}
        {loggedIn ? <li className="nav-item"> <Link className="nav-link" to="/profile">Profile&nbsp;</Link> </li> : ""}

    </ul>
  </div>
</nav>
    )};
  } 
   
  export default Nav;
