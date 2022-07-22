import React from 'react';
import Layout from 'components/common/layouts';
import cards from 'mock/n_cards.json';
import NextBreadcrumbs, { useAppContext } from 'components/common/breadcrumbs';

const CardPage = ({ card, cards }) => {
	const { getTextGenerator, getDefaultTextGenerator } = useAppContext();

	return (
		<Layout>
			<div className="card-page">
				<div className="card-page__card">
					{/*<h1>{card.title}</h1>*/}
					<NextBreadcrumbs
						getTextGenerator={getTextGenerator}
						getDefaultTextGenerator={getDefaultTextGenerator}
					/>
				</div>
				<div className="card-page__price" />
			</div>
			{/*<Recomend cards={cards} />*/}
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
	console.log('params>>><', params);
	const card = cards.find(_ => String(_.id) === params.card_id);
	return {
		props: {},
	};
}

export default CardPage;
