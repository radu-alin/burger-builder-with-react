import { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

import Aux from '../../hoc/Aux/Aux';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  openSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <Aux>
        <Sidedrawer
          closeSideDrawer={this.closeSideDrawerHandler}
          showSideDrawer={this.state.showSideDrawer}
        />

        <Toolbar openSideDrawer={this.openSideDrawerHandler} />
        {this.props.children}
      </Aux>
    );
  }
}

export default Layout;
