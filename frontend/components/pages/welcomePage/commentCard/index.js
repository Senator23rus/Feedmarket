import classes from './commentCard.module.scss';
import Image from 'next/image';

/**
 * @description Компонент карточки коментариев для преветственной страницы для продавца
 *
 * @param {React.ReactElement} props
 * @property {string} props.commentText - Текст модержания комментария
 * @property {string} props.userName - Имя пользователя оставившего комментарий
 * @property {string} props.userDescription - Описание конкретного пользователя
 * @property {string} props.userImage - Изображение на аватарке пользователя
 * @returns {JSX.Element}
 * @constructor
 */

const CommentCard = ({ commentText, userName, userDescription, userImage }) => {
	return (
		<div className={classes.card}>
			<div className={classes.comment__wrapper}>
				<p className={classes.commentText}>{commentText}</p>
				<div className={classes.user__wrapper}>
					<div className={classes.userImage}>
						<Image alt="image" src={userImage} layout={'fill'} />
					</div>
					<div>
						<p className={classes.userName}>{userName}</p>
						<p className={classes.userDescription}>{userDescription}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentCard;
