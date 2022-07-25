import React, { useEffect, useRef, useState } from 'react';
import Layout from 'components/common/layouts';
import cards from 'mock/n_cards.json';
import NextBreadcrumbs, { useAppContext } from 'components/common/breadcrumbs';
import classes from 'styles/pages/Details_product.module.scss';
import Carousel from 'UI/carousel/carousel';
import ListCharacteristic from 'components/list_characteristic/list_characteristic';
import DatailedCharacteristic from 'components/common/datailed_characteristic/datailed_characteristic';
import PriseTag from 'UI/price_tag/prise_tag';
import Paginations from 'UI/pagination/pagination';

const CardPage = ({ card, cards }) => {
	const { getTextGenerator, getDefaultTextGenerator } = useAppContext();

	const myRef = useRef(null);
	const scrollToRef = () =>
		myRef.current && myRef.current.scrollIntoView({ behavior: 'smooth' });
	console.log(cards);

	const containerGrid = useRef(null);

	const [padding, setPadding] = useState(false);

	function onWheel() {
		if (containerGrid.current) {
			const top = containerGrid.current?.getBoundingClientRect().top;
			if (top <= 0) {
				setPadding(true);
			} else {
				setPadding(false);
			}
		}
	}

	useEffect(() => {
		if (typeof document === 'object') {
			document?.querySelector('#__next').addEventListener('wheel', onWheel);
		}
		return () => document?.querySelector('#__next').addEventListener('wheel', onWheel);
	}, []);

	return (
		<Layout>
			<div className="card-page">
				<div className="card-page__card">
					<h1 className={'title'}>{card.title}</h1>
					<NextBreadcrumbs
						getTextGenerator={getTextGenerator}
						getDefaultTextGenerator={getDefaultTextGenerator}
					/>
				</div>
				<div className={classes.main__grid} ref={containerGrid}>
					<div className={classes.main__grid__left}>
						<div className={classes.product__title}>
							<Carousel />
							<ListCharacteristic scrollToRef={scrollToRef} />
						</div>
						<div className={classes.block__characteristic}>
							<h2 className={classes.block__characteristic_title}>Описание</h2>
							<p className={classes.block__characteristic_text}>
								Принимая во внимание показатели успешности, перспективное планирование
								обеспечивает широкому кругу (специалистов) участие в формировании
								дальнейших направлений развития. Являясь всего лишь частью общей картины,
								сделанные на базе интернет-аналитики выводы неоднозначны и будут призваны
								к ответу. Прежде всего, высокое качество позиционных исследований выявляет
								срочную потребность форм воздействия. Как принято считать, стремящиеся
								вытеснить традиционное производство, нанотехнологии представлены в
								исключительно положительном свете.
							</p>
						</div>
						<div className={classes.block__characteristic}>
							<h2 className={classes.block__characteristic_title}>Состав</h2>
							<p className={classes.block__characteristic_text}>
								Учитывая ключевые сценарии поведения, глубокий уровень погружения выявляет
								срочную потребность глубокомысленных рассуждений. Есть над чем задуматься:
								элементы политического процесса функционально разнесены на независимые
								элементы.
							</p>
						</div>
						<div className={classes.block__characteristic}>
							<h2 className={classes.block__characteristic_title}>
								Рекомендуемый рецепт смешивания
								<br />
								(Комбикорм)
							</h2>
							<div className={classes.block__characteristic_text}>
								<span className={classes.block__characteristic_subtitle}>
									Вам потребуется:
								</span>
								<ul className={classes.block__characteristic_list}>
									<li>
										Пшеница — 550 граммов (предельная норма ввода 600 граммов — 60%);
									</li>
									<li>
										Ячмень — 150 граммов (предельная норма ввода 300 граммов — 30%);
									</li>
									<li>
										Отруби пшеничные — 50 граммов (предельная норма ввода 100 граммов —
										10%);
									</li>
									<li>
										Жмых подсолнечный — 100 граммов (предельная норма ввода 150 граммов —
										15%);
									</li>
									<li>
										Мука мясокостная — 40 граммов (предельная норма ввода 70 граммов —
										7%);
									</li>
									<li>
										Масло подсолнечное — 20 граммов (предельная норма ввода 30 граммов —
										3%);
									</li>
									<li>Ракушка — 50 граммов (предельная норма ввода 80 граммов — 8%);</li>
									<li>
										Мел кормовой — 27 граммов (предельная норма ввода 30 граммов — 3%);
									</li>
									<li>
										Соль поваренная — 3 грамма (предельная норма ввода 3 грамма — 0,3%);
									</li>
									<li>
										Премикс (1%) для кур-несушек промышленного стада — 10 граммов
										(предельная норма ввода 10 граммов — 1%)
									</li>
								</ul>
							</div>
							<div className={classes.card__button_long}>
								Заказать индивидуальный рецепт
							</div>
						</div>

						<div className={classes.detailed__characteristic}>
							<h2 className={classes.detailed__characteristic_title} ref={myRef}>
								Подробные характеристики
							</h2>
							<div className={classes.detailed__characteristic_wrapper}>
								<DatailedCharacteristic />
								<DatailedCharacteristic />
							</div>
						</div>
					</div>

					<div
						style={{
							...(padding && {
								paddingTop: 53,
								transition: 'padding linear 200ms',
							}),
						}}
						className={classes.main__grid__right}>
						<PriseTag />
					</div>
				</div>
			</div>
			<Paginations/>
			{/*<Recomend cards={cards} />*/}
		</Layout>
	);
};

export async function getStaticPaths(ctx) {
	const paths = cards.map(_ => ({
		params: { card_id: String(_.id) },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	console.log('params>>><', params);
	const card = cards.find(_ => String(_.id) === params.card_id);
	return {
		props: { card },
	};
}

export default CardPage;
