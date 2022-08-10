import Layout from "components/common/layouts";
import classes from "../styles/pages/makingAnOrder.module.scss";
import PaymentMethod from "components/pages/makingAnOrder/paymentMethod";


const MakingAnOrder = () => {
  return(
    <Layout>
        <h1 className={classes.title}>Юридическая информация</h1>
        <p className={classes.breadCrumbs}>bread crumbs</p>
        <div className={classes.container}>
            <div className={classes.section}>
                <PaymentMethod/>
            </div>
        </div>
    </Layout>
  );
}

export default MakingAnOrder;