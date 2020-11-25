import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.scss';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(app, document.getElementById('root'));
