import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Aux from '../../../hoc/Aux/Aux';

import './SideDrawer.scss';

const Sidedrawer = () => {
  return (
    <Aux>
      <Backdrop show />
      <header id="SideDrawer" className="side-drawer p-2 bg-brown-dark">
        <Logo size={'side-drawer-height'} />
        <NavigationItems />
      </header>
    </Aux>
  );
};

export default Sidedrawer;
