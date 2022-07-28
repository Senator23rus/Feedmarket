import React, { useState } from 'react';
import Input from 'UI/Input/input';
import Button from 'UI/button';
import { useRouter } from 'next/router';
import { usePhoneMask } from 'hooks/usePhoneMask';

const RefreshPass = () => {
	const [auth, setAuth] = useState({
		phone: '',
		code: '',
	});
	const [code, setCode] = useState(false);
	const [timer, setTimer] = useState(null);
	const changeAuthHandler = e => {
		console.log(e);
		const name = e.target.name;
		const value = e.target.value;
		setAuth(prevState => ({ ...prevState, [name]: value }));
	};
	const changePhone = usePhoneMask(changeAuthHandler);
	const router = useRouter();
	const startTimer = e => {
		e.preventDefault();
		const time = new Date();
		setCode(true);
		time.setMinutes(0);
		time.setSeconds(15);
		setTimer(
			time.getMinutes() +
				':' +
				(time.getSeconds() < 10
					? '0' + time.getSeconds().toString()
					: time.getSeconds().toString())
		);
		let interval = setInterval(() => {
			time.setSeconds(time.getSeconds() - 1);
			const str =
				time.getMinutes() +
				':' +
				(time.getSeconds() < 10
					? '0' + time.getSeconds().toString()
					: time.getSeconds().toString());
			setTimer(str);
			if (/0:00/g.test(str)) {
				setTimer(null);
				clearInterval(interval);
			}
		}, 1000);
	};
	const changeData = e => {
		const name = e.target.name;
		const value = e.target.value;
		setAuth(prevState => ({ ...prevState, [name]: value }));
	};

	const submit = e => {
		e.preventDefault();
	};

	return (
		<div className={'auth'}>
			<h1 className="auth_title">Восстановление пароля</h1>
			<form className="auth-form">
				<div className="auth-form_block">
					<span className="auth-form__refresh-title">
						Напишите номер телефона указанный при регистрации чтобы мы отправили на него
						код подтверждения
					</span>
					<Input
						name={'phone'}
						value={auth.phone}
						onChange={changePhone}
						label={'Номер телефона'}
						size={'small'}
					/>
					{code && (
						<Input
							value={auth.code}
							onChange={changeAuthHandler}
							name={'code'}
							label={'Код подтверждения'}
							size={'small'}
						/>
					)}
					{timer && (
						<span className="auth-form__refresh-mute">
							Повторно можно будет отправить через {timer}
						</span>
					)}
					{code && !timer && (
						<span
							style={{ fontSize: 12 }}
							className="auth-form__link"
							onClick={startTimer}>
							Отправить код повторно
						</span>
					)}
				</div>
				<div className="auth-form_footer">
					<Button
						disabled={
							(code && !auth.code) || !/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/g.test(auth.phone)
						}
						onClick={startTimer}
						style={{ margin: 'auto' }}
						size={'s'}
						factor={'green'}>
						{code ? 'Продолжить' : 'Отправить код подтверждения'}
					</Button>{' '}
				</div>
				<div className="auth-form_block">
					<span
						onClick={() => router.back()}
						style={{ margin: 'auto' }}
						className="auth-form__link">
						Попробую вспомнить пароль
					</span>
				</div>
			</form>
		</div>
	);
};

export default RefreshPass;
