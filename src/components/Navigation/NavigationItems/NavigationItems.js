import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const NavigationItems = () => (
  <nav id="NavigationItems" className="navigation-items">
    <ul>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/" active>
        CheckOut
      </NavigationItem>
    </ul>
  </nav>
);

export default NavigationItems;
