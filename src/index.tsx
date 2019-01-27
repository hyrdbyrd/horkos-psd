import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './modules/store';

import './index.css';
import App from './App';

import { unregister, register } from './serviceWorker';

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

if (process.env.NODE_ENV === 'production') register();
else unregister();
