import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Project 3: <em>Name Coming Soon</em>
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
        <ul className="navbar-nav">
         
          <li className="nav-item">
            <Link className="nav-link" to="/forum">Forum</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/photos">Photos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/donations">Donations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  export default Nav;
