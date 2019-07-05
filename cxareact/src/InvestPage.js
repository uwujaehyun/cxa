import React, {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Jumbotron } from 'react-bootstrap';
import './InvestNav.css';
import HawkerJumbotron from './HawkerJumbotron.js'
import Contacts from './Contacts'
import laksa from "./assets/laksa2.jpg"
import HawkTabs from './Tabs.js'

let HawkPage = (props) => {
  return (
    <div id="App" style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6'}}>
     
      
      <Navbar bg="#009a7a" expand="lg" id="hawker-nav" style={{ position: 'fixed', width: '100%'}}>
        <Navbar.Brand id="hawker-title" href="#home">Edge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="mr-auto">
            <Nav.Link id="hawker-home" href="#home">Home</Nav.Link>
            <NavDropdown title="Change User" id="basic-nav-dropdown">
              <NavDropdown.Item id="hawker-action" href="./HawkPage.js">
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="hawker-seplink" href="#">Investor
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className='ml-auto' style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <FormControl type="text" placeholder="Search" id="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>
      <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
      <HawkerJumbotron comname='Hello World' 
      profilepic={laksa}
      bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>
      <main style={{paddingRight: '250px'}}>
      </main>
      </div>
      </div>
    </div>
  
  )
}

export default HawkPage;
