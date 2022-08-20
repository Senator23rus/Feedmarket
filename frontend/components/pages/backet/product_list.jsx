import classes from './product_list.module.scss';
import Checkbox from 'UI/checkbox';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const ProductList = ({card, changeChecked, changeAmount, deleteProduct}) => {
	const { image, title_lng, title, article, barcode, id, weight, price, checked, amount} = card;


	return (
		<div className={classes.main__product}>
			<Checkbox  checked={checked} onChange={()=> changeChecked(id)}/>
			<div className={classes.main__img}>
				<Image src={image} width={85} height={120} alt={'img_product'} />
			</div>
			<div className={classes.main__text__wrapper}>
				<div className={classes.main__text__title}>{title_lng}</div>
				<div className={classes.main__text__subtitle}>
					<div>
						<span className={classes.main__text__key}>Магазин: </span>
						<span className={classes.main__text__value}>{title}</span>
					</div>
					<div>
						<span className={classes.main__text__key}>Артикул: </span>
						<span className={classes.main__text__value}>{article}</span>
					</div><div>
						<span className={classes.main__text__key}>Штрихкод: </span>
						<span className={classes.main__text__value}>{barcode}</span>
					</div>
				</div>
				<span className={classes.main__text__fvrt}>В избранное</span>
			</div>

			<div className={classes.main__left}>
				<div className={classes.main__left__amount}>
					<svg onClick={() => changeAmount(id, -1)}
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
					<div className={classes.main__left__number}>{amount} </div>
					<svg onClick={() => changeAmount(id, 1)}
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
				<div className={classes.main__price__kg}>Цена за кг: {(price.replace(/\s/g,'') / weight).toFixed()} руб</div>
				<div className={classes.main__price}>
					Цена: <span className={classes.main__price__coast}> {price} руб</span>
				</div>
			</div>
			<div  className={classes.main__left__close}>
				<svg onClick={() => deleteProduct(id)}
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.35355 2.64645C9.54882 2.84171 9.54882 3.15829 9.35355 3.35355L3.35355 9.35355C3.15829 9.54882 2.84171 9.54882 2.64645 9.35355C2.45118 9.15829 2.45118 8.84171 2.64645 8.64645L8.64645 2.64645C8.84171 2.45118 9.15829 2.45118 9.35355 2.64645Z"
						fill="#999999"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645Z"
						fill="#999999"
					/>
				</svg>
			</div>
		</div>
	);
};
export default ProductList;
