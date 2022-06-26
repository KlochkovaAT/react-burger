import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import Modal from '../modal/modal';
import DetailIngredient from '../detail-ingredient/detail-ingredient';
import stylesCard from './card.module.css';
import { dataPropTypes } from '../../utils/constants';

const Card = (props) => {
  const { image, price, name, count } = props;
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(true);
  }

  const handleOnClose = () => {
    setIsActive(false);
  }

  return (
    <>
      <div className={`${stylesCard['card']} pb-15`} onClick={handleOnClick}>
        <Counter count={count} size='default' />
        <img src={image} alt='Изображение' />
        <div className={stylesCard['card__price']}>
          <p className='mr-2 mt-2 mb-2'>{price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p className={stylesCard['card__name']}>{name}</p>
      </div>
      <Modal isActive={isActive} handleOnClose={handleOnClose}>
        <DetailIngredient {...props} ></DetailIngredient>
      </Modal>
    </>
  );
};

Card.propTypes = dataPropTypes.isRequired;

export default Card;
