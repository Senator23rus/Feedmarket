/**
 * TODO: в этом файле и файлах по пути  /store/reducers/catalog/* потом разобраться когда появиться внятная фильтрация
 */

const initialState = {
	category: { name: '', id: null },
	raw: {
		types: [
			{
				id: 1,
				name: 'Зерновое сырье',
			},
			{
				id: 2,
				name: 'Белковое сырье',
			},
			{
				id: 3,
				name: 'Аминокислоты',
			},
			{
				id: 4,
				name: 'Витамины',
			},
			{
				id: 5,
				name: 'Макро-элементы',
			},
			{
				id: 6,
				name: 'ЗЦМ',
			},
			{
				id: 7,
				name: 'ЗОМ',
			},
			{
				id: 8,
				name: 'ЗСМ',
			},
			{
				id: 9,
				name: 'Подкислители',
			},
			{
				id: 10,
				name: 'Атсорбенты микотоксинов',
			},
			{
				id: 11,
				name: 'Другие кисловые добавки',
			},
		],
	},
	cattle: {
		types: [
			{
				id: 1,
				name: 'Комбикорм с',
			},
			{
				id: 2,
				name: 'Премикс с',
			},
			{
				id: 3,
				name: 'БВМК с',
			},
		],
	},
	poetry: {
		types: [
			{
				id: 1,
				name: 'Комбикорм p',
			},
			{
				id: 2,
				name: 'Премикс p',
			},
			{
				id: 3,
				name: 'БВМК p',
			},
		],
	},
	pig: {
		types: [
			{
				id: 1,
				name: 'Комбикорм g',
			},
			{
				id: 2,
				name: 'Премикс g',
			},
			{
				id: 3,
				name: 'БВМК g',
			},
		],
	},
};
export const catalogReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
