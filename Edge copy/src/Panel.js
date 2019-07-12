import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';


    let Panel = (props) => {

        let [reDirect, setreDirect] = useState(false)

        let handleClick = () => {
            setreDirect(true)
        }

        
            if (reDirect) {
            return <Redirect push to={`${props.smepage}`}></Redirect>
            } else {

            return (
                <div id={props.id} className={props.className}>
                    <div style={{
                        width: '97%', 
                        height: '240px'
                    }}>
                        <img src={`${props.hawkprofpic}`} alt="Hawker's profile picture" style={{
                            width: '220px', 
                            height: '100%', 
                            float: 'left', 
                            marginRight: '20px'
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
                            marginTop: '-55px', 
                        }}
                            onClick={handleClick}>
                            See {props.abc}</Button>
                    </div>
                </div>
            )
        }
    }

export default Panel;