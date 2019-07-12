import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PublicHawk from './Hawker/PublicHawk.js';
import PrivateHawk from './Hawker/PrivateHawk.js';
import FundsHawk from './Hawker/FundsHawk.js';
import Prospectus from './Hawker/Prospectus.js';
import Offers from './Offers.js';

let HawkTabs = (props) => {
    return (
        <div className='shadow bg-white' style={{
            marginLeft: '168px', 
            marginTop: '50px', 
            marginBottom: '200px', 
            width: '1100px'
        }}>
            <Tabs defaultActiveKey="profile" transition={false} className='container' id="uncontrolled-tab-example" style={{
            width: '1100px'
        }}>

            <Tab eventKey="profile" title='Investors' className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <PrivateHawk />
            </Tab>
            <Tab eventKey="funder" title='Funders' className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <FundsHawk />
            </Tab>
            <Tab eventKey="document" title='Prospectus' className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <Prospectus />
            </Tab>
            <Tab eventKey="offers" title='Offers' className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <Offers />
            </Tab>
            </Tabs>
        </div>
    )
}

export default HawkTabs
