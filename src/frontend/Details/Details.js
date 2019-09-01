import React from 'react';
import { Link } from 'react-router-dom';
import getGallery from '../Gallery/get-gallery';
import { Redirect } from 'react-router';
import './Details.css'

export default function Detailspage(props) {
	//get id from url
	let movieId = props.match.params.movie;
	//Get list of getGallery
	let movies = getGallery();
	// Find movie
	let movie = movies.find(movie => movieId === movie.id);

	if (movie === undefined) {
		return <Redirect to='/not-found' />
	}

	//Destructure movie
	let {title, img, synopsis} = movie;

	return (
		<div>
			<h1>{title}</h1>
			<div className='container'>
				<div className='left'>
			<p>{synopsis}</p>
			</div>
			<div className='right'>
			<img src={img} alt={title} className='details-cover'/>
			</div>
			</div>
			<div className='details-button'>
			<Link to='/' className='button'><span>Back to Homepage</span></Link>
			</div>
		</div>
	);
}
