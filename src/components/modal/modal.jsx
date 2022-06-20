import ReactDOM from 'react-dom';
import stylesModal from './modal.module.css';
import { modalElementId } from '../utils/constants';
import PropTypes from 'prop-types'
import { useEffect } from 'react';

const modalRoot = document.getElementById(modalElementId);

const Modal = (props) => {
  const { isActive, handleOnClose } = props;

  const escFunction = (event) => {
    if (event.key === "Escape") {
      handleOnClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    }
  }, [])

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      handleOnClose();
    }
  };

  return ReactDOM.createPortal(
    isActive && (
      <div className={stylesModal.modal} onClick={handleCloseModal}>
        <div className={`${stylesModal.modal__container} p-10`}>
          {props.children}
          <button type='button' className={stylesModal['modal__close-button']} onClick={handleCloseModal} />
        </div>
      </div>
    ),
    modalRoot
  );
};

Modal.propTypes =  PropTypes.shape({
  isActive: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired
}).isRequired;

export default Modal;
