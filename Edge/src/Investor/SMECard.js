import React from 'react';
import { Card, Button } from 'react-bootstrap';

let InvestCard = (props) => {
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
                }}>Contact</Button>
                <Button className='inline' style={{
                    backgroundColor: '#009a7a', 
                    border: '0px', 
                    margin: '5px'
                }}>View Profits</Button>
                <Button className='inline' style={{
                    backgroundColor: '#009a7a', 
                    border: '0px', 
                    margin: '5px'
                }}>View Page</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default InvestCard;
