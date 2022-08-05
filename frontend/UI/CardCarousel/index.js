import classes from './cardCarousel.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useFetching } from 'hooks/useFetching';

/**
 * @description Компонент универсальной карусели для карточек
 * (обязательно создание точки монтирования находящийся внутри оболочки точки монтирования с указанием ссылок на них в соответствующие аттрибуты карусели, наличие кнопок не обязательно)
 *
 * @param {React.ReactElement} props
 * @property {string} props.mountPoint - Ссылка на точку монтирования куда помещаются карточки
 * @property {string} props.mountPointWrapper - Ссылка оболочку для точки монтирования
 * @property {string} props.leftBtn - Ссылка на кнопку прокрутки карусели налево
 * @property {string} props.rightBtn - Ссылка на кнопку прокрутки карусели направо
 * @property {string} props.addData - Функция добавления данных при окончании прокрутки карусели
 * @returns {JSX.Element}
 * @constructor
 */

const CardCarousel = ({
	mountPoint,
	mountPointWrapper,
	leftBtn,
	rightBtn,
	children,
	gap = 24,
	addData,
	...other
}) => {
	let mountPointWidth = useRef(0);
	let isMouseDown = useRef(false);
	let mouseStartPoint = useRef({
		startPoint: 0,
		actualSituation: 0,
	});

	const [startPending, setStartPending] = useState(false);

	let [fetch, isLoad, error] = useFetching(addData);

	const addDataFunc = () => {
		if (!isLoad && !error) {
			fetch();
		}
		mountPointWidth.current =
			mountPoint.current.lastChild.getBoundingClientRect().width *
				mountPoint.current.children.length +
			gap * (mountPoint.current.children.length - 1);
	};

	useEffect(() => {
		if (startPending) {
			addDataFunc();
			setStartPending(false);
		}
	}, [startPending]);

	useEffect(() => {
		mountPointWidth.current =
			mountPoint.current.lastChild.getBoundingClientRect().width *
				mountPoint.current.children.length +
			gap * (mountPoint.current.children.length - 1);
	}, [children]);

	const chevronLeftHandler = e => {
		if (
			Math.abs(
				Math.abs(+mountPoint.current.offsetLeft) +
					mountPointWrapper.current.clientWidth * 2 -
					mountPointWidth.current
			) <= mountPointWrapper.current.clientWidth
		) {
			setStartPending(true);
		}

		if (
			Math.abs(+mountPoint.current.offsetLeft) + mountPointWrapper.current.clientWidth <
			mountPointWidth.current - mountPointWrapper.current.clientWidth
		) {
			mountPoint.current.style.setProperty(
				'left',
				+mountPoint.current.style.left.replace('px', '') -
					mountPointWrapper.current.clientWidth -
					gap +
					'px'
			);
		} else {
			mountPoint.current.style.setProperty(
				'left',
				-mountPointWidth.current + mountPointWrapper.current.clientWidth + 'px'
			);
		}
	};

	const chevronRightHandler = e => {
		if (+mountPoint.current.offsetLeft + mountPointWrapper.current.clientWidth <= 0) {
			mountPoint.current.style.setProperty(
				'left',
				+mountPoint.current.style.left.replace('px', '') +
					mountPointWrapper.current.clientWidth +
					gap +
					'px'
			);
		} else {
			mountPoint.current.style.setProperty('left', 0 + 'px');
		}
	};

	const scrollHandler = e => {
		if (
			Math.abs(
				Math.abs(mountPoint.current.offsetLeft) + e.deltaY * 5 - mountPointWidth.current
			) <= mountPointWrapper.current.clientWidth
		) {
			setStartPending(true);
		}
		if (
			Math.abs(mountPoint.current.offsetLeft) + e.deltaY * 5 >
			mountPointWidth.current - mountPointWrapper.current.clientWidth
		) {
			mountPoint.current.style.setProperty(
				'left',
				-mountPointWidth.current + mountPointWrapper.current.clientWidth + 'px'
			);
		} else if (mountPoint.current.offsetLeft + -e.deltaY * 5 >= 0) {
			mountPoint.current.style.setProperty('left', 0 + 'px');
		} else {
			mountPoint.current.style.setProperty(
				'left',
				mountPoint.current.offsetLeft + -e.deltaY * 5 + 'px'
			);
			e.preventDefault();
		}
	};

	const mouseDownHandler = e => {
		isMouseDown.current = true;
		mouseStartPoint.current = {
			startPoint: e.pageX,
			actualSituation: mountPoint.current.offsetLeft,
		};
	};

	const mouseMoveHandler = e => {
		if (isMouseDown.current) {
			if (
				Math.abs(
					Math.abs(
						mouseStartPoint.current.actualSituation +
							e.pageX -
							mouseStartPoint.current.startPoint
					) - mountPointWidth.current
				) <= mountPointWrapper.current.clientWidth
			) {
				setStartPending(true);
			}
			if (
				Math.abs(
					mouseStartPoint.current.actualSituation +
						e.pageX -
						mouseStartPoint.current.startPoint
				) >
				mountPointWidth.current - mountPointWrapper.current.clientWidth
			) {
				mountPoint.current.style.setProperty(
					'left',
					-mountPointWidth.current + mountPointWrapper.current.clientWidth + 'px'
				);
			} else if (
				mouseStartPoint.current.actualSituation +
					e.pageX -
					mouseStartPoint.current.startPoint >=
				0
			) {
				mountPoint.current.style.setProperty('left', 0 + 'px');
			} else {
				e.preventDefault();
				mountPoint.current.style.setProperty(
					'left',
					mouseStartPoint.current.actualSituation +
						e.pageX -
						mouseStartPoint.current.startPoint +
						'px'
				);
			}
		}
	};

	const mouseUpHandler = e => {
		isMouseDown.current = false;
	};

	useEffect(() => {
		mountPointWrapper.current.className = classes.mountPointWrapper;
		mountPointWrapper.current.addEventListener('mousedown', mouseDownHandler);
		mountPointWrapper.current.addEventListener('mousemove', mouseMoveHandler);
		mountPoint.current.className = classes.mountPoint;
		if (leftBtn.current && rightBtn.current) {
			leftBtn.current.addEventListener('click', chevronLeftHandler);
			rightBtn.current.addEventListener('click', chevronRightHandler);
		}
		mountPoint.current.style.gap = gap + 'px';

		mountPoint.current.style.setProperty('left', '0px');
		let child = mountPoint.current.lastChild;
		mountPointWrapper.current.style.setProperty(
			'height',
			child.getBoundingClientRect().height + 'px'
		);
		mountPointWidth.current =
			child.getBoundingClientRect().width * mountPoint.current.children.length +
			gap * (mountPoint.current.children.length - 1);
		mountPointWrapper.current?.addEventListener('wheel', scrollHandler, {
			passive: false,
		});
		document.addEventListener('mouseup', mouseUpHandler);

		return () => {
			mountPointWrapper.current?.removeEventListener('wheel', scrollHandler, {
				passive: false,
			});
			document?.removeEventListener('mouseup', mouseUpHandler);
			mountPointWrapper.current?.removeEventListener('mousedown', mouseDownHandler);
			mountPointWrapper.current?.removeEventListener('mousemove', mouseMoveHandler);
			leftBtn.current?.removeEventListener('click', chevronLeftHandler);
			rightBtn.current?.removeEventListener('click', chevronRightHandler);
		};
	}, []);

	return <div {...other}>{children}</div>;
};

export default CardCarousel;
