import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { Timer, Newlyweds } from '@/react/components';
import intro_bg from '@images/preview.png';
import intro_layer from '@images/layer-1.png';


const Intro = (props) => {

	return (<>
		<section id='sec-intro' className={cls.intro}>
			<div className={classNames(['container', cls.intro__grid])}>
				<header className={cls.intro__head}>
					<Newlyweds />
					<div className={cls.intro__date}>15.10.2023</div>
				</header>

				<Timer className={cls.intro__timer} />
			</div>
			<img src={intro_bg} className={cls.intro__bg} />
			<img src={intro_layer} className={cls.intro__layer} />
		</section>
	</>);
}

export default Intro;