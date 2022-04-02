import React from 'react';
import classNames from 'classnames';
import MaterialTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './TextField.scss';

const TextField = ({
  name,
  label,
  type,
  value,
  placeholder,
  variant,
  error,
  helperText,
  fullWidth,
  position,
  symbol,
  multiline,
  maxRows,
  onBlur,
  onChange,
}) => {
  return (
    <MaterialTextField
      classes={{ root: classNames('material-textfield', { error }) }}
      name={name}
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      variant={variant}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      multiline={multiline}
      maxRows={maxRows}
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
  type: 'text',
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
