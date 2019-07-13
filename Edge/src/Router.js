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
import Invest from './Invest';
import sbkpic from './assets/sbkpic.jpg';
import JulPub from './Hawker/julhawkpub';
import banmian from './assets/banmian.jpg';
import prawnnoodles from './assets/prawnnoodles.jpg';
import rojak from './assets/rojak.jpg';

let PageRouter = (props) => {

    let mainSocket = io('http://10.143.74.5:8080')
    
    // let [userState , setUserState] = useState("Hawker")
    


    
  
    
    return (
       
        <Router>
            <div>
        
          <Navbar expand="lg" id="hawker-nav" style={ { position: 'fixed', width: '100%', zIndex:500} }>
            <Navbar.Brand id="hawker-title"><Link to='/' className='nav-link' style={{
              color: '#313131'
            }}>UpLift</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="mr-auto">
                <Nav.Link id="hawker-home"><Link to={'./HawkPage'} className={'nav-link'} style={{
                  color: '#b0b0b0'
                }}>Home</Link></Nav.Link>
                <NavDropdown id='raindrop' title="Change User" id="basic-nav-dropdown" style={{
                  marginTop: '8px', 
                  color: '#b0b0b0'
                }}>
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
          <Route path='/InvestOpp' render={(props)=><InvestOpp {...props} hawkerstalls={[{name: "Swee Boon Keat's Chicken Rice", pic: sbkpic, hdescription: "Delicious chicken rice for everyday life, here to brighten your day with a full stomach.", link: './therealHawkPub' }, {name: "Julianne's laksa", pic: laksa, hdescription: "Craving the burning feeling of chilli in the middle of the afternoon or after a long day of work? Julianne's Laksa is exactl what you need.", link: './julhawkpub' }, {name: "Lee's Banmian", pic: banmian, hdescription: 'Our carefully made banmian is made for you to enjoy everyday, no matter how you are feeling!', link: null}, {name: 'ECP Prawn Noodles', pic: prawnnoodles, hdescription: 'Each and every bowl of prawn noodles takes time to make, but we assure you, that each second waiting is worth it.', link: null}, {name: 'Sea Rd Rojak', pic: rojak, hdescription: 'Our rojak is not just delicious but exquisitely made, showing our love for our customers and hoping to make their day as many times as possible.', link: null}]}/>} stylesheet="InvestOpp"/>
          <Route path='/HawkPub' component={HawkPub} stylesheet="HawkPub"/>
          <Route path="/Transaction" component={Transaction} stylesheet="Transaction"/>
          <Route path="/Invest" component={Invest} stylesheet="Invest"/>
          <Route path="/julhawkpub" component={JulPub} stylesheet="JulPub"/>
          {/* <Route path='/testup' render={(props)=><Testup {...props} people={[{first: 'Sarah', last: 'Johnson', age: 25, id: 'a1'}, { first: 'Caldwell', last: 'Thompson', age: 32, id: 'b2'}, { first: 'Hart', last: 'Maynard', age: 12, id: 'c3'}, { first: 'Demetrius', last: 'McGregor', age: 55, id: 'd4'} ]} />} stylesheet="testup"/> */}
        
          </div>
        </Router>
        
    
    )
  }

  export default PageRouter;