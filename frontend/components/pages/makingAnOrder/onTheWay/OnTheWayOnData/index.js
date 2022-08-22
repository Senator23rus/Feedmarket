import classes from './OnTheWayOnData.module.scss';
import {useEffect, useState} from "react";
import OnTheWayCard from "components/pages/makingAnOrder/onTheWay/OnTheWayOnData/OnTheWayCard";

const OnTheWayOnData = ({data, cards}) => {
    let [info, setInfo] = useState('');

    useEffect(() => {
        let res = '';
        if (cards.length % 100 === 1) {
            res += cards.length + ' товар'
        } else if (cards.length % 100 < 5) {
            res += cards.length + ' товара'
        } else {
            res += cards.length + ' товаров'
        }
            setInfo(res);
    }, [])

  return(
      <div>
          <h2 className={classes.title}>Будет готово к выдаче с {data}</h2>
          <p className={classes.info}>{info}</p>
          <div className={classes.cardWrapper}>
              {cards.map((item) => {
                  return <OnTheWayCard card={item} key={item.id}/>
              })}
          </div>
      </div>
  );
}

export default OnTheWayOnData;