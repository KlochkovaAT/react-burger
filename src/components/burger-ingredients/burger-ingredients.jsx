import stylesIngredients from './burger-ingredients.module.css';
import Tabs from '../tabs/tabs';
import CardList from '../card-list/card-list';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ title, ingredients }) => {
  return (
    <section className={`${stylesIngredients['burger-ingredients']} mr-10`}>
      <h1 className={`${stylesIngredients['burger-ingredients__title']} mt-10 mb-5`}>{title}</h1>
      <Tabs />
      <CardList key='0' title='Булки' cards={ingredients.filter((ingredient) => ingredient.type === 'bun')} />
      <CardList key='1' title='Соусы' cards={ingredients.filter((ingredient) => ingredient.type === 'sauce')} />
      <CardList key='2' title='Начинки' cards={ingredients.filter((ingredient) => ingredient.type === 'main')} />
    </section>
  );
};

BurgerIngredients.propTypes = {
  title: PropTypes.string,
  ingredient: PropTypes.arrayOf(CardList.propTypes)
};

export default BurgerIngredients;
