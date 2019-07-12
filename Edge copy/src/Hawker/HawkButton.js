import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';


    let HawkButton = (props) => {

        let [reDirect, setreDirect] = useState(false)

        let handleClick = () => {
            setreDirect(true)
        }

        
            if (reDirect) {
            return <Redirect push to={`${props.hawkdirect}`}></Redirect>
            } else {

            return (
                <div>
                    <Button className='btn shadow bg-white' style={{
                        borderRadius: '50%', 
                        float: 'left',
                        width: '70px', 
                        border: '0px', 
                        position: 'fixed', 
                        height: '70px', 
                        backgroundColor: '#009a7a'
                    }}
                        onClick={handleClick}>
                        <img src={`${props.buttonimg}`} alt={`${props.alttitle}`} style={{
                        color: 'black', 
                        width: '45px', 
                        height: '45px'
                    }}></img>
                    </Button>
                </div>
            )
        }
    }

export default HawkButton;