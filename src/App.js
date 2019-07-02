import React, {useState, useEffect} from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';

let App = (props) => {
  return (
    <div>
      <Navbar user='Hawker' otheruser='Investor'></Navbar>
      <Sidebar></Sidebar>
    </div>
  )
}

export default App;
