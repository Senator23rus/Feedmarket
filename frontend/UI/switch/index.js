import classes from './switch.module.scss';
import Switch from "@mui/material/Switch";
import classNames from "classnames";
import {useRef} from "react";

/**
 * @param {import("@mui/material/Switch").Switch & {
 *     icon:boolean,
 * }} props
 * @constructor
 */

const Switcher = ({ icon, defaultChecked, disabled,...other}) => {
    let comp = useRef();

  return (
      <>
        <Switch defaultChecked={defaultChecked} disabled={disabled} {...other} ref={comp} classes={{
            root: classNames(classes.root, !disabled || classes.disabled),
            track: classNames(classes.track, disabled ? comp.current?.children[0].checked || defaultChecked ? classes.disabledFalseTrack : classes.disabledTrueTrack : ''),
            thumb: classNames(classes.thumb, !icon || classes.icon),
            switchBase: classes.switchBase,
        }} sx={{
            '.MuiTouchRipple-child': {background: 'rgba(16, 150, 72, 0.3)'},
            '.MuiSwitch-switchBase:not(.Mui-checked)': icon ? {} : {top: '-1px', left: '-1px', right: '19px'},
            '.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track':
                {opacity: 1, background: '#0D9545', border: 'none'}
        }}/>
      </>
  );
}

export default Switcher;