import classes from './card_lc.module.scss';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';


/**
 * @description Под экраны mobile: Карточка товара для страницы: Личный кабинет
 *
 * @param {reference} reference - путь до страницы описание товара
 * @param {string} img - путь до картинки
 * @param {string} titleLc - название продукта
 * @param {string} article - артикул продукта
 * @param {number} barcode - штрихкод продукта
 * @param {number} dateCreated - дата создания продукта
 * @param {number} stock - количество продукта на складе
 * @param {number} price - цена продукта
 * @param {number} weight - вес продукта
 * @param {(function():void)} click - callback функция для покупки
 * @returns {JSX.Element}
 * @constructor
 */
const CardLC = ({reference, img, titleLc, article, barcode, dateCreated, stock, price, weight, click}) => {
    return (
        <CustomLink className={classes.list_item} href={reference}>
                <div className={classes.list_item__title_img_product}>
                <Image  src={img} width={63} height={85} alt="product"/>
                </div>
                <h4>{titleLc}</h4>
                <p className={classes.list_item__descr}><span className={classes.list_item__key}>Артикул: </span>{article}</p>
                <p className={classes.list_item__descr}><span className={classes.list_item__key}>Штрихкод: </span>{barcode}</p>
                <p className={classes.list_item__descr}><span className={classes.list_item__key}>Дата создания: </span>{dateCreated}</p>
                <p className={classes.list_item__descr}><span className={classes.list_item__key}>На складе: </span>{stock}</p>
                <p className={classes.list_item__descr}><span className={classes.list_item__key}>Цена, руб: </span>{price}</p>
                <p className={classes.list_item__descr}><span className={classes.list_item__key}>Вес, кг: </span>{weight}</p>
                <div className={classes.list_item__title_img} onClick={click}>
                <Image src={'/card/Settings-burger.svg'} width={29} height={21} alt={'button'}/>
                </div>
        </CustomLink>
    );
};

export default CardLC