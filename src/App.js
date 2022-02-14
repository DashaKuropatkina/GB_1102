import './App.css';
import React from 'react';
import { Message } from './components/Message/Message';

const title = "React";
const message = "JavaScript-библиотека для создания пользовательских интерфейсов";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Message title={title} message={message} />
      </header>
    </div>
  );
}


