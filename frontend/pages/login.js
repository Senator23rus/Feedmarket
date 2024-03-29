import React, { useEffect, useState } from 'react';
import Input from 'UI/Input/input';
import Button from 'UI/button';
import CustomLink from 'UI/custom-link';
import { wrapper } from 'store';
import api from 'api';
import { useRouter } from 'next/router';
import { useAsyncThunk } from 'hooks/use-async-thunk';
import { useSelector } from 'react-redux';

const Login = () => {
	// const state = useSelector(state => state);

	const { loggedIn } = useAsyncThunk();

	const { isAuth, token, isLoading } = useSelector(
		/**@param{StateApp} state*/ state => state.user
	);
	const store = useSelector(/**@param{StateApp} state*/ state => state);

	const [auth, setAuth] = useState({
		username: '',
		password: '',
	});

	const changeData = e => {
		const name = e.target.name;
		const value = e.target.value;
		setAuth(prevState => ({ ...prevState, [name]: value }));
	};

	const router = useRouter();

	const submit = e => {
		e.preventDefault();
		loggedIn(auth);
	};

	useEffect(() => {
		if (!isLoading && isAuth && token) {
			router.push('/');
		}
	}, [isAuth, token, isLoading, router]);

	return (
		<div className={'auth'}>
			<h1 className="auth_title">Вход</h1>
			<form className="auth-form">
				<div className="auth-form_block">
					<Input
						name={'username'}
						variant={'outlined'}
						onChange={changeData}
						placeholder={'Логин'}
						value={auth.username}
					/>
				</div>
				<div className="auth-form_block">
					<Input
						name={'password'}
						onChange={changeData}
						value={auth.password}
						pass={true}
						label={'Пароль'}
						size={'small'}
					/>
					<CustomLink href={'/refresh-pass'} className="auth-form__refresh-pass">
						Не помню пароль
					</CustomLink>
				</div>
				<div className="auth-form_footer">
					<Button
						disabled={!auth.password || !auth.username}
						onClick={submit}
						style={{ margin: 'auto' }}
						size={'s'}
						factor={'green'}>
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

export const getServerSideProps = wrapper.getServerSideProps(
	({ dispatch, getState }) =>
		async () => {
			// const list = await api.getGoodList().then(r => r.data);
			// const industry = await api.getIndustries();
			return {
				props: {},
			};
		}
);

// async () => {
// 	const response = await api.getGoodList().then(r => r.data);
// 	// ('/industry_list'
// 	console.log('response>>>', response);
// 	return {
// 		props: {},
// 	};
// };

export default Login;
