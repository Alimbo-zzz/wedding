import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import item_decor from '@icons/leaves.svg';

const Scheduled = (props) => {
	const data = [
		{
			title: 'Сбор гостей с ресторане',
			description: 'Присутствие по желанию',
			address: 'Россия, Нальчик, ул. Пушкина 100',
			time: '12:00',
			link: 'https://address.com'
		},
		{
			title: 'Сбор гостей с ресторане',
			description: 'Присутствие по желанию',
			address: 'Россия, Нальчик, ул. Пушкина 100',
			time: '12:00',
			link: 'https://address.com'
		},
		{
			title: 'Сбор гостей с ресторане',
			description: 'Присутствие по желанию',
			address: 'Россия, Нальчик, ул. Пушкина 100',
			time: '12:00',
			link: 'https://address.com'
		},
		{
			title: 'Сбор гостей с ресторане',
			description: 'Присутствие по желанию',
			address: 'Россия, Нальчик, ул. Пушкина 100',
			time: '12:00',
			link: 'https://address.com'
		},
	]

	return (<>
		<section id="sec-scheduled" className={cls.scheduled}>
			<div className={classNames(['container', cls.scheduled__grid])}>
				<h2 className='title'>ПРОГРАММА СВАДЕБНОГО ДНЯ</h2>
				<ul className={cls.scheduled__list}>
					{data.map((el, i) => (<li key={i} className={cls.scheduled__item}>
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