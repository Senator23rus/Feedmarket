import { useState, useEffect } from 'react';
import classes from './store_nav.module.scss';

const StoreNav = () => {
	// const [activeTab, setActiveTab] = useState();
	const [style, setStyle] = useState({
		transform: 'translateX(0)',
		transition: 'all ease-in-out .5s',
		position: 'absolute',
		width: 167,
		height: 48,
		background: '#ffffff',
		boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.15)',
		borderRadius: 8,
		zIndex: 2,
	});

	const migrateAnchor = e => {
		e.target.parentElement.childNodes.forEach(el => {
			el.classList.contains(classes.active) ? el.classList.remove(classes.active) : '';
		});
		setStyle(prevState => ({
			...prevState,
			transform: `translateX(${e.target.offsetLeft}px)`,
			width: `${e.target.getBoundingClientRect().width}px`,
		}));
		e.target.classList.add(classes.active);
	};

	// useEffect(() => {
	// 	const resize = () => {
	// 		if (activeTab) {
	// 			setStyle(prevState => ({
	// 				...prevState,
	// 				transform: `translateX(${temp.offsetLeft}px)`,
	// 				width: `${temp.getBoundingClientRect().width}px`,
	// 			}));
	// 		}
	// 	};
	// 	window.addEventListener('load', resize);
	// 	window.addEventListener('resize', resize);
	// 	return () => {
	// 		window.removeEventListener('resize', resize);
	// 		window.removeEventListener('load', resize);
	// 	};
	// }, [activeTab]);

	return (
		<div className={classes.subheader__nav} onClick={e => migrateAnchor(e)}>
			<button style={style}></button>
			<button className={`${classes.subheader__btn} ${classes.active}`}>
				Список&nbsp;товаров
			</button>
			<button className={classes.subheader__btn}>Склады</button>
			<button className={classes.subheader__btn}>Финансы</button>
			<button className={classes.subheader__btn}>Аналитика</button>
			<button className={classes.subheader__btn}>Реклама</button>
			<button className={classes.subheader__btn}>Маркетинг</button>
			<button className={classes.subheader__btn}>Рейтинги</button>
			<button className={classes.subheader__btn}>Отзывы</button>
		</div>
	);
};

export default StoreNav;
