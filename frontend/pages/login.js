import React, { createContext, useState } from 'react';
import Stepper from 'components/pages/auth/stepper';
import Input from 'UI/Input/input';
import Button from 'UI/button';
import Checkbox from 'UI/checkbox';
import CustomLink from 'UI/custom-link';

const Auth = () => {
	const [auth, setAuth] = useState({
		name: '',
		pass: '',
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

	const submit = e => {
		e.preventDefault();
	};

	return (
		<div className={'auth'}>
			<h1 className="auth_title">Вход</h1>
			<form className="auth-form">
				<div className="auth-form_block">
					<Input value={auth.name} label={'Имя'} size={'small'} />
				</div>
				<div className="auth-form_block">
					<Input pass={true} label={'Пароль'} size={'small'} />
				</div>
				<div className="auth-form_footer">
					<Button style={{ margin: 'auto' }} size={'s'} factor={'green'}>
						Вход
					</Button>
				</div>
				<div className="auth-form_block">
					<CustomLink
						style={{ margin: 'auto' }}
						href={'/auth-user'}
						className="auth-form__link">
						У меня нет аккаунта
					</CustomLink>
				</div>
			</form>
		</div>
	);
};

export default Auth;
