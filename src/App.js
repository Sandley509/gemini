import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';



function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Chat /> */}
      <Login />

      <div className="container">
        {/* Add other components here */}
      </div>
    </div>
  );
}

export default App;
