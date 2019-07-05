import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PublicHawk from './PublicHawk.js';
import PrivateHawk from './PrivateHawk.js'

let HawkTabs = () => {
    return (
        <div className='shadow bg-white' style={{
            marginLeft: '168px', 
            marginTop: '50px', 
            marginBottom: '200px'
        }}>
            <Tabs defaultActiveKey="profile" transition={false} className='container' id="uncontrolled-tab-example" style={{
            width: '1100px'
        }}>
            <Tab eventKey="home" title="Public" className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <PublicHawk />
            </Tab>
            <Tab eventKey="profile" title="Private" className='container' style={{ 
                color: '#4b4b4b', 
                width: '1100px'
            }}>
                <PrivateHawk />
            </Tab>
            </Tabs>
        </div>
    )
}

export default HawkTabs
