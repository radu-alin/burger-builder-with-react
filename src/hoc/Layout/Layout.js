import { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ children, isAuth }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  const openSideDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  return (
    <Fragment>
      <Sidedrawer
        isAuth={isAuth}
        closeSideDrawer={closeSideDrawerHandler}
        showSideDrawer={showSideDrawer}
      />
      <Toolbar isAuth={isAuth} openSideDrawer={openSideDrawerHandler} />
      {children}
    </Fragment>
  );
};

const mapStateToProps = ({ auth: { token } }) => ({
  isAuth: !!token,
});

export default connect(mapStateToProps)(Layout);
