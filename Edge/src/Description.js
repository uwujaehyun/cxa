import React from 'react';
import { Form, Button, FormControl, Jumbotron } from 'react-bootstrap';

let Description = (props) => {
    return (
        <div className='shadow bg-white' style={{
            width: '800px', 
            height: '220px', 
            backgroundColor: 'white', 
            padding: '25px', 
            borderRadius: '5px', 
            display: 'inline-block', 
            marginLeft: '168px'
        }}>
            <p>Description: </p>
            <p style={{
                fontSize: '13px'
            }}>{props.description}</p>
        </div>
    )
}

export default Description;
