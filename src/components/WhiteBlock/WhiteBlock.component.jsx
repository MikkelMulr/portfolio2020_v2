import React from 'react';
import './WhiteBlock.style.scss';
export default function WhiteBlock({ width, page }) {
	const styles = {
		backgroundColor: '#fff',
		height: '70%',
		width: `${width}%`,
		position: 'absolute',
		bottom: '0',
		// left: '14rem',
		clipPath: 'polygon(90% 0, 100% 15%, 100% 100%, 0 100%, 0 0)',
		transition: 'width 0.35s linear',
		zIndex: '10'
	};
	return (
		<div className='WhiteBlock' style={styles}>
			{page === 'home' ? <p className='Deco-Two'>BREAK</p> : null}
		</div>
	);
}
