import React, {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './Navbar.css';

let Sidebar = (props) => {
  return (
    <div style={{
      boxSizing: 'box-border', 
      fontFamily: 'Verdana'}}>

      <nav style={{
        position: 'fixed', 
        marginTop: '65px',
        top: '0px',
        right: '0px',
        width: '250px',
        height: '100%',
        backgroundColor: '#f9f9f9'
        }}>
          <h3 className='text-center' style={{
            margin: '10px',
            paddingBottom: '10px',
            borderBottom: '1px solid black'
          }}>Contacts</h3>
          <Form inline style={{
            paddingRight: '15px',
            paddingLeft: '15px',
            paddingBottom: '15px',
            paddingTop: '5px'
          }}>
            <FormControl type="text" placeholder="Search" id="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
      </nav>
    </div>
  )
}

export default Sidebar;
