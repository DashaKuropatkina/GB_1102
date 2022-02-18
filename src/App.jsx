import React, { useEffect, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { nanoid } from 'nanoid';

const defaultMessages = [
    {
        id: 1,
        author: 'Geekbrains',
        text: 'Welcome to the chat',
    },
];

export const App = () => {
    const [messages, setMessages] = useState(defaulMessages);

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author === 'User') {
            const timeout = setTimeout(
                () =>
                    handleSendMessage({
                        text: 'Im BOT',
                        author: 'BOT',
                    }), 1500
            );

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [messages]);

    const handleSendMessage = useCallback(
        ({ text, author }) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: nanoid(),
                    author,
                    text,
                },
            ]);
        },
        []
    );

    return (
        <>
            <h1>Welcome to react</h1>
            <MessageList messages={messages} />
            <Form addMessage={handleSendMessage} />
        </>
    );
};