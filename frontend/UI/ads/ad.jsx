import classes from './ad.module.scss';
import Image from 'next/image';

/**
 * @description - Блок под рекламу 
 * @param {string} img - путь до картинки
 * @param {string} reference - ссылка на рекламный сайт
 * @param {('small'|'medium'|'large'|'vertical')} type - размер и тип рекламного блока
 * @returns {JSX.Element}
 * @constructor
 */
 const Ad = ({img, reference, type} = {}) => {

    let width = type === 'large'?1464:type ==='medium'?1092:type === 'small'?1092:type ==='vertical'?346:0;
    let height = type === 'large'?328:type ==='medium'?328:type === 'small'?272:type ==='vertical'?960:0;

    return  (
            <a href={reference} className={classes.ad__block}  target="_blank" rel="noopener noreferrer">
                <Image src={img} width={width} height={height} layout={'intrinsic'}  objectFit="fill" alt="ad"/>
            </a>
    )
}
export default Ad;