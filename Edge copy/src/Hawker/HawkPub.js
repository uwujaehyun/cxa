import React from 'react';
// import * as firebase from 'firebase/app';
// import firebaseConfig from '../firebaseconfig.js';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, StatusUpdateForm,CommentField,CommentList } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

// firebase.initializeApp(firebaseConfig);

let HawkPub = () => {


    return (
        <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6',zIndex: 0, position: 'relative',paddingTop:"90px"}}>
            
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
      </div>
  

                
           
    </div>
    )
}

export default HawkPub;