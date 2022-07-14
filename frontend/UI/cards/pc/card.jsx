import classes from './card.module.scss';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';
import {useState} from 'react';



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
const Card = ({reference, img, title, animal, percentage, weight, price, click}) => {

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
        <CustomLink  href={reference}>
            <div className={classes.card__img_wrapper}>
                <div className={classes.card__img}>
                    <Image src={img} width={170} height={241} alt={"image"}/>
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
                {!visible ?
                <button className={classes.card__button} onClick={() => setVisible(true)}><Image src={"/card/Stroke.svg"} width={18} height={18} alt={"logo"}/></button>
                : null}
                {visible ? 
                <div className={classes.card__button_amount}>
                    <div className={classes.card__button_decr} onClick={(e) =>{
                        e.preventDefault();
                        decr()}}></div>
                    <div className={classes.card__button_number}>{quantity}</div>
                    <div className={classes.card__button_incr} onClick={(e) =>{
                        e.preventDefault(); 
                        incr()}}></div>
                </div>
                : null}
            </div>
        </div>
	);
};
export default Card
