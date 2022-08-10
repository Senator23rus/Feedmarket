import classes from 'components/pages/makingAnOrder/sectionWrapper/sectionWrapper.module.scss';
import classNames from "classnames";

const SectionWrapper = ({children, className, ...other}) => {
  return(
    <div className={classNames(className, classes.wrapper)} {...other}>
      {children}
    </div>
  );
}

export default SectionWrapper;