import classes from './card.module.scss';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';
import { useState } from 'react';

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
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ reference, img, title, animal, percentage, weight, price, click }) => {
	const [quantity, setQuantity] = useState(1);
	const [visible, setVisible] = useState(false);

	function incr() {
		setQuantity(quantity + 1);
	}

	function decr() {
		quantity <= 1 ? setVisible(false) : setQuantity(quantity - 1);
	}

	return (
		<div className={classes.card}>
			<CustomLink href={reference}>
				<div className={classes.card__img_wrapper}>
					<div className={classes.card__img}>
						<Image src={img} width={170} height={241} alt={'image'} />
					</div>
				</div>
			</CustomLink>
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
				{!visible ? (
					<button className={classes.card__button} onClick={() => setVisible(true)}>
						<Image src={'/card/Stroke.svg'} width={18} height={18} alt={'logo'} />
					</button>
				) : (
					<div className={classes.card__button_amount}>
						<svg
							className={classes.card__button_decr}
							onClick={e => {
								e.preventDefault();
								decr();
							}}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 13.8333C11.2217 13.8333 13.8333 11.2217 13.8333 8C13.8333 4.77834 11.2217 2.16667 8 2.16667C4.77834 2.16667 2.16667 4.77834 2.16667 8C2.16667 11.2217 4.77834 13.8333 8 13.8333ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
								fill="#0D9545"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4.66699 8.00008C4.66699 7.53984 4.93833 7.16675 5.27305 7.16675H10.7276C11.0623 7.16675 11.3337 7.53984 11.3337 8.00008C11.3337 8.46032 11.0623 8.83341 10.7276 8.83341H5.27305C4.93833 8.83341 4.66699 8.46032 4.66699 8.00008Z"
								fill="#0D9545"
							/>
						</svg>
						<div className={classes.card__button_number}>{quantity}</div>
						<svg
							className={classes.card__button_incr}
							onClick={e => {
								e.preventDefault();
								incr();
							}}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 13.8333C11.2217 13.8333 13.8333 11.2217 13.8333 8C13.8333 4.77834 11.2217 2.16667 8 2.16667C4.77834 2.16667 2.16667 4.77834 2.16667 8C2.16667 11.2217 4.77834 13.8333 8 13.8333ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
								fill="#0D9545"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.00033 4.66675C8.46056 4.66675 8.83366 4.96522 8.83366 5.33341L8.83366 10.6667C8.83366 11.0349 8.46056 11.3334 8.00033 11.3334C7.54009 11.3334 7.16699 11.0349 7.16699 10.6667L7.16699 5.33341C7.16699 4.96522 7.54009 4.66675 8.00033 4.66675Z"
								fill="#0D9545"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11.333 8.00008C11.333 8.46032 11.0345 8.83341 10.6663 8.83341L5.33301 8.83341C4.96482 8.83341 4.66634 8.46032 4.66634 8.00008C4.66634 7.53984 4.96482 7.16675 5.33301 7.16675L10.6663 7.16675C11.0345 7.16675 11.333 7.53984 11.333 8.00008Z"
								fill="#0D9545"
							/>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};
export default Card;
