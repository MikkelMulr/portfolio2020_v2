import React from 'react';
import './ContentBox.style.scss';

export default function ContentBox({ bg, width, page }) {
	const styles = {
		backgroundColor: `${bg}`,
		height: '60%',
		width: `${width}%`,
		position: 'absolute',
		bottom: '1rem',
		clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%)',
		transition: 'width 0.35s linear',
		zIndex: '20'
	};
	return (
		<div className='ContentBox' style={styles}>
			{page === 'home' ? <p className='Deco-One'>CREATE</p> : null}
		</div>
	);
}
