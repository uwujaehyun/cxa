import React, {useState, useEffect} from 'react';
import HawkerJumbotron from '../HawkerJumbotron.js';
import Contacts from '../Contacts';
import laksa from "../assets/laksa2.jpg";
import Chat from '../Chat.js';
import io from 'socket.io-client';
import { Button, Jumbotron } from 'react-bootstrap';
import SMECard from './SMECard.js';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';
import sbkpic from '../assets/sbkpic.jpg';


let InvestPage = (props) => {

  let mainSocket = io('localhost:8080')

  let [reDirect, setreDirect] = useState(false)

  let handleClick = () => {
    setreDirect(true)
  }

  
    if (reDirect) {
      return <Redirect push to="/InvestOpp"></Redirect>
    } else {

    return (
      <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6'}}>
        <div>
        <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
        <HawkerJumbotron comname='Jerry McCarthy' 
        profilepic='data:image/jpeg;base64,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' 
        role='Investor'
        bgimg='https://www.photocircle.net/us/photos/thumbnails/zoom/32291-Berlin-Alexanderplatz-1-Skyline-Panorama--by-andr-stiebitz.jpg'></HawkerJumbotron>
        <main style={{paddingRight: '250px'}}>
            <Button className='btn shadow bg-white' style={{
              borderRadius: '50%', 
              float: 'left',
              marginLeft: '80px', 
              marginTop: '-176px',
              width: '70px', 
              border: '0px', 
              position: 'fixed', 
              height: '70px', 
              backgroundColor: '#009a7a'
            }}
              onClick={handleClick}>
              <img src='https://static.thenounproject.com/png/662596-200.png' alt='Go to SMEs icon' style={{
              color: 'black', 
              width: '45px', 
              height: '45px'
            }}></img></Button>
            <Jumbotron style={{
              boxShadow: '0px 7.5px 3px -1px rgba(50, 50, 50, 0.06)', 
              backgroundColor: 'white', 
              marginLeft: '168px', 
              width: '1100px'
            }}>
              <h3 style={{
                  borderBottom: '1px solid black', 
                  paddingBottom: '15px', 
                  paddingLeft: '15px', 
                  paddingRight: '15px', 
                  marginTop: '-40px'
              }}>Investments</h3>
              <SMECard smeprofilepic={sbkpic} SMEname="Swee Boon Keat's Chicken Rice" amount='2000'></SMECard>
            </Jumbotron>
          {/* <InvestTabs firstTitle='Investments' secondtitle='Funds'></InvestTabs> */}
          <Chat socket={mainSocket} contactname='Julianne' contactrole='Hawker'></Chat>
        </main>
        </div>
        </div>
      </div>
    
    )
  }
}

export default InvestPage;
