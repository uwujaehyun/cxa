import React from 'react';
import { Form, Button, FormControl, Jumbotron } from 'react-bootstrap';

let HawkerJumbotron = (props) => {
    return (
        <div className='justify-content-center'>
            <Jumbotron style={{
                // marginRight: '15%',
                // marginLeft: '15%',
                margin: 'auto', 
                marginBottom: '25px',
                backgroundImage: `url(${props.bgimg})`,
                width: '1100px', 
                height: '275px',
                backgroundSize: 'auto',
                color: '#f9f9f9', 
                backgroundColor: 'white',
                backgroundRepeat: 'no-repeat', 
                borderBottom: '6px solid white', 
                boxShadow: '0px 7.5px 3px -1px rgba(50, 50, 50, 0.06)'
            }}>
                <h1 style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '60px', 
                    marginTop: '50px'
                }}><span className='align-middle'>{props.comname}</span></h1>
                <h3>{props.role}</h3>
                <img className='shadow bg-white' style={{
                    border: '6px solid white', 
                    borderRadius: '50%', 
                    width: '120px', 
                    height: '120px',
                    objectFit: 'cover', 
                    marginRight: '100px',
                    marginTop: '-60px',
                    float: 'right'
                }} src={`${props.profilepic}`} alt={`${props.comname}`+ "'s profile picture"}/>
            </Jumbotron>
        </div>
    )
}

export default HawkerJumbotron;
