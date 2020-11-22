import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './SideDrawer.scss';

const Sidedrawer = () => {
  return (
    <div className="side-drawer p-2 bg-brown-dark">
      <Logo size={'side-drawer-height'} />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Sidedrawer;
