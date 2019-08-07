import React from 'react';
import logo from './logo.jpg';
import blackmirror from './blackmirror.jpeg';
import breakingbad from './breakingbad.jpeg';
import deathnote from './deathnote.jpeg';
import gameofthrones from './gameofthrones.jpeg';
import thewalkingdeath from './thewalkingdeath.jpeg';
import thewire from './thewire.jpeg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>INCEPTION</h1>
        <div className="hero-img">
        <img className="hero" src={logo} alt="Logo" />
        </div>
      </div>
      <div className="container">
        <h1>TV SHOW</h1>
        <div className="rowList">
            <img className="resize" src={blackmirror} alt="movie" />
            <img className="resize"src={breakingbad} alt= "movie" />
            <img className="resize"src={deathnote} alt= "movie" />
        </div>
        <div className="rowList">
            <img className="resize" src={gameofthrones} alt= "movie" />
            <img className="resize" src={thewalkingdeath} alt= "movie" />
            <img className="resize" src={thewire} alt= "movie" />
          </div>
        </div>
    </>
  );
}

export default App;