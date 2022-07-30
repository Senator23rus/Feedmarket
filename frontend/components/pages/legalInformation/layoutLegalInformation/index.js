import classes from './index.module.scss';
import Layout from '../../../common/layouts';
import CustomLink from '../../../../UI/custom-link';
import { useRouter } from 'next/router';

const LayoutLegalInformation = ({ children }) => {
	return (
		<Layout>
			<h1 className={classes.title}>Юридическая информация</h1>
			<p className={classes.breadCrumbs}>bread crumbs</p>
			<div className={classes.container}>
				<ul className={classes.menu}>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Юридические документы
						</CustomLink>
					</li>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Условия использования сервисов FEEDMARKET и реквизиты
						</CustomLink>
					</li>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Условия сотрудничества с FEEDMARKET
						</CustomLink>
					</li>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Условия проведения акций
						</CustomLink>
					</li>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Политика конфиденциальности и персональной информации
						</CustomLink>
					</li>
					<li>
						<CustomLink
							active={classes.link__active}
							className={classes.link}
							href={'/legalInformation/privacyPolicy'}>
							Политика в отношении обработки персональных данных
						</CustomLink>
					</li>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Обучение
						</CustomLink>
					</li>
					<li>
						<CustomLink className={classes.link} href={'/'}>
							Работа алгоритмов FEEDMARKET
						</CustomLink>
					</li>
				</ul>
				<div className={classes.childContainer}>{children}</div>
			</div>
		</Layout>
	);
};

export default LayoutLegalInformation;
