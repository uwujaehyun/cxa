import React, {useState, useEffect} from 'react';
import Contacts from '../Contacts';
import laksa from "../assets/laksa2.jpg";
import Chat from '../Chat.js';
import io from 'socket.io-client';
// import '../Investor/Opp.css';
import Panel from '../Panel.js';

let HawkOpp = (props) => {

  let mainSocket = io('localhost:8080')
  return (
    <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6'}}>
      <div style={{
        margin: 'auto'
      }}>
      <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
      <main style={{paddingRight: '250px'}}>
        <div style={{
          width: '1100px', 
          backgroundColor: 'white', 
          margin: 'auto'
        }}>
        <Panel id='firstpanel' hawkprofpic={laksa} comname='Lorem Ipsum' abc='profile' smepage='./InvestProf' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis dolore commodi sint autem magni, incidunt, officia tempora magnam, culpa amet fugiat placeat quisquam numquam delectus ipsam obcaecati quibusdam nostrum adipisci. Nihil fugit corporis ducimus eligendi modi itaque quos harum, impedit inventore commodi autem veniam dicta, praesentium animi, quibusdam vitae!'></Panel>
        <Panel className='normalpanel' hawkprofpic={laksa} comname='Amet Consectetur' abc='profile' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis dolore commodi sint autem magni, incidunt, officia tempora magnam, culpa amet fugiat placeat quisquam numquam delectus ipsam obcaecati quibusdam nostrum adipisci. Nihil fugit corporis ducimus eligendi modi itaque quos harum, impedit inventore commodi autem veniam dicta, praesentium animi, quibusdam vitae!'></Panel>
        <Panel className='normalpanel' hawkprofpic={laksa} comname='Adipisicing Elit' abc='profile' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis dolore commodi sint autem magni, incidunt, officia tempora magnam, culpa amet fugiat placeat quisquam numquam delectus ipsam obcaecati quibusdam nostrum adipisci. Nihil fugit corporis ducimus eligendi modi itaque quos harum, impedit inventore commodi autem veniam dicta, praesentium animi, quibusdam vitae!'></Panel>
        <Panel className='normalpanel' hawkprofpic={laksa} comname='Delectus Ipsam' abc='profile' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis dolore commodi sint autem magni, incidunt, officia tempora magnam, culpa amet fugiat placeat quisquam numquam delectus ipsam obcaecati quibusdam nostrum adipisci. Nihil fugit corporis ducimus eligendi modi itaque quos harum, impedit inventore commodi autem veniam dicta, praesentium animi, quibusdam vitae!'></Panel>
        <Panel id='lastpanel' hawkprofpic={laksa} comname='Voluptate Inventore' abc='profile' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis dolore commodi sint autem magni, incidunt, officia tempora magnam, culpa amet fugiat placeat quisquam numquam delectus ipsam obcaecati quibusdam nostrum adipisci. Nihil fugit corporis ducimus eligendi modi itaque quos harum, impedit inventore commodi autem veniam dicta, praesentium animi, quibusdam vitae!'></Panel>
          
        </div>
        <Chat socket={mainSocket} contactname='Harry' contactrole='Hawker'></Chat>
      </main>
      </div>
      </div>
    </div>
  
  )
}

export default HawkOpp;
