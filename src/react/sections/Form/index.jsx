import React, { useState, useEffect, useRef } from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import img_decor from '@icons/rose-2.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {
	const [requestLoad, setRequestLoad] = useState(false);
	const [showResponse, setShowResponse] = useState({ show: false, message: "сообщение от сервера" });
	const [phoneNumber, setPhoneNumber] = useState("");
	const formRef = useRef(null);

	const formReset = () => {
		formRef.current?.reset();
		setPhoneNumber('')
	};

	async function sendRequest(e) {
		e.preventDefault();
		const url = 'https://wedding-server-omega.vercel.app/send-message';
		const headers = { "Content-Type": 'multipart/form-data' }
		const data = new FormData(e.target);
		const userId = window.localStorage.getItem("wedding-user-id");
		(userId) && (data.set("id", userId));

		setRequestLoad(true);
		const notice_load = toast.loading("Отправляем данные")

		try {
			const request = await axios({ url, headers, method: 'post', data })
			window.localStorage.setItem("wedding-user-id", request.data.data.id)
			toast.success(request.data.message);
			formReset();
		} catch (error) {
			console.log(error);
			toast.error(request?.data?.message || 'Ошибка!');
		}
		finally {
			setRequestLoad(false);
			toast.dismiss(notice_load);
		}
	}

	return (<>
		<section id="sec-form" className={cls.form}>
			<div className={classNames(["container", cls.form__cont])}>
				<h2 className='title _w' data-aos="zoom-out">ФОРМА ЗАПИСИ</h2>
				<form ref={formRef} autoComplete='off' className={cls.form__grid} onSubmit={sendRequest}>
					<input required autoComplete='off' type="text" name='name' placeholder='Введите ваше имя и фамилию' />
					<InputMask value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required mask="+7(999) 999 99-99" placeholder='Введите номер телефона' name='phone' type='tel' />
					<label>
						<p>Доп. информация</p>
						<textarea autoComplete='off' name='message' maxLength={800} placeholder='Можете перечислить людей с которыми вы явитесь или указать что-нибудь важное'></textarea>
					</label>
					<button type='submit' disabled={requestLoad} className={cls.form__button}>Отправить</button>
				</form>
			</div>
			<img src={img_decor} className={cls.form__decor} />
		</section>
		<ToastContainer />
	</>);
}

export default Form;