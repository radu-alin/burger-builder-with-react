import { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilderPage />
        </Layout>
      </div>
    );
  }
}

export default App;
