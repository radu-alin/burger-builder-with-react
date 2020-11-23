import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const NavigationItems = ({ showOnDektop }) => {
  const classes = showOnDektop && 'only-desktop';
  return (
    <nav className={classes}>
      <ul id="NavigationItems" className="navigation-items">
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/" active>
          CheckOut
        </NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
