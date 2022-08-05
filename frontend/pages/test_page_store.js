import Layout from 'components/common/layouts';
import { useEffect, useRef, useState } from 'react';
import Button from 'UI/button';
import Input from 'UI/Input/input';
import { useSelector } from 'react-redux';
import ChipsButton from 'UI/chipsButton';
import { wrapper } from 'store';

const TestPageStore = () => {
	const categoriesFromStore = useSelector(
		/**@param {StateApp} state*/ state => state.catalog
	);

	const [stateView, setStateView] = useState(
		/**
		 * @type {
		 * {
		 * category:
		 * {id:number,
		 * active:boolean,
		 * name:string,
		 * category:string
		 * }[],
		 * types:
		 * {id:number,
		 * active:boolean,
		 * name:string,
		 * category:string
		 * }[],
		 * activeCategory:null|{id:number,active:boolean,name:string,category:string},
		 * activeType:null|{id:number,active:boolean,name:string,category:string}
		 * }}
		 */
		{
			category: [
				{ id: 1, active: false, name: 'Птицеводство', category: 'poetry' },
				{ id: 2, active: false, name: 'Свиноводство', category: 'pig' },
				{ id: 3, active: false, name: 'Крупный рогатый скот', category: 'cattle' },
				{ id: 4, active: false, name: 'Сырье', category: 'raw' },
			],
			activeCategory: null,
			activeType: null,
			types: [],
		}
	);

	const [startAnimate, setStartAniimate] = useState(false);

	const clickOnChips = type => {
		let newTypes = JSON.parse(JSON.stringify(stateView.types));
		newTypes = newTypes.map(_ =>
			_.id === type.id ? { ..._, active: true } : { ..._, active: false }
		);
		setStateView(prevState => ({
			...prevState,
			types: newTypes,
			activeType: newTypes.find(_ => _.id === type.id),
		}));
	};

	const changeCategory = e => {
		const copyCategory = [...stateView.category].map(_ =>
			_.id === e.id ? { ..._, active: true } : { ..._, active: false }
		);
		const activeCategory = copyCategory.find(_ => _.active);
		setStartAniimate(true);
		setTimeout(() => {
			setStartAniimate(false);
			setStateView(prevState => ({
				...prevState,
				category: copyCategory,
				activeCategory: activeCategory,
				activeType: null,
			}));
		}, 100);
	};
	const imageRef = useRef(null);

	useEffect(() => {
		if (stateView.activeCategory) {
			setStateView(prevState => ({
				...prevState,
				types: categoriesFromStore[stateView.activeCategory.category].types.map(_ => ({
					..._,
					active: false,
				})),
			}));
		}
		//eslint-disable-next-line
	}, [stateView.activeCategory]);

	return (
		<Layout>
			<div className="store-product-page">
				<div className={'store-product-page__title'}>
					<h1>Добавление товара</h1>
					<div>хлебные крошки</div>
				</div>
				<div className="store-product-page__category">
					<h3 className="title">Выберете категорию товара</h3>
					<div className={'list'}>
						{stateView.category.map((_, index) => (
							<div
								className={`list__item ${_.active && 'list__item-active'}`}
								key={_.id}
								data-name={_.name}
								data-category={_.category}
								onClick={() => changeCategory(_, index)}>
								{_.name}
							</div>
						))}
					</div>
				</div>

				{!!stateView.activeCategory && (
					<div
						className={`store-product-page__type store-product-page__type-${startAnimate} `}>
						<h3 className={'title'}>Выберете тип товара</h3>
						<div className={'list'}>
							{stateView.types.map((_, index) => (
								<ChipsButton
									onDelete={() => {}}
									key={index}
									className={`list__item`}
									onClick={() => clickOnChips(_)}
									active={_.active}>
									{_.name}
								</ChipsButton>
							))}
						</div>
					</div>
				)}
				{/*{stateView.active && stateView.active.category === 'pig' ? (*/}
				{/*		<h3 className={'title'}>Выберете тип товара</h3>*/}
				{/*		<div className={'list'}>*/}
				{/*			<span className={'list__item list__item-active'}>Комбикорм</span>*/}
				{/*			<span className={'list__item'}>Премикс</span>*/}
				{/*			<span className={'list__item'}>БВМК</span>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*) : stateView.active && stateView.active.category === 'poetry' ? (*/}
				{/*	<div*/}
				{/*		className={`store-product-page__type store-product-page__type-${startAnimate}`}>*/}
				{/*		<h3 className={'title'}>Выберете тип товара</h3>*/}
				{/*		<div className={'list'}>*/}
				{/*			<span className={'list__item list__item-active'}>Комбикорм</span>*/}
				{/*			<span className={'list__item'}>Премикс</span>*/}
				{/*			<span className={'list__item'}>БВМК</span>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*) : stateView.active && stateView.active.category === 'cattle' ? (*/}
				{/*	<div*/}
				{/*		className={`store-product-page__type store-product-page__type-${startAnimate}`}>*/}
				{/*		<h3 className={'title'}>Выберете тип товара</h3>*/}
				{/*		<div className={'list'}>*/}
				{/*			<span className={'list__item list__item-active'}>Комбикорм</span>*/}
				{/*			<span className={'list__item'}>Премикс</span>*/}
				{/*			<span className={'list__item'}>БВМК</span>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*) : stateView.active && stateView.active.category === 'raw' ? (*/}
				{/*	<div*/}
				{/*		className={`store-product-page__type store-product-page__type-${startAnimate}`}>*/}
				{/*		<h3 className={'title'}>Выберете тип товара</h3>*/}
				{/*		<div className={'list'}>*/}
				{/*			<span className={'list__item list__item-active'}>Зерновое сырье</span>*/}
				{/*			<span className={'list__item'}>Белковое сырье</span>*/}
				{/*			<span className={'list__item'}>Аминокислоты</span>*/}
				{/*			<span className={'list__item'}>Витамины</span>*/}
				{/*			<span className={'list__item'}>Макро-элементы</span>*/}
				{/*			<span className={'list__item'}>ЗЦМ</span>*/}
				{/*			<span className={'list__item'}>ЗОМ</span>*/}
				{/*			<span className={'list__item'}>ЗСМ</span>*/}
				{/*			<span className={'list__item'}>Подкислители</span>*/}
				{/*			<span className={'list__item'}>Атсорбенты микотоксинов</span>*/}
				{/*			<span className={'list__item'}>Другие кормовые добавки</span>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*) : null}*/}

				{stateView.activeType && (
					<>
						<div className="store-product-page__form">
							<div className="store-product-page__form__photo">
								<div className={'photo'}>
									<svg
										onClick={() => {
											if (imageRef.current) {
												imageRef.current.click();
											}
										}}
										width="120"
										height="120"
										viewBox="0 0 120 120"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<mask
											id="mask0_2300_3033"
											style={{ maskType: 'alpha' }}
											maskUnits="userSpaceOnUse"
											x="15"
											y="15"
											width="90"
											height="90">
											<path
												d="M15 23C15 19.2288 15 17.3431 16.1716 16.1716C17.3431 15 19.2288 15 23 15H97C100.771 15 102.657 15 103.828 16.1716C105 17.3431 105 19.2288 105 23V97C105 100.771 105 102.657 103.828 103.828C102.657 105 100.771 105 97 105H23C19.2288 105 17.3431 105 16.1716 103.828C15 102.657 15 100.771 15 97V23Z"
												fill="#273B4A"
											/>
										</mask>
										<g mask="url(#mask0_2300_3033)">
											<path
												d="M40.8223 49.1777L17.5194 72.4806C16.2787 73.7213 15.6583 74.3417 15.3536 75.1357C15.0489 75.9297 15.095 76.8058 15.1873 78.558L17.5 122.5H105V86.0629C105 84.3083 105 83.431 104.654 82.6541C104.308 81.8772 103.656 81.2903 102.352 80.1165L82.8208 62.5387C81.4852 61.3367 80.8174 60.7357 80.0199 60.7566C79.2224 60.7776 78.5871 61.4129 77.3165 62.6835L62.0888 77.9112C61.1424 78.8576 60.6692 79.3308 60.1482 79.2304C59.6272 79.1301 59.3636 78.515 58.8363 77.2848L47.3273 50.4304C46.2729 47.97 45.7456 46.7398 44.7036 46.5391C43.6615 46.3385 42.7151 47.2849 40.8223 49.1777L40.8223 49.1777Z"
												fill="#DFE6EE"
												stroke="#DFE6EE"
											/>
										</g>
										<path
											d="M15 23C15 19.2288 15 17.3431 16.1716 16.1716C17.3431 15 19.2288 15 23 15H97C100.771 15 102.657 15 103.828 16.1716C105 17.3431 105 19.2288 105 23V97C105 100.771 105 102.657 103.828 103.828C102.657 105 100.771 105 97 105H23C19.2288 105 17.3431 105 16.1716 103.828C15 102.657 15 100.771 15 97V23Z"
											stroke="#DFE6EE"
											strokeWidth="1.2"
										/>
										<circle cx="82.5" cy="37.5" r="7.5" fill="#DFE6EE" />
									</svg>
									<p>Добавить фотографии товара</p>
									<input
										ref={imageRef}
										type={'file'}
										accept={'.jpg, .jpeg, .png'}
										hidden={true}
										multiple={true}
									/>
								</div>
							</div>
							<div className="store-product-page__form__fields">
								<div className="block col-1">
									<Input label={'Название товара'} />
									<Input label={'Артикул'} />
									<Input label={'Штрих код'} />
								</div>
								<div className="block col-1">
									<Input label={'Остаток на складе'} />
									<Input label={'Вес в упаковке'} />
									<Input label={'Цена'} />
								</div>
								<div className="block col-1 ">
									<Input label={'Вид животного'} />
								</div>
								<div className="block col-1">
									<Input label={'Процент ввода'} />
								</div>
								<div className="block col-2">
									<Input label={'Текстовое описание'} minRows={3} multiline={true} />
									<Input label={'Состав'} minRows={3} multiline={true} />
									<Input
										label={'Рекомендуемый рецепт смешивания'}
										minRows={3}
										multiline={true}
									/>
								</div>
							</div>
						</div>
						<div className="store-product-page__btns">
							<Button factor={'ghost'} size={'s'}>
								Сохранить и выйти
							</Button>
							<Button factor={'green'} size={'s'}>
								Продолжить
							</Button>
						</div>
					</>
				)}
			</div>
		</Layout>
	);
};

export const getInitialPageProps = wrapper.getStaticProps(state => async () => {
	console.log('asd');
});

export default TestPageStore;
