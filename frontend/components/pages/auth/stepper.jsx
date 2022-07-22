import React, { useContext, useState } from 'react';
import { AuthContext } from 'pages/auth';
import Input from 'UI/Input/input';
import Button from 'UI/button';
import Checkbox from 'UI/checkbox';

const Stepper = () => {
	const auth = useContext(AuthContext);
	const [step, setStep] = useState(1);
	const nextStep = () => {
		setStep(prevState => prevState + 1);
	};
	const prevStep = () => {
		setStep(prevState => prevState - 1);
	};
	return (
		<div className="auth-form">
			{step === 1 ? (
				<>
					<div className="auth-form_title">
						<h3 className={'title'}>Заполните информацию для входа</h3>
						<span>Шфг 1 из 2</span>
					</div>
					<div className="auth-form_block">
						<Input label={'Название компании'} size={'small'} />
						<Input label={'Адрес'} size={'small'} />
					</div>
					<div className="auth-form_block">
						<Input label={'ИНН'} size={'small'} />
						<Input label={'ОГРН'} size={'small'} />
						<Input label={'Вид деятельности (ОКВЭД)'} size={'small'} />
					</div>
					<div className="auth-form_footer">
						<Button
							onClick={nextStep}
							style={{ margin: 'auto' }}
							size={'s'}
							factor={'green'}>
							К следующему шагу
						</Button>
					</div>
				</>
			) : (
				<>
					<div className="auth-form_title">
						<h3 className={'title'}>Заполните информацию для входа</h3>
						<span>Шфг 2 из 2</span>
					</div>
					<div className="auth-form_block">
						<Input label={'Номер телефона'} size={'small'} />
						<Button
							disabled={true}
							style={{ maxWidth: 230 }}
							size={'xs'}
							factor={'ghost'}>
							Отправить код подтверждения
						</Button>
						<Input label={'Код подтверждения'} size={'small'} />
					</div>
					<div className="auth-form_block">
						<Input label={'Email'} size={'small'} />
					</div>
					<div className="auth-form_block">
						<Input pass={true} label={'Пароль'} size={'small'} />
						<Input pass={true} label={'Подтверждение пароля'} size={'small'} />
					</div>
					<Checkbox>
						Я подтверждаю свое согласие на обработку персональных данных
					</Checkbox>
					<div className="auth-form_footer">
						<Button onClick={prevStep} size={'s'} factor={'ghost'}>
							Назад
						</Button>
						<Button disabled={true} size={'s'} factor={'green'}>
							Закончить регистрацию
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default Stepper;
