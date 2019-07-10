import React from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from '../firebaseconfig.js';
import { StreamApp } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import HawkPub from './HawkPub.js';

firebase.initializeApp(firebaseConfig);


let PublicHawk = () => {
    return (
        <div>
            <HawkPub/>
        </div>
    )
}

export default PublicHawk;