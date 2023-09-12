import React from 'react';
import cls from './style.module.scss';
import { Intro, About, Scheduled, Map, Form } from '@/react/sections';
import { Footer } from '@/react/layout';

const Landing = (props) => {

	return (<>
		<div className="wrapper">
			<Intro />
			<hr />
			<About />
			<Scheduled />
			<Form />
			<Map />
			<Footer />
		</div>
	</>);
}

export default Landing;