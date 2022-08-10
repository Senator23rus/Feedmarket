import Layout from "components/common/layouts";
import classes from "../styles/pages/makingAnOrder.module.scss";
import PaymentMethod from "components/pages/makingAnOrder/paymentMethod";
import MethodOfObtaining from "components/pages/makingAnOrder/MethodOfObtaining";
import OnTheWay from "components/pages/makingAnOrder/onTheWay";


const MakingAnOrder = () => {
  return(
    <Layout>
        <h1 className={classes.title}>Юридическая информация</h1>
        <p className={classes.breadCrumbs}>bread crumbs</p>
        <div className={classes.container}>
            <div className={classes.section}>
                <PaymentMethod card={[{name: 'сбер', cardNum: '**1234 VISA'},
                    {name: 'сбер', cardNum: '**1234 MASTERCARD'},
                    {name: 'сбер', cardNum: '**1234 MASTERCARD'}]}/>
                <MethodOfObtaining/>
                <OnTheWay/>
            </div>
        </div>
    </Layout>
  );
}

export default MakingAnOrder;