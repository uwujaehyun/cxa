import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
// import firebaseConfig from '../firebaseconfig.js';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, StatusUpdateForm,CommentField,CommentList } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import HawkerJumbotron from '../HawkerJumbotron.js';
import laksa from '../assets/laksa2.jpg';
import Description from '../Description.js';
import { Button } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';
import io from 'socket.io-client';
import Chat from '../Chat.js';



// firebase.initializeApp(firebaseConfig);

let TherealHawkPub = () => {

    let mainSocket = io('http://10.143.74.5:8080')

    let [reDirect, setreDirect] = useState(false)

    let handleClick = () => {
        setreDirect(true)
    }

    let handleChange = () => {
        console.log(mainSocket)
        mainSocket.emit('TRIGGER_TAB', {
            x:"emit"
        });
    }

    let [directState , setreDirectState] = useState('')
    
        if (reDirect) {
        return <Redirect push to={`${directState}`}></Redirect>
        } else {


    return (
        <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6',zIndex: 0, position: 'relative',paddingTop:"90px"}}>
            <HawkerJumbotron comname="Swee Boon Keat's Chicken Rice" role='Hawker' profilepic={laksa} bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>  
            <Description description='This stall has been running for almost seven decades. Running and maintaining a hawker stall is a family business which my parents had started in the 1950s when hawker centres started to appear on the streets of Singapore. The reason I am this is skilled is because my parents taught me how to cook chicken rice as they do as I was growing up, and I have taught my children how to cook chicken rice professionally like my parents before me. We sell chicken rice at $2.70, steamed vegetables at $3.00, almond milk at $0.90, barley drink at $0.70, milo at $1.30, sugarcane drink at $1.10'>

            </Description>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-430px'
            }} onClick={() => {
                let directState = setreDirectState('../Transaction')
                let reDirect = setreDirect(true)
            }}>Fund</Button>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-356px'
            } } onClick={() => {
                let directState = setreDirectState('../Invest')
                let reDirect = setreDirect(true)}}>Invest</Button>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-283px'
            }} onClick={handleChange}>Contact</Button>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-210px'
            }}>View Prospectus</Button>
            <div style={{
                width: '1100px', 
                marginLeft: '168px'
            }}>
            
                <StreamApp
                    apiKey='nqcy3yjbpv9d' 
                    appId='54958' 
                    token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSW52ZXN0b3IxIn0.v7DnKPVIdjxJILIpwSwab2gXBBIcNFMhK3pu7skwO28'
                >
                    <NotificationDropdown notify />
                    {/* <StatusUpdateForm
                    feedGroup="timeline"
                    userId="Investor1" /> */}
                    <FlatFeed
                    options={ {reactions: { recent: true } } }
                    notify
                    Activity={(props) =>
                        <Activity {...props}
                            Footer={() => (
                            <div style={ {padding: '8px 16px'} }>
                                <LikeButton {...props} />
                                {/* <CommentField
                                activity={props.activity}
                                onAddReaction={props.onAddReaction} />
                                <CommentList activityId={props.activity.id} /> */}
                            </div>
                            )}
                        />
                        }
                    />
                </StreamApp>
                <Chat socket={mainSocket} contactname='Swee Boon Keat' contactrole='Hawker'></Chat>
      </div>
  

                
           
    </div>
    )
                    }
}

export default TherealHawkPub;