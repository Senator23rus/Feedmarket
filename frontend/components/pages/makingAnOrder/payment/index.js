import classes from './payment.module.scss';
import SectionWrapper from 'components/pages/makingAnOrder/sectionWrapper';
import CustomLink from 'UI/custom-link';

const Payment = ({ isValidation }) => {

	return (
		<div className={classes.fixsed}>
			<SectionWrapper>
				<button className={classes.btn} disabled={!isValidation}>
					Оплатить
				</button>
				<p className={classes.agreements}>
					Нажимая на кнопку, вы соглашаетесь с
					<CustomLink href={'/legalInformation/privacyPolicy'}>
						<a className={classes.link}> Условиями обработки персональных данных</a>
					</CustomLink>
					, а также с{' '}
					<CustomLink href={'/legalInformation/'}>
						<a className={classes.link}>Условиями продажи</a>
					</CustomLink>
				</p>
				<span className={classes.line} />
				<div className={classes.body}>
					<h3>Ваш заказ</h3>
					<p>
						9 555 товаров <span /> 999 999 999 кг
					</p>
					<div className={classes.paymentLine}>
						<span>Товары (5)</span> <span className={classes.price}>61 763 ₽</span>
					</div>
					<div className={classes.paymentLine}>
						<span>Скидка</span> <span className={classes.sale}>-56 593 ₽</span>
					</div>
					<div className={classes.paymentLine}>
						<span>Стоимость доставки</span>{' '}
						<span className={classes.shippingСost}>Бесплатно</span>
					</div>
					<p>5 отправлений</p>
				</div>
				<span className={classes.line} />
				<h3 className={classes.price}>
					<span>Всего к оплате</span> <span>5 170 ₽</span>
				</h3>
			</SectionWrapper>
		</div>
	);
};

export default Payment;
