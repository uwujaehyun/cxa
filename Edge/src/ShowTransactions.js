import React, { useState, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap';
import './ShowTransactions.css'

export let ShowTransactions = (props) => {

    let handleChange=(hawker,index)=>{
        
        let _hawker=hawker;
        
        // console.log(inputArray,index)
        // console.log(_hawker,inputArray[index])
        props.offer(_hawker,parseInt(inputArray[index]))
    }

    let conversionRates = {
        "SGD":1,
        "MYR":3.03,
        "ETH":0.0027,
        "BTC":0.000063,
    }

    let [inputArray, setInputArray] = useState(new Array(props.hawkers.length).fill(0))
    let [userCurrencies , setuserCurrencies] = useState(new Array(props.hawkers.length).fill("SGD"))
    // let inputChangeHandler = (i) => {
    //     setInputVal(event.target.value)
    // }
    
    let inputChangeHandler = (ind) => {
        // console.log(inputArray)
        return (event) => setInputArray(inputArray.map( (e,j) => { 
           
            let value = j === ind ? event.target.value : e 
            return value
            }))
    
        }
    
    let currencies = ["SGD","MYR","ETH","BTC"]


    let selectHandler = (ind) => {
        return (eventKey,eventObj) => setuserCurrencies(userCurrencies.map( (e,j) => { 
            // console.log(eventObj.target.innerText)
            let value = j === ind ? eventObj.target.innerText : e 
            return value
            
            }))
    }

    let hawkerList=props.hawkers.map((hawker,i)=>
        <tr key={i}>
            <td >{hawker.name}</td>
            <td><input onChange={inputChangeHandler(i)} value={inputArray[i]}></input></td>
            <td>{hawker.amount*conversionRates[userCurrencies[i]]} {userCurrencies[i]}</td>
            <td> <Dropdown> <Dropdown.Toggle variant="info" id="dropdown-basic">{userCurrencies[i]}</Dropdown.Toggle><Dropdown.Menu>{currencies.map( item => <Dropdown.Item onSelect={selectHandler(i)}>{item}</Dropdown.Item>)}</Dropdown.Menu></Dropdown></td>
            <td> <button  onClick={handleChange.bind(this,hawker.name,i)}> Offer </button></td>
        </tr>)

        return(
            <div>
            <h3> Hawkers</h3>
            <hr />
            <table >
                <tbody>
                    <tr>
                        <th>Hawkers</th>
                        <th>Amount to Invest</th>
                        <th>Amount Invested </th> 
                        <th> Currency</th>
                    </tr>
                    {hawkerList}
                </tbody>
            </table>
          </div>
        )
    } 


export default ShowTransactions;