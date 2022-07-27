import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * @description Кастомная ссылка для оборачивания Link от Next'а
 *
 * @param {import('next/link').LinkProps & React.HTMLAttributes<HTMLSpanElement> & {[active]:string}} props
 * @returns {JSX.Element}
 * @constructor
 */
const CustomLink = props => {
	const { pathname } = useRouter();
	const { href, className, active, children, ...other } = props;
	if (pathname === href) {
		return (
			<span className={`${className || 'app-link'} ${active || ''}`} {...other}>
				{children}
			</span>
		);
	}
	return (
		<Link href={href}>
			<a className={className || 'app-link'} {...other}>
				{children}
			</a>
		</Link>
	);
};

export default CustomLink;
