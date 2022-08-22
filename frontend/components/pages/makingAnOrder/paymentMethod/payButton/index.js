import classes from './payButton.module.scss';

const PayButton = ({children, action, isImage, ...other}) => {
  return(
      <button className={classes.wrapper} {...other}>
          <p className="cardName">{children}</p>
          <p className={classes.action}>{action}</p>
      </button>
  );
}

export default PayButton;