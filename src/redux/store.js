import {configureStore} from '@reduxjs/toolkit';
import userdetailsReducer from './reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  userdetailsReducer,
});

const store = configureStore({ reducer: rootReducer});

export default store;
