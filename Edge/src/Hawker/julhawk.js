import React, {useState, useEffect} from 'react';
import HawkerJumbotron from '../HawkerJumbotron.js';
import Contacts from '../Contacts';
import laksa2 from '../assets/laksa2.jpg';
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

  let mySocket = io('http://10.143.74.5:8080')

  
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
      <HawkButton hawkdirect='./HawkPub' alttitle='Add Post icon' buttonimg='https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png' style={{
            marginTop: '500px', 
          }}>
      </HawkButton>
      <HawkerJumbotron comname='Ching Chong Laksa' 
      profilepic={laksa2}
      role='Hawker'
      bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>
      <Description style={{height:"220px"}} description='Since 1984, this family has been selling laksa in the Bedok hawker centre. After much reconsideration with our family, we have decided that we would like to look into the topic of expanding this evergrowing business. Customers come to us everyday to praise us on our food, so we would like others to be able to taste our food and not just limit our laksa to those living in the east. '></Description>
      <main style={{paddingRight: '250px'}}>
      <Button className='shadow bg-white' hawkdirect='./ChingChongPub.js' style={{
        border: '0px', 
        color: '#313131', 
        marginLeft: '1032px', 
        marginTop: '-88px'
      }} onClick={() => {
        let directState = setreDirectState('ChingChongPub')
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