import React, { useState , useEffect } from 'react';
// import logo from './logo.svg';
import './Invest.css';
import { TransactionContract } from "./setup";
import {ShowInvest } from "./ShowInvest";
import io from 'socket.io-client';

function Invest (props) {

    let mainSocket = io('localhost:8080')


    let [hawkers , setHawkers] = useState([{name:'Lorem Ipsum',amount:0, frequency:"Yearly", duration: 1, returnVal:0}, {name:'Amet Consectetur',amount:0, frequency:"Yearly", duration: 1, returnVal:0}, {name:'Adipisicing Elit',amount:0, frequency:"Yearly", duration: 1, returnVal:0}, {name:'Delectus Ipsam',amount:0, frequency:"Yearly", duration: 1, returnVal:0}, {name:'Voluptate Inventore',amount:0, frequency:"Yearly", duration: 1, returnVal:0}])
   
    useEffect(()=>{
        setHawkers(hawkers => hawkers.map(
            (el)=>{
                let displayAmount=TransactionContract.totalAmountFor(el.name).toNumber()
                

                let displayDuration=TransactionContract.getDuration(el.name).toNumber()
              
                let displayFrequency=TransactionContract.getFrequency(el.name).toString()
              
                let displayReturnVal=TransactionContract.getReturnValue(el.name).toNumber()

                console.log(displayAmount,displayDuration,displayFrequency,displayReturnVal)
                return Object.assign({},el,{amount:displayAmount,frequency:displayFrequency,duration: displayDuration, returnVal:displayReturnVal})
                
            }
          
          ))
    },[])


let handleOffer = (hawker,amount,duration,frequency,returnValue) => {
   
    let displayAmount=TransactionContract.totalAmountFor(hawker).toNumber()
   
                

    let displayDuration=TransactionContract.getDuration(hawker).toNumber()
  
    let displayFrequency=TransactionContract.getFrequency(hawker).toString()
  
    let displayReturnVal=TransactionContract.getReturnValue(hawker).toNumber()


    mainSocket.emit('SEND_OFFER', {
      hawker: hawker,
      offer:true,
      returnVal: returnValue,
      frequency: frequency,
      duration: duration,
      amount: amount
    });

    setHawkers(hawkers => hawkers.map(
      (el)=>el.name===hawker? Object.assign({},el,{amount:displayAmount,frequency:displayFrequency,duration: displayDuration, returnVal:displayReturnVal}):el
    
    ))
  }

    console.log("Invest Page")
    return (
      <div className="Invest">
        <header className="Invest-header">
          <h1 className="Invest-title">Welcome to Ethereum</h1>
        </header>
        <p className="Invest-intro">
          Transaction in Ethereum
        </p>
        <div className="Invest-table">
          <ShowInvest hawkers={hawkers} offer={handleOffer}/>
        </div>
      </div>
    );
}


export default Invest;