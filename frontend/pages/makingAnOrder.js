import Layout from "components/common/layouts";
import classes from "../styles/pages/makingAnOrder.module.scss";
import PaymentMethod from "components/pages/makingAnOrder/paymentMethod";
import MethodOfObtaining from "components/pages/makingAnOrder/MethodOfObtaining";
import OnTheWay from "components/pages/makingAnOrder/onTheWay";
import Payment from "components/pages/makingAnOrder/payment";
import {useEffect, useState} from "react";


const MakingAnOrder = () => {
    let [paymentParameters, setPaymentParameters] = useState({paymentMethod: null, methodOfObtaining: null,
    deliveryPoint: null, userName: null, userPhoneNumber: null});
    let [isValidation, setIsValidation] = useState(false);

    useEffect(() => {
        for (let paymentParametersKey in paymentParameters) {
            if (paymentParameters[paymentParametersKey] === null){
                setIsValidation(false);
                return;
            }
        }
        setIsValidation(true);
    }, [paymentParameters]);



  return(
    <Layout>
        <h1 className={classes.title}>Оформление заказа</h1>
        <p className={classes.breadCrumbs}>bread crumbs</p>
        <div className={classes.container}>
            <div className={classes.section}>
                <PaymentMethod card={[{name: 'сбер', cardNum: '**1234 VISA'},
                    {name: 'сбер', cardNum: '**1234 MASTERCARD'},
                    {name: 'сбер', cardNum: '**1234 MASTERCARD'}]} setPaymentParameters={setPaymentParameters}/>
                <MethodOfObtaining setPaymentParameters={setPaymentParameters}/>
                <OnTheWay/>
            </div>
            <div className={classes.payment}>
                <Payment isValidation={isValidation}/>
            </div>
        </div>
    </Layout>
  );
}

export default MakingAnOrder;