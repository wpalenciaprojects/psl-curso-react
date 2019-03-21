import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { productos } from './productosReducer'

const reducer = combineReducers({ productos });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

//console.log(store.getState());

export default store;