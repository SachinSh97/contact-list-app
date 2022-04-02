import React from 'react';
import MaterialButton from '@mui/material/Button';
import './Button.scss';

const Button = ({ variant, startIcon, content, fullWidth, onClick }) => {
  return (
    <MaterialButton
      classes={{ root: 'material-button' }}
      variant={variant}
      startIcon={startIcon}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {content}
    </MaterialButton>
  );
};

Button.defaultProps = {
  variant: 'contained',
  startIcon: null,
  onClick: () => {},
};

export default Button;
