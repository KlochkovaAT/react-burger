import stylesIngredients from './burger-ingredients.module.css';
import Tabs from '../tabs/tabs';
import CardList from '../card-list/card-list';
import PropTypes from 'prop-types';
import scrollBarStyle from '../custom-scrollbar/custom-scrollbar.module.css';
import { useContext } from "react";
import BurgerIngredientsContext from '../../contexts/burger-ingredients-context/burger-ingredients-context';

const BurgerIngredients = ({ title }) => {
  const ingredients = useContext(BurgerIngredientsContext);

  return (
    <section className={`${stylesIngredients['burger-ingredients']} mr-10`}>
      <h1 className={`${stylesIngredients['burger-ingredients__title']} mt-10 mb-5`}>{title}</h1>
      <Tabs />
      <ul className={`${stylesIngredients['burger-ingredients__list']} ${scrollBarStyle['custom-scrollbar']}`}>
        <li key='0' className={stylesIngredients['burger-ingredients__list-item']}>
          <CardList title='Булки' cards={ingredients.filter((ingredient) => ingredient.type === 'bun')} />
        </li>
        <li key='1' className={stylesIngredients['burger-ingredients__list-item']}>
          <CardList title='Соусы' cards={ingredients.filter((ingredient) => ingredient.type === 'sauce')} />
        </li>
        <li key='2' className={stylesIngredients['burger-ingredients__list-item']}>
          <CardList title='Начинки' cards={ingredients.filter((ingredient) => ingredient.type === 'main')} />
        </li>
      </ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  title: PropTypes.string
};

export default BurgerIngredients;
