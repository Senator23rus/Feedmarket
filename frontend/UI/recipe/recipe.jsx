import Button from "UI/button";
import classes from "./recipe.module.scss"

const Recipe = ({card}) => {
    const {description, composition, recipient} = card;
    return (
    <>
        <div className={classes.block__characteristic}>
            <h2 className={classes.block__characteristic_title}>Описание</h2>
            <p className={classes.block__characteristic_text}>
                {description}
            </p>
        </div>
        <div className={classes.block__characteristic}>
            <h2 className={classes.block__characteristic_title}>Состав</h2>
            <p className={classes.block__characteristic_text}>
                {composition}
            </p>
        </div>
        <div className={classes.block__characteristic}>
            <h2 className={classes.block__characteristic_title}>
                Рекомендуемый рецепт смешивания <br/>
                (Комбикорм)
            </h2>
            <div className={classes.block__characteristic_text}>
                <span className={classes.block__characteristic_subtitle}>
                    Вам потребуется:
                </span>
                <ul className={classes.block__characteristic_list}>
                    {recipient.map((recipe, i)=> <li key={i}>{recipe}</li>)}
                </ul>
            </div>
            <Button factor="yellow" size="s" >
                Заказать индивидуальный рецепт
			</Button>
        </div>
     </>
    )
}

export default Recipe