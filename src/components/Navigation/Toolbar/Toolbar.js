import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../DrawerToggle/DrawerToggle';

import './Toolbar.scss';

const Toolbar = ({ openSideDrawer }) => (
  <header id="Toolbar" className="toolbar px-1 bg-brown-dark">
    <div className="mg-auto">
      <DrawerToogle onClickAction={openSideDrawer} />
      <Logo size={'large'} />
      <NavigationItems showOnDektop />
    </div>
  </header>
);

export default Toolbar;
