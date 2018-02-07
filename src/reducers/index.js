import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import benefits from './benefitsReducer';

const rootReducer = combineReducers({
  benefits,
  routing: routerReducer
});

export default rootReducer;
