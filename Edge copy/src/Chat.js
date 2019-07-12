import React, { useState, useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import './Chat.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import io from 'socket.io-client';

let Chat = (props) => {

  
    console.log(props.socket)
    let [ user, setUser ] = useState('Jerry')

    useEffect(() => {
        props.socket.on('RECEIVE_MESSAGE', function(data) {
            console.log(data)
            if(data.user !== user) {
                addResponseMessage(data.message);
            }
        });

    }, []
    )

    let handleNewUserMessage = (newMessage) => {
        props.socket.emit('SEND_MESSAGE', {
            user: user,
            message: newMessage
        });
    }

    return (
        <div className="Chat">
            <Widget handleNewUserMessage={handleNewUserMessage} title={`${props.contactname}`} subtitle={`${props.contactrole}`}></Widget>
        </div>
    )
}

export default Chat;