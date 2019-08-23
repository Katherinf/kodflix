import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Detailspage() {
	const [message, setMessage] = useState('Hello, this will be the details page for each Movie & TV show :)');
	useEffect(() => {
		setTimeout(() => {
			setMessage("Coming Soon! :)");
		}, 3000);
	});


	return (
		<div>
			<h1>{message}</h1>
			<Link to='/'>Back to Homepage</Link>
		</div>
	);
}


