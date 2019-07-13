import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import io from 'socket.io-client';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';


let InvestCard = (props) => {

    let mainSocket = io('http://10.143.74.5:8080')

    let handleChange = () => {
        console.log(mainSocket)
        mainSocket.emit('TRIGGER_TAB', {
            x:"emit"
        });
    }

    let [reDirect, setreDirect] = useState(false)

    let [directState , setreDirectState] = useState('')
    
        if (reDirect) {
        return <Redirect push to={`${directState}`}></Redirect>
        } else {

    return (
        <div>
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`${props.smeprofilepic}`} />
            <Card.Body>
                <Card.Title>{props.SMEname}</Card.Title>
                <Card.Text>Share: 
                {` ${props.sharepercent}` + '%'}
                </Card.Text>
                <Button className='inline' style={{
                    backgroundColor: '#009a7a', 
                    border: '0px', 
                    margin: '5px'
                }} onClick={handleChange}>Contact</Button>
                <Button className='inline' style={{
                    backgroundColor: '#009a7a', 
                    border: '0px', 
                    margin: '5px'
                }}>View Profits</Button>
                <Button className='inline' style={{
                    backgroundColor: '#009a7a', 
                    border: '0px', 
                    margin: '5px'
                }} onClick={() => {
                    setreDirect(true)
                    setreDirectState('./therealHawkPub')
                }}>View Page</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
}

export default InvestCard;
