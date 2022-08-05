import React, { createContext, useState } from 'react';
import Stepper from 'components/pages/auth/stepper';

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
			<Stepper data={auth} onChange={changeData} />
		</div>
	);
};

export default Auth;
