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
							<div className={classes.block__characteristic__dnl}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M6.46967 8.46967C6.76256 8.17678 7.23744 8.17678 7.53033 8.46967L11.25 12.1893L11.25 5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5L12.75 12.1893L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967Z"
										fill="#7E7E7E"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5 15.25C5.41421 15.25 5.75 15.5858 5.75 16V17C5.75 17.6904 6.30964 18.25 7 18.25L17 18.25C17.6904 18.25 18.25 17.6904 18.25 17V16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16V17C19.75 18.5188 18.5188 19.75 17 19.75L7 19.75C5.48122 19.75 4.25 18.5188 4.25 17V16C4.25 15.5858 4.58579 15.25 5 15.25Z"
										fill="#7E7E7E"
									/>
								</svg>
								<span>Сертификат соответствия</span>
							</div>
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
							<div className={classes.block__characteristic__dnl}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M6.46967 8.46967C6.76256 8.17678 7.23744 8.17678 7.53033 8.46967L11.25 12.1893L11.25 5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5L12.75 12.1893L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967Z"
										fill="#7E7E7E"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5 15.25C5.41421 15.25 5.75 15.5858 5.75 16V17C5.75 17.6904 6.30964 18.25 7 18.25L17 18.25C17.6904 18.25 18.25 17.6904 18.25 17V16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16V17C19.75 18.5188 18.5188 19.75 17 19.75L7 19.75C5.48122 19.75 4.25 18.5188 4.25 17V16C4.25 15.5858 4.58579 15.25 5 15.25Z"
										fill="#7E7E7E"
									/>
								</svg>
								<span className={classes.block__characteristic_text}>
									Сертификат соответствия
								</span>
							</div>
							<div className={classes.block__characteristic__dnl}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M6.46967 8.46967C6.76256 8.17678 7.23744 8.17678 7.53033 8.46967L11.25 12.1893L11.25 5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5L12.75 12.1893L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967Z"
										fill="#7E7E7E"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5 15.25C5.41421 15.25 5.75 15.5858 5.75 16V17C5.75 17.6904 6.30964 18.25 7 18.25L17 18.25C17.6904 18.25 18.25 17.6904 18.25 17V16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16V17C19.75 18.5188 18.5188 19.75 17 19.75L7 19.75C5.48122 19.75 4.25 18.5188 4.25 17V16C4.25 15.5858 4.58579 15.25 5 15.25Z"
										fill="#7E7E7E"
									/>
								</svg>
								<span className={classes.block__characteristic_text}>
									Сертификат соответствия
								</span>
							</div>
							<button className={classes.card__button_long}>
								Заказать индивидуальный рецепт
							</button>
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
						<PriseTag cards={cards} />
					</div>
				</div>
			</div>
			<Paginations />
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
