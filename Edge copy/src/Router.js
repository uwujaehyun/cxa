import React, {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './Navbar.css';
import HawkPage from "./Hawker/HawkPage";
import InvestPage from './Investor/InvestPage';
import InvestOpp from './Investor/InvestOpp';
import io from 'socket.io-client';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HawkOpp from './Hawker/HawkOpp';
import InvestProf from './Investor/InvestProf';
import therealHawkPub from './Hawker/therealHawkPub';
import HawkPub from './Hawker/HawkPub';


let PageRouter = (props) => {

    let mainSocket = io('http://192.168.1.14.:8080')
    
    // let [userState , setUserState] = useState("Hawker")
    


    
  
    
    return (
       
        <Router>
            <div>
        
          <Navbar expand="lg" id="hawker-nav" style={ { position: 'fixed', width: '100%', zIndex:500} }>
            <Navbar.Brand id="hawker-title"><Link to='/' className='nav-link' style={{
              color: '#313131'
            }}>Uplift</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="mr-auto">
                <Nav.Link id="hawker-home" ><Link to={'./HawkPage'} className={'nav-link'}>Home</Link></Nav.Link>
                <NavDropdown title="Change User" id="basic-nav-dropdown">
                  <NavDropdown.Item id="hawker-action"><Link to={'./InvestPage'} className={'nav-link'}>Investor</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item id="hawker-seplink"><Link to={'./HawkPage'} className={'nav-link'}>Hawker</Link></NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Form inline className='ml-auto' style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <FormControl type="text" placeholder="Search" id="mr-sm-2" />
                <Button variant="outline-light" onClick={(() => {

                })}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          {/* <div> */}
          <Route path='/' exact component={HawkPage} stylesheet="Hawker"/>
          <Route path='/HawkPage' component={HawkPage} stylesheet="Hawker"/>
          <Route path='/InvestPage' component={InvestPage} stylesheet="Investor"/>
          <Route path='/HawkOpp' component={HawkOpp} stylesheet="HawkOpp"/>
          <Route path='/InvestProf' component={InvestProf} stylesheet="InvestProf"/>
          <Route path='/therealHawkPub' component={therealHawkPub} stylesheet="therealHawkPub"/>
          <Route path='/InvestOpp' component={InvestOpp} stylesheet="InvestOpp"/>
          <Route path='/HawkPub' component={HawkPub} stylesheet="HawkPub"/>
          {/* </div> */}
          </div>
        </Router>
        
    
    )
  }

  export default PageRouter;