import PropTypes from 'prop-types';

const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
});

const baseUrl = 'https://norma.nomoreparties.space/api'
const ingredientsUrl = `${baseUrl}/ingredients`;
const createOrderUrl = `${baseUrl}//orders`;

const modalElementId = 'react-modals';

export { dataPropTypes, modalElementId, ingredientsUrl, createOrderUrl };
