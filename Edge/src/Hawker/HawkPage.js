import React, {useState, useEffect} from 'react';
import HawkerJumbotron from '../HawkerJumbotron.js';
import Contacts from '../Contacts';
import laksa from "../assets/laksa2.jpg";
import HawkTabs from '../Tabs.js';
import Description from '../Description.js';
import Chat from '../Chat.js';
import io from 'socket.io-client';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HawkButton from './HawkButton.js';
import therealHawkPub from './therealHawkPub.js';
import { TransactionContract } from "../setup";

let HawkPage = (props) => {

  let mySocket = io('localhost:8080')

  
  useEffect(()=>{
    // (hawkers => hawkers.map(
    //     (el)=>{
    //         let displayAmount=TransactionContract.totalAmountFor(el.name).toNumber()
    //         return Object.assign({},el,{amount:displayAmount})
    //     }
      
      // ))
  },[])


  


  let [reDirect, setreDirect] = useState(false)

  let handleClick = () => {
    setreDirect(true)
  }

  let [directState , setreDirectState] = useState('')
  
    if (reDirect) {
      return <Redirect push to={`${directState}`}></Redirect>
    } else {

    
    return (<div id="App" style={{boxSizing: 'border-box', fontfFamily: 'Verdana', backgroundColor: '#f6f6f6'}}> 
      <div>
      <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} contactname='Jerry' contactname2='Larry' contactname3='Barry'/>
      <div id="page-wrap">
      <HawkerJumbotron comname="Swee Boon Keat's chicken rice" 
      profilepic={laksa} 
      role='Hawker'
      bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>
      <Description description='This stall has been running for almost seven decades. Running and maintaining a hawker stall is a family business which my parents had started in the 1950s when hawker centres started to appear on the streets of Singapore. The reason I am this is skilled is because my parents taught me how to cook chicken rice as they do as I was growing up, and I have taught my children how to cook chicken rice professionally like my parents before me. We sell chicken rice at $2.70, '></Description>
      <main style={{paddingRight: '250px'}}>
      <Button className='shadow bg-white' hawkdirect='./therealHawkPub.js' style={{
        border: '0px', 
        color: '#313131', 
        marginLeft: '1032px', 
        marginTop: '-88px'
      }} onClick={() => {
        let directState = setreDirectState('TherealHawkPub')
        let reDirect = setreDirect(true)
      }}>See your account's page</Button>
          <Button className='btn shadow bg-white' style={{
            borderRadius: '50%', 
            float: 'left',
            marginLeft: '-1110px', 
            marginTop: '-396px',
            width: '70px', 
            border: '0px', 
            position: 'fixed', 
            height: '70px', 
            backgroundColor: '#009a7a'
          }}
            onClick={() => {
              let directState = setreDirectState('HawkPub')
              let reDirect = setreDirect(true)
            }}>
            <img src='https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png' alt='Add Post icon' style={{
            color: 'black', 
            width: '45px', 
            height: '45px'
          }}></img>
          </Button>
        <HawkTabs style={{
          width: '1100px'
        }}></HawkTabs>
        <Chat socket={mySocket} contactname='Jerry' contactrole='Investor'></Chat>
      </main>
      </div>
      </div>
    </div>
  
  )
}
}
export default HawkPage;
