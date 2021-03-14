import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(promise, thunk)
    ))
export default { store }
