import Aux from '../Aux/Aux';

const Layout = (props) => {
  return (
    <Aux>
      <header>Tollbar, Sidebar, Backdrop</header>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
