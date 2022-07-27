import Layout from 'components/common/layouts';
import classes from 'styles/pages/my_store_test.module.scss';
import cards from 'mock/cards.json';
import status from 'mock/status.json';
import Paginations from 'UI/pagination/pagination';
import Button from 'UI/button';
import Checkbox from 'UI/checkbox';
import StoreProduct from 'UI/store_product/store_product';
import ProductStatus from 'UI/product_status/product_status';

const Details_product = () => {
	return (
		<Layout>
			<div className={classes.subheader__nav}>
				<button className={classes.subheader__btn}>Список&nbsp;товаров</button>
				<button className={classes.subheader__btn}>Склады</button>
				<button className={classes.subheader__btn}>Финансы</button>
				<button className={classes.subheader__btn}>Аналитика</button>
				<button className={classes.subheader__btn}>Реклама</button>
				<button className={classes.subheader__btn}>Маркетинг</button>
				<button className={classes.subheader__btn}>Рейтинги</button>
				<button className={classes.subheader__btn}>Отзывы</button>
			</div>

			<div className={classes.product__selection}>
				<Button factor={'green'} size={'m'}>
					<div className={classes.product__btn_wrapper}>
						<div className={classes.product__btn_text}>Добавить товар</div>
						<svg
							className={classes.product__btn_plus}
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10 15.8333C13.2217 15.8333 15.8333 13.2217 15.8333 10C15.8333 6.77834 13.2217 4.16667 10 4.16667C6.77834 4.16667 4.16667 6.77834 4.16667 10C4.16667 13.2217 6.77834 15.8333 10 15.8333ZM10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85787 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85787 17.5 10 17.5Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.0003 6.6665C10.4606 6.6665 10.8337 6.96498 10.8337 7.33317L10.8337 12.6665C10.8337 13.0347 10.4606 13.3332 10.0003 13.3332C9.54009 13.3332 9.16699 13.0347 9.16699 12.6665L9.16699 7.33317C9.16699 6.96498 9.54009 6.6665 10.0003 6.6665Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13.333 9.99984C13.333 10.4601 13.0345 10.8332 12.6663 10.8332L7.33301 10.8332C6.96482 10.8332 6.66634 10.4601 6.66634 9.99984C6.66634 9.5396 6.96482 9.1665 7.33301 9.1665L12.6663 9.1665C13.0345 9.1665 13.333 9.5396 13.333 9.99984Z"
								fill="white"
							/>
						</svg>
					</div>
				</Button>
				<div className={classes.product__wrapper}>
					<span className={classes.product__selection_label}>Выбрать все</span>
					<Checkbox />
				</div>
			</div>

			<div className={classes.store__grid}>
				<ProductStatus status={status[0]} />
				<div className={classes.store__products_list}>
					{cards.cards.map(card => {
						return <StoreProduct card={card} key={card.id} />;
					})}
				</div>
			</div>
			<Paginations />
		</Layout>
	);
};

export default Details_product;
