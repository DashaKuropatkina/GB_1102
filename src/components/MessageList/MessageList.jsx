import React from 'react';

export const MessageList = ({ message }) => (
    <ul>
        {message.map((message) => (
            <li key={message.id}>
                {message.author}:{message.text}
            </li>
        ))}
    </ul>
);