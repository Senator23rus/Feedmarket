import Layout from 'components/common/layouts';
import CardGrid from 'components/common/cards_grid/cards_grid';
import cards from '/mock/cards.json';
import Recomend from '/components/pages/home/recomend/recomend';
import classes from './Details_product.module.scss';

const Details_product = ({ cards }) => {
	return (
		<Layout>
			{/*// characteristics*/}
			{/*	<div className="characteristics container flex">*/}
			{/*		<div className="character__foto">*/}
			{/*    <img className="character__img" src="../media/jpeg/korma(1 page)/Vitomek-PreMix-Layers 1.png" alt=""/>*/}
			{/*</div>*/}
			<div className={classes.carousel}>
				<div className={classes.container}>
					<div
						id="carouselExampleIndicators"
						className={classes.carousel}
						data-bs-ride="carousel">
						<div className={classes.carousel_indicators}>
							<button className={classes.carousel__pagination__item} />
						</div>
						{/*<div className={classes.carousel_inner}>*/}
						{/*	<div className={classes.carousel_item}>*/}
						{/*		<img*/}
						{/*			className={classes.character__img}*/}
						{/*			src="../media/jpeg/korma(1 page)/Vitomek-PreMix-Layers 1.png"*/}
						{/*			alt=""*/}
						{/*		/>*/}
						{/*	</div>*/}
						{/*	<div className={classes.carousel_item}>*/}
						{/*		<img*/}
						{/*			className={classes.character__img}*/}
						{/*			src="../media/jpeg/korma(1 page)/Vitomek-PreMix-Layers 1.png"*/}
						{/*			alt="#"*/}
						{/*		/>*/}
						{/*	</div>*/}
						{/*	<div className={classes.carousel__item}>*/}
						{/*		<img*/}
						{/*			className={classes.character__img}*/}
						{/*			src="../media/jpeg/korma(1 page)/Vitomek-PreMix-Layers 1.png"*/}
						{/*			alt=""*/}
						{/*		/>*/}
						{/*	</div>*/}
						{/*	<div className={classes.carousel__item}>*/}
						{/*		<img*/}
						{/*			className={classes.character__img}*/}
						{/*			src="../media/jpeg/korma(1 page)/Vitomek-PreMix-Layers 1.png"*/}
						{/*			alt=""*/}
						{/*		/>*/}
						{/*	</div>*/}
						{/*	<div className={classes.carousel__item}>*/}
						{/*		<img*/}
						{/*			className={classes.character__img}*/}
						{/*			src="../media/jpeg/korma(1 page)/Vitomek-PreMix-Layers 1.png"*/}
						{/*			alt=""*/}
						{/*		/>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</div>
				</div>
				<div className={classes.character__text}>
					<div className={classes.character__description}>
						<div className={classes.text__wrapper}>
							<div className={classes.text__left}>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Категория</div>
									<div className={classes.text__line}></div>
								</div>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Тип</div>
									<div className={classes.ext__line}></div>
								</div>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Вид</div>
									<div className={classes.text__line}></div>
								</div>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Возраст животного</div>
									<div className={classes.text__line}></div>
								</div>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Процент ввода</div>
									<div className={classes.text__line}></div>
								</div>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Вес в упаковке, кг</div>
									<div className={classes.text__line}></div>
								</div>
								<div className={classes.text__strouk}>
									<div className={classes.text__description}>Страна изготовитель</div>
									<div className={classes.text__line}></div>
								</div>
							</div>

							<div>
								<div className={classes.text__right}>Птицеводство</div>
								<div className={classes.text__right}>Премикс, 1%</div>
								<div className={classes.text__right}>Бройлер</div>
								<div className={classes.text__right}>6 месяцев</div>
								<div className={classes.text__right}>10 кг/т</div>
								<div className={classes.text__right}>10</div>
								<div className={classes.text__right}>Российская Федерация</div>
							</div>
						</div>
					</div>

					<div className={classes.coast}>
						<span coast__text>10 500 руб.</span>
						<button className={classes.coast__btn}>В корзину</button>
					</div>
				</div>
				{/**************************************description***********************************/}
				<div className={classes.container}>
					<div className={classes.description}>
						<h4 className={classes.description__title}>
							Рекомендуемый рецепт смешивания (Комбикорм)
						</h4>
						<button className={classes.description__btn} Заказать индивидуальный рецепт />
					</div>
					<div className={classes.description}>
						<h4 className={classes.description__title}>Описание</h4>
						<p className={classes.description__text}>
							Принимая во внимание показатели успешности, перспективное планирование
							обеспечивает широкому кругу (специалистов) участие в формировании дальнейших
							направлений развития. Являясь всего лишь частью общей картины, сделанные на
							базе интернет-аналитики выводы неоднозначны и будут призваны к ответу.
							Прежде всего, высокое качество позиционных исследований выявляет срочную
							потребность форм воздействия. Как принято считать, стремящиеся вытеснить
							традиционное производство, нанотехнологии представлены в исключительно
							положительном свете.
						</p>
						<div className={classes.description__title}>Состав</div>
						<p className={classes.description__text}>
							Учитывая ключевые сценарии поведения, глубокий уровень погружения выявляет
							срочную потребность глубокомысленных рассуждений. Есть над чем задуматься:
							элементы политического процесса функционально разнесены на независимые
							элементы.
						</p>
					</div>
				</div>
				{/***********************fullcharacteristics***************/}
				<div className={classes.fullcharacteristics}>
					<h4 className={classes.text__title}>Полные характеристики</h4>
					<div className={classes.character__text}>
						<div className={classes.character__description}>
							<div className={classes.fullcharacteristics}>
								<div className={classes.text__left}>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Категория</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Тип</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вид</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Возраст животного</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Процент ввода</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вес в упаковке, кг</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__str}>
										<div className={classes.text__description}>Страна изготовитель</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Категория</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Тип</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вид</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Возраст животного</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Процент ввода</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вес в упаковке, кг</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Страна изготовитель</div>
										<div className={classes.text__line}></div>
									</div>
								</div>

								<div>
									<div className={classes.text__right}>Птицеводство</div>
									<div className={classes.text__right}>Премикс, 1%</div>
									<div className={classes.text__right}>Бройлер</div>
									<div className={classes.text__right}>6 месяцев</div>
									<div className={classes.text__right}>10 кг/т</div>
									<div className={classes.text__right}>10</div>
									<div className={classes.text__right}>Российская Федерация</div>
									<div className={classes.text__right}>Птицеводство</div>
									<div className={classes.text__right}>Премикс, 1%</div>
									<div className={classes.text__right}>Бройлер</div>
									<div className={classes.text__right}>6 месяцев</div>
									<div className={classes.text__right}>10 кг/т</div>
									<div className={classes.text__right}>10</div>
									<div className={classes.text__right}>Российская Федерация</div>
								</div>
							</div>
							<div className={classes.fullcharacteristics_text__wrapper}>
								<div className={classes.text__left}>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Категория</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Тип</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вид</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Возраст животного</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Процент ввода</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вес в упаковке, кг</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Страна изготовитель</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Категория</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Тип</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вид</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Возраст животного</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Процент ввода</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Вес в упаковке, кг</div>
										<div className={classes.text__line}></div>
									</div>
									<div className={classes.text__strouk}>
										<div className={classes.text__description}>Страна изготовитель</div>
										<div className={classes.text__line}></div>
									</div>
								</div>

								<div>
									<div className={classes.text__right}>Птицеводство</div>
									<div className={classes.text__right}>Премикс, 1%</div>
									<div className={classes.text__right}>Бройлер</div>
									<div className={classes.text__right}>6 месяцев</div>
									<div className={classes.text__right}>10 кг/т</div>
									<div className={classes.text__right}>10</div>
									<div className={classes.text__right}>Российская Федерация</div>
									<div className={classes.text__right}>Птицеводство</div>
									<div className={classes.text__right}>Премикс, 1%</div>
									<div className={classes.text__right}>Бройлер</div>
									<div className={classes.text__right}>6 месяцев</div>
									<div className={classes.text__right}>10 кг/т</div>
									<div className={classes.text__right}>10</div>
									<div className={classes.text__right}>Российская Федерация</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Recomend />
			<CardGrid type="row" cards={cards} />
		</Layout>
	);
};
export async function getStaticProps() {
	return {
		props: cards,
	};
}
export default Details_product;
