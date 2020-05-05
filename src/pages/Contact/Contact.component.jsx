import React from 'react';
import './Contact.style.scss';
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock.component';
import ContentBox from '../../components/ContentBox/ContentBox.component';
import Circles from '../../components/Circles/Circles.component';

export default function Contact() {
	let viewWidth = window.innerWidth < 767 ? 'contLinkSide' : 'contLinkUp';

	return (
		<div className='Contact'>
			<WhiteBlock width={65} />
			<ContentBox width={65} bg='#00ffd1' page='contact' />
			<header className='Contact--header'>
				<h2>CONTACT</h2>
			</header>
			<div className='Contact--links'>
				<a
					className='Contact--links--link'
					href='https://www.linkedin.com/in/michael-mueller-10a092161/'
					target='_blank'
					rel='noopener noreferrer'
					style={{ animation: `${viewWidth} 0.45s ease-in-out 1s forwards` }}
				>
					LINKEDIN
				</a>
				<a
					className='Contact--links--link'
					href='https://github.com/MikkelMulr'
					target='_blank'
					rel='noopener noreferrer'
					style={{ animation: `${viewWidth} 0.45s ease-in-out 1.2s forwards` }}
				>
					GITHUB
				</a>
				<a
					className='Contact--links--link'
					href='mailto:muellerm.dev@gmail.com?subject=portfolio contact'
					style={{ animation: `${viewWidth} 0.45s ease-in-out 1.4s forwards` }}
				>
					EMAIL
				</a>
				<a
					className='Contact--links--link'
					href='#'
					style={{ animation: `${viewWidth} 0.45s ease-in-out 1.6s forwards` }}
				>
					RESUME
				</a>
			</div>
			<Circles />
		</div>
	);
}
