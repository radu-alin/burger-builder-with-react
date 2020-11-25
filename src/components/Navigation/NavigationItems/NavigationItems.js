import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const NavigationItems = ({ showOnDektop }) => {
  const classes = showOnDektop && 'only-desktop';
  return (
    <nav className={classes}>
      <ul id="NavigationItems" className="navigation-items">
        <NavigationItem link="/" active>
          Burger Builder
        </NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
