import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'

const Timer = ({ className = '' }) => {
	const [time, setTime] = useState(new Date());
	const items = [
		{ value: 'day', name: 'дней' },
		{ value: 'hour', name: 'часов' },
		{ value: 'min', name: 'минут' },
		{ value: 'sec', name: 'секунд' },
	];

	useEffect(() => {
		const secondInterval = setInterval(() => setTime(new Date()), 1000);
		return () => { clearInterval(secondInterval); }
	}, [])


	function getTime(nowDate, type) {
		const deadline = new Date(2023, 10, 15);
		const diff = new Date(deadline - new Date());
		let result = '';

		let day = String(diff.getDate()).padStart(2, '0');
		let hour = String(diff.getHours()).padStart(2, '0');
		let min = String(diff.getMinutes()).padStart(2, '0');
		let sec = String(diff.getSeconds()).padStart(2, '0');

		(type === 'day') && (result = day);
		(type === 'hour') && (result = hour);
		(type === 'min') && (result = min);
		(type === 'sec') && (result = sec);

		return result;
	}


	return (<>
		<ul className={classNames([className, cls.timer])}>
			{items.map((el, i) => (<li data-aos-delay={(i + 2) * 100} data-aos='flip-left' key={el.value} className={cls.timer__item}>
				<strong>{getTime(time, el.value)}</strong>
				<small>{el.name}</small>
			</li>))}
		</ul>
	</>);
}

export default Timer;