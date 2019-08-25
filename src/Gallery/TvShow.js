import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow({id, title, img}) {
    return (
        <div className='cover' id={id}>
            <Link to={id} ><img src={img} alt={title} />
            <div className="overlay">
                <h2>{title}</h2>
            </div>
            </Link>
        </div>

    );
} 
