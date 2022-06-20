import TotalPrice from '../total-price/total-price';
import ElementWithIcon from '../element-with-icon/element-with-icon';
import styles from './burger-constructor.module.css';
import scrollBarStyle from '../custom-scrollbar/custom-scrollbar.module.css';
import { createOrderUrl } from '../../components/utils/constants';
import Modal from '../modal/modal';
import { useContext, useEffect, useState } from 'react';
import OrderDetails from '../order-details/order-details';
import BurgerConstructorContext from '../burger-constructor-context/burger-constructor-context';

const BurgerConstructor = () => {
  const [isActive, setIsActive] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);
  const { bun, ingredients } = useContext(BurgerConstructorContext);

  useEffect(() => {
    setIsActive(orderInfo !== null);
  }, [orderInfo]);

  const getIngredientsIDs = () => {
    const ids = ingredients.map((ingredient) => ingredient._id);
    ids.unshift(bun._id);
    ids.push(bun._id);

    return ids;
  };

  const handleOnClick = () => {
    fetch(createOrderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: getIngredientsIDs(),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((resJson) => {
        setOrderInfo(resJson.order.number);
      })
      .catch((err) => console.log(err));
  };

  const handleOnClose = () => {
    setOrderInfo(null);
  };

  return (
    <>
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
        <TotalPrice
          price={bun.price + ingredients.map(({ price }) => price).reduce((prev, current) => prev + current, 0)}
          handleOnClick={handleOnClick}
        />
      </div>
      <Modal isActive={isActive} handleOnClose={handleOnClose}>
        <OrderDetails orderId={orderInfo}></OrderDetails>
      </Modal>
    </>
  );
};

export default BurgerConstructor;
