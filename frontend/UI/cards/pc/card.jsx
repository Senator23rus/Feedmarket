import classes from './card.module.scss';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';
import classNames from 'classnames';

/**
 * @description Под экраны desktop: Карточка товара под все страницы
 *
 * @param {reference} reference - путь до страницы описание товара
 * @param {string} img - путь до картинки
 * @param {string} sale - скидка покупателя
 * @param {string} rating - рейтинг товара
 * @param {boolean} novelty - новинка товара
 * @param {boolean} favorites - избранность товара
 * @param {string} сomments - количество комметариев
 * @param {boolean} choice - выбор покупателя
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
sale,
choice,
reference,
comments,
favorites,
novelty,
rating,
img,
title,
animal,
percentage,
weight,
price,
click,
className
}) => {
	return (
		<CustomLink className={classNames(classes.card, className)} href={reference} as={as}>
			<div className={classes.card__img_wrapper}>
				<div className={classes.card__img}>
					<Image src={img} width={170} height={241} alt={'image'} />
					<div className={classes.card__status}>
						{novelty ? <span className={classes.card__new}>Новинка</span> : "" }
						{choice ? <span className={classes.card__choice}>Выбор покупателей</span> : ""}
						{ sale ?  <span className={classes.card__sale}>-{sale}</span> : "" }
					</div>
					</div>
			</div>
			<div className={classes.card__wrapper}>
					<div className={classes.card__info}>
						<span className={classes.card__rating_wrap}>
								{rating ? <><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M5.7227 0.486686C5.90556 0.447797 6.09455 0.447797 6.27741 0.486686C6.76393 0.590155 7.02924 0.991797 7.18884 1.28455C7.35833 1.59545 7.53099 2.02596 7.73149 2.52587L7.74727 2.56521C7.87312 2.87895 7.95268 3.07582 8.02636 3.22225C8.09479 3.35822 8.13776 3.40769 8.16906 3.43606C8.201 3.465 8.23567 3.49078 8.27259 3.51303C8.30819 3.53448 8.36822 3.56159 8.52026 3.58823C8.68343 3.61681 8.89732 3.63652 9.23693 3.66693L9.28025 3.67081C9.79939 3.71727 10.2508 3.75767 10.5908 3.83099C10.9183 3.90162 11.3694 4.04513 11.6038 4.4828C11.6741 4.61417 11.722 4.75641 11.7453 4.90361C11.8228 5.39229 11.5534 5.77752 11.3357 6.03167C11.111 6.29399 10.7786 6.59635 10.3973 6.94318L10.1379 7.17918C9.71691 7.56221 9.64133 7.64479 9.59917 7.72755C9.566 7.79266 9.54376 7.86277 9.53334 7.93509C9.52009 8.02703 9.53426 8.13807 9.65754 8.69373L9.7041 8.90358C9.79892 9.33087 9.87922 9.69274 9.91753 9.97459C9.95186 10.2272 9.98586 10.6018 9.80338 10.9257C9.57823 11.3252 9.1635 11.5811 8.70537 11.6029C8.33407 11.6207 8.01455 11.4222 7.80423 11.2781C7.56956 11.1174 7.28223 10.8833 6.94297 10.6068L6.91945 10.5876C6.67523 10.3886 6.51938 10.2622 6.39271 10.1735C6.2728 10.0895 6.21658 10.067 6.18381 10.0576C6.06372 10.0232 5.93638 10.0232 5.8163 10.0576C5.78353 10.067 5.7273 10.0895 5.60739 10.1735C5.48072 10.2622 5.32487 10.3886 5.08066 10.5876L5.05714 10.6068C4.71787 10.8833 4.43054 11.1174 4.19587 11.2781C3.98555 11.4222 3.66604 11.6207 3.29474 11.6029C2.8366 11.5811 2.42188 11.3252 2.19672 10.9257C2.01424 10.6018 2.04824 10.2272 2.08258 9.97459C2.12089 9.69275 2.20118 9.33089 2.296 8.90363L2.34257 8.69373C2.46585 8.13808 2.48001 8.02703 2.46676 7.93509C2.45634 7.86277 2.43411 7.79266 2.40094 7.72755C2.35878 7.64479 2.2832 7.56221 1.8622 7.17918L1.63509 6.97255C1.62429 6.96273 1.61352 6.95294 1.6028 6.94319C1.22152 6.59635 0.889136 6.29399 0.664397 6.03167C0.446663 5.77752 0.177354 5.39229 0.2548 4.90361C0.278127 4.75641 0.325966 4.61417 0.396327 4.4828C0.630734 4.04513 1.08178 3.90162 1.40931 3.83099C1.74932 3.75767 2.20071 3.71727 2.71985 3.67081C2.73424 3.66952 2.74868 3.66823 2.76317 3.66693C3.10278 3.63652 3.31668 3.61681 3.47985 3.58823C3.63188 3.56159 3.69192 3.53448 3.72751 3.51303C3.76443 3.49078 3.7991 3.465 3.83104 3.43606C3.86234 3.40769 3.90532 3.35822 3.97374 3.22225C4.04742 3.07582 4.12699 2.87895 4.25284 2.56521C4.25812 2.55205 4.26338 2.53893 4.26862 2.52586C4.46912 2.02595 4.64178 1.59545 4.81127 1.28455C4.97086 0.991797 5.23617 0.590155 5.7227 0.486686Z" fill="#FF7A00" fillOpacity="0.8"/>
							</svg>
							<span className={classes.card__rating}>
								{rating} / 5
							</span>
							<span className={classes.card__rating_wrap}>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14H11C12.6569 14 14 12.6569 14 11V8C14 4.68629 11.3137 2 8 2ZM5 7.33333C5 6.78105 5.44772 6.33333 6 6.33333H10C10.5523 6.33333 11 6.78105 11 7.33333C11 7.88562 10.5523 8.33333 10 8.33333H6C5.44772 8.33333 5 7.88562 5 7.33333ZM7 10C7 9.44772 7.44772 9 8 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H8C7.44772 11 7 10.5523 7 10Z" fill="#C8C8C8"/>
						</svg>
						<span className={classes.card__rating}>
							{comments}
						</span>
						</span>
								</>  : " "}
						</span>

					</div>
				<ul className={classes.card__list}>
					<li className={classes.card__item}>{title}</li>
					<li className={classes.card__item}>{animal}</li>
					<li className={classes.card__item}>Процент ввода - {percentage}</li>
				</ul>
			</div>
			<div className={classes.card__footer}>
				<div className={classes.card__price_inner}>
					<div className={classes.card__price}>{price} руб. {sale ? <span className={classes.card__price_through}>{price} руб.</span> : ''}
					</div>
					<div className={classes.card__weight}>1 000 руб х {weight} кг
					</div>
				</div>
				<button className={classes.card__button} onClick={click}>
					<Image src={'/card/Stroke.svg'} width={18} height={18} alt={'logo'} />
				</button>
			</div>
			{favorites ? <button className={classes.card__favorites_del}>
				Удалить из избранного
			</button> :
			<button className={classes.card__favorites}>
				Добавить в избранное
			</button>
			}

		</CustomLink>
	);
};

export default Card;
