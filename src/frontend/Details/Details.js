import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './Details.css'
import Loading from './Loading/Loading.js';

export default function Detailspage(props) {
	//get id from url
	// let movieId = props.match.params.movie;
	const [movie, setMovie] = useState({});
	let movieId = props.match.params.movie;
	console.log(movieId)
	//Get list of getGallery
	useEffect(() => {		// Find movie
		fetch('/rest/shows')
		.then(res => res.json())
		.then(data => {
			setMovie(data.find(movie => movieId === movie.id))
			});
			}, [movieId]);

	  if (movie === undefined) {
		    return <Redirect to='/not-found' />
		  }

		else if (movie.id === undefined) {
		return 	<Loading></Loading>
	}

		//Destructure movie
		let {title, id, synopsis} = movie;
	return (
		<div>
			<h1>{title}</h1>
			<div className='container'>
				<div className='left'>
			<p>{synopsis}</p>
			</div>
			<div className='right'>
			<img src={require(`../Gallery/img/${id}.jpeg`)} alt={title} className='details-cover'/>
			</div>
			</div>
			<div className='details-button'>
			<Link to='/' className='button'><span>Back to Homepage</span></Link>
			</div>
		</div>
	);
}
