import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Aux from '../../../hoc/Aux/Aux';

import './SideDrawer.scss';

const Sidedrawer = ({ closeSideDrawer, showSideDrawer }) => {
  const classes = showSideDrawer
    ? 'side-drawer open p-2 bg-brown-dark'
    : 'side-drawer close p-2 bg-brown-dark';
  return (
    <Aux>
      <Backdrop onClickAction={closeSideDrawer} show={showSideDrawer} />
      <header id="SideDrawer" className={classes}>
        <Logo size={'small'} />
        <NavigationItems />
      </header>
    </Aux>
  );
};

export default Sidedrawer;
