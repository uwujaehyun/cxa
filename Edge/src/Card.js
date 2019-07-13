import React , {useState , useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import io from 'socket.io-client';
import { TransactionContract } from "./setup";

let InvestCard = (props) => {
    
    console.log(props)
    let mainSocket = io('localhost:8080')

    let [amount ,setAmount ] = useState(0)

    useEffect(()=>{
        // let keys = Object.keys(dets)
        if (props.dets){
            setAmount(props.dets.amount)
        } else if ( !props.dets && props.amount) {
            setAmount(props.amount)
        }

        
    },[])

    let [reject, setReject] = useState(false)


    let handleChange = () => {
        console.log(mainSocket)
        mainSocket.emit('TRIGGER_TAB', {
            x:"emit"
        });
    }

    let acceptHandler = () => {
        TransactionContract.setAmount(props.dets.hawker,props.dets.amount)
        TransactionContract.setDuration(props.dets.hawker,props.dets.duration)
        TransactionContract.setFrequency(props.dets.hawker,props.dets.frequency)
        TransactionContract.setReturnValue(props.dets.hawker,props.dets.returnVal)
        console.log("Logged to Blockchain")
    }

    if (!reject) { 
        return (
        <div>
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`${props.iprofilepic}`} />
            <Card.Body>
                <Card.Title>{props.investorname}</Card.Title>
                <Card.Text>
                {`$ ${amount} SGD`}
                </Card.Text>
                {props.dets ? <Card.Text>
                {`Expected Return: $${props.dets.returnVal} SGD`}
                </Card.Text>:null}
                {props.dets ? <Card.Text>
                {`Frequency: ${props.dets.frequency} `}
                </Card.Text> : null}
                {props.dets ? <Card.Text>
                {`Duration: ${props.dets.duration} `}
                </Card.Text>:null}
                <Button onClick={handleChange} style={{
                    backgroundColor: '#009a7a', 
                    border: '0px'
                }}>Contact</Button>
                {props.dets ? <Button style={{
                    backgroundColor: '#009a7a', 
                    border: '0px' }} onClick={acceptHandler}>Accept</Button> : null}
                {props.dets ? <Button style={{
                    backgroundColor: '#009a7a', 
                    border: '0px'}} onClick={()=>setReject(true)}>Decline</Button> : null}
            </Card.Body>
            </Card>
        </div>
        )
    } else {
        return null
    }
}

export default InvestCard;
