import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
// import firebaseConfig from '../firebaseconfig.js';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, StatusUpdateForm,CommentField,CommentList } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import { Button } from 'react-bootstrap';
import io from 'socket.io-client';
import Chat from '../Chat.js';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';


// firebase.initializeApp(firebaseConfig);

let HawkPub = () => {

    let mainSocket = io('http://192.168.1.19.:8080')

    let [reDirect, setreDirect] = useState(false)

    let handleClick = () => {
        setreDirect(true)
    }

    
        if (reDirect) {
        return <Redirect push to="/HawkPage"></Redirect>
        } else {
  


    return (
        <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6',zIndex: 0, position: 'relative',paddingTop:"90px"}}>
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
                    <StatusUpdateForm
                    feedGroup="timeline"
                    userId="Investor1" />
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
                <Chat socket={mainSocket} contactname='Jerry' contactrole='Investor'></Chat>
      </div>
  

                
           
    </div>
    )
}
}

export default HawkPub;