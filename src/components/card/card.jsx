import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import stylesCard from './card.module.css';

const Card = ({ image, price, name, count }) => {
  return (
    <div className={`${stylesCard['card']} pb-15`}>
      <Counter count={count} size='default' />
      <img src={image} alt='Изображение' />
      <div className={stylesCard['card__price']}>
        <p className='mr-2 mt-2 mb-2'>{price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={stylesCard['card__name']}>{name}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  count: PropTypes.number,
};

export default Card;
