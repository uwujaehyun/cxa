import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';


    let Panel = (props) => {

        let [reDirect, setreDirect] = useState(false)
        console.log(props)
        let handleClick = () => {
            setreDirect(true)
        }

        
            if (reDirect) {
            
            return <Redirect push to={`${props.smepage}`}></Redirect>
            } else {

            return (
                <div id={props.id} className={props.className} style={{marginRight: '60px'}}>
                    <div style={{
                        // width: '97%', 
                        height: '240px', 
                        backgroundColor: 'white', 
                        borderTop: '1px solid lightgrey', 
                        borderBotom: '1px solid lightgrey', 
                        padding: '20px'
                    }}>
                        <img src={`${props.hawkprofpic}`} alt="Hawker's profile picture" style={{
                            width: '220px', 
                            height: '180px', 
                            float: 'left', 
                            marginRight: '20px',
                            objectFit: "cover",
                        }}></img>
                        <h3>{props.comname}</h3>
                        <p style={{
                            paddingRight: '20px', 
                            paddingLeft: '20px',
                            paddingBottom: '20px',
                            fontSize: '9'
                        }}>{props.description}</p>
                        <Button style={{
                            float: 'right', 
                            backgroundColor: '#009a7a', 
                            border: '0', 
                            marginTop: '40px', 
                        }}
                            onClick={handleClick}>
                            See page</Button>
                    </div>
                </div>
            )
        }
    }

export default Panel;