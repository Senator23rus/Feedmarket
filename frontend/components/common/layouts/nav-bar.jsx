import CustomLink from 'UI/custom-link';
import Image from 'next/image';
import Input from 'UI/Input/input';
import { useContext, useEffect, useRef, useState } from 'react';
import { useOutsideClick } from 'hooks/use-outside-click';
import Dropdown from 'UI/dropdown';
import { useSelector } from 'react-redux';
import { AppContext } from 'pages/_app';
import NoSsr from 'components/common/no-ssr';
import { useAction } from 'hooks/useActions';

const Menu = () => {
	const [isAuth, setAuth] = useState(true);
	const { logOut } = useAction();
	return (
		<div className={'drop'}>
			{isAuth ? (
				<>
					<div className={'drop__links'}>
						<CustomLink href={'/test_my_store'}>
							<span>Мой магазин</span>
						</CustomLink>
						{/*<div className="separator" />*/}
						{/*<span>Личный кабинет</span>*/}
						{/*<div className="separator" />*/}
						{/*<span>Избранное</span>*/}
						{/*<div className="separator" />*/}
						{/*<span>Сообщения</span>*/}
						{/*<div className="separator" />*/}
						{/*<span>Уведомления</span>*/}
					</div>
					<div onClick={logOut} className={'drop__footer'}>
						Выход
					</div>
				</>
			) : (
				<>
					<p className={'drop__title'}>
						Войдите, чтобы делать покупки и пользоваться персональными предложениями
					</p>
					<div className={'drop__links'}>
						<CustomLink href={'/login'}>Войти</CustomLink>
						<div className="separator" />
						<CustomLink href={'/register'}>Зарегистрироваться</CustomLink>
					</div>
				</>
			)}
		</div>
	);
};

