import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faCopy,
  faPieChart,
  faDatabase,
  faCalendar,
  faGear,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';
import './SideNavBar.scss';

const menuItems = [
  { icon: <FontAwesomeIcon icon={faHouse} />, active: false },
  { icon: <FontAwesomeIcon icon={faUser} />, active: true },
  { icon: <FontAwesomeIcon icon={faCopy} />, active: false },
  {
    icon: <FontAwesomeIcon icon={faPieChart} />,
    active: false,
  },
  {
    icon: <FontAwesomeIcon icon={faDatabase} />,
    active: false,
  },
  {
    icon: <FontAwesomeIcon icon={faCalendar} />,
    active: false,
  },
  { icon: <FontAwesomeIcon icon={faGear} />, active: false },
];

const SideNavBar = () => {
  const renderMenuItems = (menuItems) =>
    menuItems?.map((menuItem, index) => (
      <span
        key={index}
        className={classNames('items', { active: menuItem?.active })}
      >
        {menuItem.icon}
      </span>
    ));

  return (
    <div className="side-nav-bar">
      <div className="logo">
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>
      <div className="side-nav-bar_menu-items">
        {renderMenuItems(menuItems)}
      </div>
    </div>
  );
};

export default SideNavBar;
