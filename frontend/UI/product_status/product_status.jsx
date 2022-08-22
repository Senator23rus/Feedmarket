import { useState } from 'react';
import classes from './product_status.module.scss';
import classNames from 'classnames';

const ProductStatus = props => {
	const [green, setGreen] = useState('all');
	const active = e => {
		setGreen(e.target.dataset.value);
	};
	const {
		status: { all, in_sale, ready, error, bad_descr, no_foto, out_sale, archive, drafts },
	} = props;
	return (
		<div className={classes.store__status_wrapper}>
			<ul className={classes.store__status_list} onClick={e => active(e)}>
				<li
					data-value={'all'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'all',
					})}>
					Все товары
					<span className={classes.store__status_list_counter}>{all}</span>
				</li>
				<li
					data-value={'in_sale'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'in_sale',
					})}>
					В продаже
					<span className={classes.store__status_list_counter}>{in_sale}</span>
				</li>
				<li
					data-value={'ready'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'ready',
					})}>
					Готовы к продаже
					<span className={classes.store__status_list_counter}>{ready}</span>
				</li>
				<li
					data-value={'error'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'error',
					})}>
					С ошибками
					<span className={classes.store__status_list_counter}>{error}</span>
				</li>
				<li
					data-value={'bad_descr'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'bad_descr',
					})}>
					Плохое описание
					<span className={classes.store__status_list_counter}>{bad_descr}</span>
				</li>
				<li
					data-value={'no_foto'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'no_foto',
					})}>
					Без фото
					<span className={classes.store__status_list_counter}>{no_foto}</span>
				</li>
				<li
					data-value={'out_sale'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'out_sale',
					})}>
					Снятые с продажи
					<span className={classes.store__status_list_counter}>{out_sale}</span>
				</li>
				<li
					data-value={'archive'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'archive',
					})}>
					В архиве
					<span className={classes.store__status_list_counter}>{archive}</span>
				</li>
				<li
					data-value={'drafts'}
					className={classNames(classes.store__status_item, {
						[classes.store__active]: green === 'drafts',
					})}>
					Черновики
					<span className={classes.store__status_list_counter}>{drafts}</span>
				</li>
			</ul>
		</div>
	);
};

export default ProductStatus;
