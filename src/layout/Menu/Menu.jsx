import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ menuClass }) => {
  return (
    <nav className={`menu menu--${menuClass}`}>
      <ul className="menu--list">
        <MenuItem />
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuClass: PropTypes.string.isRequired,
};

export default Menu;
