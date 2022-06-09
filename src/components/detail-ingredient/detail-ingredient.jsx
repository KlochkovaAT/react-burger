import PropTypes from 'prop-types'
import stylesIngredientDetail from './detail-ingredient.module.css';

const DetailIngredient = ({ image_large, proteins, fat, calories, carbohydrates, name }) => {
  return (
    <div className={`${stylesIngredientDetail['detail-ingredient']}`}>
      <h1 className={`${stylesIngredientDetail['detail-ingredient__title']} mt-2 mb-3`}>Детали ингредиента</h1>
      <div className={`${stylesIngredientDetail['detail-ingredient__card']}`}>
        <img className={`${stylesIngredientDetail['detail-ingredient__image']}`} src={image_large} />
        <p className={`${stylesIngredientDetail['detail-ingredient__description']} mt-4 mb-8`}>{name}</p>
        <ul className={`${stylesIngredientDetail['detail-ingredient__property-list']}`}>
          <li className={`${stylesIngredientDetail['detail-ingredient__property']}`}>
            <span>Калории,ккал</span>
            <span className={`${stylesIngredientDetail['detail-ingredient__property-value']}`}>{calories}</span>
          </li>
          <li className={`${stylesIngredientDetail['detail-ingredient__property']}`}>
            <span>Белки, г</span>
            <span className={`${stylesIngredientDetail['detail-ingredient__property-value']}`}>{proteins}</span>
          </li>
          <li className={`${stylesIngredientDetail['detail-ingredient__property']}`}>
            <span>Жиры, г</span>
            <span className={`${stylesIngredientDetail['detail-ingredient__property-value']}`}>{fat}</span>
          </li>
          <li className={`${stylesIngredientDetail['detail-ingredient__property']}`}>
            <span>Углеводы, г</span>
            <span className={`${stylesIngredientDetail['detail-ingredient__property-value']}`}>{carbohydrates}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

DetailIngredient.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
}).isRequired;

export default DetailIngredient;
