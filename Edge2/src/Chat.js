import React, { useState, useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import './Chat.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import io from 'socket.io-client';

let Chat = (props) => {

    let socket = io('http://192.168.1.4:8080')
    console.log(socket)
    let [ user, setUser ] = useState('Jerry')

    useEffect(() => {
        socket.on('RECEIVE MESSAGE', function(data) {
            console.log(data)
            if(data.user !== user) {
                addResponseMessage(data.message);
            }
        });

        return () => {
            socket.close()
        }, [socket]
    })

    let handleNewUserMessage = (newMessage) => {
        socket.emit('SEND MESSAGE', {
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