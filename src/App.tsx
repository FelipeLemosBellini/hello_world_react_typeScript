import React from 'react';
import './App.css';
import EventButton from './components/EventButton';
import CounterButton from './components/CounterButton';
import TextWelcome from './components/TextWelcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='App-link'>Hello World</h2>
        <TextWelcome />
        <EventButton />
        <CounterButton />
      </header>
    </div>
  );
}



export default App;
