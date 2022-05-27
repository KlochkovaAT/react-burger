import TotalPrice from '../total-price/total-price';
import PropTypes from 'prop-types';
import ElementWithIcon from '../element-with-icon/element-with-icon';
import styles from './burger-constructor.module.css'

const BurgerConstructor = ({ elements }) => {
  return (
    <div className={`${styles['burger-constructor']} mt-25 ml-4`}>
      {elements.map(({ _id, name, price, image }, index, elements) => (
        <ElementWithIcon
          key={_id}
          type={index === 0 ? 'top' : index === elements.length - 1 ? 'bottom' : undefined}
          isLocked={true}
          text={name}
          price={price}
          thumbnail={image}
        />
      ))}
      <TotalPrice price={elements.map(({ price }) => price).reduce((prev, current) => prev + current, 0)} />
    </div>
  );
};

BurgerConstructor.propTypes = {
  elements: PropTypes.arrayOf(ElementWithIcon.propTypes)
};

export default BurgerConstructor;
