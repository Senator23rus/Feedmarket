import classes from './togleButton.module.scss';
import classNames from "classnames";

const MyToggleButton = ({children, className}) => {
  return(
      <button className={classNames(classes.wrapper, className)}>
          {children}
      </button>
  );
}

export default MyToggleButton;