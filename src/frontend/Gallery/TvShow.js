import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow({id, title, synopsis}) {
    return (
        <div className='cover' id={id}>
            <Link to={id} ><img src={require(`./img/${id}.jpeg`)} alt={title} />
            <div className="overlay">
                <h2>{title}</h2>
            </div>
            <div className='synopsis'>
                <h3>{synopsis}</h3>
            </div>
            </Link>
        </div>

    );
} 
