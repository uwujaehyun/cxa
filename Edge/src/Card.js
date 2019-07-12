import React from 'react';
import { Card, Button } from 'react-bootstrap';
import io from 'socket.io-client';
let InvestCard = (props) => {
    
    let mainSocket = io('localhost:8080')

    let handleChange = () => {
        console.log(mainSocket)
        mainSocket.emit('TRIGGER_TAB', {
            x:"emit"
        });
    }

    return (
        <div>
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`${props.iprofilepic}`} />
            <Card.Body>
                <Card.Title>{props.investorname}</Card.Title>
                <Card.Text>
                {`$${props.amount}`}
                </Card.Text>
                <Button onClick={handleChange} style={{
                    backgroundColor: '#009a7a', 
                    border: '0px'
                }}>Contact</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default InvestCard;
