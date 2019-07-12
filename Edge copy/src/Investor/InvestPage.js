import React, {useState, useEffect} from 'react';
import HawkerJumbotron from '../HawkerJumbotron.js';
import Contacts from '../Contacts';
import laksa from "../assets/laksa2.jpg";
import Chat from '../Chat.js';
import io from 'socket.io-client';
import { Button, Jumbotron } from 'react-bootstrap';
import SMECard from './SMECard.js';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';


let InvestPage = (props) => {

  let mainSocket = io('http://192.168.1.19.:8080')

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
        <HawkerJumbotron comname='Dolor Sit' 
        profilepic={laksa} 
        role='Investor'
        bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>
        <main style={{paddingRight: '250px'}}>
            <Button className='btn shadow bg-white' style={{
              borderRadius: '50%', 
              float: 'left',
              marginLeft: '70px', 
              marginTop: '-210px',
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
              <SMECard smeprofilepic={laksa} SMEname='Lorem Ipsum' sharepercent='15'></SMECard>
            </Jumbotron>
          {/* <InvestTabs firstTitle='Investments' secondtitle='Funds'></InvestTabs> */}
          <Chat socket={mainSocket} contactname='Harry' contactrole='Hawker'></Chat>
        </main>
        </div>
        </div>
      </div>
    
    )
  }
}

export default InvestPage;
