import TotalPrice from '../total-price/total-price';
import PropTypes from 'prop-types';
import ElementWithIcon from '../element-with-icon/element-with-icon';
import styles from './burger-constructor.module.css';
import scrollBarStyle from '../custom-scrollbar/custom-scrollbar.module.css';
import dataPropTypes from '../../components/utils/constants';

const BurgerConstructor = ({ bun, ingredients }) => {
  return (
    <div className={`${styles['burger-constructor']} mt-25 ml-4`}>
      <ElementWithIcon type={'top'} isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image} />
      <ul className={`${styles['burger-constructor__list']} ${scrollBarStyle['custom-scrollbar']}`}>
        {ingredients.map(({ _id, name, price, image }) => (
          <li key={_id} className={styles['burger-constructor__list-item']}>
            <ElementWithIcon isLocked={false} text={name} price={price} thumbnail={image} />
          </li>
        ))}
      </ul>
      <ElementWithIcon type={'bottom'} isLocked={true} text={`${bun.name} (низ)`} price={bun.price} thumbnail={bun.image} />
      <TotalPrice price={bun.price + ingredients.map(({ price }) => price).reduce((prev, current) => prev + current, 0)} />
    </div>
  );
};

BurgerConstructor.propTypes = {
  bun: dataPropTypes.isRequired,
  ingredients: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export default BurgerConstructor;
