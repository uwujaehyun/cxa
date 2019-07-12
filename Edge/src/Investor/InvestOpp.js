import React, {useState, useEffect} from 'react';
import Contacts from '../Contacts';
import laksa from "../assets/laksa2.jpg";
import Chat from '../Chat.js';
import io from 'socket.io-client';
// import './Opp.css';
import './custom.scss';
import Panel from '../Panel.js';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';
import therealHawkPub from '../Hawker/therealHawkPub.js';

let InvestOpp = (props) => {

  let mainSocket = io('http://192.168.1.19.:8080')

  let [hawkerstalls, setHawkerStalls] = useState(props.hawkerstalls)

  let [term, setTerm] = useState('')

  let searchingFor = () => {
      return (x) => {
          return x.name.toLowerCase().includes(term.toLowerCase()) || !term
      }
  }

  let searchHandler = (e) => {
      setTerm(e.target.value)
 
  }

  return (

    <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6'}}>

      
      <Form inline className='ml-auto' style={{
        display: 'flex',
        justifyContent: 'center', 
        paddingTop: '100px', 
        paddinLeft: '50px'
      }}>
      <FormControl type="text" placeholder="Search" id="mr-sm-2" onChange={searchHandler} value={term}/>
        <Button variant="outline-success">Search</Button>
      </Form>
      <div style={{
        margin: 'auto', 
        padding: '100px', 
        paddinTop: '0px', 
        marginLeft: '67px'
      }}>
      { 
        hawkerstalls.filter(searchingFor(term)).map((hawkerstall) => {
          console.log(hawkerstall)
          return (
            <Panel comname={hawkerstall.name} hawkprofpic={hawkerstall.pic} description={hawkerstall.hdescription} smepage={hawkerstall.link}></Panel>
          )
        })
      }
      <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
      <main style={{paddingRight: '250px'}}>
        <div style={{
          width: '1100px', 
          backgroundColor: 'white', 
          margin: 'auto'
        }}>
        
        {/* <Panel id='firstpanel' hawkprofpic={laksa} comname='Lorem Ipsum' abc='page' smepage='./therealHawkPub' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam voluptate inventore provident esse? Dolorem quo, numquam beatae, sed totam, repellat dolorum incidunt voluptatem cupiditate odit ullam quia iusto laboriosam dignissimos. Tempore distinctio in repudiandae ex iste, sequi nostrum qui a et, ipsum, officiis atque tenetur quod doloribus! Eum quisquam enim laboriosam dolorem odit earum aspernatur impedit numquam similique amet laborum cumque, nemo expedita optio id possimus animi commodi architecto beatae quidem. Dolor vel neque sit. Voluptas, quod aperiam! Facere reprehenderit in sit dicta architecto. Ipsam natus quos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.'></Panel>
        <Panel className='normalpanel' hawkprofpic={laksa} comname='Amet Consectetur' abc='page' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam voluptate inventore provident esse? Dolorem quo, numquam beatae, sed totam, repellat dolorum incidunt voluptatem cupiditate odit ullam quia iusto laboriosam dignissimos. Tempore distinctio in repudiandae ex iste, sequi nostrum qui a et, ipsum, officiis atque tenetur quod doloribus! Eum quisquam enim laboriosam dolorem odit earum aspernatur impedit numquam similique amet laborum cumque, nemo expedita optio id possimus animi commodi architecto beatae quidem. Dolor vel neque sit. Voluptas, quod aperiam! Facere reprehenderit in sit dicta architecto. Ipsam natus quos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.'></Panel>
        <Panel className='normalpanel' hawkprofpic={laksa} comname='Adipisicing Elit' abc='page' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam voluptate inventore provident esse? Dolorem quo, numquam beatae, sed totam, repellat dolorum incidunt voluptatem cupiditate odit ullam quia iusto laboriosam dignissimos. Tempore distinctio in repudiandae ex iste, sequi nostrum qui a et, ipsum, officiis atque tenetur quod doloribus! Eum quisquam enim laboriosam dolorem odit earum aspernatur impedit numquam similique amet laborum cumque, nemo expedita optio id possimus animi commodi architecto beatae quidem. Dolor vel neque sit. Voluptas, quod aperiam! Facere reprehenderit in sit dicta architecto. Ipsam natus quos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.'></Panel>
        <Panel className='normalpanel' hawkprofpic={laksa} comname='Delectus Ipsam' abc='page' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam voluptate inventore provident esse? Dolorem quo, numquam beatae, sed totam, repellat dolorum incidunt voluptatem cupiditate odit ullam quia iusto laboriosam dignissimos. Tempore distinctio in repudiandae ex iste, sequi nostrum qui a et, ipsum, officiis atque tenetur quod doloribus! Eum quisquam enim laboriosam dolorem odit earum aspernatur impedit numquam similique amet laborum cumque, nemo expedita optio id possimus animi commodi architecto beatae quidem. Dolor vel neque sit. Voluptas, quod aperiam! Facere reprehenderit in sit dicta architecto. Ipsam natus quos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.'></Panel>
        <Panel id='lastpanel' hawkprofpic={laksa} comname='Voluptate Inventore' abc='page' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam voluptate inventore provident esse? Dolorem quo, numquam beatae, sed totam, repellat dolorum incidunt voluptatem cupiditate odit ullam quia iusto laboriosam dignissimos. Tempore distinctio in repudiandae ex iste, sequi nostrum qui a et, ipsum, officiis atque tenetur quod doloribus! Eum quisquam enim laboriosam dolorem odit earum aspernatur impedit numquam similique amet laborum cumque, nemo expedita optio id possimus animi commodi architecto beatae quidem. Dolor vel neque sit. Voluptas, quod aperiam! Facere reprehenderit in sit dicta architecto. Ipsam natus quos, odio delectus esse corporis inventore a similique totam at ullam ut fuga.'></Panel> */}
          
        </div>
        <Chat socket={mainSocket} contactname='Harry' contactrole='Hawker'></Chat>
      </main>
      </div>
      </div>
    </div>
  
  )
}

export default InvestOpp;
