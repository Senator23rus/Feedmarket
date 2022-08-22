import classes from './filterBlock.module.scss';
import Checkbox from 'UI/checkbox';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Input from 'UI/Input/input';

/**
 * @param {React.ReactElement
 * & {
 * [state]:object[],
 * [changeBrand]:Function,
 * [filterName]:string,
 * [title]:string,
 * [isСollapsible]:boolean,
 * isSearch:boolean}} props
 * @constructor
 */

const FilterBlock = ({
	state,
	changeBrand,
	filterName,
	title,
	isСollapsible,
	isSearch,
}) => {
	let [collapsed, setCollapsed] = useState(true);
	let [search, setSearch] = useState('');
	let [content, setContent] = useState([]);
	let itemWrap = useRef();
	let isLoad = useRef(true);
	let noSearch = useRef(false);

	const lengthCalc = itemCount => {
		let len = 0;
		for (let i = 0; i < itemCount; i++) {
			len += itemWrap.current.children[i]?.clientHeight + 8;
		}
		itemWrap.current.style.setProperty('height', len + 'px');
	};

	const heightHandler = () => {
		if (collapsed && itemWrap.current.children.length > 5) {
			lengthCalc(5);
			isLoad.current = false;
		} else {
			if (
				(noSearch.current && itemWrap.current.children.length >= 10) ||
				(!noSearch.current && itemWrap.current.children.length >= 10)
			) {
				lengthCalc(10);
			} else {
				lengthCalc(itemWrap.current.children.length);
			}
		}
	};

	const filter = text => {
		setContent(
			state.map((item, index) => {
				if (item.name.toLowerCase().includes(text.toLowerCase())) {
					return (
						<div key={item.id}>
							<Checkbox
								onClick={() => changeBrand(item, index, filterName)}
								groupChecked={false}
								checked={item.active}>
								{item.name}
							</Checkbox>
						</div>
					);
				}
			})
		);
	};

	const onClickHandler = e => {
		if (collapsed) {
			if (isSearch && itemWrap.current.children.length >= 10) {
				lengthCalc(10);
			} else {
				itemWrap.current.style.setProperty('height', '');
			}
			setCollapsed(false);
		} else {
			lengthCalc(
				itemWrap.current.children.length < 5 ? itemWrap.current.children.length : 5
			);
			setCollapsed(true);
		}
	};

	const onInputHandler = e => {
		if (e.target.value) {
			filter(e.target.value);
			noSearch.current = false;
		} else {
			setContent([]);
			noSearch.current = true;
		}
		setSearch(e.target.value);
	};

	useEffect(() => {
		heightHandler();
	}, [content]);

	useEffect(() => {
		if (!isLoad.current) filter(search);
	}, [state]);

	return (
		<div className={'filter-block'}>
			<p className={'title'}>{title}</p>
			{!(!collapsed && isSearch) || (
				<Input
					value={search}
					onInput={onInputHandler}
					placeholder={'Поиск'}
					size={'medium'}
					variant={'outlined'}
					searchIcon
				/>
			)}
			<div
				className={classNames(
					'items',
					classes.filterBlock,
					!(!collapsed && isSearch) || classes.search
				)}
				ref={itemWrap}>
				{content?.length !== 0
					? content
					: state.map((_, index) => {
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
			{!isСollapsible || (
				<button onClick={onClickHandler} className={classes.button}>
					{collapsed ? 'Посмотреть все' : 'Свернуть'}
				</button>
			)}
		</div>
	);
};

export default FilterBlock;
