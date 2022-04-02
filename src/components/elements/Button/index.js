import React from 'react';
import Proptypes from 'prop-types';
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
  content: '',
  fullwidth: false,
  onClick: () => {},
};

Button.propTypes = {
  variant: Proptypes.string,
  startIcon: Proptypes.element,
  content: Proptypes.string,
  fullwidth: Proptypes.bool,
  onClick: Proptypes.func,
};

export default Button;
