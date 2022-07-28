import 'nprogress/nprogress.css';
import { useStore } from 'react-redux';
import 'styles/index.scss';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import { AppWrapper } from 'components/common/breadcrumbs';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from 'store';

/**
 * Установлена новая зависимость nprogress - для отображения индикатора загрузки страницы
 */

/**
 * @description принимает толщину прогресс бара, цвет, класс для ручного управления и задержку, заполнено из документации
 *
 * @type {ProgressBar}
 */
const progress = new ProgressBar({
	size: 5,
	color: '#FF7A00',
	className: 'bar-of-progress',
	delay: 100,
});

/**
 * Установка прослушивание событий роутера приложения и вызываются соответствующие функции
 */
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

/**
 * @description Компонент который оборачивает весь сайт, в том числе и глобальным состоянием, доступным на всех уровнях вложенности
 *
 * @param Component - Страница сайта из каталога pages
 * @param pageProps - пропсы которые мы получим при getStaticProps + getStaticPaths или getServerSideProps
 * @returns {JSX.Element}
 * @constructor
 */
function MyApp({ Component, pageProps }) {
	const store = useStore();
	return (
		<PersistGate persistor={store.__PERSISTOR} loading={null}>
			{/*// <Provider store={store}>*/}
			<AppWrapper>
				<Component {...pageProps} />
			</AppWrapper>
			{/*// </Provider>*/}
		</PersistGate>
	);
}

export default wrapper.withRedux(MyApp);
