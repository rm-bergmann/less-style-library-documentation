import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuItem extends Component {
  state = {
    links: [
      'Dashboard',
      'Borders',
      'Buttons',
      'Colors',
      'Display',
      'Font',
      'Gradients',
      'Grid',
      'Hide',
      'Inputs',
      'Media-Queries',
      'Position',
      'Selects',
      'Shapes',
      'Textareas',
      'Titles',
    ],
  };

  render() {
    const itemClassName = 'menu--list-item';
    const linkClassName = `${itemClassName}-link`;
    const activeClassName = `${linkClassName}---active`;
    const { links } = this.state;

    const renderLinks = links.map((link) => {
      const lowerCaseLink = link.toLowerCase();
      const renderRouteName =
        lowerCaseLink === 'dashboard' ? '' : lowerCaseLink;

      return (
        <li key={link} className={itemClassName}>
          <NavLink
            exact
            className={linkClassName}
            activeClassName={activeClassName}
            to={`/${renderRouteName}`}
          >
            {link}
          </NavLink>
        </li>
      );
    });

    return renderLinks;
  }
}

export default MenuItem;
