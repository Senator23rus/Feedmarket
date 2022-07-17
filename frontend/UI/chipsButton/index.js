import  classes from './ChipsButton.module.scss';
import {Chip} from "@mui/material";
import DeleteIcon from "./deleteIcon";
import classNames from "classnames";

const ChipsButton = ({children, active, onDelete, ...other}) => {

    const deleteHandler = (e) => {
      if (onDelete)
          onDelete(e);
    }
    //clickable={true}
  return (
      <div>
          <Chip label={children} onDelete={active ? deleteHandler : null} {...other}
                deleteIcon={(props) => <DeleteIcon {...props}/>}
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