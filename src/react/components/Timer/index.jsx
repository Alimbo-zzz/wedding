import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'

const Timer = ({ className = '' }) => {
	const [finishTime] = useState(1697364000000);
	const [diff, setDiff] = useState([0, 0, 0, 0]);
	const [tick, setTick] = useState(false);
	const items = [
		{ value: 'day', name: 'дней' },
		{ value: 'hour', name: 'часов' },
		{ value: 'min', name: 'минут' },
		{ value: 'sec', name: 'секунд' },
	];



	useEffect(() => {
		const diff = (finishTime - new Date()) / 1000;
		if (diff < 0) return // время вышло
		setDiff([
			Math.floor(diff / 86400), // дни
			Math.floor((diff / 3600) % 24),
			Math.floor((diff / 60) % 60),
			Math.floor(diff % 60)
		])
	}, [tick, finishTime])

	useEffect(() => {
		const timerID = setInterval(() => setTick(!tick), 1000);
		return () => clearInterval(timerID);
	}, [tick])


	const getStrTime = (value) => String(value).padStart(2, '0');



	return (<>
		<ul className={classNames([className, cls.timer])}>
			{items.map((el, i) => (<li data-aos-delay={(i + 2) * 100} data-aos='flip-left' key={el.value} className={cls.timer__item}>
				<strong>{getStrTime(diff[i])}</strong>
				<small>{el.name}</small>
			</li>))}
		</ul>
	</>);
}

export default Timer;