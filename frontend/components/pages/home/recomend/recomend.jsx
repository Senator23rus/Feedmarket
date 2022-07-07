import classes from 'components/pages/home/recomend/recomend.module.scss';
import Button from 'UI/button'


/**
 * @description -Заголовок с кнопкой
 * @property {('text')} - Title для блока
 * @returns {JSX.Element}
 * @constructor
 */
 const Recomend = () => {
    return  (
            <div className={classes.recomend}>
                <h1 className={classes.recomend__title}>
                    FEED MARKET рекомендует
                </h1>
                <Button factor='yellow' size='s' className={classes.recomend__btn}>Перейти в рекомендации</Button>
            </div>
    )
}
export default Recomend;