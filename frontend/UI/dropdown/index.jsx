import React, { cloneElement, useEffect, useRef, useState } from 'react';
import { useOutsideClick } from 'hooks/use-outside-click';
import { createPortal } from 'react-dom';
import NoSsr from 'components/common/no-ssr';

const Menu = ({ show, menu }) => {
	if (typeof document !== 'undefined') {
		return createPortal(menu, document.body);
	}
	return menu;
};

/**
 *
 * @param {HTMLElement} children
 * @param {React.ReactElement} menu
 * @return {JSX.Element}
 * @constructor
 */
const DropDown = ({ children, menu }) => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(
		/**
		 * @type {HTMLElement | undefined}
		 */
		undefined
	);
	const [position, setPosition] = useState({
		left: 0,
		top: 100,
	});
	const [animate, setAnimate] = useState(false);
	/**
	 * @type {React.MutableRefObject<HTMLDivElement|undefined>}
	 */
	const dropRef = useRef();
	const [renderChildren, setRenderChildren] = useState();
	const click = e => {
		setShow(true);
		setAnimate(true);
		setTarget(e.currentTarget);
	};
	useOutsideClick(dropRef, () => {
		setAnimate(false);
		setTimeout(() => {
			setShow(false);
		}, 200);
	});
	const calculate = target => {
		if (show && animate && dropRef.current && target) {
			const bottomChildren = target.offsetTop + target.getBoundingClientRect().height;

			let centerChildren =
				target.offsetLeft +
				target.offsetParent.offsetLeft +
				target.getBoundingClientRect().width / 2;

			const widthDropdown = dropRef.current.getBoundingClientRect().width;

			let leftDropDown;

			if (
				centerChildren + widthDropdown / 2 >
				document.body.getBoundingClientRect().right
			) {
				leftDropDown =
					document.body.getBoundingClientRect().right -
					(dropRef.current.getBoundingClientRect().width + 10);
			} else {
				leftDropDown = centerChildren - widthDropdown / 2;
			}
			setPosition(prevState => ({
				...prevState,
				top: bottomChildren + 10,
				left: leftDropDown,
			}));
		}
	};
	useEffect(() => {
		calculate(target);
	}, [target, show, animate]);

	useEffect(() => {
		setRenderChildren(cloneElement(children, { onClick: click }));
	}, [children]);

	useEffect(() => {
		window?.addEventListener('resize', () => calculate(target));
		document?.body.firstChild.addEventListener('scroll', () => {
			setAnimate(false);
			setTimeout(() => {
				setShow(false);
			}, 200);
		});
		return () => {
			window?.removeEventListener('resize', () => calculate(target));
			document?.body.firstChild.removeEventListener('scroll', () => {
				setAnimate(false);
				setTimeout(() => {
					setShow(false);
				}, 200);
			});
		};
	}, [target]);

	return (
		<>
			{renderChildren}
			<Menu
				menu={
					<div
						ref={dropRef}
						style={position}
						className={`dropdown-absolute dropdown-absolute-${animate}`}>
						{menu}
					</div>
				}
			/>
		</>
	);

	// return (
	// );
};

export default DropDown;
