import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * @description Кастомная ссылка для оборачивания Link от Next'а
 *
 * @param {import('next/link').LinkProps} props
 * @property {string} [props.active]
 * @returns {JSX.Element}
 * @constructor
 */
const CustomLink = props => {
	const { pathname } = useRouter();
	const { href, className, active, children } = props;
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
