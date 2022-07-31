import {cloneElement, useEffect, useRef, useState} from "react";
import ChipsButton from "../chipsButton";
import classes from './filterChips.module.scss';

const FilterChips = ({mountPointId, initState, children, ...other}) => {

    let initData = useRef(initState);

    let mountPointIndex = useRef('');
    let counter = useRef(1);
    let [content, setContent] = useState([]);
    let [chips, setChips] = useState([<ChipsButton key={'0'} onClick={() => {setChips(chips.filter((item, index) => index === chips.length - 1))}}>Очистить Фильтры</ChipsButton>])

    let deleteChips = (e) => {
        let chipsIndex = e.target.closest('.MuiButtonBase-root').dataset.index;
        let a = chips.filter((item) => {
            console.log(item.props['data-index'], chipsIndex)
            return chipsIndex !== item.props['data-index'];
        });
        setChips(a);
    };

    let addChips = (type, value) => {
        setChips(prevState => {
            prevState.unshift(<ChipsButton key={counter.current} data-index={counter.current} active className={classes.chips} onDelete={deleteChips}>{type}: {value}</ChipsButton>);
            counter.current++
            return [...prevState]
        });
    };

    useEffect(() => {

        let contentBuf = children.map((item, index) => {
            if (item.props.id === mountPointId) {
                mountPointIndex.current = index;
            }
            return item;
        });

        contentBuf[mountPointIndex.current] = cloneElement(contentBuf[mountPointIndex.current], {...contentBuf[mountPointIndex.current], className: classes.mountPoint}, chips)

        setContent(contentBuf);

        if (!mountPointIndex.current) {
            throw new Error('Обязательно создание точки монтирования');
        }
    }, [])

    useEffect(() => {
        if (content.length === 0) return;
        content[mountPointIndex.current] = cloneElement(content[mountPointIndex.current], {...content[mountPointIndex.current], className: classes.mountPoint}, chips);
        setContent(prevState => {
            prevState[mountPointIndex.current] = cloneElement(content[mountPointIndex.current], {...content[mountPointIndex.current], className: classes.mountPoint}, chips);
            return [...prevState]
        });
    }, [chips])

  return (
      <div {...other}>
          <button onClick={() => {addChips('Тип', "Комбикорм")}}>+</button>
          {content}
      </div>
  );
}

export default FilterChips;