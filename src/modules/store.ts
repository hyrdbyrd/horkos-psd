import {createStore, compose, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    console.log('%cLogger switch on!', 'color: #ffffff; background: #333333; padding: 20px;');

    // @ts-ignore
    middlewares.push(logger);
}

export default compose(applyMiddleware(...middlewares))(createStore)(reducer);
