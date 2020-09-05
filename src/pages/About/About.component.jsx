import React from 'react';
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock.component';
import ContentBox from '../../components/ContentBox/ContentBox.component';
import Circles from '../../components/Circles/Circles.component';

import './About.style.scss';
export default function About() {
	return (
		<div className='About'>
			<WhiteBlock width={65} />
			<ContentBox width={65} bg='#00c2ff' page='about' />
			<h2 className='About--header'>ABOUT</h2>
			<article className='About--Content'>
				<section className='About--Left'>
					<p className='About--Left--text'>
						<span className='special'>
							Hey, I'm <span>Mike</span>
						</span>
					</p>
					<p className='About--Left--text'>
						A <span>web developer</span> from <span>Toronto</span>, Ontario.
					</p>
					<p className='About--Left--text'>
						Driven by a personal <span>desire</span> to <span>create</span> and <span>innovate</span>.
					</p>
				</section>
				<section className='About--Right'>
					<p className='About--Right--text'>
						Striving to build <span>modern</span>, <span>responsive</span> & <span>scalable</span> applications.
					</p>
				</section>
			</article>
			<Circles />
		</div>
	);
}
