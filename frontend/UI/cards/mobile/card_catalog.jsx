import Image from 'next/image';
import classes from './card_catalog.module.scss';
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
const CardCatalog = ({reference, img,title,animal,percentage,weight,price,click})=> {
    return (
    <CustomLink className={classes.card} href={reference}>
            <div className={classes.card__wrapper}>
                <div className={classes.card__img_wrapper}>
                    <div className={classes.card__img}>
                        <Image src={img} height={132} width={93} alt='image'/>
                    </div>
                </div>
                <div>
                    <ul className={classes.card__list}>
                        <li className={classes.card__text}>{title}</li>
                        <li className={classes.card__text}>{animal}</li>
                        <li className={classes.card__text}>Процент ввода - {percentage}</li>
                        <li className={classes.card__text}>{weight} кг</li>
                    </ul>
                </div>
            </div>
            <div className={classes.card__bottom}>
                <p className={classes.card__price}>{price} руб</p>
                <button className={classes.card__button} onClick={click}>В корзину</button>
            </div>
    </CustomLink>
    );
};

export default CardCatalog;

