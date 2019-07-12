import React from 'react';
import { Card, Button } from 'react-bootstrap';

let InvestCard = (props) => {
    return (
        <div>
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`${props.iprofilepic}`} />
            <Card.Body>
                <Card.Title>{props.investorname}</Card.Title>
                <Card.Text>
                {`$${props.amount}`}
                </Card.Text>
                <Button style={{
                    backgroundColor: '#009a7a', 
                    border: '0px'
                }}>Contact</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default InvestCard;
