import classes from './cards_grid.module.scss';
import Card from 'UI/cards/pc/card';

/**
 * @description - Блок под карточки
 * @param {('row'|'block')} type - тип блока под карточки
 * @param {any} cards
 * @returns {JSX.Element}
 * @constructor
 */
const CardGrid = ({ type, cards }) => {
	const typeGrid = type === 'block' ? 'cards__block' : 'cards__row';
	cards.length > 4 && type === 'row' ? (cards = cards.slice(0, 4)) : cards;
	return (
		<div className={classes[typeGrid]}>
			{cards.map((card, i) => (
				<Card
					key={i}
					reference={`/card/${card.id}`}
					as={`/card/[id]`}
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
			))}
		</div>
	);
};

export default CardGrid;
