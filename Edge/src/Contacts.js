import React, {useState, useEffect, Component} from 'react';
import { Navbar, Nav,NavItem, NavDropdown, Form, Button, FormControl, Collapse } from 'react-bootstrap';
// import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import { slide as Menu } from "react-burger-menu";
import './Contacts.css';

// import React from "react";

const contacts = [{
  name: 'Jerry', 
  id: 1
}, {
  name: 'Larry', 
  id: 2
}, {
  name: 'Barry', 
  id: 3
}]


 function Contacts ( props ) {

  let [contact, setContact] = useState(props.contact)

  let [term, setTerm] = useState('')

  let searchingFor = () => {
      return (x) => {
          return x.name.toLowerCase().includes(term.toLowerCase()) || !term
      }
  }

  let searchHandler = (e) => {
      setTerm(e.target.value)
 
  }

  return (
    // Pass on our props
    <Menu right {...props}>
      <nav  style={{
          position: 'fixed', 
          // marginTop: '65px',
          top: '0px',
          right: '0px',
          margin: 'auto',
          width: '18.7rem',
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
              <Button variant="outline-success">Search</Button>
            </Form>
            <ul key={contacts.id}>
              <button style={{
                width: '100%', 
                backgroundColor: '#f9f9f9', 
                borderRight: '0', 
                borderLeft: '0'
              }} id='firstbutton'>{contacts.name}</button>
            </ul>
        </nav>


     
    </Menu>
  );
};
 
export default Contacts;

// let SidebarAmended2 = (props) => {



//   return (
//     <div>
//     <div>
//       <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#sidebar" aria-expanded="false" aria-controls="sidebar">Collapse</button>
//     </div>
//       <div className='collapse' id='sidebar'  style={{
//         boxSizing: 'box-border', 
//         fontFamily: 'Verdana'}}>

//         <nav  style={{
//           position: 'fixed', 
//           marginTop: '65px',
//           top: '0px',
//           right: '0px',
//           width: '250px',
//           height: '100%',
//           backgroundColor: '#f9f9f9'
//           }}>
//             <h3 className='text-center' style={{
//               margin: '10px',
//               paddingBottom: '10px',
//               borderBottom: '1px solid black'
//             }}>Contacts</h3>
//             <Form inline style={{
//               paddingRight: '15px',
//               paddingLeft: '15px',
//               paddingBottom: '15px',
//               paddingTop: '5px'
//             }}>
//               <FormControl type="text" placeholder="Search" id="mr-sm-2" />
//               <Button variant="outline-light">Search</Button>
//             </Form>
//         </nav>
//       </div>
//     </div>
//   )
// }

// // export default Sidebar;
