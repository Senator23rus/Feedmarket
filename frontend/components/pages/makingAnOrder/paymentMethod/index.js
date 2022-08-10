import classes from './paymentMethod.module.scss';
import Button from "UI/button";

const PaymentMethod = () => {
  return(
      <section className={classes.paymentMethod}>
          <div className={classes.title__wrapper}>
              <h2 className={classes.title}>Способ оплаты</h2>

              <Button size={'xs'} factor={'green'}>
                  Все способы оплаты
              </Button>
          </div>
      </section>
  );
}

export default PaymentMethod;