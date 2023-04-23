import { configureStore } from '@reduxjs/toolkit' 
import userdetailsReducer from './reducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  userdetailsReducer,
});

export default configureStore(rootReducer) 