import classes from './ordering.module.scss';
import Button from "../../../UI/button";

const declOfOrder = (count)=>{
	const arr = ['товар',"товара","товаров"]
	count = Math.abs(count) % 100
	let count2 = count % 10;
	if (count > 10 && count < 20){
		return arr[2]
	}
	if (count2 > 1 && count2 < 5){
		return arr[1]
	}
	if (count2 === 1){
		return arr[0]
	}
	return arr[2]
}

const Ordering = ({amount, sum, weight}) => {
	return (
		<div className={classes.ordering__wrap}>
			<Button style={{width:'100%',marginBottom:16, height: 64, fontSize: 19}} size={'s'} factor={'green'}>
				Перейти к оформлению
			</Button>
			<p className={classes.ordering__text}>
				Доступные способы и время доставки можно выбрать на следующем этапе оформления
				заказа
			</p>
			<div className={classes.ordering__dotted}/>
			<div className={classes.ordering__title__wrap}>
				<div className={classes.ordering__title}>Ваша корзина</div>
				<div>
					<span className={classes.ordering__subtitle}>{amount} {declOfOrder(200001)}</span>
					<span className={classes.ordering__subtitle_dote}/>
					<span className={classes.ordering__subtitle}>{weight} кг</span>
				</div>
			</div>
			<div className={classes.ordering__products__wrap}>
				<span className={classes.ordering__products}>Товары ({amount})</span>
				<span className={classes.ordering__products__coast}>{sum} ₽</span>
			</div>
			<div className={classes.ordering__products__wrap}>
				<span className={classes.ordering__products}>Скидка</span>
				<span className={classes.ordering__products__sale}>-56 593 ₽</span>
			</div>
			<div className={classes.ordering__dotted__bottom}></div>
			<div className={classes.ordering__products__wrap}>
				<span className={classes.ordering__products__total_cost}>Общая стоимость</span>
				<span className={classes.ordering__products__total_cost}>{sum} ₽</span>
			</div>
		</div>
	);
};

export default Ordering;
