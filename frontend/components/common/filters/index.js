import SliderLine from 'UI/sliderLine';
import ChipsButton from 'UI/chipsButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './filters.module.scss';
import FilterBlock from 'components/common/filters/filterBlock';
import Switch from 'UI/switch';
import classNames from 'classnames';

/**
 * @param {React.ReactElement
 * & {
 * [state]:object,
 * [setState]:Function}} props
 * @constructor
 */

const Filters = ({ state, setState }) => {
	const { query } = useRouter();

	const [priceFilter, setPriceFilter] = useState(state.price);
	const [weightFilter, setWeightFilter] = useState(state.weight);
	const [priceFilterMM] = useState(state.price);
	const [weightFilterMM] = useState(state.weight);
	const [isCatch, setIsCatch] = useState(false);

	useEffect(() => {
		if (!isCatch) {
			setState(prevState => {
				return { ...prevState, price: priceFilter, weight: weightFilter };
			});
		}
	}, [priceFilter, weightFilter]);

	const onMouseDownHandler = e => {
		setIsCatch(true);
	};

	const onMouseUpHandler = e => {
		setIsCatch(true);
		setState(prevState => {
			return { ...prevState, price: priceFilter, weight: weightFilter };
		});
	};

	const [chips, setChips] = useState([]);

	const changeBrand = (itemBrand, index, filterName) => {
		const brand = JSON.parse(JSON.stringify(state[filterName]));
		brand[index] = { ...itemBrand, active: !itemBrand.active };
		setState(prevState => ({ ...prevState, [filterName]: brand }));
	};

	const catalogState = useSelector(/**@param {StateApp} state*/ state => state.catalog);

	useEffect(() => {
		if (query.category && catalogState[query.category]) {
			setState(prevState => ({
				...prevState,
				types: catalogState[query.category].types.map(_ => ({ ..._, active: false })),
			}));
		} else {
			setState(prevState => ({
				...prevState,
				types: catalogState.pig.types.map(_ => ({ ..._, active: false })),
			}));
		}
	}, [query]);
	const changeActiveType = index => {
		const newTypes = JSON.parse(JSON.stringify(state.types));
		newTypes[index] = { ...newTypes[index], active: !newTypes[index].active };
		setState(prevState => ({ ...prevState, types: newTypes }));
	};

	const deleteChips = item => {
		const newFilters = JSON.parse(JSON.stringify(state));
		for (const filtersKey in newFilters) {
			if (newFilters.hasOwnProperty(filtersKey)) {
				const temp = newFilters[filtersKey].find(_ => _.name === item.name);
				if (temp) {
					newFilters[filtersKey] = newFilters[filtersKey].map(_ =>
						_.id === temp.id ? { ..._, active: false } : { ..._ }
					);
				}
			}
		}
		setState(newFilters);
	};

	const clearAllFilters = () => {
		const newFilters = JSON.parse(JSON.stringify(state));
		for (const filtersKey in newFilters) {
			if (filtersKey !== 'sale' && filtersKey !== 'weight' && filtersKey !== 'price') {
				if (newFilters.hasOwnProperty(filtersKey)) {
					newFilters[filtersKey] = newFilters[filtersKey].map(_ => ({
						..._,
						active: false,
					}));
				}
			}
		}
		setState(newFilters);
	};

	useEffect(() => {
		const arr = [];
		for (const filtersKey in state) {
			if (filtersKey !== 'sale' && filtersKey !== 'weight' && filtersKey !== 'price') {
				const temp = state[filtersKey].filter(_ => _.active);
				arr.push(temp);
			}
		}
		if (arr.length) {
			setChips(arr.flat());
		}
	}, [
		state.brand,
		state.types,
		state.typeOfAnimal,
		state.seller,
		state.ageOfAnimal,
		state.countryOfOrigin,
	]);

	return (
		<div className="catalog-page__wrapper">
			<div className="catalog-page__wrapper-filter">
				<div className="filter-block">
					<p className="title">Тип</p>
					<div className={'items'}>
						{state.types.map((_, index) => (
							<span
								onClick={() => changeActiveType(index)}
								className={`link ${_.active ? classes.activeLink : ''}`}
								key={index}>
								{_.name}
							</span>
						))}
					</div>
				</div>
				<FilterBlock
					title={'Вид животного'}
					state={state.typeOfAnimal}
					filterName={'typeOfAnimal'}
					changeBrand={changeBrand}
					isСollapsible
				/>
				<FilterBlock
					title={'Возраст животного'}
					filterName={'ageOfAnimal'}
					state={state.ageOfAnimal}
					changeBrand={changeBrand}
				/>
				<FilterBlock
					state={state.countryOfOrigin}
					title={'Страна производитель'}
					filterName={'countryOfOrigin'}
					changeBrand={changeBrand}
				/>
				<FilterBlock
					title={'Бренд'}
					filterName={'brand'}
					state={state.brand}
					changeBrand={changeBrand}
					isСollapsible
					isSearch
				/>
				<div className="filter-block">
					<p className="title">Вес, кг</p>
					<SliderLine
						values={weightFilter}
						setValue={setWeightFilter}
						max={weightFilterMM[1]}
						min={weightFilterMM[0]}
					/>
				</div>
				<div className="filter-block">
					<p className="title">цена, руб</p>
					<SliderLine
						onMouseDown={onMouseDownHandler}
						onMouseUp={onMouseUpHandler}
						values={priceFilter}
						setValue={setPriceFilter}
						max={priceFilterMM[1]}
						min={priceFilterMM[0]}
					/>
				</div>
				<div className={classNames('filter-block', classes.saleWrapper)}>
					<p className={classes.sale}>Товары со скидкой</p>
					<Switch
						checked={state.sale}
						onChange={() =>
							setState(prevState => {
								return { ...prevState, sale: !state.sale };
							})
						}
					/>
				</div>
				<FilterBlock
					title={'Продавец'}
					filterName={'seller'}
					state={state.seller}
					changeBrand={changeBrand}
					isСollapsible
					isSearch
				/>
			</div>
			<div className="catalog-page__wrapper-content catalog-page-wrap">
				<div className="catalog-page-wrap__wrapper-cards">
					<div className="catalog-page-wrap__filte  rs_card">
						<div className="chips">
							{!!chips.length && (
								<>
									{chips.map((_, index) => (
										<ChipsButton
											key={index}
											onDelete={() => deleteChips(_)}
											active={_.active}>
											{_.name}
										</ChipsButton>
									))}
									<ChipsButton
										onDelete={() => {}}
										onClick={clearAllFilters}
										active={false}>
										Очистить
									</ChipsButton>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
