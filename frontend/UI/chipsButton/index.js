import classes from './ChipsButton.module.scss';
import { Chip } from '@mui/material';
import DeleteIcon from './deleteIcon';
import classNames from 'classnames';

/**
 * @description Компонент ChipsButton
 * @extends import('@mui/material').ChipProps
 * @property {Function} props.onDelete - Состояние нажата ли кнопка
 * @property {boolean} props.active - Состояние нажата ли кнопка
 * @returns {JSX.Element}
 * @constructor
 */
const ChipsButton = props => {
	const { children, active, onDelete, ...other } = props;
	const deleteHandler = e => {
		if (onDelete) onDelete(e);
	};
	return (
		<div>
			<Chip
				label={children}
				clickable={true}
				onDelete={active ? deleteHandler : null}
				{...other}
				deleteIcon={<DeleteIcon />}
				classes={{
					root: classNames(classes.root, !active || classes.rootActive),
					deleteIcon: classes.deleteIcon,
					label: classNames(classes.label, !active || classes.labelActive),
				}}
			/>
		</div>
	);
};

export default ChipsButton;
