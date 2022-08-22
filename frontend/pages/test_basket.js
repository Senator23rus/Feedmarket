import {useState, useRef, useEffect,} from 'react';
import cards from '../mock/n_cards.json';
import Checkbox from 'UI/checkbox';
import Layout from 'components/common/layouts';
import classes from 'styles/pages/test_basket.module.scss';
import ProductList from '../components/pages/backet/product_list';
import Ordering from 'components/pages/backet/ordering';

const Basket = () => {

	const containerGrid = useRef(null);
	const [products, setProducts] = useState([])
	const [padding, setPadding] = useState(false);
	const [all, setAll] = useState(true);
	const [amount, setAmount] = useState(0)
	const [sum, setSum] = useState(0)
	const [weight, setWeight] = useState(0)

	useEffect(()=>{
		if (cards && cards.length){
			setProducts(cards.map(_=>({..._,checked:true,amount:1})))}
	},[cards])

	function deleteProduct(id) {
		id? setProducts(
			products.filter(_=> _.id !== id)
		):setProducts(products.filter(_ => !_.checked))
	}

	function changeAmount(id, value){
		setProducts(products.map(_=> _.id === id ? {..._, amount: _.amount + value} : {..._} ))
		products.forEach(_=> {
			_.id === id && (_.amount + value) <= 0 ? deleteProduct(id) : false ;
		})
	}

	useEffect(()=>{
		if (all){
			setProducts(prevState=>prevState.map(_=>({..._,checked:true})))
		}
	},[all])

	useEffect(()=>{
		products.every(_=> {
			if(!_.checked){
				setAll(false)
				return false
			}else {
				setAll(true)
				return true
			}
		})
		const arr = products.filter(_=>_.checked)
		setSum( arr.reduce((acc,_)=>acc += _.amount * +_.price.replace(/\s/g,''),0))
		setAmount( arr.reduce((acc,_)=>acc += _.amount, 0))
		setWeight( arr.reduce((acc,_)=>acc += _.weight * _.amount, 0))
	},[products])



	function changeChecked(id) {
		const copyProducts = JSON.parse(JSON.stringify(products))
		setProducts(copyProducts.map(product => {
			return product.id === id ? {...product,checked:!product.checked}: product
		} ))
	}

	useEffect(() => {
		function onWheel() {
			if (containerGrid.current) {
				const top = containerGrid.current?.getBoundingClientRect().top;
				if (top <= 0) {
					setPadding(true);
				} else {
					setPadding(false);
				}
			}
		}
		if (typeof document === 'object') {
			document?.querySelector('#__next').addEventListener('wheel', onWheel);
		}

		return () => document?.querySelector('#__next').addEventListener('wheel', onWheel);
	}, []);


	return (
		<Layout>
			<h1 className={classes.basket__title}>Корзина</h1>
			<div className={classes.product__wrapper}>
				<Checkbox  groupChecked={false} checked={all} onChange={()=> setAll(!all)}>
					<span className={classes.product__selection_label}>Выбрать все</span>
				</Checkbox>

				<span className={classes.product__separator}>|</span>
				<span className={classes.product__delete} onClick={()=> deleteProduct()}>Удалить выбранное</span>
			</div>
			<div className={classes.main__grid} ref={containerGrid}>
				<div className={classes.main__grid__left}>
					{products.map(card => <ProductList card={card} key={card.id} changeChecked={changeChecked} changeAmount={changeAmount} deleteProduct={deleteProduct}/>)}
				</div>

				<div
					style={{
						...(padding && {
							paddingTop: 53,
							transition: 'padding linear 200ms',
						}),
					}}
					className={classes.main__grid__right}>
					<Ordering amount={amount} sum={sum} weight={weight}/>
				</div>
			</div>
		</Layout>
	);
};

export default Basket;
