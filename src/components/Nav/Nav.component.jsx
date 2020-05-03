import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCrow, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/logo.svg';
import './Nav.style.scss';

export default function Nav({ openclose, setPage, linkClicked }) {
	const [ navState, setNavState ] = useState('closeNav');

	useEffect(
		() => {
			setNavState(openclose);
		},
		[ openclose, navState ]
	);
	return (
		<div className='Nav' style={{ animation: `${navState} 0.45s ease-in-out forwards` }}>
			<div className='Nav--links'>
				<Link
					to='/'
					className={`Nav--links--link ${navState === 'openNav' ? 'linkAnim1' : null}`}
					onClick={() => {
						setPage('home');
						linkClicked();
					}}
				>
					Home
				</Link>
				<Link
					to='/about'
					className={`Nav--links--link ${navState === 'openNav' ? 'linkAnim2' : null}`}
					onClick={() => {
						setPage('about');
						linkClicked();
					}}
				>
					About
				</Link>
				<Link
					to='projects'
					className={`Nav--links--link ${navState === 'openNav' ? 'linkAnim3' : null}`}
					onClick={() => {
						setPage('projects');
						linkClicked();
					}}
				>
					Projects
				</Link>
				<Link
					to='contact'
					className={`Nav--links--link ${navState === 'openNav' ? 'linkAnim4' : null}`}
					onClick={() => {
						setPage('contact');
						linkClicked();
					}}
				>
					Contact
				</Link>
			</div>
			<div className='Nav--bar'>
				<img className='logo' src={logo} alt='logo' />
				<FontAwesomeIcon icon={faCoffee} />
				<FontAwesomeIcon icon={faCrow} />
				<FontAwesomeIcon icon={faMailBulk} />
			</div>
		</div>
	);
}