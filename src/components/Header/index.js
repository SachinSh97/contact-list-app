import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default Header;
