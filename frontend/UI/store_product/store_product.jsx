import classes from './store_product.module.scss';
import Checkbox from 'UI/checkbox';
import Image from 'next/image';

/**
 * @description Плашка товара для страницы Мой магазин
 *
//  * @param {string} img - путь до картинки
//  * @param {string} description - описание продукта
//  * @param {string} title - название продукта
//  * @param {string} barcode - штрихкод продукта
//  * @param {string} dateCreated - дата создания продукта
//  * @param {string} status - статус продукта
//  * @param {string} stock - количество продукта
//  * @param {string} weight - вес продукта
//  * @param {string} price - цена продукта
//  * @returns {JSX.Element}
//  * @constructor
//  */
const StoreProduct = ({ card }) => {
	const { img, description, title, barcode, dateCreated, status, stock, weight, price } =
		card;
	return (
		<div className={classes.store__product}>
			<Image src={img} width={85} height={120} alt={'product_img'} />
			<div className={classes.store__product__descr}>
				<p className={classes.store__descr_title}>{description}</p>
				<div className={classes.store__descr_subtitle}>
					<div className={classes.store__descr_characteristics}>
						<div className={classes.store__descr_left}>
							<div className={classes.store__descr_top}>
								<span className={classes.store__descr_text}>Артикул:</span>
								<span className={classes.store__descr_value}>{title}</span>
							</div>
							<div>
								<span className={classes.store__descr_text}>Штрихкод:</span>
								<span className={classes.store__descr_value}>{barcode}</span>
							</div>
						</div>
						<div className={classes.store__descr_center}>
							<div className={classes.store__descr_top}>
								<span className={classes.store__descr_text}>Дата создания:</span>
								<span className={classes.store__descr_value}>{dateCreated}</span>
							</div>
							<div>
								<span className={classes.store__descr_text}>Статус:</span>
								<span className={classes.store__descr_value}>{status}</span>
							</div>
						</div>
						<div className={classes.store__descr_right}>
							<div className={classes.store__descr_top}>
								<span className={classes.store__descr_text}>Количество:</span>
								<span className={classes.store__descr_value}>{stock}</span>
							</div>
							<div>
								<span className={classes.store__descr_text}>Вес (кг):</span>
								<span className={classes.store__descr_value}>{weight}</span>
							</div>
						</div>
					</div>
					<div className={classes.store__descr_price}>
						<p className={classes.store__descr_text}>Цена:</p>
						<p className={classes.store__descr_coast}>{price}</p>
					</div>
				</div>
			</div>
			<div className={classes.store__descr_check}>
				<Checkbox />
				<span className={classes.store__descr_coast}>
					<svg
						width="22"
						height="5"
						viewBox="0 0 22 5"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.333496 2.47488C0.333496 1.87379 0.523526 1.3693 0.903585 0.961421C1.28364 0.542804 1.79872 0.333496 2.44883 0.333496C3.10893 0.333496 3.62401 0.542804 3.99407 0.961421C4.37413 1.3693 4.56416 1.87379 4.56416 2.47488C4.56416 3.07597 4.37413 3.58046 3.99407 3.98834C3.62401 4.39622 3.10893 4.60016 2.44883 4.60016C1.79872 4.60016 1.28364 4.39622 0.903585 3.98834C0.523526 3.58046 0.333496 3.07597 0.333496 2.47488Z"
							fill="#414141"
						/>
						<path
							d="M8.88483 2.47488C8.88483 1.87379 9.07486 1.3693 9.45492 0.961421C9.83498 0.542805 10.3501 0.333497 11.0002 0.333497C11.6603 0.333497 12.1753 0.542805 12.5454 0.961421C12.9255 1.3693 13.1155 1.87379 13.1155 2.47488C13.1155 3.07597 12.9255 3.58046 12.5454 3.98834C12.1753 4.39622 11.6603 4.60016 11.0002 4.60016C10.3501 4.60016 9.83498 4.39622 9.45492 3.98834C9.07486 3.58046 8.88483 3.07597 8.88483 2.47488Z"
							fill="#414141"
						/>
						<path
							d="M17.4362 2.47488C17.4362 1.87379 17.6262 1.3693 18.0063 0.961422C18.3863 0.542805 18.9014 0.333497 19.5515 0.333497C20.2116 0.333497 20.7267 0.542805 21.0967 0.961422C21.4768 1.3693 21.6668 1.87379 21.6668 2.47488C21.6668 3.07597 21.4768 3.58046 21.0967 3.98834C20.7267 4.39622 20.2116 4.60016 19.5515 4.60016C18.9014 4.60016 18.3863 4.39622 18.0063 3.98834C17.6262 3.58046 17.4362 3.07597 17.4362 2.47488Z"
							fill="#414141"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default StoreProduct;
