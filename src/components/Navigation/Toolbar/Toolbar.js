import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../DrawerToggle/DrawerToggle';

import './Toolbar.scss';

const Toolbar = ({ openSideDrawer }) => (
  <header id="Toolbar" className="toolbar pa-1 bg-brown-dark">
    <DrawerToogle onClickAction={openSideDrawer} />
    <Logo size={'toolbar-height'} />
    <NavigationItems showOnDektop />
  </header>
);

export default Toolbar;
