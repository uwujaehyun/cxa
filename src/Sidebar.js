import React, { useState, useEffect } from 'react';
import './Sidebar.css';

let Sidebar = (props) => {
    return (
      <div className='container-fluid' id='sideapp'>
      {/* <!-- SideNav slide-out button --> */}
        <a href="#" data-activates="slide-out" className="btn btn-primary p-3 button-collapse"><i
            className="fas fa-bars"></i></a>
  
        {/* <!-- Sidebar navigation --> */}
        <div id="slide-out" className="side-nav fixed">
          <ul className="custom-scrollbar">
            {/* <!-- Logo --> */}
            {/* <li>
              <div className="logo-wrapper waves-light">
                <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                    className="img-fluid flex-center"></a>
              </div>
            </li> */}
            {/*<!--Search Form--> */}

              <form className="search-form" role="search">
                <div className="form-group md-form mt-0 pt-1 waves-light">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
              </form>

            {/* <!--/.Search Form-->
            <!-- Side navigation links --> */}
            <li>
              <ul className="collapsible collapsible-accordion">
                <li><a className="collapsible-header waves-effect arrow-r"><i className="fas fa-chevron-right"></i>Chat<i className="fas fa-angle-down rotate-icon"></i></a>
                  <div className="collapsible-body">
                    <ul>
                      <li><a href="#" className="waves-effect">Hawkers</a>
                      </li>
                      <li><a href="#" className="waves-effect">Investors</a>
                      <li><a href="#">Mentors</a></li>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            {/* <!--/. Side navigation links --> */}
          </ul>
          <div className="sidenav-bg rgba-blue-strong"></div>
        </div>
        {/* <!--/. Sidebar navigation --> */}
      </div>
    )
  }

  export default Sidebar;