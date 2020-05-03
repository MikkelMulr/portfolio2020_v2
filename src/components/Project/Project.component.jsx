import React from 'react';

import './Project.style.scss';
export default function Project({ details, prev }) {
	return (
		<div className='Project'>
			<div className='Project--frame-back' />
			<div className='Project--frame-front' style={{ backgroundImage: `url(${prev})` }} />
			<div className='Project--title'>
				<h2>{details.title}</h2>
			</div>
		</div>
	);
}
