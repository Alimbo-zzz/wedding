import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import item_decor from '@icons/leaves.svg';

const Scheduled = (props) => {
	const data = [
		{
			title: 'Вывод невесты',
			description: 'Ресторан «Эльбрус»',
			address: 'Россия, Нальчик, Городской парк',
			time: '13:00',
			link: 'https://yandex.ru/maps/-/CDaQbO3~'
		},
		{
			title: 'Торжественная церемония',
			description: 'Ресторан «Bridge»',
			address: 'Россия, Нальчик, ул. Идарова, 2Б',
			time: '17:00',
			link: 'https://yandex.ru/maps/-/CDaQbSnp'
		}
	]

	return (<>
		<section id="sec-scheduled" className={cls.scheduled}>
			<div className={classNames(['container', cls.scheduled__grid])}>
				<h2 className='title' data-aos="zoom-out" >ПРОГРАММА СВАДЕБНОГО ДНЯ</h2>
				<ul className={cls.scheduled__list}>
					{data.map((el, i) => (<li key={i} data-aos="zoom-out" data-aos-delay={(i + 1) * 100} className={cls.scheduled__item}>
						<div className={cls.scheduled__title}>{el.title}</div>
						<div className={cls.scheduled__time}>{el.time}</div>
						<div className={cls.scheduled__description}>{el.description}</div>
						<a target='_blanck' href={el.link} className={cls.scheduled__address}>{el.address}</a>
						<img src={item_decor} className={cls.scheduled__decor} />
					</li>))}
				</ul>
			</div>
		</section>
	</>);
}

export default Scheduled;