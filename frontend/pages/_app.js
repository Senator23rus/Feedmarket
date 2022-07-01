import { Provider } from 'react-redux';
import 'styles/index.scss';
import { store } from 'store';

/**
 * @description Компонент который оборачивает весь сайт, в том числе и глобальным состоянием, доступным на всех уровнях вложенности
 *
 * @param Component - Страница сайта из каталога pages
 * @param pageProps - пропсы которые мы получим при getStaticProps + getStaticPaths или getServerSideProps
 * @returns {JSX.Element}
 * @constructor
 */
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
