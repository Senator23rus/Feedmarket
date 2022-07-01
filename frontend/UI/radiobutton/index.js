import classes from './radiobutton.module.scss';
import classNames from 'classnames';
import {useState} from "react";

/**
 * @description Компонент RadioButton
 *
 * @param {React.ButtonHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */
const RadioButton = ({children, checked, ...other }) => {

	return (
		<div className={classNames(classes.form_radio)}>
			<label>
				<input type="radio" defaultChecked={checked}  {...other} />
				<span className={classNames(classes.radioButtonView)} />
				<span className={classes.child}>{children}</span>
			</label>
		</div>
	);
};

export default RadioButton;
