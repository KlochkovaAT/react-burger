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

const dataUrl = 'https://norma.nomoreparties.space/api/ingredients';
const modalElementId = 'react-modals';
const createOrderUrl = 'https://norma.nomoreparties.space/api/orders';

export { dataPropTypes, dataUrl, modalElementId, createOrderUrl };
