import classNames from 'classnames';
import classes from './checkbox.module.scss';

/**
 * @description Компонент Checkbox
 *
 * @param {React.InputHTMLAttributes} props
 * @property {boolean} props.groupChecked - флаг для отображения выбора всех checkbox
 * @returns {JSX.Element}
 * @constructor
 */

const Checkbox = ({ groupChecked, children, ...other }) => {
	return (
		<label className={classes.wrapper}>
			<input
				readOnly={true}
				type="checkbox"
				{...other}
				className={classNames(classes.customCheckbox)}
			/>
			<span className={classNames(classes.view, !groupChecked || classes.groupChecked)} />
			<span className={classes.child}>{children}</span>
		</label>
	);
};

export default Checkbox;
