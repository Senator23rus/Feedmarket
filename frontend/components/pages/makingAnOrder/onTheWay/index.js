import classes from 'components/pages/makingAnOrder/onTheWay/onTheWay.module.scss';
import {useFetching} from "hooks/useFetching";
import OnTheWayOnData from "components/pages/makingAnOrder/onTheWay/OnTheWayOnData";
import {useEffect, useState} from "react";
import card from 'mock/cards_onTheWay.json';

const OnTheWay = () => {
    let [content, setContent] = useState([{data: '13 Октября', card}, {data: '13 Октября', card}]);
  let [fetch, isLoad, error] = useFetching( () => {
      let response = [{data: '13 октября', card}, {data: '13 октября', card}];
      return response;
  });

    // useEffect(  () => {
    //     let res = fetch();
    //     setContent(res);
    // }, [])

  return(
      <div className={classes.wrapper}>
          {isLoad || content.map((item, index) => {
              return <OnTheWayOnData data={item.data} cards={card} key={index}/>
          })}
      </div>
  );
}

export default OnTheWay;