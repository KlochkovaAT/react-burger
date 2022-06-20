import stylesOrderDetails from './order-details.module.css';
import PropTypes from 'prop-types';

const OrderDetails = ({ orderId }) => {
  return (
    <div className={`${stylesOrderDetails['order-details']}`}>
      <h2 className={`${stylesOrderDetails['order-details__ID']} mt-20 mb-8`}>{orderId}</h2>
      <p className={`${stylesOrderDetails['order-details__description']} mb-15`}>идентификатор заказа</p>
      <div className={`${stylesOrderDetails['order-details__image']} mb-15`}></div>
      <p className={`${stylesOrderDetails['order-details__state']} mb-2`}>Ваш заказ начали готовить</p>
      <p className={`${stylesOrderDetails['order-details__information']} mb-20`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

OrderDetails.propTypes = PropTypes.shape({
  orderId: PropTypes.number.isRequired,
}).isRequired;

export default OrderDetails;
