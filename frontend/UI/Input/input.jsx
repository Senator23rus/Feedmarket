import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';

/**
 * @param {import("@mui/material/TextField").TextFieldProps
 * & {
 * [label]:string,
 * [pass]:boolean,
 * [searchIcon]:boolean,
 * [borderFocus]:boolean,
 * [value]:any,
 * setValue:Function,
 * [name]:string}} props
 * @constructor
 */
const Input = props => {
	const {
		label = '',
		pass = false,
		searchIcon = false,
		value,
		setValue,
		name = '',
		borderFocus,
		...rest
	} = props;
	const [showPass, setShowPass] = useState(false);

	return (
		<TextField
			id="filled-basic"
			type={pass && !showPass ? 'password' : 'text'}
			label={label}
			variant={props.variant ? props.variant : 'filled'}
			name={name}
			value={value && value}
			onInput={setValue && setValue}
			sx={
				props.sx
					? props.sx
					: {
							'& input': {
								fontSize: props.size === 'small' ? '0.75em' : '1em',
							},
							'&:hover &:before': {
								borderBottom: 'none',
							},
							'& label': {
								fontFamily: 'Roboto, sans-serif',
								fontStyle: 'normal',
								// fontSize: props.size === 'small' ? '1em' : '0.75em',
								fontWeight: 400,
								color: '#999999',
							},
							'& label.Mui-focused': {
								fontFamily: 'Roboto,sans-serif',
								fontStyle: 'normal',
								fontWeight: 700,
								color: '#C8C8C8',
							},
							'& .MuiFilledInput-root': {
								borderRadius: props.size === 'small' ? '12px' : '20px',
								border: '1px solid transparent',
								background: '#F2FAF5',
								'& fieldset': {
									borderColor: '#EEEFF1',
								},
								'&:hover': {
									backgroundColor: '#FFFFFF',
									border: '1px solid #C8C8C8',
								},
								'&.Mui-focused fieldset': {
									backgroundColor: 'transparent',
									borderColor: '#F3DB00',
								},
								'&.Mui-focused': {
									backgroundColor: '#FFFFFF',
									// border: '1px solid #FF7A00',
								},
								'&.Mui-focused &:hover': {
									backgroundColor: '#FFFFFF',
									border: 'none',
									// border: '1px solid #FF7A00',
								},
								'&:before': {
									display: 'none',
								},
								'&:after': {
									display: 'none',
								},
							},
							'& .MuiOutlinedInput-root': {
								borderRadius: props.size === 'small' ? '12px' : '20px',
								border: '1px solid transparent',
								background: '#F2FAF5',
								'& fieldset': {
									borderColor: '#EEEFF1',
								},
								'&:hover': {
									backgroundColor: '#FFFFFF',
									border: '1px solid #C8C8C8',
								},
								'&.Mui-focused fieldset': {
									backgroundColor: 'transparent',
									borderColor: '#F3DB00',
								},
								'&.Mui-focused': {
									backgroundColor: '#FFFFFF',
									// border: '1px solid #FF7A00',
								},
								'&.Mui-focused, &:hover': {
									backgroundColor: '#FFFFFF',
									border: '1px solid transparent',
									// border: '1px solid #FF7A00',
								},
								'&:before': {
									display: 'none',
								},
								'&:after': {
									display: 'none',
								},
							},
							'& .MuiStandartInput-root': {
								borderRadius: props.size === 'small' ? '12px' : '20px',
								border: '1px solid transparent',
								background: '#F2FAF5',
								'& fieldset': {
									borderColor: '#EEEFF1',
								},
								'&:hover': {
									backgroundColor: '#FFFFFF',
									border: '1px solid #C8C8C8',
								},
								'&.Mui-focused fieldset': {
									backgroundColor: 'transparent',
									borderColor: '#F3DB00',
								},
								'&.Mui-focused': {
									backgroundColor: '#FFFFFF',
									border: '1px solid #FF7A00',
								},
								'&:before': {
									display: 'none',
								},
								'&:after': {
									display: 'none',
								},
							},
					  }
			}
			InputProps={{
				...(searchIcon && {
					endAdornment: (
						<InputAdornment position="end">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="14.667" cy="14.6665" r="8" stroke="#999999" />
								<path
									d="M14.667 10.6665C14.1417 10.6665 13.6216 10.77 13.1363 10.971C12.651 11.172 12.21 11.4666 11.8386 11.8381C11.4671 12.2095 11.1725 12.6505 10.9715 13.1358C10.7705 13.6211 10.667 14.1412 10.667 14.6665"
									stroke="#999999"
									strokeLinecap="round"
								/>
								<path
									d="M26.667 26.6665L22.667 22.6665"
									stroke="#999999"
									strokeLinecap="round"
								/>
							</svg>
						</InputAdornment>
					),
				}),
				...(pass && {
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => setShowPass(prevState => !prevState)}>
								{showPass ? (
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.3145 10.3598C13.3272 10.2417 13.3337 10.1218 13.3337 10.0003C13.3337 8.15938 11.8413 6.66699 10.0003 6.66699C9.87888 6.66699 9.75896 6.67349 9.64088 6.68615L10.7421 7.78737C11.4341 8.01922 11.9814 8.56656 12.2133 9.25855L13.3145 10.3598ZM7.83684 9.12475C7.72731 9.39511 7.66699 9.69068 7.66699 10.0003C7.66699 11.289 8.71166 12.3337 10.0003 12.3337C10.31 12.3337 10.6055 12.2733 10.8759 12.1638L11.6242 12.9121C11.1437 13.1806 10.5899 13.3337 10.0003 13.3337C8.15938 13.3337 6.66699 11.8413 6.66699 10.0003C6.66699 9.41078 6.82004 8.85698 7.08858 8.37649L7.83684 9.12475Z"
											fill="#999999"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.6643 14.952L12.1813 13.469C11.4744 13.8009 10.7403 14 10.0003 14C8.8255 14 7.66543 13.4982 6.60559 12.7599C5.55206 12.0259 4.67372 11.1109 4.08377 10.414C3.98303 10.2949 3.90845 10.2067 3.8468 10.129C3.8003 10.0705 3.77044 10.0294 3.75088 10C3.77044 9.97061 3.8003 9.92954 3.8468 9.87099C3.90845 9.79333 3.98303 9.70507 4.08377 9.58605C4.60179 8.97404 5.34216 8.19395 6.22825 7.51595L4.80351 6.09121C3.85921 6.84425 3.09033 7.66406 2.5572 8.29393C2.5338 8.32158 2.50943 8.34999 2.48435 8.37923L2.48434 8.37924L2.48434 8.37924C2.16576 8.75068 1.7334 9.25478 1.7334 10C1.7334 10.7452 2.16576 11.2493 2.48434 11.6208L2.48436 11.6208C2.50943 11.65 2.5338 11.6784 2.5572 11.7061C3.2095 12.4767 4.21473 13.5318 5.46237 14.4009C6.7037 15.2657 8.26241 16 10.0003 16C11.3516 16 12.5946 15.556 13.6643 14.952ZM7.46239 4.50745C8.24744 4.19715 9.09981 4 10.0003 4C11.7382 4 13.2969 4.73434 14.5382 5.5991C15.7859 6.46825 16.7911 7.52326 17.4434 8.29393C17.4668 8.32157 17.4912 8.34998 17.5162 8.37921L17.5162 8.37924C17.8348 8.75068 18.2672 9.25478 18.2672 10C18.2672 10.7452 17.8348 11.2493 17.5162 11.6208L17.5162 11.6209C17.4911 11.6501 17.4668 11.6784 17.4434 11.7061C17.0899 12.1237 16.6328 12.6248 16.0896 13.1346L14.6746 11.7196C15.1658 11.2628 15.5865 10.8042 15.9168 10.414C16.0176 10.2949 16.0921 10.2067 16.1538 10.129C16.2003 10.0705 16.2301 10.0294 16.2497 10C16.2301 9.97061 16.2003 9.92954 16.1538 9.87099C16.0921 9.79334 16.0176 9.70507 15.9168 9.58605C15.3269 8.88906 14.4485 7.97408 13.395 7.24015C12.3352 6.50183 11.1751 6 10.0003 6C9.68472 6 9.37021 6.03621 9.05843 6.10349L7.46239 4.50745Z"
											fill="#999999"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M16.6667 15.8337C16.3413 16.1592 15.8137 16.1592 15.4882 15.8337L3.3334 3.6789C3.00796 3.35346 3.00796 2.82583 3.3334 2.50039V2.50039C3.65883 2.17495 4.18647 2.17495 4.51191 2.50039L16.6667 14.6552C16.9922 14.9806 16.9922 15.5083 16.6667 15.8337V15.8337Z"
											fill="#999999"
										/>
									</svg>
								) : (
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.0003 12.5003C11.381 12.5003 12.5003 11.381 12.5003 10.0003C12.5003 8.61961 11.381 7.50033 10.0003 7.50033C8.61961 7.50033 7.50033 8.61961 7.50033 10.0003C7.50033 11.381 8.61961 12.5003 10.0003 12.5003ZM10.0003 13.3337C11.8413 13.3337 13.3337 11.8413 13.3337 10.0003C13.3337 8.15938 11.8413 6.66699 10.0003 6.66699C8.15938 6.66699 6.66699 8.15938 6.66699 10.0003C6.66699 11.8413 8.15938 13.3337 10.0003 13.3337Z"
											fill="#999999"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.38291 7.19393C5.28364 7.98481 4.38703 8.95381 3.82017 9.64203C3.73703 9.74298 3.67493 9.81849 3.62349 9.8849C3.58277 9.93748 3.55684 9.9741 3.53992 10.0003C3.55684 10.0266 3.58277 10.0632 3.62349 10.1157C3.67493 10.1822 3.73703 10.2577 3.82017 10.3586C4.38703 11.0468 5.28364 12.0158 6.3829 12.8067C7.48875 13.6023 8.72879 14.167 10.0003 14.167C11.2718 14.167 12.5118 13.6023 13.6177 12.8067C14.717 12.0158 15.6136 11.0468 16.1804 10.3586C16.2636 10.2577 16.3257 10.1822 16.3771 10.1157C16.4178 10.0632 16.4438 10.0266 16.4607 10.0003C16.4438 9.97409 16.4178 9.93748 16.3771 9.8849C16.3257 9.81849 16.2636 9.74298 16.1804 9.64203C15.6136 8.95381 14.717 7.98481 13.6177 7.19394C12.5118 6.39832 11.2718 5.83366 10.0003 5.83366C8.72879 5.83366 7.48875 6.39832 6.38291 7.19393ZM5.40955 5.84103C6.66208 4.93988 8.24202 4.16699 10.0003 4.16699C11.7586 4.16699 13.3385 4.93989 14.591 5.84103C15.8502 6.74691 16.8503 7.83386 17.4669 8.58243C17.4866 8.6063 17.507 8.63084 17.5281 8.65611C17.7893 8.96896 18.1422 9.39163 18.1422 10.0003C18.1422 10.609 17.7893 11.0317 17.5281 11.3445C17.507 11.3698 17.4866 11.3944 17.4669 11.4182C16.8503 12.1668 15.8502 13.2537 14.591 14.1596C13.3385 15.0608 11.7586 15.8337 10.0003 15.8337C8.24202 15.8337 6.66208 15.0608 5.40955 14.1596C4.15043 13.2537 3.15025 12.1668 2.5337 11.4182C2.51404 11.3944 2.49354 11.3698 2.47246 11.3445C2.21127 11.0317 1.8584 10.609 1.8584 10.0003C1.8584 9.39163 2.21127 8.96896 2.47246 8.65611C2.49355 8.63084 2.51404 8.6063 2.5337 8.58243C3.15025 7.83386 4.15043 6.74691 5.40955 5.84103Z"
											fill="#999999"
										/>
									</svg>
								)}
							</IconButton>
						</InputAdornment>
					),
				}),
			}}
			{...rest}
		/>
	);
};

export default Input;
