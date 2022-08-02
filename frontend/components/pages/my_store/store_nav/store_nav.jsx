import classNames from 'classnames';
import { useState, useEffect } from 'react';
import classes from './store_nav.module.scss';

const StoreNav = ({ changeTab }) => {
	const [activeTab, setActiveTab] = useState('list');
	const [style, setStyle] = useState({
		transform: 'translateX(0)',
		transition: 'all ease-in-out 0.2s',
		position: 'absolute',
		width: 167,
		height: 48,
		background: '#ffffff',
		boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.15)',
		borderRadius: 8,
		zIndex: 2,
	});

	const migrateAnchor = e => {
		let dataValue = e.target.dataset.value;
		if (dataValue) {
			setStyle(prevState => ({
				...prevState,
				transform: `translateX(${e.target.offsetLeft}px)`,
				width: `${e.target.getBoundingClientRect().width}px`,
			}));
			setActiveTab(dataValue);
			changeTab(dataValue);
		}
	};

	const resize = () => {
		if (activeTab) {
			let temp;
			if (typeof document !== undefined) {
				temp = document.querySelector(`button[data-value=${activeTab}]`);
			}
			if (temp) {
				setStyle(prevState => ({
					...prevState,
					transition: 'all ease-in-out 0.15s',
					transform: `translateX(${temp.offsetLeft}px)`,
					width: `${temp.getBoundingClientRect().width}px`,
				}));
			}
		}
	};

	useEffect(() => {
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, [activeTab]);

	useEffect(() => {
		resize();
	}, []);
	return (
		<div className={classes.subheader__nav} onClick={e => migrateAnchor(e)}>
			<button style={style}></button>
			<button
				data-value={'list'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'list',
				})}>
				Список&nbsp;товаров
			</button>
			<button
				data-value={'warehouses'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'warehouses',
				})}>
				Склады
			</button>
			<button
				data-value={'finance'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'finance',
				})}>
				Финансы
			</button>
			<button
				data-value={'analytics'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'analytics',
				})}>
				Аналитика
			</button>
			<button
				data-value={'ad'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'ad',
				})}>
				Реклама
			</button>
			<button
				data-value={'marketing'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'marketing',
				})}>
				Маркетинг
			</button>
			<button
				data-value={'ratings'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'ratings',
				})}>
				Рейтинги
			</button>
			<button
				data-value={'reviews'}
				className={classNames(classes.subheader__btn, {
					[classes.active]: activeTab === 'reviews',
				})}>
				Отзывы
			</button>
		</div>
	);
};

export default StoreNav;
