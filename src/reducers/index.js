import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import benefits from './benefitsReducer';
import smsSent from './smsReducer';

const rootReducer = combineReducers({
  benefits,
  smsSent,
  routing: routerReducer
});

export default rootReducer;
