import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const NavigationItems = ({ isAuth, showOnDektop }) => {
  const classes = showOnDektop && 'only-desktop';
  return (
    <nav className={classes}>
      <ul id="NavigationItems" className="navigation-items">
        {isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {isAuth ? (
          <NavigationItem link="/logout">LogOut</NavigationItem>
        ) : (
          <NavigationItem link="/auth">Authenticate</NavigationItem>
        )}
      </ul>
    </nav>
  );
};

export default NavigationItems;
