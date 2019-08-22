import React from 'react';
import './Gallery.css';
import TvShow from './TvShow';
import getGallery from './get-gallery';

export default function Gallery() {
  return (
    <>
      <h1 className="rowlist-text">TV SHOW</h1>
      <div className="rowlist-container">
        {getGallery().map(show => <TvShow 
          key={show.id} 
          id={show.id} 
          title={show.title} 
          img={show.img} />
        )}
      </div>
    </>
  );
}