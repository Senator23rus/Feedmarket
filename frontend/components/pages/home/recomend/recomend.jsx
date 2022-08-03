import classes from 'components/pages/home/recomend/recomend.module.scss';
import Button from 'UI/button';
import Card from 'UI/cards/pc/card';

/**
 * @description -Заголовок с кнопкой
 * @property {('text')} - Title для блока
 * @returns {JSX.Element}
 * @constructor
 */
const Recomend = ({ ad, cards }) => {
	return (
		<div className={classes.recomend}>
			<div className={classes.recomend__header}>
				<h1 className={classes.recomend__title}>FEED MARKET рекомендует</h1>
				<Button factor="yellow" size="s" className={classes.recomend__btn}>
					Перейти в рекомендации
				</Button>
			</div>
			<div className={classes.recomend__content}>
				{/*{ad && <div className={classes.recomend__content_ad}>*/}
				{/*	<Image/>*/}
				{/*</div>}*/}
				<div className={classes.recomend__content_card}>
					{cards.map((card, i) => {
						if (i < 4) {
							return (
								<Card
									sale={card.sale}
									choice={card.choice}
									comments={card.comments}
									favorites={card.favorites}
									rating={card.rating}
									novelty={card.novelty}
									key={i}
									reference={`/catalog/${card.id}`}
									img={card.image}
									title={card.title}
									animal={card.form}
									percentage={card.inputPercentage}
									weight={card.weight}
									price={card.price}
									click={event => {
										event.preventDefault();
										alert('TECT');
									}}
								/>
							);
						}
						return null;
					})}
				</div>
			</div>
		</div>
	);
};
export default Recomend;
