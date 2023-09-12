import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import img_mark from '@icons/map-mark.svg';
import img_map from '@images/map.png';

const Map = (props) => {

	return (<>
		<section id='sec-map' className={cls.map}>
			<div className={classNames(['container', cls.map__grid])}>
				<h2 className='title'>СВАДЕБНЫЙ УЖИН</h2>
				<img src={img_mark} />
				<h3>Ресторан</h3>
				<p className='text'>Россия, Нальчик, ул. Ленина 100</p>
			</div>
			<div className={cls.map__preview}>
				<img src={img_map} />
			</div>
		</section>
	</>);
}

export default Map;