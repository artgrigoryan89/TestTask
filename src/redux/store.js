import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { reducers } from './reducers';

const middleware = [logger];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export { store }