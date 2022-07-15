import  classes from './ChipsButton.module.scss';
import {Chip} from "@mui/material";
import DeleteIcon from "./deleteIcon";

const ChipsButton = ({children, onDelete, onClick, ...other}) => {

    const ClickHandler = (e) => {
      if (onClick)
          onClick(e);
    }

    const DeleteHandler = (e) => {
      if (onDelete)
          onDelete(e);

    }

  return (
      <div>
          <Chip label={children} onClick={ClickHandler} onDelete={DeleteHandler} {...other}
                deleteIcon={(props) => <DeleteIcon {...props}/>}
            classes={{
                root: classes.root,
                deleteIcon: classes.deleteIcon,
                label: classes.label
            }}
          />
      </div>
  );
}

export default ChipsButton;