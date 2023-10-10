import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
// images
import img_1 from '@images/1.png';
import img_2 from '@images/2.png';
import img_3 from '@images/3.png';
import decor_1 from '@icons/feather.svg';
import decor_2 from '@icons/rose_l.svg';
import decor_3 from '@icons/rose_r.svg';

const About = (props) => {

	return (<>
		<section id='sec-about' className={cls.about}>
			<div className={classNames(["container", cls.about__grid])}>
				<h1 className='title' data-aos="zoom-out">Ахмед & Регина</h1>
				<div className='text' style={{ position: 'relative' }}>
					<p>Дорогие гости!</p>
					<p>Мы рады сообщить вам о том, что состоится торжественный праздник, посвященный нашему бракосочетанию.</p>
					<p>Решив однажды и навечно свои пути соединить.</p>
					<p>Мы приглашаем вас разделить с нами радость этого долгожданного события!</p>
					<p>Увидимся на нашей свадьбе!</p>
					<img src={decor_1} className={cls.about__decor_1} />
				</div>

				<div className={cls.about__gallery} >
					<img data-aos="fade-left" data-aos-delay="100" src={img_1} data-order='1' className={cls.about__picture} />
					<img data-aos="fade-right" data-aos-delay="200" src={img_2} data-order='3' className={cls.about__picture} />
					<img data-aos="fade-left" data-aos-delay="300" src={img_3} data-order='2' className={cls.about__picture} />
					<div data-decor='container' data-aos-delay="200" data-aos="zoom-in-down">
						<img src={decor_2} data-decor='left' />
						<img src={decor_3} data-decor='right' />
					</div>
				</div>
			</div>
		</section>
	</>);
}

export default About;