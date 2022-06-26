import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import stylesContent from './content.module.css';

const Content = () => (
  <div className={stylesContent.content}>
    <BurgerIngredients title='Соберите бургер' />
    <BurgerConstructor />
  </div>
);

export default Content;
