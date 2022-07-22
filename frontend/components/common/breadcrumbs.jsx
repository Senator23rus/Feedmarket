import { Breadcrumbs, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect } from 'react';
import React from 'react';
import cards from 'mock/n_cards.json';
import categories from 'mock/categories.json';
import CustomLink from 'UI/custom-link';

const _defaultGetTextGenerator = (param, query) => null;
const _defaultGetDefaultTextGenerator = path => path;

const generatePathParts = pathStr => {
	const pathWithoutQuery = pathStr.split('?')[0];
	return pathWithoutQuery.split('/').filter(v => v.length > 0);
};

export default function NextBreadcrumbs({
	getTextGenerator = _defaultGetTextGenerator,
	getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
}) {
	const router = useRouter();

	const breadcrumbs = React.useMemo(
		function generateBreadcrumbs() {
			const asPathNestedRoutes = generatePathParts(router.asPath);
			const pathnameNestedRoutes = generatePathParts(router.pathname);

			const crumblist = asPathNestedRoutes.map((subpath, idx) => {
				// Pull out and convert "[post_id]" into "post_id"
				let param;
				if (pathnameNestedRoutes[idx]) {
					param = pathnameNestedRoutes[idx]
						.replace('[', '')
						.replace('...', '')
						.replace(']', '');
				}

				const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
				return {
					href,
					textGenerator: getTextGenerator(param, router.query),
					text: getDefaultTextGenerator(subpath, href),
				};
			});

			return [{ href: '/', text: 'Главная' }, ...crumblist];
		},
		[
			router.asPath,
			router.pathname,
			router.query,
			getTextGenerator,
			getDefaultTextGenerator,
		]
	);

	return (
		<Breadcrumbs
			sx={{
				'&': {
					alignItems: 'center',
				},
			}}
			separator={
				<svg
					width="4"
					height="4"
					viewBox="0 0 4 4"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="2" cy="2" r="2" fill="#999999" />
				</svg>
			}
			aria-label="breadcrumb">
			{breadcrumbs.map((crumb, idx) => (
				<Crumb key={idx} last={idx === breadcrumbs.length - 1} {...crumb} />
			))}
		</Breadcrumbs>
	);
}

function Crumb({ text: defaultText, textGenerator, href, last = false }) {
	const [text, setText] = React.useState(defaultText);

	useEffect(() => {
		// If `textGenerator` is nonexistent, then don't do anything
		(async () => {
			if (!Boolean(textGenerator)) {
				return;
			}
			// Run the text generator and set the text again
			const finalText = await textGenerator();
			setText(finalText);
		})();
	}, [textGenerator]);

	if (last) {
		return <Typography color="text.primary">{text}</Typography>;
	}

	return (
		<CustomLink className={'breadcrumb-link'} href={href}>
			{text}
		</CustomLink>
	);
}

const AppContext = createContext();

export function AppWrapper({ children }) {
	const getDefaultTextGenerator = React.useCallback(subpath => {
		return {
			catalog: 'Каталог',
		}[subpath];
	}, []);

	const getTextGenerator = React.useCallback((param, query) => {
		console.log('query>>>', query);
		return {
			card_id: () => cards.find(_ => _.id === query.card_id).title,
			type: () => categories.find(_ => _.id === query.type).title,
		}[param];
	}, []);

	const sharedState = {
		getTextGenerator,
		getDefaultTextGenerator,
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

/**
 *
 * @returns {{getTextGenerator,getDefaultTextGenerator}}
 */
export function useAppContext() {
	return useContext(AppContext);
}
