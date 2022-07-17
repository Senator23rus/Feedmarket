import {cloneElement, useEffect, useMemo, useRef, useState} from "react";
import classes from './chipsButtonGroup.module.scss';
import classNames from "classnames";

/**
 * @description Компонент ChipsButtonGroup
 *
 * @param {React.ReactElement} props
 * @returns {JSX.Element}
 * @constructor
 */

const ChipsButtonGroup = ({children, onClick,...other}) => {

    let [content, setContent] = useState([]);
    let currentActive = useRef('none')

    const activeChange = useMemo(() => {
        let buf =Array.from(content)

        let result = buf;

        if (currentActive.current !== 'none') {
            let num = currentActive.current;
            result = buf.map(_=>cloneElement(_,{..._.props,active:!_.props['data-index']===num}))

        }
        return result
    }, [currentActive.current])

    const deleteHandler = (e) => {
        setContent(prevState => prevState.map(_=>({..._,props:{..._.props,active:false}})));
    }

    const clickHandler = (e) => {
        if (onClick){
            onClick(e);
        }
        let item = e.target.closest('.item');
        if (item) {
            let index = item.dataset.index;
            currentActive.current = index;
            setContent(activeChange.map(_=>cloneElement(_,{..._.props,active:_.props['data-index']===index})));
        }
    }
    useEffect(() => {
        if (!Array.isArray(children) || children?.length <= 1) {
            throw new Error('Необходимо иметь более одного элемента');
        }

        let isActive = '';

        setContent(children.map((item, index) => {
            if(item?.type?.name !== "ChipsButton")
                throw new Error('Не все элементы являются ChipsButton');

            if (item.props.active && !isActive){
                currentActive.current = index;
                isActive = index + '';
            }

            return cloneElement(item, {...item.props, className: classNames(classes.item, 'item'),key:index, onDelete: deleteHandler, 'data-index': `${index}`, active: +isActive === index});
        }));
    }, []);


    return (
        <ul className={classes.wrapper} onClick={clickHandler} {...other}>
            {content.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}

export default ChipsButtonGroup;