/**
 * @description Компонент навигации по сайту, содержит несуществующую страницу которая выводит на дефолтную 404 страницу,
 можно кастомизировать
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = () => {
	const sx = {
		'&:hover label': {
			fontFamily: 'Gilroy, sans-serif',
			fontStyle: 'normal',
			fontWeight: 700,
			fontSize: '20px',
			lineHeight: '24px',
			color: '#414141',
		},
		'& label': {
			paddingLeft: '5px',
			transform: 'translate(12px, 17px) scale(1)',
			fontFamily: 'Gilroy, sans-serif',
			fontStyle: 'normal',
			fontWeight: 700,
			fontSize: '20px',
			lineHeight: '24px',
			color: '#999999',
		},
		'& label.Mui-focused': {
			fontFamily: 'Gilroy, sans-serif',
			transform: 'translate(12px, 7px) scale(0.75)',
			fontStyle: 'normal',
			fontWeight: 700,
			fontSize: '20px',
			lineHeight: '24px',
			color: '#999999',
		},
		'& .MuiFilledInput-root': {
			borderRadius: '20px',
			border: '4px solid #FF7A00',
			background: '#F2FAF5',
			'& fieldset': {
				borderColor: '#EEEFF1',
			},
			'&:hover': {
				backgroundColor: '#FFFFFF',
				border: '4px solid #FF7A00',
			},
			'&.Mui-focused fieldset': {
				backgroundColor: 'transparent',
				borderColor: '#F3DB00',
			},
			'&.Mui-focused': {
				backgroundColor: '#FFFFFF',
				border: '4px solid #FF7A00',
			},
			'&:before': {
				display: 'none',
			},
			'&:after': {
				display: 'none',
			},
			'&:hover:before': {
				borderBottom: 'none',
			},
			'&:focus:before': {
				borderBottom: 'none',
			},
			'&:active:before': {
				borderBottom: 'none',
			},
		},
	};

	const [isAuth, setAuth] = useState(true);

	const [dropdown, setDropdown] = useState(false);

	const dropRef = useRef();

	useOutsideClick(dropRef, () => setDropdown(false));

	return (
		<>
			<div className="app__navbar-top">
				<div className="app__navbar-top-container">
					<div className="nav-wrapper__links">
						<CustomLink
							className={'link'}
							href={{ pathname: '/catalog', query: { category: 'poetry' } }}
							active={'link_active'}>
							Птицеводство
						</CustomLink>
						<CustomLink
							href={{ pathname: '/catalog', query: { category: 'pig' } }}
							className={'link'}
							active={'link_active'}>
							Свиноводство
						</CustomLink>
						<CustomLink
							className={'link'}
							href={{ pathname: '/catalog', query: { category: 'cattle' } }}
							active={'link_active'}>
							КРС
						</CustomLink>
						<CustomLink
							href={{ pathname: '/catalog', query: { category: 'raw' } }}
							className={'link'}
							active={'link_active'}>
							Сырье
						</CustomLink>
					</div>
					<div className="nav-wrapper__other">
						<div className="btn">
							<CustomLink href={'/WelcomePage'}>
								<div>Продавайте на FEED MARKET</div>
							</CustomLink>
						</div>

						<div className="nav-wrapper__settings">
							<CustomLink href={'/orders'} className="link">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8.99935 2.66663C8.38051 2.66663 7.78702 2.91246 7.34943 3.35004C6.91185 3.78763 6.66602 4.38112 6.66602 4.99996C6.66602 5.6188 6.91185 6.21229 7.34943 6.64988C7.78702 7.08746 8.38051 7.33329 8.99935 7.33329H13.6793C13.4948 6.79066 13.2312 6.13285 12.8731 5.48188C12.015 3.92164 10.7766 2.66663 8.99935 2.66663ZM13.9994 9.33329V16.6666H2.66602L2.66602 12.6C2.66602 11.8367 2.66679 11.3244 2.69903 10.9299C2.73031 10.5471 2.78615 10.3641 2.84767 10.2433C3.00746 9.92971 3.26243 9.67474 3.57603 9.51495C3.69678 9.45342 3.87982 9.39758 4.26265 9.3663C4.65716 9.33407 5.16945 9.33329 5.93268 9.33329L13.9994 9.33329ZM5.34832 7.33403C4.90623 6.64247 4.66602 5.8336 4.66602 4.99996C4.66602 3.85069 5.12256 2.74849 5.93522 1.93583C6.74788 1.12317 7.85008 0.666626 8.99935 0.666626C11.8888 0.666626 13.6504 2.74495 14.6256 4.51804C14.7621 4.76632 14.8865 5.01391 14.9994 5.25623C15.1122 5.01391 15.2366 4.76632 15.3731 4.51804C16.3483 2.74495 18.1099 0.666626 20.9994 0.666626C22.1486 0.666626 23.2508 1.12317 24.0635 1.93583C24.8761 2.74849 25.3327 3.85069 25.3327 4.99996C25.3327 5.8336 25.0925 6.64247 24.6504 7.33403C25.1275 7.33609 25.5425 7.34383 25.8989 7.37295C26.4054 7.41433 26.881 7.50381 27.3306 7.73294C28.0206 8.08447 28.5815 8.6454 28.933 9.33533C29.1622 9.78502 29.2516 10.2606 29.293 10.7671C29.3327 11.2527 29.3327 11.8472 29.3327 12.5594V24.1072C29.3327 24.8194 29.3327 25.4139 29.293 25.8995C29.2516 26.406 29.1622 26.8816 28.933 27.3313C28.5815 28.0212 28.0206 28.5821 27.3306 28.9337C26.881 29.1628 26.4054 29.2523 25.8989 29.2936C25.4133 29.3333 24.8188 29.3333 24.1066 29.3333H15.001C15.0004 29.3333 14.9999 29.3333 14.9994 29.3333C14.9988 29.3333 14.9983 29.3333 14.9977 29.3333H5.89208C5.17988 29.3333 4.58543 29.3333 4.09979 29.2936C3.59328 29.2523 3.11773 29.1628 2.66805 28.9336C1.97812 28.5821 1.41719 28.0212 1.06566 27.3313C0.836534 26.8816 0.747053 26.406 0.705669 25.8995C0.66599 25.4139 0.666002 24.8194 0.666016 24.1072L0.666017 17.6673L0.666016 12.5594C0.666002 11.8472 0.66599 11.2527 0.705669 10.7671C0.747053 10.2606 0.836534 9.78501 1.06566 9.33533C1.4172 8.6454 1.97812 8.08447 2.66805 7.73294C3.11774 7.50381 3.59328 7.41433 4.09979 7.37295C4.45619 7.34383 4.87119 7.33608 5.34832 7.33403ZM2.66602 18.6666L2.66602 24.0666C2.66602 24.8299 2.66679 25.3421 2.69903 25.7367C2.73031 26.1195 2.78615 26.3025 2.84767 26.4233C3.00746 26.7369 3.26243 26.9918 3.57603 27.1516C3.69678 27.2132 3.87982 27.269 4.26265 27.3003C4.65716 27.3325 5.16945 27.3333 5.93268 27.3333H13.9994V18.6666H2.66602ZM15.9994 18.6666V27.3333H24.066C24.8293 27.3333 25.3415 27.3325 25.736 27.3003C26.1189 27.269 26.3019 27.2132 26.4227 27.1516C26.7363 26.9918 26.9912 26.7369 27.151 26.4233C27.2126 26.3025 27.2684 26.1195 27.2997 25.7367C27.3319 25.3422 27.3327 24.8299 27.3327 24.0666V18.6666H15.9994ZM27.3327 16.6666V12.6C27.3327 11.8367 27.3319 11.3244 27.2997 10.9299C27.2684 10.5471 27.2126 10.3641 27.151 10.2433C26.9912 9.92971 26.7363 9.67474 26.4227 9.51495C26.3019 9.45343 26.1189 9.39758 25.736 9.36631C25.3415 9.33407 24.8293 9.3333 24.066 9.3333L15.9994 9.33329V16.6666H27.3327ZM16.3194 7.33329C16.5039 6.79066 16.7675 6.13285 17.1256 5.48188C17.9837 3.92164 19.2221 2.66663 20.9994 2.66663C21.6182 2.66663 22.2117 2.91246 22.6493 3.35004C23.0869 3.78763 23.3327 4.38112 23.3327 4.99996C23.3327 5.6188 23.0869 6.21229 22.6493 6.64988C22.2117 7.08746 21.6182 7.33329 20.9994 7.33329H16.3194Z"
										fill="white"
									/>
								</svg>

								<span>Заказы</span>
							</CustomLink>
							<CustomLink href={'/test_basket'} className="link">
								{/*TODO: Сделать ховер эффекты нв ссылки и показать количество заказов, данные взять из редакса*/}
								<svg
									width="29"
									height="29"
									viewBox="0 0 29 29"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.8152 0.344558C3.98894 0.357857 4.23108 0.391704 4.49045 0.510237C4.83146 0.666083 5.12045 0.916723 5.32295 1.23227C5.47697 1.47226 5.54472 1.70718 5.58246 1.8773C5.61451 2.02177 5.6379 2.18596 5.65705 2.32042C5.65834 2.32947 5.65961 2.33838 5.66086 2.34715L6.11777 5.54551L26.4724 5.5455C26.6575 5.54543 26.8711 5.54536 27.0564 5.56151C27.2648 5.57968 27.5779 5.62685 27.8945 5.81139C28.2947 6.04463 28.599 6.41243 28.7533 6.8492C28.8753 7.19475 28.8631 7.51114 28.8419 7.71927C28.8231 7.90429 28.7831 8.11409 28.7484 8.29595L27.0089 17.4283C26.9011 17.9943 26.8071 18.4876 26.6981 18.8931C26.5819 19.3249 26.427 19.7457 26.1547 20.1412C25.7434 20.7385 25.1741 21.2097 24.5103 21.5019C24.0708 21.6954 23.6285 21.7688 23.1826 21.8021C22.7638 21.8334 22.2617 21.8334 21.6856 21.8334H10.4438C9.8381 21.8334 9.31157 21.8334 8.87392 21.7998C8.40895 21.7641 7.94743 21.6854 7.49266 21.4764C6.80804 21.1619 6.2289 20.6562 5.82494 20.0202C5.55661 19.5978 5.41637 19.1511 5.3183 18.6952C5.22599 18.2661 5.15503 17.7443 5.07339 17.1441L3.69711 7.02849L3.11296 2.93945H1.63701C0.917371 2.93945 0.333984 2.35606 0.333984 1.63642C0.333984 0.916775 0.917371 0.333389 1.63701 0.333389H3.33898C3.34784 0.333389 3.35684 0.333385 3.36598 0.333381C3.5018 0.333328 3.66765 0.333264 3.8152 0.344558ZM6.47998 8.15157L7.64944 16.7471C7.7391 17.4061 7.79735 17.8276 7.86608 18.1471C7.93139 18.4507 7.98744 18.5642 8.02474 18.6229C8.15939 18.8349 8.35244 19.0035 8.58064 19.1083C8.64385 19.1374 8.76385 19.1776 9.07349 19.2014C9.39936 19.2264 9.82488 19.2273 10.4899 19.2273H21.6411C22.2745 19.2273 22.6784 19.2265 22.9885 19.2033C23.2821 19.1814 23.3978 19.1443 23.4601 19.1168C23.6814 19.0194 23.8712 18.8624 24.0083 18.6632C24.0469 18.6071 24.105 18.5005 24.1815 18.2161C24.2622 17.9159 24.3386 17.5193 24.4571 16.897L26.123 8.15157H6.47998ZM8.15216 26.394C8.15216 24.9547 9.31893 23.7879 10.7582 23.7879C12.1975 23.7879 13.3643 24.9547 13.3643 26.394C13.3643 27.8333 12.1975 29 10.7582 29C9.31893 29 8.15216 27.8333 8.15216 26.394ZM18.5764 26.394C18.5764 24.9547 19.7432 23.7879 21.1825 23.7879C22.6217 23.7879 23.7885 24.9547 23.7885 26.394C23.7885 27.8333 22.6217 29 21.1825 29C19.7432 29 18.5764 27.8333 18.5764 26.394Z"
										fill="white"
									/>
								</svg>
								<span>Корзина</span>
							</CustomLink>
							<Dropdown menu={<Menu />}>
								<div className="link">
									<svg
										width="28"
										height="26"
										viewBox="0 0 28 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.9994 3.33329C11.422 3.33329 9.33269 5.42263 9.33269 7.99996C9.33269 10.5773 11.422 12.6666 13.9994 12.6666C16.5767 12.6666 18.666 10.5773 18.666 7.99996C18.666 5.42263 16.5767 3.33329 13.9994 3.33329ZM6.66602 7.99996C6.66602 3.94987 9.94926 0.666626 13.9994 0.666626C18.0494 0.666626 21.3327 3.94987 21.3327 7.99996C21.3327 12.05 18.0494 15.3333 13.9994 15.3333C9.94926 15.3333 6.66602 12.05 6.66602 7.99996ZM13.9994 20.6666C9.74442 20.6666 5.85712 22.5186 2.96948 25.5813C2.46433 26.1171 1.62047 26.1419 1.08468 25.6368C0.548893 25.1316 0.524062 24.2877 1.02922 23.752C4.37036 20.2082 8.93966 18 13.9994 18C19.059 18 23.6283 20.2082 26.9695 23.752C27.4746 24.2877 27.4498 25.1316 26.914 25.6368C26.3782 26.1419 25.5344 26.1171 25.0292 25.5813C22.1416 22.5186 18.2543 20.6666 13.9994 20.6666Z"
											fill="white"
										/>
									</svg>
									<span>{isAuth ? 'Профиль' : 'Войти'}</span>
								</div>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
			<div className="app__navbar-bottom">
				<div className="app__navbar-bottom-container">
					<CustomLink href={'/'} className="nav-wrapper__logo">
						<Image src={'/Logo.svg'} width={148} height={64} alt={'logo'} />
					</CustomLink>
					<div className="nav-wrapper__category">
						<Input sx={sx} style={{ width: '100%' }} label={'искать везде'} />
					</div>
					<div className="nav-wrapper__search">
						<Input
							sx={sx}
							style={{ width: '100%' }}
							className={'search'}
							searchIcon={true}
							label={'поиск'}
						/>
					</div>
				</div>
			</div>

			{/*<div className={`dropdown-absolute dropdown-absolute-${dropdown}`}>*/}
			{/*	<div className="title">*/}
			{/*		Войдите, чтобы делать покупки и пользоваться персональными предложениями*/}
			{/*	</div>*/}
			{/*</div>*/}
		</>
	);
};
export default NavBar;
