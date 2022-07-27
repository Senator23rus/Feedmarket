import classes from './product_status.module.scss';

const ProductStatus = props => {
	const {
		status: { all, in_sale, ready, error, bad_descr, no_foto, out_sale, archive, drafts },
	} = props;
	return (
		<div className={classes.store__status_wrapper}>
			<ul className={classes.store__status_list}>
				<li className={classes.store__status_all}>
					Все товары
					<span className={classes.store__status_list_counter}>{all}</span>
				</li>
				<li className={classes.store__status_item}>
					В продаже
					<span className={classes.store__status_list_counter}>{in_sale}</span>
				</li>
				<li className={classes.store__status_item}>
					Готовы к продаже
					<span className={classes.store__status_list_counter}>{ready}</span>
				</li>
				<li className={classes.store__status_item}>
					С ошибками
					<span className={classes.store__status_list_counter}>{error}</span>
				</li>
				<li className={classes.store__status_item}>
					Плохое описание
					<span className={classes.store__status_list_counter}>{bad_descr}</span>
				</li>
				<li className={classes.store__status_item}>
					Без фото
					<span className={classes.store__status_list_counter}>{no_foto}</span>
				</li>
				<li className={classes.store__status_item}>
					Снятые с продажи
					<span className={classes.store__status_list_counter}>{out_sale}</span>
				</li>
				<li className={classes.store__status_item}>
					В архиве
					<span className={classes.store__status_list_counter}>{archive}</span>
				</li>
				<li className={classes.store__status_item}>
					Черновики
					<span className={classes.store__status_list_counter}>{drafts}</span>
				</li>
			</ul>
		</div>
	);
};

export default ProductStatus;
