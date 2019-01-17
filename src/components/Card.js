import React from 'react';

const Card = ({id, name, email, username}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'> 
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name} </h2>
				<p>{username} </p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;