// import React, {useState, useEffect} from 'react';
// import Contacts from '../Contacts';
import { Jumbotron } from 'react-bootstrap';
// import laksa from '../assets/laksa2.jpg'

// let InvestProf = (props) => {

//   return (
//     <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6'}}>
//       <div>
//       <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} />
//       <div id="page-wrap">
//       <main style={{paddingRight: '250px'}}>
//           <Jumbotron style={{
//             width: '900px', 
//             height: '300px', 
//             position: 'absolute', 
//             boxShadow: '0px 7.5px 3px -1px rgba(50, 50, 50, 0.06)', 
//             marginTop: '180px', 
//             marginLeft: '270px', 
//             backgroundColor: 'white', 
//             display: 'inline-block'
//           }}>
//             <img src={laksa} alt="Dolor Sit's profile picture" style={{
//               width: '200px', 
//               height: '200px'
//             }}/>
//             <h3>Dolor Sit</h3>
//             <p style={{
//               fontSize: '9'
//             }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque! Fugit iste, maxime quae ipsa harum, ipsum ea quas quos, blanditiis atque rerum mollitia voluptatibus ducimus pariatur soluta obcaecati. Eius aspernatur ipsam voluptatum repellat hic perspiciatis fuga, sint fugit alias veniam unde debitis, dolor totam, libero nostrum. Maiores laborum aliquam cum beatae non mollitia, commodi omnis modi ipsa! Voluptate quidem perspiciatis et sint eaque ea at nobis? Nobis magni soluta nam nemo sunt dolor deleniti ex illum aliquam, reprehenderit illo.</p>
//           </Jumbotron>
//       </main>
//       </div>
//       </div>
//     </div>
  
//   )
// }

// export default InvestProf;


import React from 'react';
// import * as firebase from 'firebase/app';
// import firebaseConfig from '../firebaseconfig.js';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, StatusUpdateForm,CommentField,CommentList } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import HawkerJumbotron from '../HawkerJumbotron.js';
import laksa from '../assets/laksa2.jpg';
import Description from '../Description.js';

// firebase.initializeApp(firebaseConfig);

let therealHawkPub = () => {


    return (
        <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6',zIndex: 0, position: 'relative',paddingTop:"90px"}}>
            <HawkerJumbotron comname='Dolor Sit' role='Investor' profilepic={laksa} style={{
              color: 'black'
            }}>
            <Description description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex eveniet doloremque odit impedit totam cum, praesentium alias rem eos hic qui, architecto debitis delectus explicabo iure culpa perferendis id corporis quos quia placeat unde iusto cupiditate! Dolore neque doloremque fugiat, in dolorum alias, necessitatibus quas odio voluptatibus, laborum accusamus! Nulla impedit recusandae incidunt totam, quod fuga necessitatibus neque, distinctio voluptate iure culpa illo quae? Obcaecati, rem tenetur dolorem quo blanditiis, velit error fugit ut ex aut nobis, sunt dicta ab fuga reprehenderit soluta. Saepe voluptate, rem perspiciatis veniam minus accusamus quasi consectetur corrupti dicta delectus, eligendi laborum quas distinctio.'></Description>
            </HawkerJumbotron>  
            
            <div style={{
                width: '1100px', 
                marginLeft: '168px'
            }}>
            </div>  
          </div>
    )
}

export default therealHawkPub;