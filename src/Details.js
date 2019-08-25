import React from 'react';
import { Link } from 'react-router-dom';
import getGallery from './Gallery/get-gallery';

export default function Detailspage(props) {
	//get id from url
	let movieId = props.match.params.movie;

	//Get list of getGallery
	let movies = getGallery();
	// Find movie
	let movie = movies.find(movie => movieId === movie.id);

	//Destructure movie
	let {title, img} = movie;

	return (
		<div>
			<h1>{title}</h1>
			<img src={img} alt={title} />
			<Link to='/'>Back to Homepage</Link>
		</div>
	);
}
