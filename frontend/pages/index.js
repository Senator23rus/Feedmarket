import Layout from 'components/common/layouts';
import Recomend from 'components/pages/home/recomend/recomend';
import cards from 'mock/n_cards.json';
import NavBlock from 'components/pages/home/nav-block';
import { useSelector } from 'react-redux';
import { wrapper } from 'store';
import { useEffect } from 'react';

/**
 *
 * @description Главная страница сайта
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({ cards }) {
	const store = useSelector(state => state);
	console.log(store);
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
export const getServerSideProps = wrapper.getServerSideProps(state => async () => {
	return {
		props: { cards },
	};
});
