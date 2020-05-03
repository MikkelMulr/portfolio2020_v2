import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.component';
import About from './pages/About/About.component';
import Projects from './pages/Projects/Projects.component';
import Contact from './pages/Contact/Contact.component';
import Nav from './components/Nav/Nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCrow, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/img/logo.svg';
import './App.css';

function App() {
	const [ nav, setNav ] = useState('closeNav');
	const [ current, setCurrent ] = useState('home');
	const [ bg, setBg ] = useState('');

	useEffect(
		() => {
			let urls = window.location.href.split('/');
			let loc = urls[urls.length - 1];
			if (loc.length === 0) {
				setCurrent('/');
			} else {
				setCurrent(loc);
			}

			if (current === 'home') {
				setBg('bg-red');
			} else if (current === 'about') {
				setBg('bg-blue');
			} else if (current === 'projects') {
				setBg('bg-gold');
			} else if (current === 'contact') {
				setBg('bg-green');
			}
		},
		[ current ]
	);

	const handleUpdateCurrent = (page) => {
		setCurrent(page);
	};

	const handleNavEvent = () => {
		if (nav === 'closeNav') {
			setNav('openNav');
		} else {
			setNav('closeNav');
		}
	};

	return (
		<div className='App'>
			<Nav openclose={nav} setPage={handleUpdateCurrent} linkClicked={handleNavEvent} />
			<nav className='App--nav'>
				<div className='linkIcons' style={{ opacity: `${nav === 'closeNav' ? '0.8' : '0.15'}` }}>
					<Link to='/' onClick={() => setCurrent('home')}>
						<img className='logo' src={logo} alt='logo' />
					</Link>
					<Link to='/about' onClick={() => setCurrent('about')}>
						<FontAwesomeIcon icon={faCoffee} />
					</Link>
					<Link to='/projects' onClick={() => setCurrent('projects')}>
						<FontAwesomeIcon icon={faCrow} />
					</Link>
					<Link to='/contact' onClick={() => setCurrent('contact')}>
						<FontAwesomeIcon icon={faMailBulk} />
					</Link>
				</div>
				<div className='nav-button' onClick={handleNavEvent}>
					<div className='nav-button--inner' />
				</div>
			</nav>
			<header className='App--header'>
				<h1>Mike</h1>
			</header>
			<section className='App--content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</section>
			<div className='circleOne' />
			<div className='circleTwo' />
			<article className={`App--right ${bg}`}>
				<h1>Mueller</h1>
			</article>
		</div>
	);
}

export default App;
