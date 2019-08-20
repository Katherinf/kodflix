import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props) {
    return (
        <div className="cover">
            <Link to={props.title} ><img src={props.img} alt={props.title} />
            <div className="overlay">
                <h2>{props.title}</h2>
            </div>
            </Link>
        </div>

    );
} 
