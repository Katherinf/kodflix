import React from 'react';
import './Gallery.css';
import blackmirror from './img/blackmirror.jpeg';
import breakingbad from './img/breakingbad.jpeg';
import deathnote from './img/deathnote.jpeg';
import gameofthrones from './img/gameofthrones.jpeg';
import thewalkingdeath from './img/thewalkingdeath.jpeg';
import thewire from './img/thewire.jpeg';
import TvShow from './TvShow';

export default function Gallery() {
  return (
    <>
    <h1 className="rowlist-text">TV SHOW</h1>
    <div className="rowlist-container">
        <TvShow title="Black Mirror" img={blackmirror} />
        <TvShow title="Breaking Bad" img={breakingbad} />
        <TvShow title="Death Note" img={deathnote} />
        <TvShow title="Game of Thrones" img={gameofthrones} />
        <TvShow title="The Walkig Death" img={thewalkingdeath} />
        <TvShow title="The Wire" img={thewire} />
    </div>
    </>
  );
}