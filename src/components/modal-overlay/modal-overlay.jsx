import React from 'react';
import stylesModalOverlay from './modal-overlay.module.css';

const ModalOverlay = ({ handleCloseModal }) => {
  return <div className={stylesModalOverlay['modal-overlay']} onClick={handleCloseModal}></div>;
};

export default ModalOverlay;
