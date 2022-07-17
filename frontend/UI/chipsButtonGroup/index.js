import {cloneElement, useEffect, useRef, useState} from "react";
import classes from './chipsButtonGroup.module.scss';
import classNames from "classnames";


const ChipsButtonGroup = ({children, onClick,...other}) => {

    let [content, setContent] = useState([]);
    // let [currentActive, setCurrentActive] = useState('none');
    let currentActive = useRef('none')

    const activeChange = (index) => {
        let buf = Array.from(content)
        if (currentActive.current !== 'none') {
            let num = parseInt(currentActive.current);
            console.log( content, buf, num, buf[num])
            content[num] = cloneElement(content[num], {...content[num].props,  active: false});
        }
        currentActive.current = index;
        return content;
    }

    const deleteHandler = (content) => {
        setContent([...activeChange('none', Array.from(content))]);
    }

    const clickHandler = (e) => {
        if (onClick)
            onClick(e);

        let item = e.target.closest('.item');
        console.log(e.target.tagName)
        if (item && e.target.tagName !== 'SVG') {
            let index = item.dataset.index;
            if (currentActive.current === index)
                return;
            let buf = activeChange(index, Array.from(content));
            buf[index] = cloneElement(buf[index], {...buf[index].props,  active: true});
            setContent([...buf]);
        }
    }

    useEffect(() => {
        if (!Array.isArray(children) || children?.length <= 1) {
            throw new Error('Необходимо иметь более одного элемента');
        }

        setContent(children.map((item, index) => {
            if(item?.type?.name !== "ChipsButton")
                throw new Error('Не все элементы являются ChipsButton');

            if (item.props.active)
                currentActive.current = index;

            return cloneElement(item, {...item.props, className: classNames(classes.item, 'item'), onDelete: deleteHandler, 'data-index': index});
        }));
    }, []);

    useEffect(() => {
        console.log(content);
    }, [content])

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