import React, { createContext, useState } from 'react';
import Stepper from 'components/pages/auth/stepper';
import Input from 'UI/Input/input';
import Button from 'UI/button';
import Checkbox from 'UI/checkbox';
import CustomLink from 'UI/custom-link';

export const AuthContext = createContext({});

const Auth = () => {
	const [auth, setAuth] = useState({
		name: '',
		address: '',
		INN: '',
		OGRN: '',
		type: '',
		phone: '',
		confirmPhone: '',
		email: '',
		pass: '',
		confirmPass: '',
		agreement: false,
	});
	const changeData = e => {
		const name = e.target.name;
		if (name === 'agreement') {
			setAuth(prevState => ({ ...prevState, agreement: !prevState.agreement }));
		} else {
			const value = e.target.value;
			setAuth(prevState => ({ ...prevState, [name]: value }));
		}
	};
	return (
		<div className={'auth'}>
			<h1 className="auth_title">Регистрация</h1>
			<div className="auth-form">
				<div className="auth-form_title">
					<h1 className={'title'}>Заполните информацию для входа</h1>
				</div>
				<div className="auth-form_block">
					<Input label={'Имя'} size={'small'} />
					<Input label={'Номер телефона'} size={'small'} />
					<Button disabled={true} style={{ maxWidth: 230 }} size={'xs'} factor={'ghost'}>
						Отправить код подтверждения
					</Button>
					<Input label={'Код подтверждения'} size={'small'} />
				</div>
				<div className="auth-form_block">
					<Input pass={true} label={'Пароль'} size={'small'} />
					<Input pass={true} label={'Подтверждение пароля'} size={'small'} />
				</div>
				<Checkbox>
					Я подтверждаю свое согласие на обработку{' '}
					<span className="auth-form__link">персональных данных</span>
				</Checkbox>
				<div className="auth-form_footer">
					<Button style={{ margin: 'auto' }} disabled={true} size={'s'} factor={'green'}>
						Закончить регистрацию
					</Button>
				</div>
				<div className="auth-form_block">
					<CustomLink
						style={{ margin: 'auto' }}
						href={'/login'}
						className="auth-form__link">
						У меня уже есть аккаунт
					</CustomLink>
				</div>
			</div>
		</div>
	);
};

export default Auth;
