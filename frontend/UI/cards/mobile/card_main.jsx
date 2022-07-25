import classes from './card_main.module.scss';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';

/**
 * @description Под экраны mobile: Карточка товара для страницы: Каталог
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
const CardMain = ({reference, img, title, animal, percentage, weight, price, click}) => {
	return (
        <CustomLink className={classes.card} href={reference}>
            <div className={classes.card__img_wrapper}>
                <div className={classes.card__img}>
                    <Image src={img} width={88} height={124} alt="image"/>
                </div>
            </div>
            <div className={classes.card__wrapper}>
                <ul className={classes.card__list}>
                    <li className={classes.card__item}>{title}</li>
                    <li className={classes.card__item}>{animal}</li>
                    <li className={classes.card__item}>Процент ввода -{percentage}</li>
                    <li className={classes.card__item}>{weight} кг</li>
                </ul>
            </div>
            <div className={classes.card__footer}>
                <div className={classes.card__price_inner}>
                    <div className={classes.card__price}>{price} руб.</div>
                </div>
                <button className={classes.card__button} onClick={click}><Image src={"/card/Stroke.svg"} width={18} height={18} alt={"logo"}/></button>
            </div>
        </CustomLink>
	);
};

export default CardMain
