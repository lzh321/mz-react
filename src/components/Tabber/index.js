import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Tabbar extends React.Component {
  render() {
    let tabs = this.props.tabs
    return (
      <ul className="tab-bar">
        {
          tabs.map(item => {
            return (
              <li
                className="tab-bar__item"
                key={item.key}
                >
                <NavLink to={item.href}>
                  <i className={`iconfont ${item.icon}`} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Tabbar.prototypes = {
  tabs: PropTypes.array
}

export default Tabbar;