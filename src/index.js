import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes.js';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()


ReactDOM.render(
    <Provider store={store}>        
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
