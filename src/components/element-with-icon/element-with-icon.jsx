import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './element-with-icon.module.css';

const ElementWithIcon = ({ text, price, thumbnail, type, isLocked }) => {
  return (
    <div className={styles['element-with-icon']}>
      {type === undefined ? <DragIcon /> : <div  className={styles['element-with-icon__styler']}/>}
      <ConstructorElement type={type} isLocked={isLocked} text={text} price={price} thumbnail={thumbnail} />
    </div>
  );
};

ElementWithIcon.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
};

export default ElementWithIcon;
