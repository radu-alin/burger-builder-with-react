import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './Toolbar.scss';

const Toolbar = () => (
  <header id="Toolbar" className="toolbar pa-1 bg-brown-dark">
    <div>Menu</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default Toolbar;
