import { useState } from 'react';
import classes from './prise_tage.module.scss';
import CustomLink from "UI/custom-link";

const PriseTag = () => {
	const [quantity, setQuantity] = useState(1);
	const [visible, setVisible] = useState(false);

	const incr = () => setQuantity(quantity + 1);
	const decr = () => (quantity <= 1 ? setVisible(false) : setQuantity(quantity - 1));

	return (
		<div className={classes.right__price}>
			<div>
				<div className={classes.right__price__text}>10 500 руб.</div>
				<span className={classes.right__price__kg}>1 500 руб/кг</span>
			</div>
			{!visible ? (
				<button className={classes.card__button} onClick={() => setVisible(true)}>
					Добавить в корзину
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M2.61091 0.00838789C2.74122 0.0183624 2.92282 0.0437478 3.11735 0.132647C3.3731 0.249532 3.58985 0.437511 3.74173 0.674169C3.85724 0.854164 3.90805 1.03035 3.93636 1.15794C3.96039 1.2663 3.97794 1.38944 3.9923 1.49029C3.99327 1.49707 3.99422 1.50376 3.99516 1.51033L4.33784 3.9091L19.6038 3.90909C19.7427 3.90904 19.9028 3.90899 20.0418 3.9211C20.1981 3.93473 20.4329 3.97011 20.6704 4.10851C20.9705 4.28345 21.1988 4.55929 21.3145 4.88687C21.406 5.14603 21.3968 5.38332 21.381 5.53942C21.3668 5.67819 21.3368 5.83554 21.3108 5.97194L20.0062 12.8212C19.9253 13.2457 19.8549 13.6156 19.7731 13.9198C19.6859 14.2436 19.5698 14.5592 19.3655 14.8559C19.0571 15.3039 18.6301 15.6572 18.1322 15.8764C17.8026 16.0215 17.4709 16.0766 17.1365 16.1016C16.8224 16.125 16.4458 16.125 16.0137 16.125H7.58239C7.12808 16.125 6.73319 16.125 6.40495 16.0998C6.05623 16.073 5.71008 16.014 5.36901 15.8573C4.85554 15.6214 4.42119 15.2421 4.11822 14.7651C3.91697 14.4483 3.81179 14.1133 3.73823 13.7714C3.669 13.4495 3.61578 13.0582 3.55455 12.6081L2.52234 5.02134L2.08423 1.95456H0.977272C0.43754 1.95456 0 1.51702 0 0.977283C0 0.437551 0.43754 1.09074e-05 0.977272 1.09074e-05H2.25375C2.26039 1.09074e-05 2.26714 8.22794e-06 2.274 5.54844e-06C2.37586 -3.4178e-05 2.50025 -8.27586e-05 2.61091 0.00838789ZM4.6095 5.86364L5.48659 12.3103C5.55384 12.8045 5.59752 13.1207 5.64907 13.3603C5.69805 13.588 5.74009 13.6731 5.76806 13.7172C5.86905 13.8762 6.01384 14.0026 6.185 14.0812C6.2324 14.103 6.3224 14.1332 6.55463 14.151C6.79903 14.1698 7.11817 14.1705 7.61696 14.1705H15.9803C16.4554 14.1705 16.7583 14.1698 16.9909 14.1525C17.2111 14.136 17.2978 14.1082 17.3446 14.0876C17.5105 14.0145 17.6529 13.8967 17.7557 13.7474C17.7847 13.7053 17.8282 13.6253 17.8856 13.4121C17.9462 13.1869 18.0035 12.8894 18.0924 12.4228L19.3417 5.86364H4.6095ZM5.86363 19.5455C5.86363 18.466 6.73871 17.5909 7.81818 17.5909C8.89764 17.5909 9.77272 18.466 9.77272 19.5455C9.77272 20.6249 8.89764 21.5 7.81818 21.5C6.73871 21.5 5.86363 20.6249 5.86363 19.5455ZM13.6818 19.5455C13.6818 18.466 14.5569 17.5909 15.6364 17.5909C16.7158 17.5909 17.5909 18.466 17.5909 19.5455C17.5909 20.6249 16.7158 21.5 15.6364 21.5C14.5569 21.5 13.6818 20.6249 13.6818 19.5455Z"
							fill="white"
						/>
					</svg>
				</button>
			) : (
				<div className={classes.card__button_inner}>
					<CustomLink href={'/makingAnOrder'}>
						<div className={classes.card__button_transition}>Перейти к оформлению</div>
					</CustomLink>
					<div className={classes.card__button_amount}>
						<svg
							className={classes.card__button_decr}
							onClick={e => {
								e.preventDefault();
								decr();
							}}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 13.8333C11.2217 13.8333 13.8333 11.2217 13.8333 8C13.8333 4.77834 11.2217 2.16667 8 2.16667C4.77834 2.16667 2.16667 4.77834 2.16667 8C2.16667 11.2217 4.77834 13.8333 8 13.8333ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
								fill="#0D9545"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4.66699 8.00008C4.66699 7.53984 4.93833 7.16675 5.27305 7.16675H10.7276C11.0623 7.16675 11.3337 7.53984 11.3337 8.00008C11.3337 8.46032 11.0623 8.83341 10.7276 8.83341H5.27305C4.93833 8.83341 4.66699 8.46032 4.66699 8.00008Z"
								fill="#0D9545"
							/>
						</svg>
						<div className={classes.card__button_number}>{quantity}</div>
						<svg
							className={classes.card__button_incr}
							onClick={e => {
								e.preventDefault();
								incr();
							}}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 13.8333C11.2217 13.8333 13.8333 11.2217 13.8333 8C13.8333 4.77834 11.2217 2.16667 8 2.16667C4.77834 2.16667 2.16667 4.77834 2.16667 8C2.16667 11.2217 4.77834 13.8333 8 13.8333ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
								fill="#0D9545"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.00033 4.66675C8.46056 4.66675 8.83366 4.96522 8.83366 5.33341L8.83366 10.6667C8.83366 11.0349 8.46056 11.3334 8.00033 11.3334C7.54009 11.3334 7.16699 11.0349 7.16699 10.6667L7.16699 5.33341C7.16699 4.96522 7.54009 4.66675 8.00033 4.66675Z"
								fill="#0D9545"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11.333 8.00008C11.333 8.46032 11.0345 8.83341 10.6663 8.83341L5.33301 8.83341C4.96482 8.83341 4.66634 8.46032 4.66634 8.00008C4.66634 7.53984 4.96482 7.16675 5.33301 7.16675L10.6663 7.16675C11.0345 7.16675 11.333 7.53984 11.333 8.00008Z"
								fill="#0D9545"
							/>
						</svg>
					</div>
				</div>
			)}
			<div className={classes.card__button_dotters}></div>
			<div className={classes.card__store}>
				<div className={classes.card__store__title}>
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle cx="16" cy="16" r="16" fill="#DFE6EE" />
						<path
							d="M6.87503 12.8309V17.0254H8.84673V18.0002H5.85596V12.8309H6.87503Z"
							fill="#414141"
							fillOpacity="0.33"
						/>
						<path
							d="M13.4579 17.3282C12.9361 17.8451 12.301 18.1035 11.5527 18.1035C10.8044 18.1035 10.1693 17.8451 9.64744 17.3282C9.13051 16.8014 8.87205 16.1638 8.87205 15.4155C8.87205 14.6623 9.13051 14.0272 9.64744 13.5103C10.1693 12.9885 10.8044 12.7275 11.5527 12.7275C12.301 12.7275 12.9361 12.9885 13.4579 13.5103C13.9797 14.0272 14.2407 14.6623 14.2407 15.4155C14.2407 16.1688 13.9797 16.8063 13.4579 17.3282ZM10.3637 16.634C10.6788 16.9491 11.0751 17.1066 11.5527 17.1066C12.0302 17.1066 12.4265 16.9491 12.7416 16.634C13.0616 16.314 13.2216 15.9078 13.2216 15.4155C13.2216 14.9232 13.0616 14.5171 12.7416 14.1971C12.4216 13.8771 12.0253 13.7171 11.5527 13.7171C11.0801 13.7171 10.6837 13.8771 10.3637 14.1971C10.0437 14.5171 9.88375 14.9232 9.88375 15.4155C9.88375 15.9078 10.0437 16.314 10.3637 16.634Z"
							fill="#414141"
							fillOpacity="0.33"
						/>
						<path
							d="M17.4381 15.2235H20.0301V15.6223C20.0301 16.3608 19.7938 16.9589 19.3212 17.4168C18.8486 17.8746 18.2381 18.1035 17.4898 18.1035C16.6923 18.1035 16.0301 17.8451 15.5034 17.3282C14.9815 16.8063 14.7206 16.1712 14.7206 15.4229C14.7206 14.6697 14.9791 14.0322 15.496 13.5103C16.0178 12.9885 16.6628 12.7275 17.4308 12.7275C17.9083 12.7275 18.3465 12.8358 18.7452 13.0525C19.144 13.2691 19.4566 13.562 19.6831 13.9312L18.8117 14.4334C18.6886 14.2217 18.5015 14.0494 18.2505 13.9165C17.9994 13.7835 17.7237 13.7171 17.4234 13.7171C16.9261 13.7171 16.52 13.8795 16.2049 14.2045C15.8898 14.5195 15.7323 14.9257 15.7323 15.4229C15.7323 15.9103 15.8923 16.314 16.2123 16.634C16.5323 16.9491 16.9606 17.1066 17.4972 17.1066C17.8861 17.1066 18.2111 17.0205 18.472 16.8482C18.7329 16.6758 18.9101 16.4346 19.0037 16.1245H17.4381V15.2235Z"
							fill="#414141"
							fillOpacity="0.33"
						/>
						<path
							d="M25.1045 17.3282C24.5827 17.8451 23.9476 18.1035 23.1993 18.1035C22.451 18.1035 21.8159 17.8451 21.2941 17.3282C20.7771 16.8014 20.5187 16.1638 20.5187 15.4155C20.5187 14.6623 20.7771 14.0272 21.2941 13.5103C21.8159 12.9885 22.451 12.7275 23.1993 12.7275C23.9476 12.7275 24.5827 12.9885 25.1045 13.5103C25.6264 14.0272 25.8873 14.6623 25.8873 15.4155C25.8873 16.1688 25.6264 16.8063 25.1045 17.3282ZM22.0104 16.634C22.3255 16.9491 22.7218 17.1066 23.1993 17.1066C23.6768 17.1066 24.0731 16.9491 24.3882 16.634C24.7082 16.314 24.8682 15.9078 24.8682 15.4155C24.8682 14.9232 24.7082 14.5171 24.3882 14.1971C24.0682 13.8771 23.6719 13.7171 23.1993 13.7171C22.7267 13.7171 22.3304 13.8771 22.0104 14.1971C21.6904 14.5171 21.5304 14.9232 21.5304 15.4155C21.5304 15.9078 21.6904 16.314 22.0104 16.634Z"
							fill="#414141"
							fillOpacity="0.33"
						/>
					</svg>
					<span className={classes.card__store__name}>
						Достаточно длинное название магазина
					</span>
				</div>
				<div className={classes.card__store__rating_wrap}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.7227 0.486686C5.90556 0.447797 6.09455 0.447797 6.27741 0.486686C6.76393 0.590155 7.02924 0.991797 7.18884 1.28455C7.35833 1.59545 7.53099 2.02596 7.73149 2.52587L7.74727 2.56521C7.87312 2.87895 7.95268 3.07582 8.02636 3.22225C8.09479 3.35822 8.13776 3.40769 8.16906 3.43606C8.201 3.465 8.23567 3.49078 8.27259 3.51303C8.30819 3.53448 8.36822 3.56159 8.52026 3.58823C8.68343 3.61681 8.89732 3.63652 9.23693 3.66693L9.28025 3.67081C9.79939 3.71727 10.2508 3.75767 10.5908 3.83099C10.9183 3.90162 11.3694 4.04513 11.6038 4.4828C11.6741 4.61417 11.722 4.75641 11.7453 4.90361C11.8228 5.39229 11.5534 5.77752 11.3357 6.03167C11.111 6.29399 10.7786 6.59635 10.3973 6.94318L10.1379 7.17918C9.71691 7.56221 9.64133 7.64479 9.59917 7.72755C9.566 7.79266 9.54376 7.86277 9.53334 7.93509C9.52009 8.02703 9.53426 8.13807 9.65754 8.69373L9.7041 8.90358C9.79892 9.33087 9.87922 9.69274 9.91753 9.97459C9.95186 10.2272 9.98586 10.6018 9.80338 10.9257C9.57823 11.3252 9.1635 11.5811 8.70537 11.6029C8.33407 11.6207 8.01455 11.4222 7.80423 11.2781C7.56956 11.1174 7.28223 10.8833 6.94297 10.6068L6.91945 10.5876C6.67523 10.3886 6.51938 10.2622 6.39271 10.1735C6.2728 10.0895 6.21658 10.067 6.18381 10.0576C6.06372 10.0232 5.93638 10.0232 5.8163 10.0576C5.78353 10.067 5.7273 10.0895 5.60739 10.1735C5.48072 10.2622 5.32487 10.3886 5.08066 10.5876L5.05714 10.6068C4.71787 10.8833 4.43054 11.1174 4.19587 11.2781C3.98555 11.4222 3.66604 11.6207 3.29474 11.6029C2.83661 11.5811 2.42188 11.3252 2.19672 10.9257C2.01424 10.6018 2.04824 10.2272 2.08258 9.97459C2.12089 9.69275 2.20118 9.33089 2.296 8.90363L2.34257 8.69373C2.46585 8.13808 2.48001 8.02703 2.46676 7.93509C2.45634 7.86277 2.43411 7.79266 2.40094 7.72755C2.35878 7.64479 2.2832 7.56221 1.8622 7.17918L1.63509 6.97255C1.62429 6.96273 1.61352 6.95294 1.6028 6.94319C1.22152 6.59635 0.889136 6.29399 0.664397 6.03167C0.446663 5.77752 0.177354 5.39229 0.2548 4.90361C0.278127 4.75641 0.325966 4.61417 0.396327 4.4828C0.630734 4.04513 1.08178 3.90162 1.40931 3.83099C1.74932 3.75767 2.20071 3.71727 2.71985 3.67081C2.73424 3.66952 2.74868 3.66823 2.76317 3.66693C3.10278 3.63652 3.31668 3.61681 3.47985 3.58823C3.63188 3.56159 3.69192 3.53448 3.72751 3.51303C3.76443 3.49078 3.7991 3.465 3.83104 3.43606C3.86234 3.40769 3.90532 3.35822 3.97374 3.22225C4.04742 3.07582 4.12699 2.87895 4.25284 2.56521C4.25812 2.55205 4.26338 2.53893 4.26862 2.52586C4.46912 2.02595 4.64178 1.59545 4.81126 1.28455C4.97086 0.991797 5.23617 0.590155 5.7227 0.486686Z"
							fill="#FF7A00"
						/>
					</svg>
					<span className={classes.card__store__rating}>4.8/5 рейтинг товаров</span>
				</div>
			</div>
			<div className={classes.card__store__btn}>Спросить продавца о товаре</div>
		</div>
	);
};

export default PriseTag;
