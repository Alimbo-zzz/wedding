import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import img_decor from '@icons/rose-2.svg';

const Form = (props) => {

	function sendRequest(e) {
		e.preventDefault();
		console.log(e.target)
	}

	return (<>
		<section id="sec-form" className={cls.form}>
			<div className={classNames(["container", cls.form__cont])}>
				<h2 className='title _w'>ФОРМА ЗАПИСИ</h2>
				<form autoComplete='off' className={cls.form__grid} onSubmit={sendRequest}>
					<input required autoComplete='off' type="text" name='name' placeholder='Введите ваше имя и фамилию' />
					<input required autoComplete='off' type="number" name='phone' placeholder='Введите номер телефона' />
					<label>
						<p>Доп. информация</p>
						<textarea autoComplete='off' name='message' maxLength={800} placeholder='Можете перечислить людей с которыми вы явитесь или указать что-нибудь важное'></textarea>
					</label>
					<button type='submit' className={cls.form__button}>Отправить</button>
				</form>
			</div>
			<img src={img_decor} className={cls.form__decor} />
		</section>
	</>);
}

export default Form;