import React from 'react';
import './Home.style.scss';
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock.component';
import ContentBox from '../../components/ContentBox/ContentBox.component';
export default function Home() {
	return (
		<div className='Home'>
			<WhiteBlock width={50} page='home' />
			<ContentBox width={48} bg='#ff2e00' page='home' />
			<section className='Home--Decos'>
				<p className='Decos-Main'>ITERATE</p>
				<p className='Decos-sub sub1'>ITERATE</p>
				<p className='Decos-sub sub2'>ITERATE</p>
				<p className='Decos-sub sub3'>ITERATE</p>
				<p className='Decos-sub sub4'>ITERATE</p>
				<p className='Decos-sub sub5'>ITERATE</p>
			</section>
		</div>
	);
}
