import React, { useEffect, useState } from 'react';
import Layout from 'components/common/layouts';
import NextBreadcrumbs, { useAppContext } from 'components/common/breadcrumbs';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Index = () => {
	const { getTextGenerator, getDefaultTextGenerator } = useAppContext();
	const { query } = useRouter();

	const [filters, setFilters] = useState({
		types: [],
	});

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
	console.log(filters);
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
							<p className="title">тип</p>
							<div className={'items'}>
								{!!filters.types.length &&
									filters.types.map((_, index) => (
										<span
											onClick={() => changeActiveType(index)}
											className={`link ${_.active ? 'active-link' : ''}`}
											key={index}>
											{_.name}
										</span>
									))}
							</div>
						</div>
					</div>
					<div className="catalog-page__wrapper-content" />
				</div>
			</div>
		</Layout>
	);
};

export function getStaticProps(ctx) {
	return {
		props: {},
	};
}

export default Index;
