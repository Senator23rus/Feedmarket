import Head from 'next/head';
import { useEffect } from 'react';

/**
 * @description  Компонент для SEO содержит приблизительне мета данные для страницы,
   можно кастомизировать под себя добавляя или удаляя пропсы
   также содержит подключение favicon.ico для вкладки страницы в браузере
 *
 * @param {string} title - заголовок для вкладки страницы в браузере
 * @param {string} description - мета описание страницы
 * @param {string} keywords - мета ключевые слова
 * @param {string} author - мета автор сайта
 * @returns {JSX.Element}
 * @constructor
 */
const HeadMeta = ({ title, description, keywords, author }) => {
	let head_title = 'Feed-Market';
	useEffect(() => {
		if (title) {
			head_title += ` | ${title}`;
		}
	}, [title]);
	return (
		<Head>
			<title>{head_title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			{description && <meta name="description" content={description} />}
			{keywords && <meta name="keywords" content={keywords} />}
			{author && <meta name="author" content={author} />}
		</Head>
	);
};

export default HeadMeta;
