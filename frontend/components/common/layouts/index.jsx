import NavBar from 'components/common/layouts/nav-bar';
import {useEffect, useState} from 'react';
import Slide from "@mui/material/Slide";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

/**
 * @description Компонент обертка для скрытия навигационной панели
 *
 * @param children - Шапка сайта
 * @param target - Прокручиваемый элемент DOM дерева
 * @returns {JSX.Element}
 * @constructor
 */
function HideOnScroll({children,target}) {
	const trigger = useScrollTrigger({target});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}


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
	const [target,setTarget] = useState(undefined)
	useEffect(() => {
		if (typeof document === 'object') {
			const node = document?.querySelector('#__next');
			if (node) {
				setTarget(node)
			}
		}
	},[]);

	return (
		<div className={'app'} >
			<HideOnScroll target={target}>
				<AppBar className={'app__navbar'}>
					<Toolbar className={'nav-wrapper'}>
						<NavBar />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<main className='app__content' >{children}</main>
		</div>
	);
};

export default Layout;
