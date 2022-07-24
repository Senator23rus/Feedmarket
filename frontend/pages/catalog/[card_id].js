import React, { useEffect, useRef, useState } from 'react';
import Layout from 'components/common/layouts';
import cards from 'mock/n_cards.json';
import NextBreadcrumbs, { useAppContext } from 'components/common/breadcrumbs';
import Carousel from 'UI/carousel/carousel';
import ListCharacteristic from 'components/list_characteristic/list_characteristic';
import DatailedCharacteristic from 'components/common/datailed_characteristic/datailed_characteristic';
import PriseTag from 'UI/price_tag/prise_tag';
import Recipe from 'UI/recipe/recipe';
import Recomend from 'components/pages/home/recomend/recomend';

const CardPage = ({ card, cards }) => {
	const { getTextGenerator, getDefaultTextGenerator } = useAppContext();
	const myRef = useRef(null);
	const scrollToRef = () =>
		myRef.current && myRef.current.scrollIntoView({ behavior: 'smooth' });

	const containerGrid = useRef(null);

	const [padding, setPadding] = useState(false);

	function onWheel() {
		if (containerGrid.current) {
			const top = containerGrid.current?.getBoundingClientRect().top;
			if (top <= 0) {
				setPadding(true);
			} else {
				setPadding(false);
			}
		}
	}

	useEffect(() => {
		if (typeof document === 'object') {
			document?.querySelector('#__next').addEventListener('wheel', onWheel);
		}
		return () => document?.querySelector('#__next').addEventListener('wheel', onWheel);
	}, []);

	return (
		<Layout>
			<div className="card-page">
				<div className="card-page__card">
					<h1 className={'title'}>{card.title}</h1>
					<NextBreadcrumbs
						getTextGenerator={getTextGenerator}
						getDefaultTextGenerator={getDefaultTextGenerator}
					/>
				</div>
				<div className="main__grid" ref={containerGrid}>
					<div className="main__grid__left">
						<div className="product__title">
							<Carousel cards={cards}/>
							<ListCharacteristic scrollToRef={scrollToRef} />
						</div>
						<Recipe card={card}/>
						<div className="detailed__characteristic">
							<h2 className="detailed__characteristic_title" ref={myRef}>
								Подробные характеристики
							</h2>
							<div className="detailed__characteristic_wrapper">
								<DatailedCharacteristic />
								<DatailedCharacteristic />
							</div>
						</div>
					</div>

					<div
						style={{
							...(padding && {
								paddingTop: 53,
								transition: 'padding linear 200ms',
							}),
						}}
						className="main__grid__right">
						<PriseTag/>
					</div>
				</div>
			</div>
			<Recomend cards={cards}/>
		</Layout>
	);
};

export async function getStaticPaths(ctx) {
	const paths = cards.map(_ => ({
		params: { card_id: String(_.id) },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const card = cards.find(_ => String(_.id) === params.card_id);
	return {
		props: { card, cards},
	};
}

export default CardPage;
