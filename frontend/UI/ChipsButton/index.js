import  classes from './ChipsButton.module.scss';
import {Chip} from "@mui/material";

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
            classes={{
                root: classes.root
            }}
          />
      </div>
  );
}

export default ChipsButton;