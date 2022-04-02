import React from 'react';
import MaterialTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './TextField.scss';

const TextField = ({
  name,
  label,
  value,
  placeholder,
  variant,
  error,
  helperText,
  fullWidth,
  position,
  symbol,
  onBlur,
  onChange,
}) => {
  return (
    <MaterialTextField
      classes={{ root: 'material-textfield' }}
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      variant={variant}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      InputProps={
        symbol && {
          [`${position}Adornment`]: (
            <InputAdornment position={position}>{symbol}</InputAdornment>
          ),
        }
      }
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

TextField.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  variant: 'outlined',
  fullWidth: true,
  error: false,
  helperText: '',
  position: '',
  symbol: null,
  onBlur: () => {},
  onChange: () => {},
};

export default TextField;
