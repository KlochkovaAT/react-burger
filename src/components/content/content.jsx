import Ingredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import stylesContent from './content.module.css';

const Content = ({ data }) => (
  <div className={stylesContent.content}>
    <Ingredients title='Соберите бургер' ingredients={data} />
    <BurgerConstructor elements={data} />
  </div>
);

export default Content;
