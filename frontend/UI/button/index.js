import classNames from 'classnames';
import classes from './btn.module.scss';

/**
 * @description Компонент кнопки
 *
 * @param {React.ButtonHTMLAttributes} props
 * @property {('ghost'|'green'|'yellow')} props.factor - цвет кнопки
 * @property {('xs'|'s'|'m'|'l')} props.size - размер кнопки
 * @returns {JSX.Element}
 * @constructor
 */
const Button = props => {
	const { factor, children, size, ...other } = props;
	const factorClass = 'factor__' + factor || 'default';
	const sizeClass = 'size__' + size;
	return (
		<button
			{...other}
			className={classNames(
				classes.btn,
				classes.size,
				classes[factorClass],
				classes[sizeClass]
			)}>
			{children}
		</button>
	);
};

export default Button;
