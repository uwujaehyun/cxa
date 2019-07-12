import React, { useState, useEffect } from 'react';
import './ShowTransactions.css'

export let ShowTransactions = (props) => {

    let handleChange=(hawker,index)=>{
        
        let _hawker=hawker;
        
        // console.log(inputArray,index)
        // console.log(_hawker,inputArray[index])
        props.offer(_hawker,parseInt(inputArray[index]))
    }

    let [inputArray, setInputArray] = useState(new Array(props.hawkers.length).fill(0))

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
    



    let hawkerList=props.hawkers.map((hawker,i)=>
        <tr key={i}>
            <td >{hawker.name}</td>
            <td><input onChange={inputChangeHandler(i)} value={inputArray[i]}></input></td>
            <td>{hawker.amount}</td>
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
                        <th>Amount</th> 
                    </tr>
                    {hawkerList}
                </tbody>
            </table>
          </div>
        )
    } 


export default ShowTransactions;