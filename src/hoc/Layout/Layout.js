import Aux from '../Aux/Aux';

const Layout = (props) => {
  return (
    <Aux>
      <header>Tollbar, Sidebar, Backdrop</header>
      <main>
        <div className="bg-secondary">{props.children}</div>
      </main>
    </Aux>
  );
};

export default Layout;
