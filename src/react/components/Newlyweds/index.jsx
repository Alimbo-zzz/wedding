import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import heart from '@icons/heart.svg';

const Newlyweds = ({ className = '' }) => {

	return (<>
		<div className={classNames([className, cls.newlyweds])}>
			Ахмед
			<img src={heart} />
			Регина
		</div>
	</>);
}

export default Newlyweds;