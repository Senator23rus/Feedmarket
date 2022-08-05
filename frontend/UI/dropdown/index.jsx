import React, { cloneElement, useEffect, useRef, useState } from 'react';
import { useOutsideClick } from 'hooks/use-outside-click';
import { createPortal } from 'react-dom';
import NoSsr from 'components/common/no-ssr';

const Menu = ({ show, menu }) => {
	return createPortal(menu, document.body);
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
	const [target, setTarget] = useState();
	const [position, setPosition] = useState({
		left: 0,
		top: 0,
	});
	const [animate, setAnimate] = useState(false);
	/**
	 *
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
	useEffect(() => {
		if (show && animate && dropRef.current && target) {
			const bottomChildren = target.offsetTop + target.getBoundingClientRect().height;

			let centerChildren = target.offsetLeft + target.getBoundingClientRect().width / 2;
			const widthDropdown = dropRef.current.getBoundingClientRect().width;
			let leftDropDown;
			const rightDropdown = dropRef.current.getBoundingClientRect().right;
			console.log(rightDropdown);
			console.log(document.body.getBoundingClientRect().right);
			if (rightDropdown >= document.body.getBoundingClientRect().right) {
				leftDropDown = document.body.getBoundingClientRect().right - (widthDropdown + 42);
			} else {
				leftDropDown = centerChildren - (widthDropdown + 16) / 2;
			}
			// const rightDropdown =
			// 	dropRef.current?.offsetLeft + dropRef.current.getBoundingClientRect().right;
			//
			// if (rightDropdown && rightDropdown >= document.body.getBoundingClientRect().width) {
			// 	console.log(dropRef.current.getBoundingClientRect().width);
			// 	centerChildren =
			// 		dropRef.current.getBoundingClientRect().width -
			// 		document.body.getBoundingClientRect().right;
			// } else {
			// 	centerChildren =
			// 		centerChildren - dropRef.current.getBoundingClientRect().width / 2;
			// }
			console.log(centerChildren);
			setPosition(prevState => ({
				...prevState,
				top: bottomChildren + 10,
				left: leftDropDown,
			}));
		}
	}, [target, show, animate]);

	useEffect(() => {
		setRenderChildren(cloneElement(children, { onClick: click }));
	}, [children]);

	return (
		<>
			{renderChildren}
			<NoSsr>
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
			</NoSsr>
		</>
	);

	// return (
	// );
};

export default DropDown;
