import React, {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import Sidebar from './Sidebar.js'
import './Navbar.css';

let App = (props) => {
  return (
    <div style={{boxSizing: 'border-box', fontFamily: 'Verdana'}}>
      <Navbar bg="#009a7a" expand="lg" id="hawker-nav" style={{height: '65px'}}>
        <Navbar.Brand id="hawker-title" href="#home">Edge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="mr-auto">
            <Nav.Link id="hawker-home" href="#home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item id="hawker-action" href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item id="hawker-anoaction" href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item id="hawker-something" href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="hawker-seplink" href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search" id="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Sidebar></Sidebar>
      <main style={{paddingRight: '250px'}}></main>
    </div>
  )
}

export default App;
