import { useLayoutEffect, useState } from 'react';

/**
 * @description Компонент предназначен для того чтобы скрыть с загружаемой с сервера страницы данные
 *
 * @example <caption>Пример использования компонента</caption>
 *
 * function Foo(){
 *   const {someProperty} = useSelector(state=>state.someReducer)
 *   return (
 *    <div>
 *    	<NoSsr>{someProperty}</NoSsr>
 *    </div>
 *   )
 * }
 *
 *
 * @param {any} children - все что вы обернете этим компонентом
 * @param {any} onSSR - все что вы сюда положите будет отображено пока основная нода спрятана
 * @returns {JSX.Element}
 * @constructor
 */
const NoSsr = ({ children, onSSR }) => {
	const [onBrowser, setOnBrowser] = useState(false);
	useLayoutEffect(() => {
		setOnBrowser(true);
	}, []);
	return <>{onBrowser ? children : onSSR}</>;
};

export default NoSsr;
