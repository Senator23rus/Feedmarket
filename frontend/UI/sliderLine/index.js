import classes from './sliderLine.module.scss';
import Slider from '@mui/material/Slider';
import Input from '../Input/input';
import { useEffect, useRef, useState } from 'react';

/**
 * @param {import("@mui/material/Slider").SliderInput & {
 *     values:number[],
 *     setValue:Function,
 *     max:number,
 *     min:number,
 *     [names]:string[],
 * }} props
 * @constructor
 */
const SliderLine = ({ values, setValue, names, max, min }) => {
	let [slider, setSlider] = useState(values);
	let interval = useRef();
	let elem = useRef();
	let width = useRef();

	const firstInputValidation = (func, val) => {
		func(prevState => {
			if (val < min) {
				return [min, prevState[1]];
			} else if (val > +prevState[1] - width.current) {
				if (val + width.current >= max) {
					return [max - width.current, max];
				} else {
					return [val, val + width.current];
				}
			} else {
				return [val, prevState[1]];
			}
		});
	};

	const secondInputValidation = (func, val) => {
		func(prevState => {
			if (val > max) {
				return [prevState[0], max];
			} else if (val < +prevState[0] + width.current) {
				if (val - width.current <= min) {
					return [min, min + width.current];
				} else {
					return [val - width.current, val];
				}
			} else {
				return [prevState[0], val];
			}
		});
	};

	useEffect(() => {
		firstInputValidation(setSlider, values[0]);
		secondInputValidation(setSlider, values[1]);
		//eslint-disable-next-line
	}, [values]);

	useEffect(() => {
		width.current = Math.round(
			16 / (elem.current.getBoundingClientRect().width / (max - min))
		);
	}, [elem.current, max, min]);

	const firstInputHandler = e => {
		let val = e.target.value.replace(/[a-zа-яё]/g, '');
		clearTimeout(interval.current);
		if (val === '') {
			setValue(prevState => [min, prevState[1]]);
			return;
		}
		setValue(prevState => [+val, prevState[1]]);
		interval.current = setTimeout(() => {
			firstInputValidation(setValue, +val);
		}, 800);
	};

	const secondInputHandler = e => {
		let val = e.target.value;
		clearTimeout(interval.current);
		if (val === '') {
			setValue(prevState => [prevState[0], max]);
			return;
		}
		setValue(prevState => [prevState[0], +val]);
		interval.current = setTimeout(() => {
			secondInputValidation(setValue, +val);
		}, 800);
	};

	const sliderHandler = (e, numbers, activeThumb) => {
		if (activeThumb) {
			secondInputValidation(setValue, numbers[1]);
		} else {
			firstInputValidation(setValue, numbers[0]);
		}
	};

	return (
		<>
			<Slider
				value={slider}
				onChange={sliderHandler}
				valueLabelDisplay="off"
				disableSwap
				min={min}
				max={max}
				classes={{
					track: classes.track,
					rail: classes.rail,
					thumb: classes.thumb,
					disabled: classes.disabled,
					dragging: classes.dragging,
					active: classes.active,
					focusVisible: classes.focusVisible,
				}}
				ref={elem}
			/>
			<div className={classes.wrap}>
				<Input
					placeholder={'' + min}
					name={Array.isArray(names) ? names[0] : ''}
					value={values[0] === min ? '' : values[0]}
					onInput={firstInputHandler}
					className={classes.input}
					variant={'outlined'}
					size={'small'}
					inputProps={{ style: { textAlign: 'center' } }}
				/>
				<span className={classes.feature}>—</span>
				<Input
					placeholder={'' + max}
					name={Array.isArray(names) ? names[1] : ''}
					value={values[1] === max ? '' : values[1]}
					className={classes.input}
					onInput={secondInputHandler}
					size={'small'}
					variant={'outlined'}
					inputProps={{ style: { textAlign: 'center' } }}
				/>
			</div>
		</>
	);
};

export default SliderLine;
