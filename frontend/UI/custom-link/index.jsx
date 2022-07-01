import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * @description Кастомная ссылка для оборачивания Link от Next'а
 *
 * @param {string} href - путь на который должна ввести ссылка
 * @param {any} children - текст ссылки
 * @param {string} className - свой класс ссылки, заменит существующий
 * @param {string} active - класс для активной ссылки
 * @returns {JSX.Element}
 * @constructor
 */
const CustomLink = ({ href, className, active, children }) => {
	const { pathname } = useRouter();
	if (pathname === href) {
		return (
			<span className={`${className || 'app-link'} ${active || ''}`}>{children}</span>
		);
	}
	return (
		<Link href={href}>
			<a className={className || 'app-link'}>{children}</a>
		</Link>
	);
};

export default CustomLink;
