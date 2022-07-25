import classes from './card.module.scss';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';
import classNames from 'classnames';

/**
 * @description Под экраны desktop: Карточка товара под все страницы
 *
 * @param {reference} reference - путь до страницы описание товара
 * @param {string} img - путь до картинки
 * @param {string} title - название продукта
 * @param {string} animal - категория продукта
 * @param {number} percentage - Показатель ввода продукта
 * @param {number} weight - вес продукта
 * @param {number} price - цена продукта
 * @param {(function():void)} click - callback функция для покупки
 * @param {string} as
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({
	as,
	reference,
	img,
	title,
	animal,
	percentage,
	weight,
	price,
	click,
	className,
}) => {
	return (
		<CustomLink className={classNames(classes.card, className)} href={reference} as={as}>
			<div className={classes.card__img_wrapper}>
				<div className={classes.card__img}>
					<Image src={img} width={170} height={241} alt={'image'} />
				</div>
			</div>
			<div className={classes.card__wrapper}>
				<ul className={classes.card__list}>
					<li className={classes.card__item}>{title}</li>
					<li className={classes.card__item}>{animal}</li>
					<li className={classes.card__item}>Процент ввода - {percentage}</li>
				</ul>
			</div>
			<div className={classes.card__footer}>
				<div className={classes.card__price_inner}>
					<div className={classes.card__weight}>{weight} кг</div>
					<div className={classes.card__price}>{price} руб.</div>
				</div>
				<button className={classes.card__button} onClick={click}>
					<Image src={'/card/Stroke.svg'} width={18} height={18} alt={'logo'} />
				</button>
			</div>
		</CustomLink>
	);
};

export default Card;
