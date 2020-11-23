import { Component, Profiler } from 'react';

import BurgerBuilderPage from './containers/BurgerBuilderPage/BurgerBuilderPage';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Profiler
          id="BurgerBuilderPage"
          onRender={(id, phase, actualDuration) =>
            console.log({ id, phase, actualDuration })
          }
        >
          <BurgerBuilderPage />
        </Profiler>
      </Layout>
    );
  }
}

export default App;
