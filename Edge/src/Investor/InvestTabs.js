import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PublicInvest from '../Hawker/PublicHawk.js';
import PrivateInvest from '../Hawker/PrivateHawk.js';

let InvestTabs = (props) => {
    return (
        <div className='shadow bg-white' style={{
            marginLeft: '168px', 
            marginTop: '50px', 
            marginBottom: '200px'
        }}>
            <Tabs defaultActiveKey="profile" transition={false} className='container' id="uncontrolled-tab-example" style={{
            width: '1100px'
        }}>
            <Tab eventKey="home" title={props.firstTitle} className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <PublicInvest />
            </Tab>
            <Tab eventKey="profile" title={props.secondtitle} className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <PrivateInvest />
            </Tab>
            </Tabs>
        </div>
    )
}

export default InvestTabs
