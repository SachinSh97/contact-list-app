import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debouncing } from '../../utils/helper';

const TextField = React.lazy(() => import('../elements/TextField'));

const SearchBox = ({ placeholder, onFetchData }) => {
  const [searchValue, setSearchValue] = useState('');

  const onFetchDataDebounced = useRef(debouncing(onFetchData, 200)).current;

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    onFetchDataDebounced(value);
  };

  return (
    <TextField
      value={searchValue}
      position="end"
      placeholder={placeholder}
      symbol={<FontAwesomeIcon icon={faSearch} />}
      onChange={handleOnChange}
    />
  );
};

export default SearchBox;
