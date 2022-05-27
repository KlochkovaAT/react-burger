import stylesTotalPrice from './total-price.module.css';
import { Button,CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const TotalPrice = ({price}) => {
  return (
    <div className={stylesTotalPrice['total-price']}>
      <div className={`${stylesTotalPrice['total-price__total']} mr-10`}>
        <p className='mr-2 mt-1 mb-1'>{price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button type='primary' size='large'>
        Оформить заказ
      </Button>
    </div>
  );
};

export default TotalPrice;
