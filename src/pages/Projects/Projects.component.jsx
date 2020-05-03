import React, { useState, useEffect } from 'react';
import './Projects.style.scss';
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock.component';
import ContentBox from '../../components/ContentBox/ContentBox.component';
import Project from '../../components/Project/Project.component';
import Expanded from '../../components/Project/Expanded/Expanded.component';
import lakeridge from '../../assets/img/lakebg.png';
import tymed from '../../assets/img/tymed.png';

export default function Projects() {
	const [ viewState, setViewState ] = useState(0);

	const handleShowProject = (proj) => {
		setViewState(proj);
	};

	const projectDetails = [
		{
			title: 'Tymed',
			link: tymed,
			tech: [ 'react-original', 'nodejs-plain', 'javascript-plain', 'html5-plain', 'sass-original' ],
			desc:
				'A mobile-first medical timer application, designed to make the tedious task of keeping your medication intake less of a hassle.'
		},
		{
			title: 'LakeRidge Health',
			link: lakeridge,
			tech: [ 'vuejs-plain', 'nodejs-plain', 'javascript-plain', 'html5-plain', 'css3-plain' ],
			desc:
				'A fact vs fiction informative application built for LakeRidge Health, designed to dispell common myths about clinical trials.'
		},
		{
			title: 'ChatStream',
			link: '#',
			tech: [ 'react-original', 'nodejs-plain', 'javascript-plain', 'html5-plain', 'sass-original' ],
			desc: ''
		}
	];

	useEffect(
		() => {
			console.log('updated view');
		},
		[ viewState ]
	);

	return (
		<div className='Projects'>
			<WhiteBlock width={65} />
			<ContentBox width={65} bg='#ff9900' page='projects' />
			<header className='Projects--header'>
				<h2>PROJECTS</h2>
			</header>
			{viewState === 0 ? (
				<section className='Projects--cards'>
					<div
						className='Projects--cards--card'
						style={{ animation: `projectUp 1s ease-in-out 0.25s forwards` }}
						onClick={() => handleShowProject(1)}
					>
						<Project details={projectDetails[0]} prev={tymed} />
					</div>
					<div
						className='Projects--cards--card'
						style={{ animation: `projectUp 1s ease-in-out 0.5s forwards` }}
						onClick={() => handleShowProject(2)}
					>
						<Project details={projectDetails[1]} prev={lakeridge} />
					</div>
					<div
						className='Projects--cards--card'
						style={{ animation: `projectUp 1s ease-in-out 0.75s forwards` }}
						onClick={() => handleShowProject(3)}
					>
						<Project details={projectDetails[2]} />
					</div>
				</section>
			) : viewState === 1 ? (
				<Expanded
					title={projectDetails[0].title}
					tech={projectDetails[0].tech}
					desc={projectDetails[0].desc}
					link={projectDetails[0].link}
					returnTo={handleShowProject}
				/>
			) : viewState === 2 ? (
				<Expanded
					title={projectDetails[1].title}
					tech={projectDetails[1].tech}
					desc={projectDetails[1].desc}
					link={projectDetails[1].link}
					returnTo={handleShowProject}
				/>
			) : viewState === 3 ? (
				<Expanded
					title={projectDetails[2].title}
					tech={projectDetails[2].tech}
					desc={projectDetails[2].desc}
					link={projectDetails[2].link}
					returnTo={handleShowProject}
				/>
			) : (
				<h2 style={{ zIndex: '99999999', fontSize: '5rem', color: '#fff', width: '50%' }}>Hmm something went wrong</h2>
			)}
		</div>
	);
}
