import React, { useState, useEffect } from 'react';
import './Navbar.css';

let Navbar = (props) => {
    return (
      // Make navbar color change when user switches to different path
      <nav className="navbar navbar-expand-lg" id="hawker-nav">
        <a className="navbar-brand" href="#" style={{color: '#d8d8d8'}}>Edge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.user}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <a class="dropdown-item nav-link" href={{props.otheruser}.toString() + '.js'}>{props.otheruser}</a> */}
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Mentor</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Customer</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }

  export default Navbar;