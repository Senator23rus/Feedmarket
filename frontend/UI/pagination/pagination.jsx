import Layout from 'components/common/layouts';
import { useState, useEffect } from 'react';
import { Container, Pagination, Link, TextField, Stack } from '@mui/material';

const baseUrl = '#';

const Paginations = () => {
	const [post, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageQty, setPageQty] = useState(10);

	useEffect(() => {
		fetch(baseUrl).then(data => {
			setPosts(data);
			setPageQty(data);
		});
	}, []);

	return (
		<Container>
			<div
				style={{
					width: '100%',
					height: 200,
					margin: 40,
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Pagination
					sx={{
						'.MuiPaginationItem-previousNext': {
							padding: '12px 10px',
							width: '32px',
							height: '32px',
							background: '#FFFFFF',
							boxShadow:
								'0px 4px 12px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.25)',
							borderRadius: '8px',
							'&.Mui-disabled': {
								background: '#B0B0B0',
								border: '2px solid #7E7E7E',
							},
						},
						'.MuiPaginationItem-text': {
							fontFamily: 'Roboto, sans-serif',
							fontStyle: 'normal',
							fontWeight: '700',
							fontSize: '12px',
							lineHeight: '16px',
							textAlign: 'center',
							color: '#0D9545',
						},
						'.MuiPaginationItem-ellipsis': {
							color: '#414141',
						},
						'.Mui-selected': {
							background: 'rgba(16, 150, 72, 0.3)',
							border: '2px solid #0D9545',
							borderRadius: '8px',
						},
					}}
					count={5}
					siblingCount={2}
					shape="rounded"
				/>
			</div>
		</Container>
	);
};

export default Paginations;
