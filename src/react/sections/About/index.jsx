import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
// images
import img_1 from '@images/gallery-1.png';
import img_2 from '@images/gallery-4.png';
import img_3 from '@images/gallery-3.png';
import img_4 from '@images/gallery-2.png';
import decor_1 from '@icons/rose.svg';
import decor_2 from '@icons/feather.svg';

const About = (props) => {

	return (<>
		<section id='sec-about' className={cls.about}>
			<div className={classNames(["container", cls.about__grid])}>
				<h1 className='title' data-aos="zoom-out">Ахмед & Регина</h1>
				<div className='text' style={{ position: 'relative' }}>
					<p>Дорогие друзья!</p>
					<p>Мы рады сообщить вам о том, что состоится торжественный праздник, посвященный нашему бракосочетанию.</p>
					<p>Решив однажды и навечно свои пути соединить.</p>
					<p>Мы приглашаем вас разделить с нами радость этого долгожданного события!</p>
					<p>Увидимся на нашей свадьбе!</p>
					<img src={decor_2} className={cls.about__decor_1} />
				</div>

				<div className={cls.about__gallery} data-aos="zoom-in-down" data-aos-delay="50">
					<img src={img_1} data-order='1' className={cls.about__picture} />
					<img src={img_2} data-order='3' className={cls.about__picture} />
					<img src={img_3} data-order='2' className={cls.about__picture} />
					<img src={img_4} data-order='4' className={cls.about__picture} />
				</div>

				<img src={decor_1} className={cls.about__decor} />
			</div>
		</section>
	</>);
}

export default About;