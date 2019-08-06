import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>INCEPTION</h1>
        <img src={logo} alt="Logo" />
      </div>
      <div class="container">
        <h1>Other Movies</h1>
        <ul class="rowList">
            <li>Black Mirror</li>
            <li>Breaking Bad</li>
            <li>Death Note</li>
        </ul>
        <ul class="rowList">
            <li>Game of Thrones</li>
            <li>The Walking Death</li>
            <li>The Wire</li>
          </ul>
        </div>
    </>
  );
}

export default App;