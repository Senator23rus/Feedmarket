import classNames from 'classnames';
import classes from './checkbox.module.scss';

/**
 * @description Компонент Checkbox
 *
 * @param {React.InputHTMLAttributes} props
 * @property {boolean} props.groupChecked - флаг для отображения выбора всех checkbox
 * @property {('big'|'little')} props.checkboxSize - параметр для определения размера checkbox
 * @returns {JSX.Element}
 * @constructor
 */

const Checkbox = ({ groupChecked, children, checkboxSize, ...other }) => {
	return (
		<label className={classes.wrapper}>
			<div className={classes.view__wrapper}>
				<input
					readOnly={true}
					type="checkbox"
					{...other}
					className={classNames(classes.customCheckbox)}
				/>
				<span
					className={classNames(classes.view, !groupChecked || classes.groupChecked, checkboxSize !== 'big' || classes.big )}
				/>
			</div>
			<span>{children}</span>
		</label>
	);
};

export default Checkbox;
