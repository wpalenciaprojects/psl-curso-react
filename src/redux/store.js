import { createStore, combineReducers } from 'redux';

import { productos } from './productosReducer'

const reducer = combineReducers({ productos });

const store = createStore(reducer);

console.log(store.getState());

export default store;