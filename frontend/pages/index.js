import Layout from 'components/common/layouts';
import Recomend from 'components/pages/home/recomend/recomend';
import cards from 'mock/n_cards.json';
import NavBlock from 'components/pages/home/nav-block';

/**
 *
 * @description Главная страница сайта
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({ cards }) {
	return (
		<Layout>
			<div className="home">
				<NavBlock />
				<Recomend cards={cards} />
				<Recomend cards={cards} />
				<Recomend cards={cards} />
			</div>
		</Layout>
	);
}
export async function getStaticProps() {
	return {
		props: { cards },
	};
}
