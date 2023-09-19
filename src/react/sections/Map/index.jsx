import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import img_mark from '@icons/map-mark.svg';
import img_map from '@images/map.png';

import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';



const MapPreview = (props) => {
	const position = [43.47508673024159, 43.60415717902467];

	return (<>
		<MapContainer center={position} zoom={17} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					Основная церемония
				</Popup>
			</Marker>
		</MapContainer>
	</>)
}



const Map = (props) => {

	return (<>
		<section id='sec-map' className={cls.map}>
			<div className={classNames(['container', cls.map__grid])}>
				<h2 className='title' data-aos="zoom-out">СВАДЕБНЫЙ УЖИН</h2>
				<img src={img_mark} data-aos="zoom-out" />
				<h3>Ресторан</h3>
				<p className='text'>Россия, Нальчик, ул. Ленина 100</p>
			</div>
			<div className={cls.map__preview}>
				<MapPreview />
			</div>
		</section>
	</>);
}

export default Map;