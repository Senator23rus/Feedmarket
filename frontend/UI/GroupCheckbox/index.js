import { cloneElement, useEffect, useState } from 'react';

/**
 * @description Компонент GroupCheckbox
 *
 * @param {React.InputHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */

const GroupCheckbox = ({ children, onClick, ...other }) => {
	let [content, setContent] = useState(children);
	let [checkboxes, setCheckboxes] = useState([]);
	useEffect(() => {
		if (
			!Array.isArray(content) ||
			content.filter(item => item?.type?.name === 'Checkbox').length === 0
		) {
			throw new Error("Внутри необходимы checkbox'ы");
		} else if (content.filter(item => item?.type?.name === 'Checkbox').length === 1) {
			throw new Error("Внутри должно быть от двух checkbox'сов");
		}

		let checkbox = [];
		setContent(
			content?.map((item, index) => {
				if (item?.type?.name === 'Checkbox') {
					checkbox.push({ index, checked: item.props.checked || false });
					if (index === 0) {
						return cloneElement(item, {
							...item.props,
							'data-id': index,
							'data-maingroup': true,
							key: index,
						});
					} else {
						return cloneElement(item, { ...item.props, 'data-id': index, key: index });
					}
				} else {
					return item;
				}
			})
		);
		setCheckboxes(checkbox);
		//eslint-disable-next-line
	}, []);

	const clearCheckBox = (array, groupChecked, isClear) => {
		let changeContent = Array.from(array);
		checkboxes.forEach((item, i) => {
			let element = changeContent[item.index];
			let check = !isClear ? false : element.props.checked;
			return i !== 0
				? (changeContent[item.index] = cloneElement(element, {
						...element.props,
						checked: check,
						groupChecked: groupChecked,
				  }))
				: !isClear
				? element
				: (changeContent[item.index] = cloneElement(element, {
						...element.props,
						checked: false,
				  }));
		});
		setContent(changeContent);
	};

	const changeCheck = (index, check) => {
		checkboxes.forEach(item => {
			if (item.index === +index) {
				item.checked = !check;
			}
		});
		return content.map((item, i) => {
			if (i === +index) {
				return cloneElement(item, { ...item.props, checked: !check });
			} else {
				return item;
			}
		});
	};

	const ClickHandler = e => {
		if (onClick) {
			onClick(e);
		}

		let wrap = e.target.closest('label');
		if (wrap?.children[0].tagName === 'INPUT') {
			let input = wrap.children[0];
			let array = changeCheck(input.dataset.id, input.checked);
			if (input.dataset.maingroup === 'true') {
				if (input.checked) {
					clearCheckBox(array, false);
				} else {
					clearCheckBox(array, true);
				}
			} else {
				clearCheckBox(array, false, true);
			}
		}
	};

	return (
		<div {...other} onClick={ClickHandler}>
			{content}
		</div>
	);
};

export default GroupCheckbox;
