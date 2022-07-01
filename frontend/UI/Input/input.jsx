import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Input = ({
	label = '',
	pass = false,
	searchIcon = false,
	value,
	setValue,
	name = '',
}) => {
	const [showPass, setShowPass] = useState(false);

	return (
		<TextField
			id="standard-basic"
			type={pass && !showPass ? 'password' : 'text'}
			label={label}
			name={name}
			value={value && value}
			onInput={setValue && setValue}
			size={'small'}
			sx={{
				'& label.Mui-focused': {
					color: 'green',
				},
				'& .MuiOutlinedInput-root': {
					borderRadius: 4,
					background: '#F2FAF5',
					'& fieldset': {
						borderColor: '#EEEFF1',
					},
					'&:hover': {
						backgroundColor: '#FFFFFF',
						borderColor: '#EEEFF1',
					},
					'&.Mui-focused fieldset': {
						backgroundColor: 'transparent',
						borderColor: '#F3DB00',
					},
					'&.Mui-focused': {
						backgroundColor: '#FFFFFF',
					},
				},
			}}
			InputProps={{
				...(searchIcon && {
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon />
						</InputAdornment>
					),
				}),
				...(pass && {
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => setShowPass(prevState => !prevState)}>
								{showPass ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}),
			}}
		/>
	);
};

export default Input;
