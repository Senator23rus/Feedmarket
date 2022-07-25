import classes from "./datailed_characteristic.module.scss";


const DatailedCharacteristic = () => {
    return (
        <div className={classes.text__wrapper}>
            <div className={classes.text__left}>
                <div className={classes.text__strouk}>
                    <div className={classes.text__description}>Категория</div>
                    <div className={classes.text__line}/>
                </div>
                <div className={classes.text__strouk}>
                    <div className={classes.text__description}>Тип</div>
                    <div className={classes.text__line}/>
                </div>
                <div className={classes.text__strouk}>
                    <div className={classes.text__description}>Вид</div>
                    <div className={classes.text__line}/>
                </div>
                <div className={classes.text__strouk}>
                    <div className={classes.text__description}>Возраст животного</div>
                    <div className={classes.text__line}/>
                </div>
                <div className={classes.text__strouk}>
                    <div className={classes.text__description}>Процент ввода</div>
                    <div className={classes.text__line}/>
                </div>
                <div className={classes.text__strouk}>
                    <div className={classes.text__description}>Вес в упаковке, кг</div>
                    <div className={classes.text__line}/>
                </div>
            </div>

            <div className={classes.text__right__wrapper}>
                <div className={classes.text__right}>Птицеводство</div>
                <div className={classes.text__right}>Премикс, 1%</div>
                <div className={classes.text__right}>Бройлер</div>
                <div className={classes.text__right}>6 месяцев</div>
                <div className={classes.text__right}>10 кг/т</div>
                <div className={classes.text__right}>10</div>
            </div>
        </div>
    )
}

export default DatailedCharacteristic