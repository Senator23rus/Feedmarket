import NavBar from 'components/common/layouts/nav-bar';
import Footer from 'components/common/layouts/footer';
import { useEffect, useRef, useState } from 'react';
import { func } from 'prop-types';

/**
 * @description Корневой Layout, содержит основную разметку страницы, одинаковую для нескольких страниц
 *
 * @example <caption>Пример использования компонента</caption>
 *
 * // pages/index.js
 *
 * export default function Index(){
 *     return (
 *         <Layout>
 *             // ... other code
 *         </Layout>
 *     )
 * }
 *
 *
 * @param children - страница которую вы оборачиваете
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ({ children }) => {
	const [navbar, setNavbar] = useState(true);

	function scroll(e) {
		if (e.deltaY < 1) {
			setNavbar(true);
		} else if (e.deltaY > 1) {
			setNavbar(false);
		}
	}

	return (
		<div onWheel={scroll} className={'app'}>
			<NavBar show={navbar} />
			<main className='app__content'>{children}</main>
		</div>
	);
};

export default Layout;
