import axios from "axios";


const codeMessage = {
	202: 'Запрос вошёл в фоновую очередь (асинхронная задача)',
	204: 'Операция выполнена',
	401: 'У пользователя нет разрешения (токен, имя пользователя, ошибка пароля)',
	403: 'Пользователь авторизован, но доступ отключен',
	404: 'Неверные данные',
	406: 'Формат запроса недоступен',
	410: 'Запрашиваемый ресурс удален и не будет получен',
	500: 'Сервер перестал корректно работать',
	502: 'Ошибка шлюза',
	503: 'Сервер временно недоступен, попробуйте позже',
	504: 'Время ожидания ответа сервера истекло',
};

class Api {


	constructor() {
		/**
		 *
		 * @type {import('axios').AxiosInstance}
		 */
		this.client = axios.create();
		this.refreshRequest = null;
		// this.access = nookies.get('access') || null;

		/* базовый URL для локальной разработки */
		this.client.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

		/* базовый URL для продакшн разработки */
		// this.client.defaults.baseURL = 'http://5.63.154.181:8000/api/v1';

		/* базовый URL для продакшн разработки */
		// this.client.defaults.baseURL = 'https://api.ychampion.ru/api/v1';

		this.client.interceptors.request.use(
			config => {
				if (this.access === null) {
					return { ...config };
				}
				const newConfig = {
					...config,
				};
				if (this.access) {
					newConfig.headers.Authorization = `Bearer ${this.access}`;
				}
				return newConfig;
			},
			e => {
				return Promise.reject(e);
			}
		);

		this.client.interceptors.response.use(
			r => r,
			async error => {
				const config = error.config;
				if (error) {
					if (!error.response) {
						return console.log('здесь ошибка', error.message);
					}
					if (config.retry) {
						await Promise.reject(error);
					}
					const status = error.response.status;
					let errorMessage;
					if (status && codeMessage[status]) {
						errorMessage = codeMessage[status];
					}
					if (errorMessage) {
						// notification.error({ type: 'error', message: errorMessage, duration: 2 });
					}
					console.log(error);
					if (status === 401 || status === 403 || status === 500 || status === 0) {
						this.access = null;
						throw new Error('ошибка в api ' + status);
						// nookies.remove('access');
					}
					console.log('status api response>>>', status);
				}
				const newRequest = {
					...config,
					retry: true,
				};

				return this.client(newRequest);
			}
		);
	}

	getToken() {
		return this.access;
	}

	setToken(token) {
		this.access = token;
		// nookies.set('access', token, { expires: new Date(Date.now() + 828e+7) });
	}

	async loggedInServer(auth) {
		return await this.client.post('/auth/jwt/create/', { ...auth });
	}

	async login(auth) {
		const response = await this.loggedInServer(auth);
		this.setToken(response.data.access);
		return response.data.access;
	}

	async logout() {
		this.access = null;
		// nookies.remove('access');
	}
	async getIndustries() {
		return await this.client.get('/industry_list/');
	}
	async getGoodList() {
		return await this.client.get('/good_list/');
	}
}

export default new Api();
