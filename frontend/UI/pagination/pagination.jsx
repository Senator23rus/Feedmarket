import Layout from 'components/common/layouts';
import {useState, useEffect} from 'react';
import {Container, Pagination, Link, TextField, Stack,} from '@mui/material'

const baseUrl = ('#')


const Paginations = () => {
    const [post, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(10);



    useEffect(() => {
        fetch(baseUrl)
        .then(data => {
            console.log(data.json())
            setPosts(data)
            setPageQty(data)
        })
        }, []);

    return (
        <Container>
            <Pagination  sx={{
                ".MuiPaginationItem-previousNext":{
                    padding: '12px 10px',
                    width: '32px',
                    height: '32px',
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    "&.Mui-disabled":{
                        background: '#B0B0B0',
                        border: '2px solid #7E7E7E',
                    }},
                    ".MuiPaginationItem-text":{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '12px',
                        lineHeight: '16px',
                        textAlign: 'center',
                        color: '#0D9545',},
                    ".MuiPaginationItem-ellipsis":{
                        color: '#414141',
                    },
                    ".Mui-selected":{
                        background: 'rgba(16, 150, 72, 0.3)',
                        border: '2px solid #0D9545',
                    }    
        }}  count={10} siblingCount={2}   shape="rounded" />
        </Container>
    )
}

export default Paginations






// import React, { useEffect, useState } from 'react';
// import classes from './paginator.module.css';
// import cn from 'classnames';
// import { useInputOnObject } from 'hooks';
// import { indent } from 'enzyme/build/Debug';
// import { isEmpty } from 'helpers/common';

// const LEFT_PAGE = 'LEFT';
// const RIGHT_PAGE = 'RIGHT';

// /**
//  * Helper method for creating a range of numbers
//  * range(1, 5) => [1, 2, 3, 4, 5]
//  */
// const range = (from, to, limit, initialOffset) => {
// 	let i = from;
// 	let off = initialOffset | 0;
// 	const range = [];

// 	while (i <= to) {
// 		range.push({ index: i, offset: off });
// 		i += 1;
// 		off += limit;
// 	}

// 	return range;
// };

// const Paginator = ({ total, currentPage , setValue, limit, offset }) => {
// 	/**
// 	 *
// 	 * @type {{onChange: Function, clear: Function, state: {limit:null|number,offset:number,total:number,totalPages:number,currentPage: number,
// 		leftMultiDot: boolean,pages:{index:number,offset:number}[],	minPage: {index:number,offset:number}|null,maxPage: {index:number,offset:number}|null,
// 		rightMultiDot: boolean,}}}
// 	 */
// 	const paginator = useInputOnObject({
// 		limit: null,
// 		minPage: null,
// 		maxPage: null,
// 		offset: 0,
// 		pages: [],
// 		total: 0,
// 		totalPages: 0,
// 		currentPage: 1,
// 		leftMultiDot: false,
// 		rightMultiDot: false,
// 	});

// 	const [render, setRender] = useState([]);
// 	useEffect(() => {
// 		if (limit) {
// 		}
// 	}, [limit]);
// 	useEffect(() => {
// 		if (currentPage) {
// 			paginator.onChange({ currentPage });
// 		}
// 	}, [currentPage]);

// 	useEffect(() => {
// 		if (total && limit) {
// 			const totalPages = Math.ceil(total / limit);
// 			paginator.onChange({
// 				total,
// 				limit,
// 				totalPages,
// 			});
// 			const _pages = range(1, totalPages, limit, 0);
// 			paginator.onChange({ pages: _pages });
// 		}
// 	}, [total]);
// 	useEffect(() => {
// 		if (paginator.state.pages.length) {
// 			paginator.onChange({
// 				minPage: paginator.state.pages[0],
// 				maxPage: paginator.state.pages[paginator.state.pages.length - 1],
// 			});
// 		}
// 	}, [paginator.state.pages]);
// 	useEffect(() => {
// 		if (offset) {
// 			const page = paginator.state.pages.find(_ => _.offset === offset);
// 			if (page) {
// 				paginator.onChange({ currentPage: page.index, offset: page.offset });
// 			}
// 		}
// 	}, [offset]);

// 	useEffect(() => {
// 		if (paginator.state.pages.length <= 7) {
// 			setRender(paginator.state.pages);
// 		} else {
// 			const { currentPage, maxPage, minPage, limit, offset, pages } = paginator.state;
// 			if (maxPage && minPage) {
// 				if (currentPage < 4 && currentPage <= maxPage.index - 4) {
// 					const _pages = range(1, 4, limit, 0);
// 					paginator.onChange({ leftMultiDot: false, rightMultiDot: true });
// 					setRender(_pages);
// 				}
// 				if (currentPage >= 4 && currentPage <= maxPage.index - 4) {
// 					paginator.onChange({ leftMultiDot: true, rightMultiDot: true });
// 					const page = pages.find(_ => _.index === currentPage - 1);
// 					const _pages = range(currentPage - 1, currentPage + 1, limit, page.offset);
// 					setRender(_pages);
// 				}
// 				if (currentPage >= 4 && currentPage > maxPage.index - 4) {
// 					paginator.onChange({ leftMultiDot: true, rightMultiDot: false });
// 					const page = pages.find(_ => _.index === maxPage.index - 4);
// 					const _pages = range(page.index, maxPage.index, limit, page.offset);
// 					setRender(_pages);
// 				}
// 			}
// 		}
// 	}, [
// 		paginator.state.currentPage,
// 		paginator.state.pages,
// 		paginator.state.maxPage,
// 		paginator.state.minPage,
// 		total,
// 		limit,
// 		offset,
// 	]);

// 	const onChange = (currentPage, offset) => {
// 		if (setValue) {
// 			setValue({
// 				currentPage,
// 				offset,
// 			});
// 		}
// 		paginator.onChange({
// 			currentPage,
// 			offset,
// 		});
// 	};

// 	console.log('state paginator', paginator.state);
// 	console.log('render', render);

// 	return (
// 		<div className={classes.wrapper}>
// 			{paginator.state.minPage && (
// 				<div
// 					style={{
// 						background:
// 							paginator.state.currentPage === paginator.state.minPage.index
// 								? '#EEF3F5'
// 								: 'white',
// 						cursor:
// 							paginator.state.currentPage !== paginator.state.minPage.index
// 								? 'pointer'
// 								: 'default',
// 					}}
// 					className={cn(classes.item, classes.item_no_active)}
// 					onClick={() => {
// 						if (paginator.state.currentPage !== paginator.state.minPage.index) {
// 							const { minPage, currentPage } = paginator.state;
// 							const newPage = currentPage;
// 							if (newPage - 1 <= minPage.index) {
// 								onChange(minPage.index, minPage.offset);
// 							} else {
// 								const page = paginator.state.pages.find(_ => _.index === newPage - 1);
// 								onChange(page.index, page.offset);
// 							}
// 						}
// 					}}>
// 					{paginator.state.currentPage === paginator.state.minPage.index ? (
// 						<svg
// 							width="7"
// 							height="12"
// 							viewBox="0 0 7 12"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg">
// 							<path
// 								fillRule="evenodd"
// 								clipRule="evenodd"
// 								d="M6.85711 0.857164C6.85711 0.510484 6.64828 0.19794 6.32799 0.0652709C6.0077 -0.067398 5.63903 0.00593521 5.39389 0.251075L0.25105 5.39391C-0.0836834 5.72864 -0.0836834 6.27136 0.25105 6.60609L5.39389 11.7489C5.63903 11.9941 6.0077 12.0674 6.32799 11.9347C6.64828 11.8021 6.85711 11.4895 6.85711 11.1428V0.857164Z"
// 								fill="#BFC5D2"
// 							/>
// 						</svg>
// 					) : (
// 						<svg
// 							width="7"
// 							height="12"
// 							viewBox="0 0 7 12"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg">
// 							<path
// 								fillRule="evenodd"
// 								clipRule="evenodd"
// 								d="M6.85711 0.857164C6.85711 0.510484 6.64828 0.19794 6.32799 0.0652709C6.0077 -0.067398 5.63903 0.00593521 5.39389 0.251075L0.25105 5.39391C-0.0836834 5.72864 -0.0836834 6.27136 0.25105 6.60609L5.39389 11.7489C5.63903 11.9941 6.0077 12.0674 6.32799 11.9347C6.64828 11.8021 6.85711 11.4895 6.85711 11.1428V0.857164Z"
// 								fill="#43BF41"
// 							/>
// 						</svg>
// 					)}
// 				</div>
// 			)}
// 			{paginator.state.leftMultiDot && (
// 				<>
// 					<div
// 						onClick={() => {
// 							onChange(paginator.state.minPage.index, paginator.state.minPage.offset);
// 						}}
// 						className={`${classes.item} ${classes.item_no_active}`}>
// 						{paginator.state.minPage.index}
// 					</div>
// 					<div className={cn(classes.item)}>...</div>
// 				</>
// 			)}
// 			{render.map(_ => (
// 				<div
// 					onClick={() => {
// 						if (paginator.state.currentPage !== _.index) {
// 							onChange(_.index, _.offset);
// 						}
// 					}}
// 					key={_.index}
// 					className={`${classes.item} ${
// 						_.index !== paginator.state.currentPage && classes.item_no_active
// 					} ${_.index === paginator.state.currentPage && classes.item_active}`}>
// 					{_.index}
// 				</div>
// 			))}
// 			{paginator.state.rightMultiDot && (
// 				<>
// 					<div className={cn(classes.item)}>...</div>
// 					<div
// 						onClick={() => {
// 							onChange(paginator.state.maxPage.index, paginator.state.maxPage.offset);
// 						}}
// 						className={`${classes.item} ${classes.item_no_active}`}>
// 						{paginator.state.maxPage.index}
// 					</div>
// 				</>
// 			)}
// 			{/*<div className={cn(classes.item, classes.item_no_active)}>1</div>*/}
// 			{/*<div className={cn(classes.item, classes.item_no_active)}>3</div>*/}
// 			{/*<div className={cn(classes.item, classes.item_active)}>4</div>*/}
// 			{/*<div className={cn(classes.item, classes.item_no_active)}>5</div>*/}
// 			{/*<div className={cn(classes.item, classes.item_no_active)}>75</div>*/}
// 			{paginator.state.maxPage && (
// 				<div
// 					style={{
// 						background:
// 							paginator.state.currentPage === paginator.state.maxPage.index
// 								? '#EEF3F5'
// 								: 'white',
// 						cursor:
// 							paginator.state.currentPage !== paginator.state.maxPage.index
// 								? 'pointer'
// 								: 'default',
// 					}}
// 					className={cn(classes.item, classes.item_no_active)}
// 					onClick={() => {
// 						if (paginator.state.currentPage !== paginator.state.maxPage.index) {
// 							const { maxPage, currentPage } = paginator.state;
// 							const newPage = currentPage + 1;
// 							if (newPage >= maxPage.index) {
// 								onChange(maxPage.index, maxPage.offset);
// 							} else {
// 								const page = paginator.state.pages.find(_ => _.index === newPage);
// 								onChange(page.index, page.offset);
// 							}
// 						}
// 					}}>
// 					{paginator.state.currentPage === paginator.state.maxPage.index ? (
// 						<svg
// 							width="7"
// 							height="12"
// 							viewBox="0 0 7 12"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg">
// 							<path
// 								fillRule="evenodd"
// 								clipRule="evenodd"
// 								d="M0 0.857164C0 0.510484 0.208836 0.19794 0.529127 0.0652709C0.849417 -0.067398 1.21809 0.00593522 1.46323 0.251075L6.60606 5.39391C6.9408 5.72864 6.9408 6.27136 6.60606 6.60609L1.46323 11.7489C1.21809 11.9941 0.849417 12.0674 0.529127 11.9347C0.208836 11.8021 0 11.4895 0 11.1428V0.857164Z"
// 								fill="#BFC5D2"
// 							/>
// 						</svg>
// 					) : (
// 						<svg
// 							width="7"
// 							height="12"
// 							viewBox="0 0 7 12"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg">
// 							<path
// 								fillRule="evenodd"
// 								clipRule="evenodd"
// 								d="M0 0.857164C0 0.510484 0.208835 0.19794 0.529126 0.0652709C0.849417 -0.067398 1.21809 0.00593521 1.46323 0.251075L6.60606 5.39391C6.9408 5.72864 6.9408 6.27136 6.60606 6.60609L1.46323 11.7489C1.21809 11.9941 0.849417 12.0674 0.529126 11.9347C0.208835 11.8021 0 11.4895 0 11.1428V0.857164Z"
// 								fill="#43BF41"
// 							/>
// 						</svg>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Paginator;
