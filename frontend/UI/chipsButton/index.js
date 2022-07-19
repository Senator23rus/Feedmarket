import  classes from './ChipsButton.module.scss';
import {Chip} from "@mui/material";
import DeleteIcon from "./deleteIcon";
import classNames from "classnames";

/**
 * @description Компонент ChipsButton
 *
 * @param {React.ReactElement} props
 * @property {boolean} props.active - Состояние нажата ли кнопка
 * @returns {JSX.Element}
 * @constructor
 */

const ChipsButton = ({children, active, onDelete, ...other}) => {

    const deleteHandler = (e) => {
      if (onDelete)
          onDelete(e);
    }
  return (
      <div>
          <Chip label={children} clickable={true} onDelete={active ? deleteHandler : null} {...other}
                deleteIcon={<DeleteIcon/>}
            classes={{
                root: classNames(classes.root, !active || classes.rootActive),
                deleteIcon: classes.deleteIcon,
                label: classNames(classes.label, !active || classes.labelActive)
            }}
          />
      </div>
  );
}

export default ChipsButton;