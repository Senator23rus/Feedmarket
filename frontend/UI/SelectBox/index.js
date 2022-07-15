import {Select} from "@mui/material";
import classes from './select.module.scss';
import Arrow from "./arrow";
import classNames from "classnames";
import {cloneElement, useEffect, useState} from "react";

/**
 * @description Компонент SelectBox
 *
 * @param {React.SelectHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */

export default function SelectBox({onOpen, onClose, disabled, children, ...other}) {

    let [open, setOpen] = useState(false);
    let [content, setContent] = useState([]);

    useEffect(() => {
        if (!Array.isArray(children)) {
            throw new Error('Должно быть больше одного MenuItem');
        }

        setContent(children.map((item, index) => {
            if (item?.type?.render?.name !== 'MenuItem') {
                throw new Error('Все элементы должны являтся MenuItem');
            }
            return cloneElement(item,{...item.props, className: classes.item,
                sx: {'&.Mui-selected': {background: 'transparent', '&:hover.Mui-selected': {background: 'transparent'}}},
                key: index});
        }));
    }, [])

    const openHandler = (e) => {
      if (onOpen) {
          onOpen(e);
      }

      setOpen(true)
    }

    const closeHandler = (e) => {
        if (onClose) {
            onClose(e);
        }

        setOpen(false)
    }

    return (
        <Select className={classNames( classes.test, !open || classes.extended, !disabled || classes.disabled)} onOpen={openHandler} onClose={closeHandler} {...other}
                disabled={disabled}
                IconComponent={(props) => <Arrow {...props}/>}
                inputProps={{
            classes: {
                    icon: classNames(classes.icon, !disabled || classes.iconDisabled),
                    select: classNames(classes.select, !open || classes.selectOpen, !disabled || classes.selectDisabled),
                    iconOpen: classes.iconOpen
                }
                }}
                variant='outlined'
                MenuProps={{ classes: { paper: classes.dropdownStyle }}}
                sx={ {'&.Mui-focused': {background: '#FFF', '& fieldset.MuiOutlinedInput-notchedOutline': {border: '4px solid #FF7A00'}}} }
        >
            {content}
    </Select>
    );
}

