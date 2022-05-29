import Ingredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import stylesContent from './content.module.css';
import dataPropTypes from '../../components/utils/constants';
import PropTypes from 'prop-types';

const Content = ({ data, burger }) => (
  <div className={stylesContent.content}>
    <Ingredients title='Соберите бургер' ingredients={data} />
    <BurgerConstructor {...burger} />
  </div>
);

Content.propTypes = {
  data:  PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  burger: PropTypes.shape({
    bun: dataPropTypes.isRequired,
    ingredients: PropTypes.arrayOf(dataPropTypes).isRequired,
  }),
};

export default Content;
