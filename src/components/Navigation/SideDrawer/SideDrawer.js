import { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.scss';

const Sidedrawer = ({ isAuth, closeSideDrawer, showSideDrawer }) => {
  console.log('[Sidedrawer] - render()');
  const classes = showSideDrawer
    ? 'side-drawer open p-2 bg-brown-dark'
    : 'side-drawer close p-2 bg-brown-dark';
  return (
    <Fragment>
      <Backdrop onClickAction={closeSideDrawer} show={showSideDrawer} />
      <header id="SideDrawer" className={classes}>
        <Logo size={'small'} />
        <NavigationItems isAuth={isAuth} />
      </header>
    </Fragment>
  );
};

export default Sidedrawer;
