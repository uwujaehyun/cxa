import React from 'react';
import { Form, Button, FormControl, Jumbotron } from 'react-bootstrap';

let Description = () => {
    return (
        <div className='shadow bg-white' style={{
            width: '70%', 
            height: 'auto', 
            backgroundColor: 'white', 
            padding: '25px', 
            borderRadius: '5px', 
            display: 'inline-block', 
            marginLeft: '168px'
        }}>
            <p>SME description: </p>
            <p style={{
                fontSize: '13px'
            }}>*Insert name of web app* is an app that allows small business to interact with larger businesses. This web app is aimed at helping hawkers expand their business and collaborate with larger businesses that are willing to invest or fund their businesses. Hawkers can create a page for their company and upload photos or videos promoting their shop. This will allow investors to find these SMEs efficiently. Tags attached to SMEs let investors narrow down their search so that investors can find SMEs based on their interests.</p>
        </div>
    )
}

export default Description;
