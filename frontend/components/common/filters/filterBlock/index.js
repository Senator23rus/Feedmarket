import classes from './filterBlock.module.scss';
import Checkbox from "UI/checkbox";
import {cloneElement, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import Input from "UI/Input/input";

const FilterBlock = ({state, changeBrand, filterName, title, isСollapsible, isSearch}) => {
    let [collapsed, setCollapsed] = useState(true);
    let [search, setSearch] = useState('');
    let [content, setContent] = useState([]);
    let itemWrap = useRef();
    let isLoadState = useRef(false);
    let isLoad = useRef(true);
    let noSearch = useRef(false);

    const lengthCalc = (iter) => {
        let len = 0;
        for (let i = 0; i < iter; i++) {
            len += itemWrap.current.children[i].clientHeight + 8;
        }
        itemWrap.current.style.setProperty('height',
            len + 'px');
    }

    const heightHandler = () => {
        if (isСollapsible && itemWrap.current.children.length > 5) {
            lengthCalc(5);
            isLoad.current = false;
        } else {
            if (noSearch.current && itemWrap.current.children.length >= 10) {
                let len = 0;
                for (let i = 0; i < 10; i++) {
                    len += itemWrap.current.children[i].clientHeight + 8;
                }
                itemWrap.current.style.setProperty('height',
                    len + 'px');
                noSearch.current = false;
            } else {
                lengthCalc(itemWrap.current.children.length);
            }
        }
        if (content.length !== 0) {
            isLoadState.current = true;
        }
    }

    const onClickHandler = (e) => {
        if (collapsed) {
            if (isSearch && itemWrap.current.children.length >= 10) {
                let len = 0;
                for (let i = 0; i < 10; i++) {
                    len += itemWrap.current.children[i].clientHeight + 8;
                }
                itemWrap.current.style.setProperty('height',
                    len + 'px');
            } else {
                itemWrap.current.style.setProperty('height',
                    '');
            }
            setCollapsed(false);
        } else {
            lengthCalc(itemWrap.current.children.length < 5 ? itemWrap.current.children.length : 5);
            setCollapsed(true);
        }
    }

    const onInputHandler = (e) => {
        console.log(e.target.value);
        if (e.target.value) {
            let count = 0;
            setContent(state.map(item => {
                let checkboxClass = classes.hide;
                console.log(item)
                if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    count++;
                    checkboxClass = '';
                    return  <div key={item.id} className={checkboxClass}>
                        <Checkbox
                            onClick={() => changeBrand(item, index, filterName)}
                            groupChecked={false}
                            checked={item.active}>
                            {item.name}
                        </Checkbox>
                    </div>
                }

                // return item
            }));
            lengthCalc(count > 5 ? 5 : count);
        } else {
            setContent([])
            noSearch.current = true;
        }
        heightHandler();
        setSearch(e.target.value);
    }

    // useEffect(() => {
    //     if (isLoadState.current) {
    //         let a = JSON.parse(JSON.stringify(state))
    //         setContent(a.map((_, index) => {
    //             return cloneElement(content[index], {...content[index].props, checked: _.active})
    //         }))
    //     }
    // }, [state])

    useEffect(() => {
        if (isLoad.current) {
            heightHandler();
        }
    }, [content])

  return(
      <div className={'filter-block'}>
          <p className={'title'}>{title}</p>
          {!(!collapsed && isSearch) || <Input value={search} onInput={onInputHandler}
                                               placeholder={'Поиск'} size={'medium'}
                                               variant={'outlined'} searchIcon/>}
          <div className={classNames('items', classes.filterBlock, !(!collapsed && isSearch) || classes.search)} ref={itemWrap}>
              {content?.length !== 0 ? content : state.map((_, index) => {
                  return (
                      <div key={_.id}>
                          <Checkbox
                              onClick={() => changeBrand(_, index, filterName)}
                              groupChecked={false}
                              checked={_.active}>
                              {_.name}
                          </Checkbox>
                      </div>
                  );
              })}
          </div>
          {!isСollapsible || (<button onClick={onClickHandler} className={classes.button}>
              {collapsed ? 'Посмотреть все' : 'Свернуть'}</button>)}
      </div>
  );
}

export default FilterBlock;