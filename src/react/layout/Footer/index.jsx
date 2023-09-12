import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { Newlyweds } from '@/react/components';
import img_decor from '@icons/circles.svg';
import img_arrow from '@icons/arrow-top.svg';

const Footer = (props) => {

	return (<>
		<div className={cls.arrow}><img src={img_arrow} /></div>
		<footer className={cls.footer}>
			<div className={classNames(['container', cls.footer__grid])}>
				<Newlyweds />
				<div className={cls.footer__created}>
					Invitation site © 2023 г.
				</div>
				<img src={img_decor} className={cls.footer__decor} />
			</div>
		</footer>
	</>);
}

export default Footer;