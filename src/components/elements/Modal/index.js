import React from 'react';
import Proptypes from 'prop-types';
import Dialog from '@mui/material/Dialog';

const Modal = ({ open, handleClose, children }) => (
  <Dialog open={open} onClose={handleClose}>
    {children}
  </Dialog>
);

Modal.defaultProps = {
  open: false,
  children: null,
  handleClose: () => {},
};

Modal.propTypes = {
  open: Proptypes.bool,
  children: Proptypes.element,
  handleClose: Proptypes.func,
};

export default Modal;
