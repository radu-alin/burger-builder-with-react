import Aux from '../Aux/Aux';

import './Layout.scss';
const Layout = (props) => {
  return (
    <Aux>
      <header>Tollbar, Sidebar, Backdrop</header>
      <main>
        <div className="layout p-2 bg-brown-main">{props.children}</div>
      </main>
    </Aux>
  );
};

export default Layout;
