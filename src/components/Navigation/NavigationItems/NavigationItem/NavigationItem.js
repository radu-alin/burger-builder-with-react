import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = ({ children, link, active }) => {
  const classes = active ? 'active' : null;
  return (
    <li className="navigation-item">
      <NavLink to={link} exact className={classes}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
