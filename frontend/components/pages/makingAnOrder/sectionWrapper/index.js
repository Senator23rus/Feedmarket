import classes from 'components/pages/makingAnOrder/sectionWrapper/sectionWrapper.module.scss';
import classNames from 'classnames';

const SectionWrapper = ({ children, className, ref, ...other }) => {
	return (
		<div className={classNames(className, classes.wrapper)} ref={ref} {...other}>
			{children}
		</div>
	);
};

export default SectionWrapper;
