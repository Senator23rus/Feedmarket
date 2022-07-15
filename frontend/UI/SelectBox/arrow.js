import classes from './arrow.module.scss';
import classNames from "classnames";

const Arrow = ({className, ...other}) => {
    return (
        <svg className={classNames(className, classes.root)} width="9px" height="5px" viewBox="0 0 9 5" {...other}>
            <path d="M3.80643 4.73782L0.289255 1.52808C-0.328654 0.964182 0.108972 0 0.982828 0H8.01717C8.89103 0 9.32865 0.964182 8.71074 1.52808L5.19357 4.73782C4.81052 5.08739 4.18948 5.08739 3.80643 4.73782Z"/>
        </svg>
    );
}

export default Arrow;