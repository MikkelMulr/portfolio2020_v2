import React from 'react';
import './Expanded.style.scss';

export default function Expanded({ title, desc, link, tech, returnTo }) {
	return (
		<div className='Expanded'>
			<div className='Expanded--tech'>
				<div className='Expanded--tech--icon' style={{ animation: `iconUp 1s ease-in-out 0.15s forwards` }}>
					<i className={`devicon-${tech[0]}`} />
				</div>
				<div className='Expanded--tech--icon' style={{ animation: `iconUp 1s ease-in-out 0.3s forwards` }}>
					<i className={`devicon-${tech[1]}`} />
				</div>
				<div className='Expanded--tech--icon' style={{ animation: `iconUp 1s ease-in-out 0.45s forwards` }}>
					<i className={`devicon-${tech[2]}`} />
				</div>
				<div className='Expanded--tech--icon' style={{ animation: `iconUp 1s ease-in-out 0.6s forwards` }}>
					<i className={`devicon-${tech[3]}`} />
				</div>
				<div className='Expanded--tech--icon' style={{ animation: `iconUp 1s ease-in-out 0.75s forwards` }}>
					<i className={`devicon-${tech[4]}`} />
				</div>
			</div>
			<section className='Expanded--main'>
				<div className='Expanded--main--preview'>
					<div className='Expanded--main--preview-img'>
						<div className='frame-back' />
						<div className='frame-front' style={{ backgroundImage: `url(${link})` }} />
					</div>
					<div className='Expanded--main--title'>
						<h2>{title}</h2>
					</div>
				</div>
				<p className='Expanded--main--preview-text'>{desc}</p>
			</section>

			<div className='Expanded--backbtn'>
				<h2 className='backbtn' onClick={() => returnTo(0)}>
					Back
				</h2>
			</div>
		</div>
	);
}
