import stylesTotalPrice from './total-price.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const TotalPrice = ({ price, handleOnClick }) => {
  return (
    <div className={stylesTotalPrice['total-price']}>
      <div className={`${stylesTotalPrice['total-price__total']} mr-10`}>
        <p className='mr-2 mt-1 mb-1'>{price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button type='primary' size='large' onClick={handleOnClick}>
        Оформить заказ
      </Button>
    </div>
  );
};

TotalPrice.propTypes = PropTypes.shape({
  price: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func.isRequired,
}).isRequired;

export default TotalPrice;
