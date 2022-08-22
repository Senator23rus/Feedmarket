import React, { useEffect, useState } from 'react';
import Layout from 'components/common/layouts';
import NextBreadcrumbs, { useAppContext } from 'components/common/breadcrumbs';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Input from 'UI/Input/input';
import ChipsButton from 'UI/chipsButton';
import Checkbox from 'UI/checkbox';
import Card from 'UI/cards/pc/card';
import cards from 'mock/n_cards.json';
import SliderLine from 'UI/sliderLine';

const Index = () => {
	const { getTextGenerator, getDefaultTextGenerator } = useAppContext();
	const { query } = useRouter();

	const [filters, setFilters] = useState({
		types: [],
		brand: [
			{ id: 1, name: 'VitoMex', active: false },
			{ id: 2, name: 'Wiskas', active: false },
			{ id: 3, name: 'Pedegree', active: false },
			{ id: 5, name: 'Фруто-няня', active: false },
			{ id: 6, name: 'Monster', active: false },
			{ id: 7, name: 'IezeN', active: false },
		],
	});

	const [priceFilter, setPriceFilter] = useState([0, 99999]);

	const [chips, setChips] = useState([]);

	const changeBrand = (itemBrand, index) => {
		const brand = JSON.parse(JSON.stringify(filters.brand));
		brand[index] = { ...itemBrand, active: !itemBrand.active };
		setFilters(prevState => ({ ...prevState, brand }));
	};

	const catalogState = useSelector(/**@param {StateApp} state*/ state => state.catalog);

	useEffect(() => {
		if (query.category && catalogState[query.category]) {
			setFilters(prevState => ({
				...prevState,
				types: catalogState[query.category].types.map(_ => ({ ..._, active: false })),
			}));
		} else {
			setFilters(prevState => ({
				...prevState,
				types: catalogState.pig.types.map(_ => ({ ..._, active: false })),
			}));
		}
		//eslint-disable-next-line
	}, [query]);
	const changeActiveType = index => {
		const newTypes = JSON.parse(JSON.stringify(filters.types));
		newTypes[index] = { ...newTypes[index], active: !newTypes[index].active };
		setFilters(prevState => ({ ...prevState, types: newTypes }));
	};

	const deleteChips = item => {
		const newFilters = JSON.parse(JSON.stringify(filters));
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
		setFilters(newFilters);
	};

	const clearAllFilters = () => {
		const newFilters = JSON.parse(JSON.stringify(filters));
		for (const filtersKey in newFilters) {
			if (newFilters.hasOwnProperty(filtersKey)) {
				newFilters[filtersKey] = newFilters[filtersKey].map(_ => ({
					..._,
					active: false,
				}));
			}
		}
		setFilters(newFilters);
	};

	useEffect(() => {
		const arr = [];
		for (const filtersKey in filters) {
			const temp = filters[filtersKey].filter(_ => _.active);
			arr.push(temp);
		}
		if (arr.length) {
			setChips(arr.flat());
		}
		//eslint-disable-next-line
	}, [filters.brand, filters.types]);

	return (
		<Layout>
			<div className={'catalog-page'}>
				<div className="catalog-page__header">
					<h1 className={'title'}>Каталог</h1>
					<NextBreadcrumbs
						getDefaultTextGenerator={getDefaultTextGenerator}
						getTextGenerator={getTextGenerator}
					/>
				</div>
				<div className="catalog-page__wrapper">
					<div className="catalog-page__wrapper-filter">
						<div className="filter-block">
							<p className="title">Категория</p>
							<div className={'items'}>
								<Link href={{ pathname: '/catalog', query: { category: 'poetry' } }}>
									<a
										className={`link ${
											query.category === 'poetry' ? 'active-link' : ''
										}`}>
										Птицеводство
									</a>
								</Link>
								<Link href={{ pathname: '/catalog', query: { category: 'pig' } }}>
									<a className={`link ${query.category === 'pig' ? 'active-link' : ''}`}>
										Свиноводство
									</a>
								</Link>
								<Link href={{ pathname: '/catalog', query: { category: 'cattle' } }}>
									<a
										className={`link ${
											query.category === 'cattle' ? 'active-link' : ''
										}`}>
										КРС
									</a>
								</Link>
								<Link href={{ pathname: '/catalog', query: { category: 'raw' } }}>
									<a className={`link ${query.category === 'raw' ? 'active-link' : ''}`}>
										Сырье
									</a>
								</Link>
							</div>
						</div>
						<div className="filter-block">
							<p className="title">Тип</p>
							<div className={'items'}>
								{filters.types.map((_, index) => (
									<span
										onClick={() => changeActiveType(index)}
										className={`link ${_.active ? 'active-link' : ''}`}
										key={index}>
										{_.name}
									</span>
								))}
							</div>
						</div>
						<div className="filter-block">
							<p className="title">Бренд</p>
							<div className={'items'}>
								{filters.brand.map((_, index) => (
									<Checkbox
										onClick={() => changeBrand(_, index)}
										key={_.id}
										groupChecked={false}
										checked={_.active}>
										{_.name}
									</Checkbox>
								))}
							</div>
						</div>
						<div className="filter-block">
							<SliderLine
								values={priceFilter}
								setValue={setPriceFilter}
								max={priceFilter[1]}
								min={priceFilter[0]}
							/>
						</div>
					</div>
					<div className="catalog-page__wrapper-content catalog-page-wrap">
						<div className="catalog-page-wrap__wrapper-cards">
							<div className="catalog-page-wrap__filters_card">
								<div className="select">
									<Input label={'тут будет селект'} size={'small'} />
								</div>
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
											<ChipsButton onDelete={()=>{}} onClick={clearAllFilters} active={false}>
												Очистить
											</ChipsButton>
										</>
									)}
								</div>
							</div>
							<div className="catalog-page-wrap__cards">
								{cards.map((card, i) => {
									return (
										<Card
											key={i}
											className={'card'}
											reference={`/catalog/${card.id}`}
											img={card.image}
											title={card.title}
											animal={card.form}
											percentage={card.inputPercentage}
											weight={card.weight}
											price={card.price}
											click={event => {
												event.preventDefault();
												alert('TECT');
											}}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({query,params}) {

	console.log('query',query)

	return {
		props: {},
	};
}

export default Index;
