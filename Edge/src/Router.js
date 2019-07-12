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
import TherealHawkPub from './Hawker/therealHawkPub';
import HawkPub from './Hawker/HawkPub';
import laksa from './assets/laksa2.jpg';
import Panel from './Panel.js';
import Transaction from './Transaction';
import Invest from './Invest'
let PageRouter = (props) => {

    let mainSocket = io('localhost:8080')
    
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
            </Navbar.Collapse>
          </Navbar>
          
          <Route path='/' exact component={HawkPage} stylesheet="Hawker"/>
          <Route path='/HawkPage' component={HawkPage} stylesheet="Hawker"/>
          <Route path='/InvestPage' component={InvestPage} stylesheet="Investor"/>
          <Route path='/HawkOpp' component={HawkOpp} stylesheet="HawkOpp"/>
          <Route path='/InvestProf' component={InvestProf} stylesheet="InvestProf"/>
          <Route path='/TherealHawkPub' component={TherealHawkPub} stylesheet="TherealHawkPub"/>
          <Route path='/InvestOpp' render={(props)=><InvestOpp {...props} hawkerstalls={[{name: 'Lorem Ipsum', pic: laksa, hdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.', link: './therealHawkPub' }, {name: 'Amet Consectetur', pic: laksa, hdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.', link: null }, {name: 'Adipisicing Elit', pic: laksa, hdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.', link: null}, {name: 'Delectus Ipsam', pic: laksa, hdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.', link: null}, {name: 'Voluptate Inventore', pic: laksa, hdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.', link: null}]}/>} stylesheet="InvestOpp"/>
          <Route path='/HawkPub' component={HawkPub} stylesheet="HawkPub"/>
          <Route path="/Transaction" component={Transaction} stylesheet="Transaction"/>
          <Route path="/Invest" component={Invest} stylesheet="Invest"/>
          {/* <Route path='/testup' render={(props)=><Testup {...props} people={[{first: 'Sarah', last: 'Johnson', age: 25, id: 'a1'}, { first: 'Caldwell', last: 'Thompson', age: 32, id: 'b2'}, { first: 'Hart', last: 'Maynard', age: 12, id: 'c3'}, { first: 'Demetrius', last: 'McGregor', age: 55, id: 'd4'} ]} />} stylesheet="testup"/> */}
        
          </div>
        </Router>
        
    
    )
  }

  export default PageRouter;