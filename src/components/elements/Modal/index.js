import React from 'react';
import Dialog from '@mui/material/Dialog';

const Modal = ({ open, handleClose, children }) => (
  <Dialog open={open} onClose={handleClose}>
    {children}
  </Dialog>
);

export default Modal;
