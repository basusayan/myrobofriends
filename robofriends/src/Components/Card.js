import React from 'react';

const Card =(props)=>
{
	return(
	<div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 '>
	<img src={`https://robohash.org/${props.id}?50x50`} alt='robo'/>
	
	<p>{props.name}</p>
	<p>{props.username}</p>
	<p>{props.email}</p>
	</div>
	);
}
export default Card;