import classes from './OnTheWayCard.module.scss';
import Image from 'next/image'

const OnTheWayCard = ({card}) => {
  return(
      <div className={classes.wrapper}>
          <div className={classes.img}><Image src={card.image} layout={'fill'}/></div>
          <div className={classes.text}>
              <p >Premix для птицы, возможно длинное описание, которое помещается
                  в 2-3 строки... Premix для птицы, возможно длинное описание, которое помещается в 2-3 строки...</p>
              <p>Магазин: <span>Premix Bird</span></p>
          </div>
          <div className={classes.specifications}>
              <p>Количество шт: {card.count}</p>
              <p><span>Цена:</span><span>{card.price} РУБ</span></p>
          </div>
      </div>
  );
};

export default OnTheWayCard;